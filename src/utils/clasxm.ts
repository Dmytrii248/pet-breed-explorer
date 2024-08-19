import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge classes with tailwind-merge with clsx */
export const clsxm = (...classes: ClassValue[]) => {
  return twMerge(clsx(...classes));
};
