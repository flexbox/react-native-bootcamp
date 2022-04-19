import ora from 'ora';
declare type InstallArgs = {
    pkg: string;
    label?: string;
    loader: ora.Ora;
    onSuccess?: () => void;
    onFail?: () => void;
};
declare function brewInstall({ pkg, label, loader, onSuccess, onFail, }: InstallArgs): Promise<void | ora.Ora>;
export { brewInstall };
//# sourceMappingURL=brewInstall.d.ts.map