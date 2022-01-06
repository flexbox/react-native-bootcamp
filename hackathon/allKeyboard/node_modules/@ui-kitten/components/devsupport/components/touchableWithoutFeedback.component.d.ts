/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
export interface TouchableWithoutFeedbackProps extends TouchableOpacityProps {
    useDefaultHitSlop?: boolean;
    children?: React.ReactNode;
}
export declare type TouchableWithoutFeedbackElement = React.ReactElement<TouchableWithoutFeedbackProps>;
/**
 * Helper component for the Touchable component with no opacity feedback.
 *
 * Applies recommended hitSlop by default.
 * @see https://reactnative.dev/docs/view#hitslop
 *
 * Allows passing ReactNode as children whereas original TouchableWithoutFeedback not.
 */
export declare class TouchableWithoutFeedback extends React.Component<TouchableWithoutFeedbackProps> {
    private createHitSlopInsets;
    render(): React.ReactElement;
}
