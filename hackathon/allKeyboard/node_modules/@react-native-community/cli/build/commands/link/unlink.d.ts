/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Config } from '@react-native-community/cli-types';
declare type Flags = {
    platforms?: Array<string>;
};
/**
 * Updates project and unlink specific dependency
 *
 * If optional argument [packageName] is provided, it's the only one
 * that's checked
 */
declare function unlink(args: Array<string>, ctx: Config, opts: Flags): Promise<void>;
declare const _default: {
    func: typeof unlink;
    description: string;
    name: string;
    options: {
        name: string;
        description: string;
        parse: (val: string) => string[];
    }[];
};
export default _default;
//# sourceMappingURL=unlink.d.ts.map