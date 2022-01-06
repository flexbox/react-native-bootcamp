"use strict";
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const animation_1 = require("../animation");
function getIconAnimation(animation, config) {
    switch (animation) {
        case 'zoom':
            return new animation_1.ZoomAnimation(config);
        case 'pulse':
            return new animation_1.PulseAnimation(config);
        case 'shake':
            return new animation_1.ShakeAnimation(config);
        default:
            return null;
    }
}
exports.getIconAnimation = getIconAnimation;
//# sourceMappingURL=iconAnimation.js.map