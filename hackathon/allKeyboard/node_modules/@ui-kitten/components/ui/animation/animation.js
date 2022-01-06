"use strict";
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
exports.DEFAULT_CONFIG = {
    cycles: 1,
    useNativeDriver: react_native_1.Platform.OS !== 'web',
};
class Animation {
    constructor(config) {
        this.counter = 0;
        this.running = false;
        this.onAnimationEnd = (result) => {
            this.counter += 1;
            if (this.counter === this.config.cycles) {
                this.stop();
            }
            if (this.running) {
                this.start(this.endCallback);
            }
            if (!this.running) {
                this.counter = 0;
                this.endCallback && this.endCallback(result);
                this.endCallback = null;
            }
        };
        this.config = {
            ...exports.DEFAULT_CONFIG,
            ...config,
        };
    }
    start(callback) {
        this.endCallback = callback;
        this.running = true;
        this.animation.start(this.onAnimationEnd);
    }
    stop() {
        this.running = false;
        this.animation.stop();
    }
    release() {
        this.stop();
    }
}
exports.Animation = Animation;
//# sourceMappingURL=animation.js.map