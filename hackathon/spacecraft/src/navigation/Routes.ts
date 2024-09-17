export const Routes = {
  DISAPPOINTED_SCREEN: "Disappointed",
  DO_YOU_LIKE_SCREEN: "Do You Like",
  LOGIN_SCREEN: "Login",
  LOVE_SCREEN: "Love",
  PILOT_DETAILS_SCREEN: "Pilot",
  PILOT_SCREEN: "Pilots",
  PILOT_STACK: "Pilots Stack",
  PLANET_DETAILS_SCREEN: "Planet",
  PLANETS: "Planets",
  PLUS_SCREEN: "Plus",
  PLUS_STACK: "Plus Stack",
  STARSHIP_DETAILS_SCREEN: "Starship",
  STARSHIP_FEED_SCREEN: "Starships",
  STARSHIP_STACK: "Starships Stack",
  TERMS_SCREEN: "Terms",
} as const;

type ObjectValues<T extends object> = T[keyof T];
export type RouteNames = ObjectValues<typeof Routes>;
