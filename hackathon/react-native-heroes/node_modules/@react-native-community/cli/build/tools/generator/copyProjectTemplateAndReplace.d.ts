/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
declare type Options = {
    upgrade?: boolean;
    force?: boolean;
    displayName?: string;
    ignorePaths?: string[];
};
/**
 * Util for creating a new React Native project.
 * Copy the project from a template and use the correct project name in
 * all files.
 * @param srcPath e.g. '/Users/martin/AwesomeApp/node_modules/react-native/template'
 * @param destPath e.g. '/Users/martin/AwesomeApp'
 * @param newProjectName e.g. 'AwesomeApp'
 * @param options e.g. {
 *          upgrade: true,
 *          force: false,
 *          displayName: 'Hello World',
 *          ignorePaths: ['template/file/to/ignore.md'],
 *        }
 */
declare function copyProjectTemplateAndReplace(srcPath: string, destPath: string, newProjectName: string, options?: Options): void;
export default copyProjectTemplateAndReplace;
//# sourceMappingURL=copyProjectTemplateAndReplace.d.ts.map