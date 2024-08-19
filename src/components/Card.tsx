import { BREED_PAGE_ROUTE } from "@/routes";
import { TAnimal, TPet } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface IProps<T> {
  pet: T;
  animalKind?: TAnimal;
}

export const Card = <T extends TPet>({ pet }: IProps<T>) => {
  const { push } = useRouter();

  return (
    <div className="max-w-xs bg-white rounded-lg shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
      <button
        className="text-start"
        onClick={() => push(`${BREED_PAGE_ROUTE.basePath}${pet.breeds[0].id}`)}
      >
        <span className="m-1 pl-2 leading-1 text-sm md:leading-8 md:font-medium md:text-base ">
          {pet.breeds[0].name}
        </span>
        <Image
          className="rounded-lg mx-auto w-full"
          alt={pet.id}
          src={pet.url}
          width={pet.width}
          height={pet.height}
          priority={true}
        />
      </button>
    </div>
  );
};
