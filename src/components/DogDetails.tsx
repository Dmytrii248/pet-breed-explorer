import { TDogBreed } from "@/types";
import { FC } from "react";

interface IProps {
  breed: TDogBreed;
}

export const DogDetails: FC<IProps> = ({ breed }) => (
  <div className="flex flex-col gap-2 my-4">
    <div>Name: {breed.name}</div>
    <div>Bred for: {breed.bred_for}</div>
    <div>Breed group: {breed.breed_group}</div>
    <div>Weight: {breed.weight.metric} kg</div>
    <div>Height: {breed.height.metric} cm</div>
    <div>Life span: {breed.life_span} years</div>
    <div>Temperament: {breed.temperament}</div>
  </div>
);
