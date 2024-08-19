"use client";

import { getCatBreeds } from "@/api";
import { TPet } from "@/types";
import { useEffect, useState } from "react";

export const useGetCatsData = () => {
  const [cats, setCats] = useState<TPet[] | null>(null);

  useEffect(() => {
    (async () => {
      setCats(await getCatBreeds());
    })();
  }, []);

  return cats;
};
