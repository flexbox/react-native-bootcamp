"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isChecked = exports.handlePress = void 0;

const handlePress = ({
  onPress,
  value,
  onValueChange
}) => {
  if (onPress && onValueChange) {
    console.warn(`onPress in the scope of RadioButtonGroup will not be executed, use onValueChange instead`);
  }

  onValueChange ? onValueChange(value) : onPress === null || onPress === void 0 ? void 0 : onPress();
};

exports.handlePress = handlePress;

const isChecked = ({
  value,
  status,
  contextValue
}) => {
  if (contextValue !== undefined && contextValue !== null) {
    return contextValue === value ? 'checked' : 'unchecked';
  } else {
    return status;
  }
};

exports.isChecked = isChecked;
//# sourceMappingURL=utils.js.map