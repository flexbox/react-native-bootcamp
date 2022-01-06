/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { IconPack } from './service/type';
declare type IconsProp = IconPack<any> | IconPack<any>[];
export interface IconRegistryProps {
    icons: IconsProp;
    defaultIcons?: string;
}
export declare type IconRegistryElement = React.ReactElement<IconRegistryProps>;
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
export declare class IconRegistry extends React.Component<IconRegistryProps> {
    static defaultProps: Partial<IconRegistryProps>;
    private findDefaultIconPack;
    private registerIcons;
    render(): React.ReactNode;
}
export {};
