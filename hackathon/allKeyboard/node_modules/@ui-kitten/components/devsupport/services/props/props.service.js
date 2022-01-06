"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextStyleProps = [
    // TextStyle
    'color',
    'fontFamily',
    'fontSize',
    'fontStyle',
    'fontWeight',
    'letterSpacing',
    'lineHeight',
    'textAlign',
    'textAlign',
    'textDecorationLine',
    'textDecorationStyle',
    'textDecorationColor',
    'textShadowColor',
    'textShadowColor',
    'textShadowOffset',
    'textShadowRadius',
    // TextStyleIOS
    'textTransform',
    'writingDirection',
    // TextStyleAndroid
    'textAlignVertical',
    'includeFontPadding',
];
exports.FlexStyleProps = [
    'alignContent',
    'alignItems',
    'alignSelf',
    'aspectRatio',
    'borderBottomWidth',
    'borderEndWidth',
    'borderLeftWidth',
    'borderRightWidth',
    'borderStartWidth',
    'borderTopWidth',
    'borderWidth',
    'bottom',
    'display',
    'end',
    'flex',
    'flexBasis',
    'flexDirection',
    'flexGrow',
    'flexShrink',
    'flexWrap',
    'height',
    'justifyContent',
    'left',
    'margin',
    'marginBottom',
    'marginEnd',
    'marginHorizontal',
    'marginLeft',
    'marginRight',
    'marginStart',
    'marginTop',
    'marginVertical',
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'overflow',
    'padding',
    'paddingBottom',
    'paddingEnd',
    'paddingHorizontal',
    'paddingLeft',
    'paddingRight',
    'paddingStart',
    'paddingTop',
    'paddingVertical',
    'position',
    'right',
    'start',
    'top',
    'width',
    'zIndex',
    // ios
    'direction',
];
const FlexViewCrossStyleValues = [
    'borderBottomWidth',
    'borderLeftWidth',
    'borderRightWidth',
    'borderTopWidth',
    'borderWidth',
];
exports.FlexViewCrossStyleProps = exports.FlexStyleProps.filter((el) => !FlexViewCrossStyleValues.includes(el));
class NativePropsService {
    /**
     * Retrieves all props included in `from` array
     *
     * @param source (Props) - source object
     * @param from (string[]) - array of keys needed to retrieve from `source`
     *
     * @return (Partial<Props>) - object with keys contained in `from` array
     */
    all(source, from) {
        if (!source) {
            return {};
        }
        return from.reduce((acc, prop) => {
            return { ...acc, [prop]: source[prop] };
        }, {});
    }
    /**
     * Retrieves all props included in `from` array, rest props includes in under the `rest` key
     */
    allWithRest(source, from) {
        if (!source) {
            return { rest: {} };
        }
        return Object.keys(source).reduce((acc, prop) => {
            const { rest, ...allOf } = acc;
            if (from.includes(prop)) {
                return { ...allOf, [prop]: source[prop], rest };
            }
            return { ...allOf, rest: { ...rest, [prop]: source[prop] } };
        }, {});
    }
    /**
     * Returns all styles with prefix
     *
     * @param {StyleType} source - Eva Styles
     * @param {string} key - prefix
     *
     * @return {StyleType} - all styles with prefix
     */
    allWithPrefix(source, key) {
        return Object.keys(source)
            .filter((styleName) => styleName.includes(key))
            .reduce((obj, styleKey) => {
            return {
                ...obj,
                [styleKey]: source[styleKey],
            };
        }, {});
    }
}
exports.PropsService = new NativePropsService();
//# sourceMappingURL=props.service.js.map