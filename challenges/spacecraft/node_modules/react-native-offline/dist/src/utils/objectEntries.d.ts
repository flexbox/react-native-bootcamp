declare const entries: <T>(o: T) => [Extract<keyof T, string>, T[keyof T]][];
export default entries;
