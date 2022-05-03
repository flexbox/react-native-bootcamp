import ora from 'ora';
declare type PromptCocoaPodsInstallation = {
    installMethod: 'gem' | 'homebrew';
    promptQuestion: string;
};
declare function runSudo(command: string): Promise<void>;
declare function promptCocoaPodsInstallationQuestion(): Promise<PromptCocoaPodsInstallation>;
declare function installCocoaPods(loader: ora.Ora): Promise<void | ora.Ora>;
declare function installPods({ projectName, loader, }: {
    projectName: string;
    loader?: ora.Ora;
}): Promise<void>;
export { promptCocoaPodsInstallationQuestion, runSudo, installCocoaPods };
export default installPods;
//# sourceMappingURL=installPods.d.ts.map