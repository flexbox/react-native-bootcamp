declare module "mockdate" {
    export function set(date: string | number | Date): void;
    export function reset(): void;
    const _default: {
        set: typeof set;
        reset: typeof reset;
    };
    export default _default;
}
