"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
/**
 * Helper component for optional properties that should render a component.
 *
 * Accepts props of a component that is expected to be rendered,
 * and `component` which may be a string, a function, null or undefined.
 *
 * If it is a function, will call it with props passed to this component.
 * Otherwise, will return null.
 *
 * @property {RenderProp} component - Function component to be rendered.
 * @property {React.ReactElement} fallback - Element to render if children is null or undefined.
 *
 * @example Will render nothing.
 * ```
 * <FalsyFC />
 * ```
 *
 * @example Will render red title.
 * ```
 * const Title = () => (
 *   <FalsyFC
 *     style={{ color: 'red' }}
 *     component={props => <Text {...props}>Title</Text>}
 *   />
 * );
 * ```
 */
class FalsyFC extends react_1.default.Component {
    render() {
        const { component, fallback, ...props } = this.props;
        if (!component) {
            return fallback || null;
        }
        if (react_1.default.isValidElement(component)) {
            return react_1.default.cloneElement(component, props);
        }
        return react_1.default.createElement(component, props);
    }
}
exports.FalsyFC = FalsyFC;
//# sourceMappingURL=falsyFC.component.js.map