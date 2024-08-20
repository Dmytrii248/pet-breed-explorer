import {
  catRequestOptions,
  dogRequestOptions,
  THE_CAT_URL,
  THE_DOG_URL,
} from "@/constants";
import { TPet, TCatBreed, TDogBreed, TPetPhoto } from "@/types";

const apiFetch = async <T>({
  url,
  options,
}: {
  url: string;
  options: RequestInit;
}): Promise<T | null> => {
  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return await res.json();
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const getCatBreeds = async (): Promise<TPet[] | null> => {
  return await apiFetch({
    url: THE_CAT_URL + "/images/search?has_breeds=true&limit=5",
    options: catRequestOptions,
  });
};

export const getDogBreeds = async (): Promise<TPet[] | null> => {
  return await apiFetch({
    url: THE_DOG_URL + "/images/search?has_breeds=true&limit=5",
    options: dogRequestOptions,
  });
};

export const getCatBreed = async (id: string): Promise<TCatBreed | null> => {
  return await apiFetch({
    url: `${THE_CAT_URL}/breeds/${id}`,
    options: catRequestOptions,
  });
};

export const getDogBreed = async (id: string): Promise<TDogBreed | null> => {
  return await apiFetch({
    url: `${THE_DOG_URL}/breeds/${id}`,
    options: dogRequestOptions,
  });
};

export const getCatBreedGalery = async (
  id: string
): Promise<TPetPhoto[] | null> => {
  return await apiFetch({
    url: `${THE_CAT_URL}/images/search?breed_ids=${id}&limit=12`,
    options: catRequestOptions,
  });
};

export const getDogBreedGalery = async (
  id: string
): Promise<TPetPhoto[] | null> => {
  return await apiFetch({
    url: `${THE_DOG_URL}/images/search?breed_ids=${id}&limit=12`,
    options: dogRequestOptions,
  });
};
