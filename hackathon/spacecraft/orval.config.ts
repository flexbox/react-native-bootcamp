import { defineConfig } from "orval";

export default defineConfig({
  starcitizen: {
    input: "./api/starcitizen.yml",
    output: {
      baseUrl: { getBaseUrlFromSpecification: true },
      clean: true,
      client: "react-query",
      httpClient: "fetch",
      mode: "split",
      override: {
        query: {
          useInfinite: true,
          useInfiniteQueryParam: "page[number]",
        },
      },
      target: "./src/api/starcitizen.ts",
    },
  },
});
