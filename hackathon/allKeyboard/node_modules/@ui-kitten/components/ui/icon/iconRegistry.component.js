"use strict";
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const iconRegistry_service_1 = require("./service/iconRegistry.service");
/**
 * Registers one or more icon packs for later usage in Icon component.
 * Renders nothing, but should be added as a child of an Application Root.
 *
 * @extends React.Component
 *
 * @property {IconPack<any> | IconPack<any>[]} icons - Icon packs to register.
 * @property {string} defaultIcons - A name of an icon pack that is used by default.
 *
 * @overview-example Simple Usage
 *
 * ```
 * import React from 'react';
 * import * as eva from '@eva-design/eva';
 * import { ApplicationProvider, IconRegistry, Layout, Text, Icon, Button } from '@ui-kitten/components';
 * import { EvaIconsPack } from '@ui-kitten/eva-icons'; // <-- Make sure it is installed. npm i @ui-kitten/eva-icons
 *
 * const LikeIcon = (props) => (
 *   <Icon {...props} name='like' />
 * );
 *
 * export default () => (
 *   <>
 *     <IconRegistry icons={EvaIconsPack}/>
 *     <ApplicationProvider {...eva} theme={eva.light}>
 *       <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
 *         <Text>Welcome to UI Kitten</Text>
 *         <Button accessoryLeft={LikeIcon}>LIKE</Text>
 *       </Layout>
 *     </ApplicationProvider>
 *   </>
 * );
 * ```
 */
class IconRegistry extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.findDefaultIconPack = (packs, name) => {
            const requestedPackIndex = packs.findIndex((pack) => {
                return pack.name === name;
            });
            return packs[Math.max(0, requestedPackIndex)];
        };
        this.registerIcons = (source, defaultPack) => {
            const packs = Array.isArray(source) ? source : [source];
            const defaultIconPack = this.findDefaultIconPack(packs, defaultPack);
            iconRegistry_service_1.IconRegistryService.register(...packs);
            iconRegistry_service_1.IconRegistryService.setDefaultIconPack(defaultIconPack.name);
        };
    }
    render() {
        const { icons, defaultIcons } = this.props;
        this.registerIcons(icons, defaultIcons);
        return null;
    }
}
exports.IconRegistry = IconRegistry;
IconRegistry.defaultProps = {
    icons: [],
};
//# sourceMappingURL=iconRegistry.component.js.map