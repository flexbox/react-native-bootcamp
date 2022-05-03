import * as React from 'react';
import { ViewProps } from 'react-native';
import type { StackPresentationTypes } from 'react-native-screens';
declare type ContainerProps = ViewProps & {
    stackPresentation: StackPresentationTypes;
    children: React.ReactNode;
};
declare let Container: React.ComponentType<ContainerProps>;
export default Container;
