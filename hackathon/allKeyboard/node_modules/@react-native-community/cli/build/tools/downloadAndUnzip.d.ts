import * as ora from 'ora';
/**
 * Downloads `downloadUrl` and unzips the contents to `installPath` while
 * updating the message of `loader` at each step.
 */
export declare const downloadAndUnzip: ({ loader, downloadUrl, component, installPath, }: {
    loader: ora.Ora;
    component: string;
    downloadUrl: string;
    installPath: string;
}) => Promise<void>;
//# sourceMappingURL=downloadAndUnzip.d.ts.map