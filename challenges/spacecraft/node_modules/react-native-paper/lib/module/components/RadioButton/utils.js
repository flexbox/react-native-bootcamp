export const handlePress = _ref => {
  let {
    onPress,
    value,
    onValueChange
  } = _ref;

  if (onPress && onValueChange) {
    console.warn(`onPress in the scope of RadioButtonGroup will not be executed, use onValueChange instead`);
  }

  onValueChange ? onValueChange(value) : onPress === null || onPress === void 0 ? void 0 : onPress();
};
export const isChecked = _ref2 => {
  let {
    value,
    status,
    contextValue
  } = _ref2;

  if (contextValue !== undefined && contextValue !== null) {
    return contextValue === value ? 'checked' : 'unchecked';
  } else {
    return status;
  }
};
//# sourceMappingURL=utils.js.map