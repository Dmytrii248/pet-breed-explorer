import { TDogBreed } from "@/types";
import { FC } from "react";
import { DetailsWrap } from "./DetailsWrap";

interface IProps {
  breed: TDogBreed;
}

export const DogDetails: FC<IProps> = ({ breed }) => (
  <DetailsWrap>
    <div>
      <span className="font-semibold">Name:</span> {breed.name}
    </div>
    <div>
      <span className="font-semibold">Bred for:</span> {breed.bred_for}
    </div>
    <div>
      <span className="font-semibold">Breed group:</span> {breed.breed_group}
    </div>
    <div>
      <span className="font-semibold">Weight:</span> {breed.weight.metric} kg
    </div>
    <div>
      <span className="font-semibold">Height:</span> {breed.height.metric} cm
    </div>
    <div>
      <span className="font-semibold">Life span:</span> {breed.life_span} years
    </div>
    <div>
      <span className="font-semibold">Temperament:</span> {breed.temperament}
    </div>
  </DetailsWrap>
);
