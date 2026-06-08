import { fetch as expoFetch } from "expo/fetch";

globalThis.fetch = expoFetch as unknown as typeof globalThis.fetch;
