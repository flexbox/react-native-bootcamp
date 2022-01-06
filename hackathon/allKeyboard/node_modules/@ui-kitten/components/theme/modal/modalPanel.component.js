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
const modalResolver_component_1 = require("./modalResolver.component");
const modal_service_1 = require("./modal.service");
class ModalPanel extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            components: new Map(),
        };
        this.hide = (identifier) => {
            const components = this.state.components;
            components.delete(identifier);
            this.setState({ components });
            return '';
        };
        this.generateUniqueComponentKey = () => {
            return Math.random().toString(36).substring(2);
        };
        this.areThereAnyComponents = () => {
            return this.state.components && this.state.components.size !== 0;
        };
        this.renderModal = (config, index) => {
            return (react_1.default.createElement(modalResolver_component_1.ModalResolver, { key: index, visible: true, backdropStyle: config.backdropStyle, onBackdropPress: config.onBackdropPress }, config.element));
        };
        this.renderModals = () => {
            return Array.from(this.state.components.values()).map(this.renderModal);
        };
    }
    componentDidMount() {
        modal_service_1.ModalService.mount(this);
    }
    componentWillUnmount() {
        modal_service_1.ModalService.unmount();
    }
    show(element, config) {
        const key = this.generateUniqueComponentKey();
        const components = this.state.components
            .set(key, { ...config, element });
        this.setState({ components });
        return key;
    }
    update(identifier, children) {
        const panelChild = this.state.components.get(identifier);
        if (!panelChild) {
            return;
        }
        const childElement = panelChild.element;
        panelChild.element = react_1.default.cloneElement(childElement, childElement.props, children);
        const components = this.state.components;
        components.set(identifier, panelChild);
        this.forceUpdate();
    }
    render() {
        return (react_1.default.createElement(react_native_1.View, { style: styles.container },
            this.props.children,
            this.areThereAnyComponents() && this.renderModals()));
    }
}
exports.ModalPanel = ModalPanel;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
    },
});
//# sourceMappingURL=modalPanel.component.js.map