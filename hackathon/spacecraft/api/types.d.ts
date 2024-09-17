export interface StarshipProps {
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
  MGLT?: string;
  model: string;
  name: string;
  passengers?: string;
  pilots?: [];
  starship_class?: string;
  url?: string;
}

interface PeopleProps {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}
