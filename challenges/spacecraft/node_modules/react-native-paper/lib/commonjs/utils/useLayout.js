"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useLayout;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function useLayout() {
  const [layout, setLayout] = React.useState({
    height: 0,
    width: 0,
    measured: false
  });
  const onLayout = React.useCallback(e => {
    const {
      height,
      width
    } = e.nativeEvent.layout;

    if (height === layout.height && width === layout.width) {
      return;
    }

    setLayout({
      height,
      width,
      measured: true
    });
  }, [layout.height, layout.width]);
  return [layout, onLayout];
}
//# sourceMappingURL=useLayout.js.map