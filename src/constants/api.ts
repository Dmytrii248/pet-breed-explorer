export const THE_CAT_URL = "https://api.thecatapi.com/v1";
export const THE_DOG_URL = "https://api.thedogapi.com/v1";

const CAT_API =
  "live_M04FIOlnmFnQMUBluzW5oOQjOgmTJ450bieitS28YtsmUkK2mv6B7jUJcDTXfeRu";
const DOG_API =
  "live_ZBoqyWgBIP85rL09YRwwnTSJvqjBg4rHdYEdUJ0sbrG7v4miVugqOovWwDrbBXw7";

export const headers = (api: string) =>
  new Headers({
    "Content-Type": "application/json",
    "x-api-key": api,
  });

export const catRequestOptions = {
  method: "GET",
  headers: headers(CAT_API),
};

export const dogRequestOptions = {
  method: "GET",
  headers: headers(DOG_API),
};
