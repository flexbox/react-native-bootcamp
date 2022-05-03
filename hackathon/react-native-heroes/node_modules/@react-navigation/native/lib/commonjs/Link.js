"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Link;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _useLinkProps = _interopRequireDefault(require("./useLinkProps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Component to render link to another screen using a path.
 * Uses an anchor tag on the web.
 *
 * @param props.to Absolute path to screen (e.g. `/feeds/hot`).
 * @param props.action Optional action to use for in-page navigation. By default, the path is parsed to an action based on linking config.
 * @param props.children Child elements to render the content.
 */
function Link(_ref) {
  let {
    to,
    action,
    ...rest
  } = _ref;
  const props = (0, _useLinkProps.default)({
    to,
    action
  });

  const onPress = e => {
    if ('onPress' in rest) {
      var _rest$onPress;

      (_rest$onPress = rest.onPress) === null || _rest$onPress === void 0 ? void 0 : _rest$onPress.call(rest, e);
    }

    props.onPress(e);
  };

  return /*#__PURE__*/React.createElement(_reactNative.Text, { ...props,
    ...rest,
    ..._reactNative.Platform.select({
      web: {
        onClick: onPress
      },
      default: {
        onPress
      }
    })
  });
}
//# sourceMappingURL=Link.js.map