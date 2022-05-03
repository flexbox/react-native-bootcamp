/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/**
 * Creates the template for a React Native project given the provided
 * parameters:
 * @param projectDir Templates will be copied here.
 * @param argsOrName Project name or full list of custom arguments
 *                   for the generator.
 * @param options Command line options passed from the react-native-cli directly.
 *                E.g. `{ version: '0.43.0', template: 'navigation' }`
 */
declare function initCompat(projectDir: string, argsOrName: string | string[]): Promise<void>;
export default initCompat;
//# sourceMappingURL=initCompat.d.ts.map