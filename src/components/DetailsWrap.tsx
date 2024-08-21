import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const DetailsWrap: FC<IProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-2 my-4 p-8 bg-white rounded-md ">
      <h1 className="text-2xl font-semibold">Information</h1>
      <hr />
      {children}
    </div>
  );
};
