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
const devsupport_1 = require("../../devsupport");
const theme_1 = require("../../theme");
const popoverView_component_1 = require("./popoverView.component");
const placement_service_1 = require("./placement.service");
const type_1 = require("./type");
/**
 * Displays a content positioned relative to another view.
 *
 * @extends React.Component
 *
 * @method {() => void} show - Sets `content` component visible.
 *
 * @method {() => void} hide - Sets `content` component invisible.
 *
 * @property {boolean} visible - Whether content component is visible.
 * Defaults to false.
 *
 * @property {() => ReactElement} anchor - A component relative to which content component will be shown.
 *
 * @property {ReactElement} children - A component displayed within the popover.
 *
 * @property {() => void} onBackdropPress - Called when popover is visible and the underlying view was touched.
 * Useful when needed to close the modal on outside touches.
 *
 * @property {boolean} fullWidth - Whether a content component should take the width of `anchor`.
 *
 * @property {string | PopoverPlacement} placement - Position of the content component relative to the `anchor`.
 * Can be `left`, `top`, `right`, `bottom`, `left start`, `left end`, `top start`, `top end`, `right start`,
 * `right end`, `bottom start` or `bottom end`.
 * Defaults to *bottom*.
 *
 * @property {StyleProp<ViewStyle>} backdropStyle - Style of backdrop.
 *
 * @property {ViewProps} ...ViewProps - Any props applied to View component.
 *
 * @overview-example PopoverSimpleUsage
 * Popover accepts it's content as child element and is displayed relative to `anchor` view.
 *
 * @overview-example PopoverPlacement
 * By default, it is displayed to the bottom of `anchor` view, but it is configurable with `placement` property.
 *
 * @overview-example PopoverFullWidth
 * Popover may take the full width of the anchor view by configuring `fullWidth` property.
 *
 * @overview-example PopoverStyledBackdrop
 * To style the underlying view, `backdropStyle` property may be used.
 */
class Popover extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            childFrame: devsupport_1.Frame.zero(),
            anchorFrame: devsupport_1.Frame.zero(),
            forceMeasure: false,
        };
        this.contentPosition = devsupport_1.Point.outscreen();
        this.placementService = new placement_service_1.PopoverPlacementService();
        this.actualPlacement = this.preferredPlacement;
        this.show = () => {
            this.modalId = theme_1.ModalService.show(this.renderMeasuringPopoverElement(), this.backdropConfig);
        };
        this.hide = () => {
            this.modalId = theme_1.ModalService.hide(this.modalId);
        };
        this.onHardwareBackPress = () => {
            this.hide();
            return false;
        };
        this.onChildMeasure = (childFrame) => {
            this.state.childFrame = childFrame;
            if (!this.modalId && this.props.visible) {
                this.show();
                return;
            }
            if (this.modalId && this.props.visible) {
                theme_1.ModalService.update(this.modalId, this.renderPopoverElement());
            }
        };
        this.onContentMeasure = (anchorFrame) => {
            this.state.anchorFrame = anchorFrame;
            const placementOptions = this.findPlacementOptions(anchorFrame, this.state.childFrame);
            this.actualPlacement = this.placementService.find(this.preferredPlacement, placementOptions);
            const displayFrame = this.actualPlacement.frame(placementOptions);
            this.contentPosition = displayFrame.origin;
            theme_1.ModalService.update(this.modalId, this.renderPopoverElement());
        };
        this.findPlacementOptions = (contentFrame, childFrame) => {
            const width = this.props.fullWidth ? childFrame.size.width : contentFrame.size.width;
            const frame = new devsupport_1.Frame(contentFrame.origin.x, contentFrame.origin.y, width, contentFrame.size.height);
            return new type_1.PlacementOptions(frame, childFrame, devsupport_1.Frame.window(), devsupport_1.Frame.zero());
        };
        this.renderContentElement = () => {
            const contentElement = this.props.children;
            const fullWidthStyle = { width: this.state.childFrame.size.width };
            return react_1.default.cloneElement(contentElement, {
                style: [this.props.fullWidth && fullWidthStyle, contentElement.props.style],
            });
        };
        this.renderPopoverElement = () => {
            return (react_1.default.createElement(popoverView_component_1.PopoverView, Object.assign({}, this.props, { contentContainerStyle: [this.props.contentContainerStyle, styles.popoverView, this.contentFlexPosition], placement: this.actualPlacement.reverse() }), this.renderContentElement()));
        };
        this.renderMeasuringPopoverElement = () => {
            return (react_1.default.createElement(devsupport_1.MeasureElement, { shouldUseTopInsets: theme_1.ModalService.getShouldUseTopInsets, onMeasure: this.onContentMeasure }, this.renderPopoverElement()));
        };
    }
    get preferredPlacement() {
        return type_1.PopoverPlacements.parse(this.props.placement);
    }
    get contentFlexPosition() {
        const { x: left, y: top } = this.contentPosition;
        return { left, top };
    }
    get backdropConfig() {
        const { onBackdropPress, backdropStyle } = this.props;
        return {
            onBackdropPress,
            backdropStyle,
        };
    }
    componentDidUpdate(prevProps) {
        if (!this.modalId && this.props.visible && !this.state.forceMeasure) {
            this.setState({ forceMeasure: true });
            return;
        }
        if (this.modalId && !this.props.visible) {
            this.contentPosition = devsupport_1.Point.outscreen();
            this.hide();
        }
    }
    componentDidMount() {
        if (react_native_1.Platform.OS === 'android') {
            this.hardwareBackSubscription = react_native_1.BackHandler.addEventListener('hardwareBackPress', this.onHardwareBackPress);
        }
    }
    componentWillUnmount() {
        this.hardwareBackSubscription?.remove();
        this.hide();
    }
    render() {
        return (react_1.default.createElement(devsupport_1.MeasureElement, { shouldUseTopInsets: theme_1.ModalService.getShouldUseTopInsets, force: this.state.forceMeasure, onMeasure: this.onChildMeasure }, this.props.anchor()));
    }
}
exports.Popover = Popover;
Popover.defaultProps = {
    placement: type_1.PopoverPlacements.BOTTOM,
};
const styles = react_native_1.StyleSheet.create({
    popoverView: {
        position: 'absolute',
    },
});
//# sourceMappingURL=popover.component.js.map