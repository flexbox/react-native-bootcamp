import ora from 'ora';
declare type InstallArgs = {
    pkg: string;
    label: string;
    url: string;
    loader: ora.Ora;
};
declare function install({ pkg, label, url, loader }: InstallArgs): Promise<void>;
export { install };
//# sourceMappingURL=install.d.ts.map