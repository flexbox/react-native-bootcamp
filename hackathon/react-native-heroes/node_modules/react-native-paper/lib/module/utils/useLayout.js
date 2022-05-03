import * as React from 'react';
export default function useLayout() {
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