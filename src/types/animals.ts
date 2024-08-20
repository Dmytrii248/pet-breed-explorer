export type TPet = {
  breeds: TCatBreed[] | TDogBreed[];
} & TPetPhoto;

export type TPetPhoto = {
  height: number;
  id: string;
  url: string;
  width: number;
};

export type TDogBreed = {
  height: Weight;
  id: number;
  bred_for: string;
  breed_group: string;
} & TAnimalBreedBase;

export type TCatBreed = {
  id: string;
  cfa_url: string;
  vetstreet_url: string;
  vcahospitals_url: string;
  origin: string;
  country_codes: string;
  description: string;
  indoor: number;
  lap: number;
  alt_names: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url: string;
  hypoallergenic: number;
} & TAnimalBreedBase;

export type TAnimalBreedBase = {
  weight: Weight;
  name: string;
  country_code: string;
  life_span: string;
  temperament: string;
  reference_image_id: string;
};

export type Weight = {
  imperial: string;
  metric: string;
};
