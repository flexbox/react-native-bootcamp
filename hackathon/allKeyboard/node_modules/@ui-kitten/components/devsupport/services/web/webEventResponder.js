"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WebEventResponderInstance {
    constructor(props) {
        this.eventHandlers = props;
    }
}
exports.WebEventResponderInstance = WebEventResponderInstance;
class WebEventResponderStatic {
    static create(config) {
        return new WebEventResponderInstance({
            onMouseEnter: () => {
                config.onMouseEnter && config.onMouseEnter();
            },
            onMouseLeave: () => {
                config.onMouseLeave && config.onMouseLeave();
            },
            onFocus: () => {
                config.onFocus && config.onFocus();
            },
            onBlur: () => {
                config.onBlur && config.onBlur();
            },
        });
    }
}
exports.WebEventResponder = WebEventResponderStatic;
//# sourceMappingURL=webEventResponder.js.map