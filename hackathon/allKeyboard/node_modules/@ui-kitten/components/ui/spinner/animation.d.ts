/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Animated, ViewStyle } from 'react-native';
import { Animation, AnimationConfig } from '../animation/animation';
declare type TimingAnimationConfig = Omit<Animated.TimingAnimationConfig, 'toValue'>;
export interface SpinnerAnimationStyle {
    container: ViewStyle;
    start: ViewStyle;
    end: ViewStyle;
}
export declare type SpinnerAnimationConfig = AnimationConfig & TimingAnimationConfig;
/**
 * Animates a Spinner in a Material Design way.
 *
 * Thanks these guys for open sourcing the algorithm: https://github.com/n4kz/react-native-indicators
 */
export declare class SpinnerAnimation extends Animation<SpinnerAnimationConfig, SpinnerAnimationStyle> {
    private animationValue;
    private animationFrames;
    private arcSize;
    constructor(arcSize: number, config?: SpinnerAnimationConfig);
    protected get animation(): Animated.CompositeAnimation;
    start(callback?: Animated.EndCallback): void;
    stop(): void;
    /**
     * @returns {SpinnerAnimationStyle} - an object that contains container, start and end arcs transform styles.
     */
    toProps(): SpinnerAnimationStyle;
    /**
     * @param {number} duration - animation duration.
     * @returns an array of frames fitted into animation.
     */
    private createFrameRange;
    private createContainerInterpolation;
    private createArcInterpolation;
    /**
     * Maps the animation frames into initial animation values specific for each frame.
     *
     * @returns a container interpolation input range in a numeric format.
     */
    private createArcInterpolationInputRange;
    /**
     * Maps the animation frames into a final animation values specific for each frame.
     *
     * @param {(progress: number) => number} easing - Easing function specific for the arc.
     * @returns an arc interpolation end values eased with an `easing` function in a StyleSheet degree format.
     */
    private createArcInterpolationOutputRange;
    /**
     * @param {Animated.AnimatedInterpolation} rotate - animated rotation animationValue.
     * @param {ViewStyle} source - initial StyleSheet object.
     * @returns a final StyleSheet object with a `rotate` animation value.
     */
    private toStyleTransformProp;
    /**
     * @param {number} source - degrees in a numeric format.
     * @returns degrees in a StyleSheet format.
     */
    private toDegValue;
}
export {};
