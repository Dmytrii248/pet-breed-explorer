import { TCatBreed, TDogBreed } from "@/types";
import { FC } from "react";
import { DetailsWrap } from "./DetailsWrap";

interface IProps {
  breed: TCatBreed;
}

export const CatDetails: FC<IProps> = ({ breed }) => (
  <DetailsWrap>
    <div>
      <span className="font-semibold">Name:</span> {breed.name}
    </div>
    <div>
      <span className="font-semibold">Description:</span> {breed.description}
    </div>
    <div>
      <span className="font-semibold">Life span:</span> {breed.life_span} years
    </div>
    <div>
      <span className="font-semibold">Origin:</span> {breed.origin}
    </div>
    <div>
      <span className="font-semibold">Weight:</span> {breed.weight.metric} kg
    </div>
    <div>
      <span className="font-semibold">Temperament:</span> {breed.temperament}
    </div>
  </DetailsWrap>
);
