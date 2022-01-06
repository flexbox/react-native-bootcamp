/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { StyledComponentProps } from './styled';
import { Interaction, StyleType } from './style.service';
import { ThemeType } from '../theme/theme.service';
export declare class StyleConsumerService {
    private readonly name;
    private readonly meta;
    constructor(name: string, style: StyleType);
    createDefaultProps<P extends object>(): StyledComponentProps;
    createStyleProp<P extends object>(source: P, style: StyleType, theme: ThemeType, interaction: Interaction[]): StyleType;
    private getGeneratedStyleMapping;
    private withValidInteraction;
    private withValidParameters;
    private getStyleInfo;
    private getDefaultAppearance;
    private getDefaultVariants;
    private getDefaultStates;
    private getDerivedVariants;
    private getDerivedStates;
    /**
     * Iterates throw `value` object keys and fills it values with values provided by `transform` callback
     * If `transform` returns `undefined`, then appends nothing
     *
     * @param value (V extends object) - object to transform
     * @param transform - object key transformation callback
     */
    private transformObject;
    /**
     * Finds identical keys across `source` keys array
     *
     * Example:
     *
     * source = ['default.error.small.checked', ...]
     * info = { appearance: 'default', variants: ['small', 'error'], states: ['checked'] }
     *
     * will return ['default', 'error', 'small', 'checked']
     *
     * @param info (StyleInfo) - component style info
     * @param source (string[]) - array of style keys
     *
     * @return (string | undefined) - key identical to some of `source` keys if presents
     */
    private findGeneratedQuery;
    /**
     * @param lhs (string[]) - comparable array
     * @param rhs (string[]) - comparing array
     *
     * @return true if all of lhs keys are included in rhs
     */
    private compareArrays;
    /**
     * Safely retrieves R value of T object with reducer
     *
     * @param value (T | undefined) - unsafe object which should be processed
     * @param reducer ((T) => R) - `value` processing lambda. Called if `value` is not `undefined`
     * @param fallback (R) - fallback value to return. Optional
     *
     * @return (R | undefined) - object returned by `reducer` if `value` is not `undefined`, `fallback` otherwise
     **/
    private safe;
}
