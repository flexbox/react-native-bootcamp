import * as React from 'react';
import { IconSource } from './Icon';
declare type Props = {
    /**
     * Icon to display for the `CrossFadeIcon`.
     */
    source: IconSource;
    /**
     * Color of the icon.
     */
    color: string;
    /**
     * Size of the icon.
     */
    size: number;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
declare const _default: React.ComponentType<Pick<Props, "source" | "color" | "size"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & (({ color, size, source, theme }: Props) => JSX.Element), {}>;
export default _default;
