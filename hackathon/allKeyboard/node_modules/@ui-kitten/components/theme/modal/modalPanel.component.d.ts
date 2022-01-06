/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ViewProps } from 'react-native';
import { ModalPresenting, ModalPresentingConfig } from './modal.service';
interface ModalPanelChild extends ModalPresentingConfig {
    element: React.ReactElement;
}
export interface ModalPanelProps {
    children: React.ReactNode;
}
interface ModalPanelState {
    components: Map<string, ModalPanelChild>;
}
export declare class ModalPanel extends React.Component<ModalPanelProps, ModalPanelState> implements ModalPresenting {
    state: ModalPanelState;
    componentDidMount(): void;
    componentWillUnmount(): void;
    hide: (identifier: string) => string;
    show(element: React.ReactElement, config: ModalPresentingConfig): string;
    update(identifier: string, children: React.ReactNode): void;
    private generateUniqueComponentKey;
    private areThereAnyComponents;
    private renderModal;
    private renderModals;
    render(): React.ReactElement<ViewProps>;
}
export {};
