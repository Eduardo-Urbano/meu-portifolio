import { apiEndpoints } from "./apiEndpoints";

export async function wakeApisOnLoad() {
  await Promise.allSettled(
    apiEndpoints.map(async (api) => {
      try {
        await fetch(api.url, { method: "GET" });
        console.log(`${api.name}: online`);
      } catch {
        console.log(`${api.name}: offline ou iniciando`);
      }
    })
  );
}