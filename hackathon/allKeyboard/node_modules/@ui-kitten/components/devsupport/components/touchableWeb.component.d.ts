/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { NativeSyntheticEvent, TargetedEvent } from 'react-native';
import { TouchableWithoutFeedbackProps } from './touchableWithoutFeedback.component';
export interface TouchableWebProps extends TouchableWithoutFeedbackProps {
    onMouseEnter?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
    onMouseLeave?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
    onFocus?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
    onBlur?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
}
export declare type TouchableWebElement = React.ReactElement<TouchableWebProps>;
/**
 * Helper component for the Touchable component rendered on the web.
 */
export declare class TouchableWeb extends React.Component<TouchableWebProps> {
    render(): React.ReactElement;
}
