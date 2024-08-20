import { TAnimalBreedBase, TCatBreed, TDogBreed, TPetPhoto } from "@/types";
import { CatDetails, DogDetails, Galery } from "@/components";

interface IProps {
  breed: TCatBreed | TDogBreed;
  galery: TPetPhoto[];
}

export const AnimalDetails = <T extends TAnimalBreedBase>({
  breed,
  galery,
}: IProps) => (
  <div>
    {"origin" in breed ? <CatDetails breed={breed} /> : <DogDetails />}
    <Galery galery={galery} />
  </div>
);
