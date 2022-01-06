/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ViewProps } from 'react-native';
import { Frame } from '../../devsupport';
import { ModalPresentingConfig } from '../../theme';
export interface ModalProps extends ViewProps, ModalPresentingConfig {
    visible?: boolean;
    children?: React.ReactNode;
}
export declare type ModalElement = React.ReactElement<ModalProps>;
interface State {
    contentFrame: Frame;
    forceMeasure: boolean;
}
/**
 * A wrapper that presents content above an enclosing view.
 *
 * @extends React.Component
 *
 * @method {() => void} show - Sets modal visible.
 *
 * @method {() => void} hide - Sets modal invisible.
 *
 * @property {ReactNode} children - Component to render within the modal.
 *
 * @property {boolean} visible - Whether component is visible.
 * Defaults to false.
 *
 * @property {() => void} onBackdropPress - Called when the modal is visible and the view below it was touched.
 * Useful when needed to close the modal on outside touches.
 *
 * @property {StyleProp<ViewStyle>} backdropStyle - Style of backdrop.
 *
 * @property {ViewProps} ...ViewProps - Any props applied to View component.
 *
 * @overview-example ModalSimpleUsage
 * Modals accept content views as child elements and are displayed in the screen center.
 * To display a modal, a `visible` property should be used.
 *
 * @overview-example ModalWithBackdrop
 * To configure underlying view, `backdropStyle` and `onBackdropPress` properties may be used.
 */
export declare class Modal extends React.PureComponent<ModalProps, State> {
    state: State;
    private modalId;
    private contentPosition;
    private get contentFlexPosition();
    private get backdropConfig();
    show: () => void;
    hide: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: ModalProps): void;
    componentWillUnmount(): void;
    private onDimensionChange;
    private onContentMeasure;
    private renderContentElement;
    private renderMeasuringContentElement;
    render(): React.ReactNode;
}
export {};
