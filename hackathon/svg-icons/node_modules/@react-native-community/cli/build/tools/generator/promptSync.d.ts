/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
declare type Options = {
    echo?: string;
    ask?: string;
    value?: string;
    autocomplete?: string[] | Function;
};
declare function create(): (ask?: string | Options | undefined, value?: string | Options | undefined, opts?: Options | undefined) => string | Options | null;
export default create;
//# sourceMappingURL=promptSync.d.ts.map