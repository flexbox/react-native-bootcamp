import "dotenv/config";

export default ({ config }) => {
  return {
    ...config,
    extra: {
      GENIUS_API_KEY: process.env.GENIUS_API_KEY
    }
  };
};
