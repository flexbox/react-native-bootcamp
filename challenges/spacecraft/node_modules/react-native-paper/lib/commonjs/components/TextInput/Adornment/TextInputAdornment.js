"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getAdornmentConfig = getAdornmentConfig;
exports.getAdornmentStyleAdjustmentForNativeInput = getAdornmentStyleAdjustmentForNativeInput;

var _react = _interopRequireDefault(require("react"));

var _TextInputIcon = _interopRequireWildcard(require("./TextInputIcon"));

var _TextInputAffix = _interopRequireWildcard(require("./TextInputAffix"));

var _constants = require("../constants");

var _enums = require("./enums");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function getAdornmentConfig(_ref) {
  let {
    left,
    right
  } = _ref;
  let adornmentConfig = [];

  if (left || right) {
    [{
      side: _enums.AdornmentSide.Left,
      adornment: left
    }, {
      side: _enums.AdornmentSide.Right,
      adornment: right
    }].forEach(_ref2 => {
      let {
        side,
        adornment
      } = _ref2;

      if (adornment && /*#__PURE__*/_react.default.isValidElement(adornment)) {
        let type;

        if (adornment.type === _TextInputAffix.default) {
          type = _enums.AdornmentType.Affix;
        } else if (adornment.type === _TextInputIcon.default) {
          type = _enums.AdornmentType.Icon;
        }

        adornmentConfig.push({
          side,
          type
        });
      }
    });
  }

  return adornmentConfig;
}

function getAdornmentStyleAdjustmentForNativeInput(_ref3) {
  let {
    adornmentConfig,
    leftAffixWidth,
    rightAffixWidth,
    paddingHorizontal,
    inputOffset = 0,
    mode
  } = _ref3;

  if (adornmentConfig.length) {
    const adornmentStyleAdjustmentForNativeInput = adornmentConfig.map(_ref4 => {
      let {
        type,
        side
      } = _ref4;
      const isLeftSide = side === _enums.AdornmentSide.Left;
      const inputModeAdornemntOffset = mode === _enums.InputMode.Outlined ? _constants.ADORNMENT_OFFSET + _constants.OUTLINED_INPUT_OFFSET : _constants.ADORNMENT_OFFSET;
      const paddingKey = `padding${captalize(side)}`;
      const affixWidth = isLeftSide ? leftAffixWidth : rightAffixWidth;
      const padding = typeof paddingHorizontal === 'number' ? paddingHorizontal : inputModeAdornemntOffset;
      const offset = affixWidth + padding;
      const isAffix = type === _enums.AdornmentType.Affix;
      const marginKey = `margin${captalize(side)}`;
      return {
        [marginKey]: isAffix ? 0 : offset,
        [paddingKey]: isAffix ? offset : inputOffset
      };
    });
    const allStyleAdjustmentsMerged = adornmentStyleAdjustmentForNativeInput.reduce((mergedStyles, currentStyle) => {
      return { ...mergedStyles,
        ...currentStyle
      };
    }, {});
    return allStyleAdjustmentsMerged;
  } else {
    return [{}];
  }
}

const captalize = text => text.charAt(0).toUpperCase() + text.slice(1);

const TextInputAdornment = _ref5 => {
  let {
    adornmentConfig,
    left,
    right,
    onAffixChange,
    textStyle,
    visible,
    topPosition,
    isTextInputFocused,
    forceFocus,
    paddingHorizontal,
    maxFontSizeMultiplier
  } = _ref5;

  if (adornmentConfig.length) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, adornmentConfig.map(_ref6 => {
      let {
        type,
        side
      } = _ref6;
      let inputAdornmentComponent;

      if (side === _enums.AdornmentSide.Left) {
        inputAdornmentComponent = left;
      } else if (side === _enums.AdornmentSide.Right) {
        inputAdornmentComponent = right;
      }

      const commonProps = {
        key: side,
        side: side,
        testID: `${side}-${type}-adornment`,
        isTextInputFocused,
        paddingHorizontal
      };

      if (type === _enums.AdornmentType.Icon) {
        return /*#__PURE__*/_react.default.createElement(_TextInputIcon.IconAdornment, _extends({}, commonProps, {
          icon: inputAdornmentComponent,
          topPosition: topPosition[_enums.AdornmentType.Icon],
          forceFocus: forceFocus
        }));
      } else if (type === _enums.AdornmentType.Affix) {
        return /*#__PURE__*/_react.default.createElement(_TextInputAffix.AffixAdornment, _extends({}, commonProps, {
          topPosition: topPosition[_enums.AdornmentType.Affix][side],
          affix: inputAdornmentComponent,
          textStyle: textStyle,
          onLayout: onAffixChange[side],
          visible: visible,
          maxFontSizeMultiplier: maxFontSizeMultiplier
        }));
      } else {
        return null;
      }
    }));
  } else {
    return null;
  }
};

var _default = TextInputAdornment;
exports.default = _default;
//# sourceMappingURL=TextInputAdornment.js.map