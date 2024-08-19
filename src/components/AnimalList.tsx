"use clients";

import { useGetCatsData, useGetDogsData } from "@/hooks";
import { Loading, PetList } from "@/components";

export const AnimalList = () => {
  const cats = useGetCatsData();
  const dogs = useGetDogsData();

  if (!cats || !dogs) return <Loading isFullScreen />;

  return (
    <div className="flex gap-4">
      <PetList list={cats} />
      <PetList list={dogs} animalKind="DOG" />
    </div>
  );
};
