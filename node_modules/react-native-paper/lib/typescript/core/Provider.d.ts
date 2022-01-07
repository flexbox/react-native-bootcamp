import * as React from 'react';
import { Settings } from './settings';
declare type Props = {
    children: React.ReactNode;
    theme?: ReactNativePaper.Theme;
    settings?: Settings;
};
declare const Provider: ({ ...props }: Props) => JSX.Element;
export default Provider;
