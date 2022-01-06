import React from 'react';
export declare type RenderFCProp<Props = {}> = (props?: Props) => React.ReactElement;
export declare type RenderProp<Props = {}> = RenderFCProp<Props> | React.ReactElement;
export declare type FalsyFCProps<Props = {}> = Props & {
    component?: RenderProp<Props>;
    fallback?: React.ReactElement;
};
/**
 * Helper component for optional properties that should render a component.
 *
 * Accepts props of a component that is expected to be rendered,
 * and `component` which may be a string, a function, null or undefined.
 *
 * If it is a function, will call it with props passed to this component.
 * Otherwise, will return null.
 *
 * @property {RenderProp} component - Function component to be rendered.
 * @property {React.ReactElement} fallback - Element to render if children is null or undefined.
 *
 * @example Will render nothing.
 * ```
 * <FalsyFC />
 * ```
 *
 * @example Will render red title.
 * ```
 * const Title = () => (
 *   <FalsyFC
 *     style={{ color: 'red' }}
 *     component={props => <Text {...props}>Title</Text>}
 *   />
 * );
 * ```
 */
export declare class FalsyFC<Props = {}> extends React.Component<FalsyFCProps<Props>> {
    render(): React.ReactElement;
}
