function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { View, StyleSheet } from 'react-native';

/**
 * Portal host is the component which actually renders all Portals.
 */
export default class PortalManager extends React.PureComponent {
  constructor() {
    super(...arguments);

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
    return this.state.portals.map(_ref => {
      let {
        key,
        children
      } = _ref;
      return /*#__PURE__*/React.createElement(View, {
        key: key,
        collapsable: false
        /* Need collapsable=false here to clip the elevations, otherwise they appear above sibling components */
        ,
        pointerEvents: "box-none",
        style: StyleSheet.absoluteFill
      }, children);
    });
  }

}
//# sourceMappingURL=PortalManager.js.map