/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ViewProps } from 'react-native';
import { EvaSize, EvaStatus, Overwrite, LiteralUnion } from '../../devsupport';
import { StyledComponentProps } from '../../theme';
declare type SpinnerStyledProps = Overwrite<StyledComponentProps, {
    appearance?: LiteralUnion<'default'>;
}>;
export interface SpinnerProps extends ViewProps, SpinnerStyledProps {
    animating?: boolean;
    status?: EvaStatus;
    size?: EvaSize;
}
export declare type SpinnerElement = React.ReactElement<SpinnerProps>;
/**
 * Displays a loading state of a page or a section.
 *
 * @extends React.Component
 *
 * @property {boolean} animating - Whether component is animating.
 * Default is *true*.
 *
 * @property {string} status - Status of the component.
 * Can be `basic`, `primary`, `success`, `info`, `warning`, `danger` or `control`.
 * Defaults to *primary*.
 * Use *control* status when needed to display within a contrast container.
 *
 * @property {string} size - Size of the component.
 * Can be `tiny`, `small`, `medium`, `large`, or `giant`.
 * Defaults to *medium*.
 *
 * @overview-example SpinnerSimpleUsage
 * Default Spinner status is `primary` and size is `medium`.
 *
 * @overview-example SpinnerSizes
 * To resize Spinner, a `size` property may be used.
 *
 * @overview-example SpinnerStatuses
 * A color can be changed with `status` property
 * An extra status is `control`, which is designed to be used on high-contrast backgrounds.
 *
 * @overview-example SpinnerTheming
 * Styling of Spinner is possible with [configuring a custom theme](guides/branding).
 *
 * @example SpinnerDataLoading
 */
export declare class Spinner extends React.PureComponent<SpinnerProps> {
    static defaultProps: Partial<SpinnerProps>;
    private animation;
    private get containerSize();
    componentDidMount(): void;
    componentDidUpdate(prevProps: SpinnerProps): void;
    componentWillUnmount(): void;
    private startAnimation;
    private stopAnimation;
    private getComponentStyle;
    private renderArcElement;
    render(): React.ReactElement<ViewProps>;
}
export {};
