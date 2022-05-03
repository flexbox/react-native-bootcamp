export default function fromEntries<K extends string, V>(entries: (readonly [K, V])[]): Record<K, V>;
