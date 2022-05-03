import ora from 'ora';
declare class OraNoop implements ora.Ora {
    spinner: ora.Spinner;
    indent: number;
    isSpinning: boolean;
    text: string;
    prefixText: string;
    color: ora.Color;
    succeed(_text?: string | undefined): ora.Ora;
    fail(_text?: string): ora.Ora;
    start(_text?: string): ora.Ora;
    stop(): ora.Ora;
    warn(_text?: string): ora.Ora;
    info(_text?: string): ora.Ora;
    stopAndPersist(): ora.Ora;
    clear(): ora.Ora;
    render(): ora.Ora;
    frame(): ora.Ora;
}
export declare function getLoader(): any;
export declare const NoopLoader: typeof OraNoop;
export {};
//# sourceMappingURL=loader.d.ts.map