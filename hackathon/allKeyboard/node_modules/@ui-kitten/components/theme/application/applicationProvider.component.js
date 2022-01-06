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
const lodash_merge_1 = __importDefault(require("lodash.merge"));
const processor_1 = require("@eva-design/processor");
const styleProvider_component_1 = require("../style/styleProvider.component");
const modalPanel_component_1 = require("../modal/modalPanel.component");
/**
 * Overall application container.
 *
 * @extends React.Component
 *
 * @property {ReactNode} children - Overall application component.
 * Usually, a router or nested providers.
 *
 * @property {SchemaType} mapping - Mapping for UI Kitten components.
 * This is designed to be provided from any `@eva-design/*` package.
 * If provided, will be merged with *customMapping* and compiled into styles during the runtime.
 * Can be improved with build-time processing with `@ui-kitten/metro-config` package.
 *
 * @property {CustomSchemaType} customMapping - Customized mapping.
 *
 * @property {ThemeType} theme - Current theme.
 * Designed to be provided from any `@eva-design/*` package.
 *
 * @property {ThemeStyleType} styles - Styles compiled by bootstrapping Eva packages.
 * If provided, will replace runtime styles processing.
 * Usually, can be provided by `@ui-kitten/metro-config` package.
 *
 * @overview-example Simple Usage
 * ApplicationProvider is designed to be the root component of the application.
 * It should be rendered **once**, to provide Eva styles for nested components.
 * ```
 * import React from 'react';
 * import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
 * import * as eva from '@eva-design/eva';
 *
 * export default () => (
 *   <ApplicationProvider {...eva} theme={eva.light}> // <-- {eva.dark} for dark mode
 *     <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
 *       <Text>Welcome to UI Kitten</Text>
 *     </Layout>
 *   </ApplicationProvider>
 * );
 * ```
 *
 * @overview-example Ecosystem
 * Also, it may accept [custom themes](guides/branding) and [icon packages](guides/icon-packages)
 * to provide a highly customizable, design system based application.
 * ```
 * import React from 'react';
 * import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
 * import { EvaIconsPack } from '@ui-kitten/eva-icons';
 * import * as eva from '@eva-design/eva';
 *
 * export default () => (
 *   <React.Fragment>
 *     <IconRegistry icons={EvaIconsPack} />
 *     <ApplicationProvider {...eva} theme={{ ...eva.light, ...myTheme }}>
 *       <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
 *         <Text>Welcome to UI Kitten</Text>
 *       </Layout>
 *     </ApplicationProvider>
 *   </React.Fragment>
 * );
 * ```
 */
class ApplicationProvider extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            styles: this.props.styles,
        };
        this.schemaProcessor = new processor_1.SchemaProcessor();
        this.createStyles = (mapping, custom) => {
            const customizedMapping = lodash_merge_1.default({}, mapping, custom);
            return this.schemaProcessor.process(customizedMapping);
        };
        if (!this.state.styles) {
            const { mapping, customMapping } = this.props;
            this.state.styles = this.createStyles(mapping, customMapping);
        }
    }
    render() {
        return (react_1.default.createElement(styleProvider_component_1.StyleProvider, { theme: this.props.theme, styles: this.state.styles },
            react_1.default.createElement(modalPanel_component_1.ModalPanel, null, this.props.children)));
    }
}
exports.ApplicationProvider = ApplicationProvider;
//# sourceMappingURL=applicationProvider.component.js.map