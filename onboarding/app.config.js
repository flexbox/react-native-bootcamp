import 'dotenv/config';
export default ({ config }) => {
  return {
    ...config,
    extra: {
      MAGIC_API_KEY: process.env.MAGIC_API_KEY,
    },
  };
};
