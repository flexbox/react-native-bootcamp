export interface StarshipProps {
  MGLT?: string;
  cargo_capacity?: string;
  consumables?: string;
  cost_in_credits?: string;
  created?: string;
  crew?: string;
  edited?: string;
  films?: [];
  hyperdrive_rating?: string;
  length?: string;
  manufacturer?: string;
  max_atmosphering_speed?: string;
  model: string;
  name: string;
  passengers?: string;
  pilots?: [];
  starship_class?: string;
  url?: string;
}

interface PeopleProps {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}
