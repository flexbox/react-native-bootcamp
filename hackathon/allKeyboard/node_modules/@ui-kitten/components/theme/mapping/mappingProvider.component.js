"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const mappingContext_1 = require("./mappingContext");
class MappingProvider extends react_1.default.PureComponent {
    render() {
        const { styles, children } = this.props;
        return (react_1.default.createElement(mappingContext_1.MappingContext.Provider, { value: styles }, children));
    }
}
exports.MappingProvider = MappingProvider;
//# sourceMappingURL=mappingProvider.component.js.map