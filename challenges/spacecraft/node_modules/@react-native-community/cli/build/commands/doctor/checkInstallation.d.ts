export declare enum PACKAGE_MANAGERS {
    YARN = "YARN",
    NPM = "NPM"
}
declare const isSoftwareNotInstalled: (command: string) => Promise<boolean>;
declare const doesSoftwareNeedToBeFixed: ({ version, versionRange, }: {
    version: string;
    versionRange: string;
}) => boolean;
export { isSoftwareNotInstalled, doesSoftwareNeedToBeFixed };
//# sourceMappingURL=checkInstallation.d.ts.map