import { getDogBreeds } from "@/api";
import { TPet } from "@/types";
import { useEffect, useState } from "react";

export const useGetDogsData = () => {
  const [dogs, setDogs] = useState<TPet[] | null>(null);

  useEffect(() => {
    (async () => {
      setDogs(await getDogBreeds());
    })();
  }, []);

  return dogs;
};
