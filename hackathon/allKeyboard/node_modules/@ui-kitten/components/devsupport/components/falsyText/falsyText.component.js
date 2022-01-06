"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const text_component_1 = require("../../../ui/text/text.component");
/**
 * Helper component for optional text properties.
 *
 * Accepts same props as Text component,
 * and `component` which may be a string, a function, null or undefined.
 *
 * If it is null or undefined, will render nothing.
 * If it is a function, will call it with props passed to this component.
 * Otherwise, will render a Text with props passed to this component.
 *
 * @example Will render nothing.
 * ```
 * <FalsyText />
 * ```
 *
 * @example Will render red title.
 * ```
 * const Title = () => (
 *   <FalsyText style={{ color: 'red' }} component='Title' />
 * );
 * ```
 *
 * @example Will render image and red title.
 * ```
 * const renderTitle = (props) => (
 *   <React.Fragment>
 *     <Image source={require('../asset.png')}/>
 *     <Text {...props}>Title</Text>
 *   </React.Fragment>
 * );
 *
 * const Title = () => (
 *   <FalsyText
 *     style={{ color: 'red' }}
 *     component={renderTitle}
 *   />
 * );
 * ```
 */
class FalsyText extends react_1.default.Component {
    render() {
        const { component, ...textProps } = this.props;
        if (!component) {
            return null;
        }
        if (react_1.default.isValidElement(component)) {
            return react_1.default.cloneElement(component, textProps);
        }
        if (typeof component === 'function') {
            return react_1.default.createElement(component, textProps);
        }
        return (react_1.default.createElement(text_component_1.Text, Object.assign({}, textProps), component));
    }
}
exports.FalsyText = FalsyText;
//# sourceMappingURL=falsyText.component.js.map