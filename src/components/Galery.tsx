import { TPetPhoto } from "@/types";
import Image from "next/image";
import { FC } from "react";

interface IProps {
  galery: TPetPhoto[];
}

export const Galery: FC<IProps> = ({ galery }) => (
  <div className="mt-4 columns-1 md:columns-2 lg:columns-3 gap-4">
    {galery.map((img) => (
      <Image
        className="group relative mb-4 mx-auto"
        key={img.id}
        alt={img.id}
        src={img.url}
        height={img.height}
        width={img.width}
      />
    ))}
  </div>
);
