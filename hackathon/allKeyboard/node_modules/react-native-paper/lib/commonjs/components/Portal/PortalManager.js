"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Portal host is the component which actually renders all Portals.
 */
class PortalManager extends React.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      portals: []
    });

    _defineProperty(this, "mount", (key, children) => {
      this.setState(state => ({
        portals: [...state.portals, {
          key,
          children
        }]
      }));
    });

    _defineProperty(this, "update", (key, children) => this.setState(state => ({
      portals: state.portals.map(item => {
        if (item.key === key) {
          return { ...item,
            children
          };
        }

        return item;
      })
    })));

    _defineProperty(this, "unmount", key => this.setState(state => ({
      portals: state.portals.filter(item => item.key !== key)
    })));
  }

  render() {
    return this.state.portals.map(({
      key,
      children
    }) => /*#__PURE__*/React.createElement(_reactNative.View, {
      key: key,
      collapsable: false
      /* Need collapsable=false here to clip the elevations, otherwise they appear above sibling components */
      ,
      pointerEvents: "box-none",
      style: _reactNative.StyleSheet.absoluteFill
    }, children));
  }

}

exports.default = PortalManager;
//# sourceMappingURL=PortalManager.js.map