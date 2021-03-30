import 'dotenv/config';
export default ({ config }) => {
  return {
    ...config,
    extra: {
      GETSTREAM_API_KEY: process.env.GETSTREAM_API_KEY,
      GETSTREAM_APP_ID: process.env.GETSTREAM_APP_ID,
      GETSTREAM_API_TOKEN: process.env.GETSTREAM_API_TOKEN,
    },
  };
};
