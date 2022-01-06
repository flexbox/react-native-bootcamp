"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function throwPackNotFoundError(name) {
    const docRoot = 'https://akveo.github.io/react-native-ui-kitten/docs';
    const message = [
        `\nIcon: Icon Pack '${name}' is not registered`,
        'Using UI Kitten components is only possible with configuring ApplicationProvider.',
        `📖 Documentation: ${docRoot}/guides/setting-up-icons`,
    ].join('\n');
    throw Error(message);
}
function throwIconNotFoundError(name, pack) {
    const docRoot = 'https://akveo.github.io/react-native-ui-kitten/docs';
    const message = [
        `\nIcon: '${name}' icon is not registered in pack '${pack}'.`,
        'Check icon name or consider switching icon pack.',
        `📖 Documentation: ${docRoot}/guides/setting-up-icons`,
    ].join('\n');
    throw Error(message);
}
/**
 * This service allows to register multiple icon packs to use them later within
 * `<Icon/>` component.
 */
class RegistryService {
    constructor() {
        this.packs = new Map();
    }
    /**
     * Registers multiple icon packs and sets the first one as default if there is no default packs
     *
     * @param {IconPack[]} packs - array of icon packs
     */
    register(...packs) {
        packs.forEach((pack) => {
            this.registerIconPack(pack);
        });
    }
    /**
     * Sets pack as default
     *
     * @param {string} name
     * @throws {Error} if pack is nor registered
     */
    setDefaultIconPack(name) {
        if (!this.packs.has(name)) {
            throwPackNotFoundError(name);
        }
        this.defaultPack = name;
    }
    /**
     * @param {string} name
     * @returns {IconPack} pack by name
     */
    getIconPack(name) {
        return this.packs.get(name);
    }
    /**
     * @param {string} name - icon name
     * @param {string} pack - pack name
     * @throws {Error} if requested icon pack is not registered
     * @returns {RegisteredIcon} - registered icon of a requested/default pack
     */
    getIcon(name, pack) {
        const iconsPack = pack ? this.getPackOrThrow(pack) : this.getDefaultPack();
        return {
            name,
            pack: iconsPack.name,
            icon: this.getIconFromPack(name, iconsPack),
        };
    }
    /**
     * Registers single icon pack
     *
     * @param {IconPack} pack - icon pack to register
     */
    registerIconPack(pack) {
        this.packs.set(pack.name, pack);
    }
    getPackOrThrow(name) {
        const pack = this.packs.get(name);
        if (!pack) {
            throwPackNotFoundError(name);
        }
        return pack;
    }
    getDefaultPack() {
        return this.getIconPack(this.defaultPack);
    }
    getIconFromPack(name, pack, shouldThrow = true) {
        if (shouldThrow && !pack.icons[name]) {
            throwIconNotFoundError(name, pack.name);
        }
        return pack.icons[name];
    }
}
exports.IconRegistryService = new RegistryService();
//# sourceMappingURL=iconRegistry.service.js.map