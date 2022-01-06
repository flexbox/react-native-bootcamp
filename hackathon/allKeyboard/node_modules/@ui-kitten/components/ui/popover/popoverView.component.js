"use strict";
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const devsupport_1 = require("../../devsupport");
const theme_1 = require("../../theme");
const type_1 = require("./type");
const INDICATOR_OFFSET = 8;
const INDICATOR_WIDTH = 6;
let PopoverView = class PopoverView extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.getComponentStyle = (source) => {
            const { indicatorWidth, indicatorHeight, indicatorBackgroundColor, ...containerParameters } = source;
            return {
                content: containerParameters,
                indicator: {
                    width: indicatorWidth,
                    height: indicatorHeight,
                    backgroundColor: indicatorBackgroundColor,
                },
            };
        };
        this.getDirectionStyle = () => {
            const { direction, alignment } = this.placement.flex();
            const isVertical = direction.startsWith('column');
            const isStart = alignment.endsWith('start');
            const isEnd = alignment.endsWith('end');
            const isReverse = direction.endsWith('reverse');
            // Rotate indicator by 90 deg if we have `row` direction (left/right placement)
            // Rotate it again by 180 if we have `row-reverse` (bottom/right placement)
            const indicatorRotate = isVertical ? 180 : 90;
            const indicatorReverseRotate = isReverse ? 0 : 180;
            // Translate container by half of `indicatorWidth`. Exactly half (because it has a square shape)
            // Reverse if needed
            // @ts-ignore: indicatorWidth type is always number
            let containerTranslate = (this.props.indicator && !isVertical) ? INDICATOR_WIDTH / 2 : 0;
            containerTranslate = isReverse ? containerTranslate : -containerTranslate;
            // Translate indicator by passed `indicatorOffset`
            // Reverse if needed
            let indicatorTranslate = isVertical ? -INDICATOR_OFFSET : INDICATOR_OFFSET;
            indicatorTranslate = isReverse ? -indicatorTranslate : indicatorTranslate;
            const i18nVerticalIndicatorTranslate = devsupport_1.RTLService.select(indicatorTranslate, -indicatorTranslate);
            indicatorTranslate = isVertical ? i18nVerticalIndicatorTranslate : indicatorTranslate;
            const contentTransforms = {
                transform: [
                    { translateX: containerTranslate },
                ],
            };
            const indicatorTransforms = {
                transform: [
                    { rotate: `${indicatorRotate}deg` },
                    { rotate: `${indicatorReverseRotate}deg` },
                    // Translate indicator "to start" if we have `-start` alignment
                    // Or translate it "to end" if we have `-end` alignment
                    { translateX: isStart ? -indicatorTranslate : 0 },
                    { translateX: isEnd ? indicatorTranslate : 0 },
                ],
            };
            return {
                container: {
                    flexDirection: direction,
                    alignItems: alignment,
                },
                content: contentTransforms,
                indicator: indicatorTransforms,
            };
        };
    }
    get placement() {
        return type_1.PopoverPlacements.parse(this.props.placement);
    }
    render() {
        const { eva, style, contentContainerStyle, onLayout, indicator, ...viewProps } = this.props;
        const evaStyle = this.getComponentStyle(eva.style);
        const directionStyle = this.getDirectionStyle();
        return (react_1.default.createElement(react_native_1.View, { style: [directionStyle.container, contentContainerStyle], onLayout: onLayout },
            react_1.default.createElement(devsupport_1.FalsyFC, { style: [evaStyle.indicator, directionStyle.indicator], component: indicator }),
            react_1.default.createElement(react_native_1.View, Object.assign({}, viewProps, { style: [evaStyle.content, directionStyle.content, style] }))));
    }
};
PopoverView = __decorate([
    theme_1.styled('Popover')
], PopoverView);
exports.PopoverView = PopoverView;
//# sourceMappingURL=popoverView.component.js.map