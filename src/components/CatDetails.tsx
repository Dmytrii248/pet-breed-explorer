import { TCatBreed, TDogBreed } from "@/types";
import { FC } from "react";

interface IProps {
  breed: TCatBreed;
}

export const CatDetails: FC<IProps> = ({ breed }) => (
  <div className="flex flex-col gap-2 my-4">
    <div>Name: {breed.name}</div>
    <div>Description: {breed.description}</div>
    <div>Life span: {breed.life_span} years</div>
    <div>Origin: {breed.origin}</div>
    <div>Weight: {breed.weight.metric} kg</div>
    <div>Temperament: {breed.temperament}</div>
  </div>
);
