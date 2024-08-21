"use clients";

import { useGetCatsData, useGetDogsData } from "@/hooks";
import { Loading, PetList, Search } from "@/components";
import { EAnimal } from "@/types";
import { useState } from "react";

export const AnimalList = () => {
  const [search, setSearch] = useState("");
  const cats = useGetCatsData();
  const dogs = useGetDogsData();

  if (!cats || !dogs) return <Loading isFullScreen />;

  const petsList = [...cats, ...dogs].sort((a, b) =>
    a.breeds[0].name.localeCompare(b.breeds[0].name)
  );

  const searchedCats = search
    ? cats.filter((cat) =>
        cat.breeds[0].name
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase())
      )
    : cats;
  const searchedDogs = search
    ? dogs.filter((dog) =>
        dog.breeds[0].name
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase())
      )
    : dogs;

  return (
    <div>
      <Search data={petsList} value={search} setValue={setSearch} />
      <div className="flex gap-4">
        <PetList list={searchedCats} />
        <PetList list={searchedDogs} animalKind={EAnimal.DOGS} />
      </div>
    </div>
  );
};
