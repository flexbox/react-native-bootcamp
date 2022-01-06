/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { IconPack, IconProvider } from './type';
export interface RegisteredIcon<T> {
    name: string;
    pack: string;
    icon: IconProvider<T>;
}
declare type IconProps = any;
/**
 * This service allows to register multiple icon packs to use them later within
 * `<Icon/>` component.
 */
declare class RegistryService {
    protected packs: Map<string, IconPack<IconProps>>;
    protected defaultPack: string;
    /**
     * Registers multiple icon packs and sets the first one as default if there is no default packs
     *
     * @param {IconPack[]} packs - array of icon packs
     */
    register<T>(...packs: IconPack<T>[]): void;
    /**
     * Sets pack as default
     *
     * @param {string} name
     * @throws {Error} if pack is nor registered
     */
    setDefaultIconPack(name: string): void;
    /**
     * @param {string} name
     * @returns {IconPack} pack by name
     */
    getIconPack<T>(name: string): IconPack<T>;
    /**
     * @param {string} name - icon name
     * @param {string} pack - pack name
     * @throws {Error} if requested icon pack is not registered
     * @returns {RegisteredIcon} - registered icon of a requested/default pack
     */
    getIcon<T>(name: string, pack?: string): RegisteredIcon<T>;
    /**
     * Registers single icon pack
     *
     * @param {IconPack} pack - icon pack to register
     */
    protected registerIconPack<T>(pack: IconPack<T>): void;
    protected getPackOrThrow<T>(name: string): IconPack<T>;
    protected getDefaultPack<T>(): IconPack<T>;
    protected getIconFromPack<T>(name: string, pack: IconPack<T>, shouldThrow?: boolean): IconProvider<T>;
}
export declare const IconRegistryService: RegistryService;
export {};
