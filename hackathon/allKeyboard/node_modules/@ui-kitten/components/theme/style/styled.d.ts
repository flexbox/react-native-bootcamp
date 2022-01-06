/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Interaction, StyleType } from './style.service';
import { ThemeType } from '../theme/theme.service';
export interface EvaProp {
    theme?: ThemeType;
    style?: StyleType;
    dispatch?: (interaction: Interaction[]) => void;
}
export interface StyledComponentProps {
    appearance?: string;
    eva?: EvaProp;
}
/**
 * `@styled` is a High Order Function to apply style mapping on a component.
 * Used by all UI Kitten components and can be used when building custom components with Eva.
 *
 * @property {string} appearance - Appearance of component. Default is provided by mapping.
 *
 * @property {EvaProp} eva - Additional property injected to all `styled` components. Includes following properties:
 * `theme` - current theme,
 * `style` - style provided by Eva,
 * `dispatch` - Function for requesting styles from Eva for current component state.
 *
 * @param name - Type: {string}. Name of the component in mapping.json.
 *
 * @overview-example StyledComponentSimpleUsage
 * The below examples demonstrate how components can be styled with Eva.
 * See [the guide](design-system/custom-component-mapping) for more details.
 *
 * @overview-example StyledComponentEvaProp
 * A styled function injects `eva` property into props of decorated component, where
 * theme - a current theme,
 * styles - a styles object provided by Eva
 * dispatch - a function to request styles for a particular state.
 *
 * ```
 * interface EvaProp {
 *   theme: ThemeType;
 *   style: StyleType;
 *   dispatch: (interaction: Interaction[]) => void;
 * }
 * ```
 *
 * @overview-example StyledComponentStates
 * Styled components may describe its style for a particular state.
 *
 * Let's say we don't like the standard behavior of TouchableOpacity when it's pressed and
 * we want the component to change it's color rather being highlighted.
 *
 * We define an active state in `meta` key and in mapping, so that component will change `backgroundColor`,
 * when `active` is requested. To do this, we call `dispatch` function when Touchable is pressed.
 * Then, when touch is released, we request nothing, which stands for `default`.
 *
 * @overview-example StyledComponentVariants
 * Now let's say we want to have a `status` property to make component change its color, for example,
 * within the forms validation. Furthermore, we want to control its color for both statuses when it is pressed.
 *
 * The `variantGroups` key in `meta` defines all properties that can be applied by component.
 * Each key in variant group is a string value that can be passed to component props.
 */
export declare const styled: (name: string) => any;
