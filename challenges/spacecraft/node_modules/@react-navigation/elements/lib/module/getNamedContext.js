var _global$contexts;

import * as React from 'react';
const contexts = '__react_navigation__elements_contexts';
// We use a global variable to keep our contexts so that we can reuse same contexts across packages
global[contexts] = (_global$contexts = global[contexts]) !== null && _global$contexts !== void 0 ? _global$contexts : new Map();
export default function getNamedContext(name, initialValue) {
  let context = global[contexts].get(name);

  if (context) {
    return context;
  }

  context = /*#__PURE__*/React.createContext(initialValue);
  context.displayName = name;
  global[contexts].set(name, context);
  return context;
}
//# sourceMappingURL=getNamedContext.js.map