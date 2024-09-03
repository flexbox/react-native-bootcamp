export interface StarshipProps {
  films?: [];
  pilots?: [];
  name: string;
  url?: string;
  MGLT?: string;
  crew?: string;
  model: string;
  edited?: string;
  length?: string;
  created?: string;
  passengers?: string;
  consumables?: string;
  manufacturer?: string;
  cargo_capacity?: string;
  starship_class?: string;
  cost_in_credits?: string;
  hyperdrive_rating?: string;
  max_atmosphering_speed?: string;
}

interface PeopleProps {
  url: string;
  name: string;
  mass: string;
  height: string;
  gender: string;
  edited: string;
  films: string[];
  created: string;
  eye_color: string;
  homeworld: string;
  species: string[];
  hair_color: string;
  skin_color: string;
  birth_year: string;
  vehicles: string[];
  starships: string[];
}
