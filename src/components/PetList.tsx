import { Card } from "@/components/Card";
import { EAnimal, TPet } from "@/types";

interface IProps<T> {
  list: T[];
  animalKind?: EAnimal;
}

export const PetList = <T extends TPet>({ list, animalKind }: IProps<T>) => (
  <div className="flex gap-2 flex-col">
    {list.map((pet) => (
      <Card pet={pet} key={pet.id} animalKind={animalKind} />
    ))}
  </div>
);
