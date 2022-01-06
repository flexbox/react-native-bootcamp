"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const rtlFlexMap_1 = require("./rtlFlexMap");
class RTLServiceStatic {
    /**
     * @returns true if it is Right-to-Left layout
     */
    isRTL() {
        return react_native_1.I18nManager.isRTL;
    }
    select(ltr, rtl) {
        return this.isRTL() ? rtl : ltr;
    }
    /**
     * Iterates through {RtlFlexMap} and reverses style values if needed.
     *
     * @param {ViewStyle} source - style to convert
     * @param {boolean} rtl - is layout currently in RTL mode (Needed for tests, because unable to mock this)
     *
     * @returns {ViewStyle} - style reversed to fit RTL
     */
    ignoreRTL(source, rtl = this.isRTL()) {
        const rtlStyle = Object.keys(rtlFlexMap_1.RtlFlexMap).reduce((style, prop) => {
            const currentStyleValue = source[prop];
            if (currentStyleValue) {
                const i18nStyleValue = rtlFlexMap_1.RtlFlexMap[prop].toRTL(currentStyleValue, rtl);
                return {
                    ...style,
                    [prop]: i18nStyleValue,
                };
            }
            return style;
        }, {});
        return { ...source, ...rtlStyle };
    }
}
exports.RTLService = new RTLServiceStatic();
//# sourceMappingURL=rtl.service.js.map