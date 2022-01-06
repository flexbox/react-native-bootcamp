"use strict";
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const animation_1 = require("../animation/animation");
const PI = 180;
const PI2 = 360;
const OFFSET_MIN = PI / 12;
const OFFSET_MAX = PI / 6;
const BaseBezierEasing = react_native_1.Easing.bezier(0.4, 0.0, 0.7, 1.0);
const StartArcEasing = (progress) => {
    return -PI + OFFSET_MIN + (PI - OFFSET_MAX) * BaseBezierEasing(progress);
};
const EndArcEasing = (progress) => {
    return PI2 - OFFSET_MIN + (-PI + OFFSET_MAX) * BaseBezierEasing(progress);
};
const DEFAULT_CONFIG = {
    duration: 2400,
    easing: react_native_1.Easing.linear,
    cycles: -1,
    useNativeDriver: react_native_1.Platform.OS !== 'web',
};
/**
 * Animates a Spinner in a Material Design way.
 *
 * Thanks these guys for open sourcing the algorithm: https://github.com/n4kz/react-native-indicators
 */
class SpinnerAnimation extends animation_1.Animation {
    constructor(arcSize, config) {
        super({ ...DEFAULT_CONFIG, ...config });
        /**
         * @param {number} duration - animation duration.
         * @returns an array of frames fitted into animation.
         */
        this.createFrameRange = (duration) => {
            const numberOfFrames = 60 * duration / 1000;
            return new Array(numberOfFrames).fill(0);
        };
        this.createContainerInterpolation = () => {
            return this.animationValue.interpolate({
                inputRange: [0, 1],
                outputRange: [
                    this.toDegValue(OFFSET_MAX + OFFSET_MIN),
                    this.toDegValue((2 * PI2 + OFFSET_MAX + OFFSET_MIN)),
                ],
            });
        };
        this.createArcInterpolation = (easing) => {
            return this.animationValue.interpolate({
                inputRange: this.createArcInterpolationInputRange(),
                outputRange: this.createArcInterpolationOutputRange(easing),
            });
        };
        /**
         * Maps the animation frames into initial animation values specific for each frame.
         *
         * @returns a container interpolation input range in a numeric format.
         */
        this.createArcInterpolationInputRange = () => {
            return this.animationFrames.map((item, frame) => {
                return frame / (this.animationFrames.length - 1);
            });
        };
        /**
         * Maps the animation frames into a final animation values specific for each frame.
         *
         * @param {(progress: number) => number} easing - Easing function specific for the arc.
         * @returns an arc interpolation end values eased with an `easing` function in a StyleSheet degree format.
         */
        this.createArcInterpolationOutputRange = (easing) => {
            return this.animationFrames.map((item, frame) => {
                const progress = 2 * frame / (this.animationFrames.length - 1);
                const boundedProgress = Math.min(2.0 - progress, progress);
                return this.toDegValue(easing(boundedProgress));
            });
        };
        /**
         * @param {Animated.AnimatedInterpolation} rotate - animated rotation animationValue.
         * @param {ViewStyle} source - initial StyleSheet object.
         * @returns a final StyleSheet object with a `rotate` animation value.
         */
        this.toStyleTransformProp = (rotate, source = {}) => {
            const transform = [...(source.transform || []), { rotate }];
            // @ts-ignore: AnimatedInterpolation does not fit RotateTransform type declaration
            return { ...source, transform };
        };
        /**
         * @param {number} source - degrees in a numeric format.
         * @returns degrees in a StyleSheet format.
         */
        this.toDegValue = (source) => {
            return `${source}deg`;
        };
        this.arcSize = arcSize;
        this.animationValue = new react_native_1.Animated.Value(0);
        this.animationFrames = this.createFrameRange(this.config.duration);
    }
    get animation() {
        return react_native_1.Animated.timing(this.animationValue, { toValue: 1.0, ...this.config });
    }
    start(callback) {
        // reset animation value before the next animation cycle
        this.animationValue.setValue(0);
        super.start(callback);
    }
    stop() {
        super.stop();
        this.animationValue.setValue(0);
    }
    /**
     * @returns {SpinnerAnimationStyle} - an object that contains container, start and end arcs transform styles.
     */
    toProps() {
        const containerInterpolation = this.createContainerInterpolation();
        const startArcInterpolation = this.createArcInterpolation(StartArcEasing);
        const endArcInterpolation = this.createArcInterpolation(EndArcEasing);
        return {
            container: this.toStyleTransformProp(containerInterpolation),
            start: this.toStyleTransformProp(startArcInterpolation),
            end: this.toStyleTransformProp(endArcInterpolation, {
                transform: [{ translateY: -this.arcSize / 2 }],
            }),
        };
    }
}
exports.SpinnerAnimation = SpinnerAnimation;
//# sourceMappingURL=animation.js.map