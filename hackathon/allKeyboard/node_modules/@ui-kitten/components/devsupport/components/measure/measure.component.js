"use strict";
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const type_1 = require("./type");
/**
 * Measures child element size and it's screen position asynchronously.
 * Returns measure result in `onMeasure` callback.
 *
 * Usage:
 *
 * ```tsx
 * const onMeasure = (frame: Frame): void => {
 *   const { x, y } = frame.origin;
 *   const { width, height } = frame.size;
 *   ...
 * };
 *
 * <MeasureElement
 *   shouldUseTopInsets={ModalService.getShouldUseTopInsets}
 *   onMeasure={onMeasure}>
 *   <ElementToMeasure />
 * </MeasureElement>
 * ```
 *
 * By default, it measures each time onLayout is called,
 * but `force` property may be used to measure any time it's needed.
 * DON'T USE THIS FLAG IF THE COMPONENT RENDERS FIRST TIME OR YOU KNOW `onLayout` WILL BE CALLED.
 */
exports.MeasureElement = (props) => {
    const ref = react_1.default.useRef();
    const bindToWindow = (frame, window) => {
        if (frame.origin.x < window.size.width) {
            return frame;
        }
        const boundFrame = new type_1.Frame(frame.origin.x - window.size.width, frame.origin.y, frame.size.width, frame.size.height);
        return bindToWindow(boundFrame, window);
    };
    const onUIManagerMeasure = (x, y, w, h) => {
        const originY = props.shouldUseTopInsets ? y + react_native_1.StatusBar.currentHeight || 0 : y;
        const frame = bindToWindow(new type_1.Frame(x, originY, w, h), type_1.Frame.window());
        props.onMeasure(frame);
    };
    const measureSelf = () => {
        const node = react_native_1.findNodeHandle(ref.current);
        react_native_1.UIManager.measureInWindow(node, onUIManagerMeasure);
    };
    if (props.force) {
        measureSelf();
    }
    return react_1.default.cloneElement(props.children, { ref, onLayout: measureSelf });
};
exports.MeasureElement.defaultProps = {
    shouldUseTopInsets: false,
};
//# sourceMappingURL=measure.component.js.map