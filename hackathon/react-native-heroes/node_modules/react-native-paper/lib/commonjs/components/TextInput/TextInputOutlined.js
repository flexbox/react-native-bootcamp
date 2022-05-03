"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _color = _interopRequireDefault(require("color"));

var _TextInputAdornment = _interopRequireWildcard(require("./Adornment/TextInputAdornment"));

var _InputLabel = _interopRequireDefault(require("./Label/InputLabel"));

var _LabelBackground = _interopRequireDefault(require("./Label/LabelBackground"));

var _constants = require("./constants");

var _helpers = require("./helpers");

var _enums = require("./Adornment/enums");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const OUTLINE_MINIMIZED_LABEL_Y_OFFSET = -6;
const LABEL_PADDING_TOP = 8;
const MIN_HEIGHT = 64;
const MIN_DENSE_HEIGHT = 48;
const INPUT_PADDING_HORIZONTAL = 14;

class TextInputOutlined extends React.Component {
  render() {
    const {
      disabled,
      editable,
      label,
      error,
      selectionColor,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      underlineColor,
      outlineColor: customOutlineColor,
      activeOutlineColor,
      dense,
      style,
      theme,
      render,
      multiline,
      parentState,
      innerRef,
      onFocus,
      forceFocus,
      onBlur,
      onChangeText,
      onLayoutAnimatedText,
      onLeftAffixLayoutChange,
      onRightAffixLayoutChange,
      left,
      right,
      placeholderTextColor,
      ...rest
    } = this.props;
    const adornmentConfig = (0, _TextInputAdornment.getAdornmentConfig)({
      left,
      right
    });
    const {
      colors,
      fonts
    } = theme;
    const font = fonts.regular;
    const hasActiveOutline = parentState.focused || error;
    const {
      fontSize: fontSizeStyle,
      fontWeight,
      lineHeight,
      height,
      backgroundColor = colors.background,
      textAlign,
      ...viewStyle
    } = _reactNative.StyleSheet.flatten(style) || {};
    const fontSize = fontSizeStyle || _constants.MAXIMIZED_LABEL_FONT_SIZE;
    let inputTextColor, activeColor, outlineColor, placeholderColor, errorColor;

    if (disabled) {
      const isTransparent = (0, _color.default)(customOutlineColor).alpha() === 0;
      inputTextColor = activeColor = (0, _color.default)(colors.text).alpha(0.54).rgb().string();
      placeholderColor = colors.disabled;
      outlineColor = isTransparent ? customOutlineColor : colors.disabled;
    } else {
      inputTextColor = colors.text;
      activeColor = error ? colors.error : activeOutlineColor || colors.primary;
      placeholderColor = colors.placeholder;
      outlineColor = customOutlineColor || colors.placeholder;
      errorColor = colors.error;
    }

    const labelScale = _constants.MINIMIZED_LABEL_FONT_SIZE / fontSize;
    const fontScale = _constants.MAXIMIZED_LABEL_FONT_SIZE / fontSize;
    const labelWidth = parentState.labelLayout.width;
    const labelHeight = parentState.labelLayout.height;
    const labelHalfWidth = labelWidth / 2;
    const labelHalfHeight = labelHeight / 2;
    const baseLabelTranslateX = (_reactNative.I18nManager.isRTL ? 1 : -1) * (labelHalfWidth - labelScale * labelWidth / 2 - (fontSize - _constants.MINIMIZED_LABEL_FONT_SIZE) * labelScale);
    let labelTranslationXOffset = 0;
    const isAdornmentLeftIcon = adornmentConfig.some(({
      side,
      type
    }) => side === _enums.AdornmentSide.Left && type === _enums.AdornmentType.Icon);

    if (isAdornmentLeftIcon) {
      labelTranslationXOffset = (_reactNative.I18nManager.isRTL ? -1 : 1) * (_constants.ADORNMENT_SIZE + _constants.ADORNMENT_OFFSET - 8);
    }

    const minInputHeight = (dense ? MIN_DENSE_HEIGHT : MIN_HEIGHT) - LABEL_PADDING_TOP;
    const inputHeight = (0, _helpers.calculateInputHeight)(labelHeight, height, minInputHeight);
    const topPosition = (0, _helpers.calculateLabelTopPosition)(labelHeight, inputHeight, LABEL_PADDING_TOP);

    if (height && typeof height !== 'number') {
      // eslint-disable-next-line
      console.warn('Currently we support only numbers in height prop');
    }

    const paddingSettings = {
      height: height ? +height : null,
      labelHalfHeight,
      offset: LABEL_PADDING_TOP,
      multiline: multiline ? multiline : null,
      dense: dense ? dense : null,
      topPosition,
      fontSize,
      lineHeight,
      label,
      scale: fontScale,
      isAndroid: _reactNative.Platform.OS === 'android',
      styles: _reactNative.StyleSheet.flatten(dense ? styles.inputOutlinedDense : styles.inputOutlined)
    };
    const pad = (0, _helpers.calculatePadding)(paddingSettings);
    const paddingOut = (0, _helpers.adjustPaddingOut)({ ...paddingSettings,
      pad
    });
    const baseLabelTranslateY = -labelHalfHeight - (topPosition + OUTLINE_MINIMIZED_LABEL_Y_OFFSET);
    const placeholderOpacity = hasActiveOutline ? (0, _helpers.interpolatePlaceholder)(parentState.labeled, hasActiveOutline) : parentState.labelLayout.measured ? 1 : 0;
    const labelProps = {
      label,
      onLayoutAnimatedText,
      placeholderOpacity,
      error,
      placeholderStyle: styles.placeholder,
      baseLabelTranslateY,
      baseLabelTranslateX,
      font,
      fontSize,
      fontWeight,
      labelScale,
      wiggleOffsetX: _constants.LABEL_WIGGLE_X_OFFSET,
      topPosition,
      hasActiveOutline,
      activeColor,
      placeholderColor,
      backgroundColor: backgroundColor,
      errorColor,
      labelTranslationXOffset,
      roundness: theme.roundness
    };
    const minHeight = height || (dense ? MIN_DENSE_HEIGHT : MIN_HEIGHT);
    const {
      leftLayout,
      rightLayout
    } = parentState;
    const leftAffixTopPosition = (0, _helpers.calculateOutlinedIconAndAffixTopPosition)({
      height: minHeight,
      affixHeight: leftLayout.height || 0,
      labelYOffset: -OUTLINE_MINIMIZED_LABEL_Y_OFFSET
    });
    const rightAffixTopPosition = (0, _helpers.calculateOutlinedIconAndAffixTopPosition)({
      height: minHeight,
      affixHeight: rightLayout.height || 0,
      labelYOffset: -OUTLINE_MINIMIZED_LABEL_Y_OFFSET
    });
    const iconTopPosition = (0, _helpers.calculateOutlinedIconAndAffixTopPosition)({
      height: minHeight,
      affixHeight: _constants.ADORNMENT_SIZE,
      labelYOffset: -OUTLINE_MINIMIZED_LABEL_Y_OFFSET
    });
    const rightAffixWidth = right ? rightLayout.width || _constants.ADORNMENT_SIZE : _constants.ADORNMENT_SIZE;
    const leftAffixWidth = left ? leftLayout.width || _constants.ADORNMENT_SIZE : _constants.ADORNMENT_SIZE;
    const adornmentStyleAdjustmentForNativeInput = (0, _TextInputAdornment.getAdornmentStyleAdjustmentForNativeInput)({
      adornmentConfig,
      rightAffixWidth,
      leftAffixWidth,
      mode: 'outlined'
    });
    const affixTopPosition = {
      [_enums.AdornmentSide.Left]: leftAffixTopPosition,
      [_enums.AdornmentSide.Right]: rightAffixTopPosition
    };
    const onAffixChange = {
      [_enums.AdornmentSide.Left]: onLeftAffixLayoutChange,
      [_enums.AdornmentSide.Right]: onRightAffixLayoutChange
    };
    let adornmentProps = {
      adornmentConfig,
      forceFocus,
      topPosition: {
        [_enums.AdornmentType.Icon]: iconTopPosition,
        [_enums.AdornmentType.Affix]: affixTopPosition
      },
      onAffixChange,
      isTextInputFocused: parentState.focused
    };

    if (adornmentConfig.length) {
      adornmentProps = { ...adornmentProps,
        left,
        right,
        textStyle: { ...font,
          fontSize,
          fontWeight
        },
        visible: this.props.parentState.labeled
      };
    }

    return /*#__PURE__*/React.createElement(_reactNative.View, {
      style: viewStyle
    }, /*#__PURE__*/React.createElement(Outline, {
      theme: theme,
      hasActiveOutline: hasActiveOutline,
      focused: parentState.focused,
      activeColor: activeColor,
      outlineColor: outlineColor,
      backgroundColor: backgroundColor
    }), /*#__PURE__*/React.createElement(_reactNative.View, null, /*#__PURE__*/React.createElement(_reactNative.View, {
      style: [styles.labelContainer, {
        paddingTop: LABEL_PADDING_TOP,
        minHeight
      }]
    }, /*#__PURE__*/React.createElement(_InputLabel.default, {
      parentState: parentState,
      labelProps: labelProps,
      labelBackground: _LabelBackground.default
    }), render === null || render === void 0 ? void 0 : render({
      testID: 'text-input-outlined',
      ...rest,
      ref: innerRef,
      onChangeText,
      placeholder: label ? parentState.placeholder : this.props.placeholder,
      placeholderTextColor: placeholderTextColor || placeholderColor,
      editable: !disabled && editable,
      selectionColor: typeof selectionColor === 'undefined' ? activeColor : selectionColor,
      onFocus,
      onBlur,
      underlineColorAndroid: 'transparent',
      multiline,
      style: [styles.input, !multiline || multiline && height ? {
        height: inputHeight
      } : {}, paddingOut, { ...font,
        fontSize,
        fontWeight,
        color: inputTextColor,
        textAlignVertical: multiline ? 'top' : 'center',
        textAlign: textAlign ? textAlign : _reactNative.I18nManager.isRTL ? 'right' : 'left'
      }, _reactNative.Platform.OS === 'web' && {
        outline: 'none'
      }, adornmentStyleAdjustmentForNativeInput]
    })), /*#__PURE__*/React.createElement(_TextInputAdornment.default, adornmentProps)));
  }

}

_defineProperty(TextInputOutlined, "defaultProps", {
  disabled: false,
  error: false,
  multiline: false,
  editable: true,
  render: props => /*#__PURE__*/React.createElement(_reactNative.TextInput, props)
});

var _default = TextInputOutlined;
exports.default = _default;

const Outline = ({
  theme,
  hasActiveOutline,
  activeColor,
  outlineColor,
  focused,
  backgroundColor
}) => /*#__PURE__*/React.createElement(_reactNative.View, {
  testID: "text-input-outline",
  pointerEvents: "none",
  style: [styles.outline, // eslint-disable-next-line react-native/no-inline-styles
  {
    backgroundColor,
    borderRadius: theme.roundness,
    borderWidth: focused ? 2 : 1,
    borderColor: hasActiveOutline ? activeColor : outlineColor
  }]
});

const styles = _reactNative.StyleSheet.create({
  placeholder: {
    position: 'absolute',
    left: 0,
    paddingHorizontal: INPUT_PADDING_HORIZONTAL
  },
  outline: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 6,
    bottom: 0
  },
  labelContainer: {
    paddingBottom: 0
  },
  input: {
    flexGrow: 1,
    paddingHorizontal: INPUT_PADDING_HORIZONTAL,
    margin: 0,
    zIndex: 1
  },
  inputOutlined: {
    paddingTop: 8,
    paddingBottom: 8
  },
  inputOutlinedDense: {
    paddingTop: 4,
    paddingBottom: 4
  }
});
//# sourceMappingURL=TextInputOutlined.js.map