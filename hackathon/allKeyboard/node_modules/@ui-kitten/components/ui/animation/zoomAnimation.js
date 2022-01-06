"use strict";
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const animation_1 = require("./animation");
const DEFAULT_CONFIG = {
    start: 1.0,
    end: 0.5,
    easing: react_native_1.Easing.linear,
    duration: 500,
    useNativeDriver: react_native_1.Platform.OS !== 'web',
};
class ZoomAnimation extends animation_1.Animation {
    constructor(config) {
        super({ ...DEFAULT_CONFIG, ...config });
        this.value = new react_native_1.Animated.Value(this.config.start);
    }
    get animation() {
        const { start, end, ...restConfig } = this.config;
        const startAnimation = react_native_1.Animated.timing(this.value, {
            toValue: end,
            ...restConfig,
        });
        const endAnimation = react_native_1.Animated.timing(this.value, {
            toValue: start,
            ...restConfig,
        });
        return react_native_1.Animated.sequence([
            startAnimation,
            endAnimation,
        ]);
    }
    toProps() {
        return {
            // @ts-ignore: Animated.Value is not assignable to a number, but it is a number
            style: {
                transform: [{ scale: this.value }],
            },
        };
    }
}
exports.ZoomAnimation = ZoomAnimation;
//# sourceMappingURL=zoomAnimation.js.map