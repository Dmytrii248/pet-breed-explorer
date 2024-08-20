"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import {
  getCatBreed,
  getCatBreedGalery,
  getDogBreed,
  getDogBreedGalery,
} from "@/api";
import { AnimalDetails, Loading } from "@/components";
import { EAnimal, TCatBreed, TDogBreed, TPetPhoto } from "@/types";

const Page = () => {
  const [breed, setBreed] = useState<TCatBreed | TDogBreed | null>(null);
  const [galery, setGalery] = useState<TPetPhoto[] | null>(null);

  const { kind, id } = useParams<{ kind: string; id: string }>();
  const { back } = useRouter();

  useEffect(() => {
    (async () => {
      setBreed(
        kind === EAnimal.DOGS ? await getDogBreed(id) : await getCatBreed(id)
      );
      setGalery(
        kind === EAnimal.DOGS
          ? await getDogBreedGalery(id)
          : await getCatBreedGalery(id)
      );
    })();
  }, []);

  if (!breed || !galery) return <Loading isFullScreen />;

  return (
    <div>
      <button onClick={() => back()}>Back</button>
      <AnimalDetails breed={breed} galery={galery} />
    </div>
  );
};

export default Page;
