import { ExpoConfig } from '@expo/config-types';
import { InfoPlist } from './IosConfig.types';
export declare const withDisplayName: import("..").ConfigPlugin<void>;
export declare const withName: import("..").ConfigPlugin<void>;
export declare function getName(config: Pick<ExpoConfig, 'name'>): string | null;
/**
 * CFBundleDisplayName is used for most things: the name on the home screen, in
 * notifications, and others.
 */
export declare function setDisplayName(configOrName: Pick<ExpoConfig, 'name'> | string, { CFBundleDisplayName, ...infoPlist }: InfoPlist): InfoPlist;
/**
 * CFBundleName is recommended to be 16 chars or less and is used in lists, eg:
 * sometimes on the App Store
 */
export declare function setName(config: Pick<ExpoConfig, 'name'>, { CFBundleName, ...infoPlist }: InfoPlist): InfoPlist;
