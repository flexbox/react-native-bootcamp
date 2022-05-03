/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
declare type ContentChangedCallbackOption = 'identical' | 'changed' | 'new' | null;
/**
 * Copy a file to given destination, replacing parts of its contents.
 * @param srcPath Path to a file to be copied.
 * @param destPath Destination path.
 * @param replacements: e.g. {'TextToBeReplaced': 'Replacement'}
 * @param contentChangedCallback
 *        Used when upgrading projects. Based on if file contents would change
 *        when being replaced, allows the caller to specify whether the file
 *        should be replaced or not.
 *        If null, files will be overwritten.
 *        Function(path, 'identical' | 'changed' | 'new') => 'keep' | 'overwrite'
 */
declare function copyAndReplace(srcPath: string, destPath: string, replacements: Record<string, string>, contentChangedCallback: ((path: string, option: ContentChangedCallbackOption) => 'keep' | 'overwrite') | null): void;
export default copyAndReplace;
//# sourceMappingURL=copyAndReplace.d.ts.map