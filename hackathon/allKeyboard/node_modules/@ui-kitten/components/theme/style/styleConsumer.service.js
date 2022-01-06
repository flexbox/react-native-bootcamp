"use strict";
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const style_service_1 = require("./style.service");
const SEPARATOR_MAPPING_ENTRY = '.';
const DOC_ROOT = 'https://akveo.github.io/react-native-ui-kitten/docs';
class StyleConsumerService {
    constructor(name, style) {
        this.name = name;
        this.meta = this.safe(style[name], (generatedConfig) => {
            return generatedConfig.meta;
        });
        if (!this.meta) {
            const message = [
                `\n${this.name}: unsupported configuration.`,
                'Using UI Kitten components is only possible with configuring ApplicationProvider.',
                `📖 Documentation: ${DOC_ROOT}/guides/getting-started#manual-installation`,
                '\nIn case you have all in place, there might be an incorrect usage of a "styled" function.',
                `📖 Documentation: ${DOC_ROOT}/design-system/custom-component-mapping`,
            ].join('\n');
            console.error(message);
        }
    }
    createDefaultProps() {
        const appearance = this.getDefaultAppearance();
        const variants = this.getDefaultVariants();
        const states = this.getDefaultStates();
        return { appearance, ...variants, ...states };
    }
    createStyleProp(source, style, theme, interaction) {
        const styleInfo = this.getStyleInfo(source, this.withValidInteraction(interaction));
        const generatedMapping = this.getGeneratedStyleMapping(style, styleInfo);
        if (!generatedMapping) {
            const message = [
                `${this.name}: unsupported configuration.`,
                `Check one of the following prop values: ${JSON.stringify(styleInfo, null, 2)}`,
                `📖 Documentation: ${DOC_ROOT}/components/${this.name.toLowerCase()}/api`,
            ].join('\n');
            console.warn(message);
            return this.createStyleProp({ ...source, ...this.createDefaultProps() }, style, theme, interaction);
        }
        const mapping = this.withValidParameters(generatedMapping);
        return style_service_1.StyleService.createThemedEntry(mapping, theme);
    }
    getGeneratedStyleMapping(style, info) {
        return this.safe(style[this.name], (componentStyles) => {
            const styleKeys = Object.keys(componentStyles.styles);
            const query = this.findGeneratedQuery(info, styleKeys);
            return componentStyles.styles[query];
        });
    }
    withValidInteraction(interaction) {
        const validInteractions = interaction.filter((key) => {
            return Object.keys(this.meta.states).includes(key);
        });
        if (validInteractions.length < interaction.length) {
            const message = [
                `${this.name}: unsupported configuration.`,
                `Check one of the following dispatched interactions: ${interaction}`,
                `📖 Documentation: ${DOC_ROOT}/design-system/custom-component-mapping`,
            ].join('\n');
            console.warn(message);
        }
        return validInteractions;
    }
    withValidParameters(mapping) {
        const invalidParameters = [];
        Object.keys(mapping).forEach((key) => {
            if (!Object.keys(this.meta.parameters).includes(key)) {
                invalidParameters.push(key);
                delete mapping[key];
            }
        });
        if (invalidParameters.length !== 0) {
            const message = [
                `${this.name}: unsupported configuration.`,
                `Unable to apply ${invalidParameters}`,
                'There might be an incorrect usage of mapping',
                `📖 Documentation: ${DOC_ROOT}/design-system/custom-component-mapping`,
            ].join('\n');
            console.warn(message);
        }
        return mapping;
    }
    getStyleInfo(props, interaction) {
        const variantProps = this.getDerivedVariants(this.meta, props);
        const stateProps = this.getDerivedStates(this.meta, props);
        const variants = Object.keys(variantProps).map((variant) => {
            return variantProps[variant];
        });
        const states = Object.keys(stateProps);
        return {
            appearance: props.appearance,
            variants: variants,
            states: [...states, ...interaction],
        };
    }
    getDefaultAppearance() {
        const matches = Object.keys(this.meta.appearances).filter((appearance) => {
            return this.meta.appearances[appearance].default === true;
        });
        return matches[matches.length - 1];
    }
    getDefaultVariants() {
        return this.transformObject(this.meta.variantGroups, (variants, group) => {
            return Object.keys(variants[group]).find((variant) => {
                return variants[group][variant].default === true;
            });
        });
    }
    getDefaultStates() {
        return this.transformObject(this.meta.states, (states, state) => {
            const isDefault = states[state].default === true;
            return isDefault ? isDefault : undefined;
        });
    }
    getDerivedVariants(meta, props) {
        return this.transformObject(props, (p, prop) => {
            const isVariant = Object.keys(meta.variantGroups).includes(prop);
            return isVariant ? p[prop] : undefined;
        });
    }
    getDerivedStates(meta, props) {
        return this.transformObject(props, (p, prop) => {
            const isState = Object.keys(meta.states).includes(prop);
            const isAssigned = p[prop] === true;
            return isState && isAssigned;
        });
    }
    /**
     * Iterates throw `value` object keys and fills it values with values provided by `transform` callback
     * If `transform` returns `undefined`, then appends nothing
     *
     * @param value (V extends object) - object to transform
     * @param transform - object key transformation callback
     */
    transformObject(value, transform) {
        return Object.keys(value).reduce((acc, key) => {
            const nextValue = transform(value, key);
            return nextValue ? {
                ...acc,
                [key]: nextValue,
            } : acc;
        }, {});
    }
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
    findGeneratedQuery(info, source) {
        const query = [
            info.appearance,
            ...info.variants,
            ...info.states,
        ];
        return source.find((value) => this.compareArrays(query, value.split(SEPARATOR_MAPPING_ENTRY)));
    }
    /**
     * @param lhs (string[]) - comparable array
     * @param rhs (string[]) - comparing array
     *
     * @return true if all of lhs keys are included in rhs
     */
    compareArrays(lhs, rhs) {
        if (lhs.length !== rhs.length) {
            return false;
        }
        return lhs.reduce((acc, current) => acc && rhs.includes(current), true);
    }
    /**
     * Safely retrieves R value of T object with reducer
     *
     * @param value (T | undefined) - unsafe object which should be processed
     * @param reducer ((T) => R) - `value` processing lambda. Called if `value` is not `undefined`
     * @param fallback (R) - fallback value to return. Optional
     *
     * @return (R | undefined) - object returned by `reducer` if `value` is not `undefined`, `fallback` otherwise
     **/
    safe(value, reducer, fallback) {
        if (value) {
            return reducer(value);
        }
        return fallback;
    }
}
exports.StyleConsumerService = StyleConsumerService;
//# sourceMappingURL=styleConsumer.service.js.map