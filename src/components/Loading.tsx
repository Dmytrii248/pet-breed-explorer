import { FC } from "react";
import { clsxm } from "@/utils";

interface IProps {
  isFullScreen?: boolean;
}

export const Loading: FC<IProps> = ({ isFullScreen }) => (
  <div className={clsxm({ "m-auto": isFullScreen })}>Loading...</div>
);
