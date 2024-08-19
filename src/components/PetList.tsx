import { Card } from "@/components/Card";
import { TAnimal, TPet } from "@/types";

interface IProps<T> {
  list: T[];
  animalKind?: TAnimal;
}

export const PetList = <T extends TPet>({
  list,
  animalKind = "CAT",
}: IProps<T>) => (
  <div className="flex gap-2 flex-col">
    {list.map((pet) => (
      <Card pet={pet} key={pet.id} animalKind={animalKind} />
    ))}
  </div>
);
