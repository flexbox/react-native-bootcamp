/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import outputBundle from 'metro/src/shared/output/bundle';
import { CommandLineArgs } from './bundleCommandLineArgs';
import { Config } from '@react-native-community/cli-types';
export interface AssetData {
    __packager_asset: boolean;
    fileSystemLocation: string;
    hash: string;
    height: number | null;
    httpServerLocation: string;
    name: string;
    scales: number[];
    type: string;
    width: number | null;
    files: string[];
}
declare function buildBundle(args: CommandLineArgs, ctx: Config, output?: typeof outputBundle): Promise<unknown>;
export default buildBundle;
//# sourceMappingURL=buildBundle.d.ts.map