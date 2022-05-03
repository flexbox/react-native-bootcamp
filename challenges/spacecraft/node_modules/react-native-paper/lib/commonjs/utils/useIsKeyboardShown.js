"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useIsKeyboardShown;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function useIsKeyboardShown(_ref) {
  let {
    onShow,
    onHide
  } = _ref;
  React.useEffect(() => {
    let willShowSubscription;
    let willHideSubscription;
    let didShowSubscription;
    let didHideSubscription;

    if (_reactNative.Platform.OS === 'ios') {
      willShowSubscription = _reactNative.Keyboard.addListener('keyboardWillShow', onShow);
      willHideSubscription = _reactNative.Keyboard.addListener('keyboardWillHide', onHide);
    } else {
      didShowSubscription = _reactNative.Keyboard.addListener('keyboardDidShow', onShow);
      didHideSubscription = _reactNative.Keyboard.addListener('keyboardDidHide', onHide);
    }

    return () => {
      if (_reactNative.Platform.OS === 'ios') {
        var _willShowSubscription, _willHideSubscription;

        if ((_willShowSubscription = willShowSubscription) !== null && _willShowSubscription !== void 0 && _willShowSubscription.remove) {
          willShowSubscription.remove();
        } else {
          _reactNative.Keyboard.removeListener('keyboardWillShow', onShow);
        }

        if ((_willHideSubscription = willHideSubscription) !== null && _willHideSubscription !== void 0 && _willHideSubscription.remove) {
          willHideSubscription.remove();
        } else {
          _reactNative.Keyboard.removeListener('keyboardWillHide', onHide);
        }
      } else {
        var _didShowSubscription, _didHideSubscription;

        if ((_didShowSubscription = didShowSubscription) !== null && _didShowSubscription !== void 0 && _didShowSubscription.remove) {
          didShowSubscription.remove();
        } else {
          _reactNative.Keyboard.removeListener('keyboardDidShow', onShow);
        }

        if ((_didHideSubscription = didHideSubscription) !== null && _didHideSubscription !== void 0 && _didHideSubscription.remove) {
          didHideSubscription.remove();
        } else {
          _reactNative.Keyboard.removeListener('keyboardDidHide', onHide);
        }
      }
    };
  }, [onHide, onShow]);
}
//# sourceMappingURL=useIsKeyboardShown.js.map