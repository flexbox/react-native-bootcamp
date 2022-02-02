/* eslint-disable import/no-default-export */
import 'dotenv/config';

export default ({ config }) => {
  return {
    ...config,
    extra: {
      HASURA_API_URL: process.env.HASURA_API_URL,
      HASURA_ADMIN_SECRET: process.env.HASURA_ADMIN_SECRET,
    },
  };
};
