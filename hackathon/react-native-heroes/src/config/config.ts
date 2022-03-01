import Constants from "expo-constants";

export default {
  HASURA_API_URL: Constants?.manifest?.extra?.HASURA_API_URL,
  HASURA_ADMIN_SECRET: Constants?.manifest?.extra?.HASURA_ADMIN_SECRET,
};
