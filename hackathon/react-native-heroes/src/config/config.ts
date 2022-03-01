/* eslint-disable import/no-default-export */
/* eslint-disable import/no-anonymous-default-export */
import Constants from "expo-constants";

export default {
  HASURA_API_URL: Constants?.manifest?.extra?.HASURA_API_URL,
  HASURA_ADMIN_SECRET: Constants?.manifest?.extra?.HASURA_ADMIN_SECRET,
};
