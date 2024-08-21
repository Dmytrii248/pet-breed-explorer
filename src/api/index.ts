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

const catApiFetch = async <T>(url: string): Promise<T | null> => {
  return await apiFetch({
    url: `${THE_CAT_URL}${url}`,
    options: catRequestOptions,
  });
};

const dogApiFetch = async <T>(url: string): Promise<T | null> => {
  return await apiFetch({
    url: `${THE_DOG_URL}${url}`,
    options: dogRequestOptions,
  });
};

export const getCatBreeds = async (): Promise<TPet[] | null> => {
  return await catApiFetch("/images/search?has_breeds=true&limit=5");
};

export const getDogBreeds = async (): Promise<TPet[] | null> => {
  return await dogApiFetch("/images/search?has_breeds=true&limit=5");
};

export const getCatBreed = async (id: string): Promise<TCatBreed | null> => {
  return await catApiFetch(`/breeds/${id}`);
};

export const getDogBreed = async (id: string): Promise<TDogBreed | null> => {
  return await dogApiFetch(`/breeds/${id}`);
};

export const getCatBreedGalery = async (
  id: string
): Promise<TPetPhoto[] | null> => {
  return await catApiFetch(`/images/search?breed_ids=${id}&limit=12`);
};

export const getDogBreedGalery = async (
  id: string
): Promise<TPetPhoto[] | null> => {
  return await dogApiFetch(`/images/search?breed_ids=${id}&limit=12`);
};
