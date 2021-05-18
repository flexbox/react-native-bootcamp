export default async function fetchAsync(...args: any) {
  const res = await fetch(...args);
  return await res.json();
}
