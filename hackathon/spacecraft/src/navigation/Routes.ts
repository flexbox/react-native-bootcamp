export const Routes = {
  LOGIN_SCREEN: "Login",
  TERMS_SCREEN: "Terms",
  STARSHIP_FEED_SCREEN: "Starships",
  STARSHIP_STACK: "Starships Stack",
  STARSHIP_DETAILS_SCREEN: "Starship",
  PILOT_SCREEN: "Pilots",
  PILOT_STACK: "Pilots Stack",
  PILOT_DETAILS_SCREEN: "Pilot",
  EXPLORE_SCREEN: "Explore",
  PLANET_DETAILS_SCREEN: "Planet",
  PLUS_STACK: "Plus Stack",
  PLUS_SCREEN: "Plus",
  DO_YOU_LIKE_SCREEN: "Do You Like",
  LOVE_SCREEN: "Love",
  DISAPPOINTED_SCREEN: "Disappointed",
} as const;

type ObjectValues<T extends object> = T[keyof T];
export type RouteNames = ObjectValues<typeof Routes>;
