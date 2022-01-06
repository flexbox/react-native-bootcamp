/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { StyleProp, ViewProps, ViewStyle } from 'react-native';
import { ModalPresentingConfig } from './modal.service';
declare type ChildElement = React.ReactElement;
declare type ChildrenProp = ChildElement | ChildElement[];
export interface ModalResolverProps extends ViewProps, ModalPresentingConfig {
    visible: boolean;
    children: ChildrenProp;
    backdropStyle: StyleProp<ViewStyle>;
    onBackdropPress: () => void;
}
export declare class ModalResolver extends React.Component<ModalResolverProps> {
    static defaultProps: Partial<ModalResolverProps>;
    private renderChildElement;
    private renderComponentChildren;
    private renderComponent;
    render(): React.ReactElement<ViewProps> | undefined;
}
export {};
