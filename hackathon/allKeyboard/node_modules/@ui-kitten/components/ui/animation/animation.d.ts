/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Animated } from 'react-native';
export declare const DEFAULT_CONFIG: AnimationConfig;
/**
 * @property {number} cycles - number of animation cycles. -1 for infinite
 */
export interface AnimationConfig extends Animated.AnimationConfig {
    cycles?: number;
}
export declare abstract class Animation<C extends AnimationConfig, R> {
    protected abstract animation: Animated.CompositeAnimation;
    protected counter: number;
    protected endCallback: Animated.EndCallback;
    protected running: boolean;
    protected config: C;
    constructor(config?: C);
    abstract toProps(): R;
    start(callback?: Animated.EndCallback): void;
    stop(): void;
    release(): void;
    protected onAnimationEnd: (result: Animated.EndResult) => void;
}
