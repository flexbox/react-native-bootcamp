/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { Config } from '@react-native-community/cli-types';
declare type FlagsType = {
    platforms?: Array<string>;
    all?: boolean;
};
/**
 * Updates project and links all dependencies to it.
 *
 * @param args If optional argument [packageName] is provided,
 *             only that package is processed.
 */
declare function link([rawPackageName]: Array<string>, ctx: Config, opts: FlagsType): Promise<void>;
export declare const func: typeof link;
declare const _default: {
    func: typeof link;
    description: string;
    name: string;
    options: ({
        name: string;
        description: string;
        parse: (val: string) => string[];
    } | {
        name: string;
        description: string;
        parse?: undefined;
    })[];
};
export default _default;
//# sourceMappingURL=link.d.ts.map