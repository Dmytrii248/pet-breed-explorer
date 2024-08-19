import { TPet } from "@/types";

const CAT_API =
  "live_M04FIOlnmFnQMUBluzW5oOQjOgmTJ450bieitS28YtsmUkK2mv6B7jUJcDTXfeRu";
const DOG_API =
  "live_ZBoqyWgBIP85rL09YRwwnTSJvqjBg4rHdYEdUJ0sbrG7v4miVugqOovWwDrbBXw7";

const headers = (api: string) =>
  new Headers({
    "Content-Type": "application/json",
    "x-api-key": api,
  });

const catRequestOptions = {
  method: "GET",
  headers: headers(CAT_API),
};

const dogRequestOptions = {
  method: "GET",
  headers: headers(DOG_API),
};

export const getCatBreeds = async (): Promise<TPet[] | null> => {
  try {
    const res = await fetch(
      "https://api.thecatapi.com/v1/images/search?has_breeds=true&limit=5",
      catRequestOptions
    );

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return await res.json();
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const getDogBreeds = async (): Promise<TPet[] | null> => {
  try {
    const res = await fetch(
      "https://api.thedogapi.com/v1/images/search?has_breeds=true&limit=5",
      dogRequestOptions
    );

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return await res.json();
  } catch (e) {
    console.error(e);
    return null;
  }
};
