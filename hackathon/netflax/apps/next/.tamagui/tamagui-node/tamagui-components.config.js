"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/tamagui/dist/cjs/setup.js
var require_setup = __commonJS({
  "../../node_modules/tamagui/dist/cjs/setup.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var setup_exports = {};
    __export3(setup_exports, {
      idFn: () => idFn
    });
    module2.exports = __toCommonJS3(setup_exports);
    var import_core2 = require("@tamagui/core-node");
    var import_react_native3 = require("react-native-web-lite");
    (0, import_core2.setupReactNative)({
      Image: import_react_native3.Image,
      View: import_react_native3.View,
      Text: import_react_native3.Text,
      TextInput: import_react_native3.TextInput,
      ScrollView: import_react_native3.ScrollView
    });
    if (typeof requestAnimationFrame === "undefined") {
      globalThis["requestAnimationFrame"] = setImmediate;
    }
    global.cancelAnimationFrame = (x) => {
      try {
        cancelAnimationFrame(x);
      } catch {
      }
    };
    var idFn = /* @__PURE__ */ __name(() => {
    }, "idFn");
  }
});

// ../../node_modules/@tamagui/animate-presence/dist/cjs/LayoutGroupContext.js
var require_LayoutGroupContext = __commonJS({
  "../../node_modules/@tamagui/animate-presence/dist/cjs/LayoutGroupContext.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var LayoutGroupContext_exports = {};
    __export3(LayoutGroupContext_exports, {
      LayoutGroupContext: () => LayoutGroupContext
    });
    module2.exports = __toCommonJS3(LayoutGroupContext_exports);
    var import_react = require("react");
    var LayoutGroupContext = (0, import_react.createContext)({});
  }
});

// ../../node_modules/@tamagui/use-presence/dist/cjs/PresenceContext.js
var require_PresenceContext = __commonJS({
  "../../node_modules/@tamagui/use-presence/dist/cjs/PresenceContext.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var PresenceContext_exports = {};
    __export3(PresenceContext_exports, {
      PresenceContext: () => PresenceContext
    });
    module2.exports = __toCommonJS3(PresenceContext_exports);
    var import_react = require("react");
    var PresenceContext = (0, import_react.createContext)(null);
  }
});

// ../../node_modules/@tamagui/use-presence/dist/cjs/usePresence.js
var require_usePresence = __commonJS({
  "../../node_modules/@tamagui/use-presence/dist/cjs/usePresence.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var usePresence_exports = {};
    __export3(usePresence_exports, {
      isPresent: () => isPresent,
      useIsPresent: () => useIsPresent,
      usePresence: () => usePresence
    });
    module2.exports = __toCommonJS3(usePresence_exports);
    var import_react = require("react");
    var import_PresenceContext = require_PresenceContext();
    function usePresence() {
      const context = (0, import_react.useContext)(import_PresenceContext.PresenceContext);
      if (!context) {
        return [true, null];
      }
      const { isPresent: isPresent2, onExitComplete, register } = context;
      const id = (0, import_react.useId)() || "";
      (0, import_react.useEffect)(() => register(id), [id, register]);
      const safeToRemove = /* @__PURE__ */ __name(() => onExitComplete == null ? void 0 : onExitComplete(id), "safeToRemove");
      return !isPresent2 && onExitComplete ? [false, safeToRemove] : [true];
    }
    __name(usePresence, "usePresence");
    function useIsPresent() {
      return isPresent((0, import_react.useContext)(import_PresenceContext.PresenceContext));
    }
    __name(useIsPresent, "useIsPresent");
    function isPresent(context) {
      return context === null ? true : context.isPresent;
    }
    __name(isPresent, "isPresent");
  }
});

// ../../node_modules/@tamagui/use-presence/dist/cjs/index.js
var require_cjs = __commonJS({
  "../../node_modules/@tamagui/use-presence/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_PresenceContext(), module2.exports);
    __reExport2(src_exports2, require_usePresence(), module2.exports);
  }
});

// ../../node_modules/@tamagui/animate-presence/dist/cjs/PresenceChild.js
var require_PresenceChild = __commonJS({
  "../../node_modules/@tamagui/animate-presence/dist/cjs/PresenceChild.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var PresenceChild_exports = {};
    __export3(PresenceChild_exports, {
      PresenceChild: () => PresenceChild
    });
    module2.exports = __toCommonJS3(PresenceChild_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_use_presence = require_cjs();
    var React3 = __toESM2(require("react"));
    var import_react = require("react");
    var PresenceChild = /* @__PURE__ */ __name(({
      children,
      initial,
      isPresent,
      onExitComplete,
      exitVariant,
      enterVariant,
      presenceAffectsLayout
    }) => {
      const presenceChildren = React3.useMemo(newChildrenMap, []);
      const id = (0, import_react.useId)() || "";
      const context = React3.useMemo(
        () => {
          return {
            id,
            initial,
            isPresent,
            exitVariant,
            enterVariant,
            onExitComplete: (id2) => {
              presenceChildren.set(id2, true);
              for (const isComplete of presenceChildren.values()) {
                if (!isComplete) {
                  return;
                }
              }
              onExitComplete == null ? void 0 : onExitComplete();
            },
            register: (id2) => {
              presenceChildren.set(id2, false);
              return () => presenceChildren.delete(id2);
            }
          };
        },
        presenceAffectsLayout ? void 0 : [isPresent, exitVariant, enterVariant]
      );
      React3.useMemo(() => {
        presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
      }, [isPresent]);
      React3.useEffect(() => {
        !isPresent && !presenceChildren.size && (onExitComplete == null ? void 0 : onExitComplete());
      }, [isPresent]);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_use_presence.PresenceContext.Provider, {
        value: context,
        children
      });
    }, "PresenceChild");
    function newChildrenMap() {
      return /* @__PURE__ */ new Map();
    }
    __name(newChildrenMap, "newChildrenMap");
  }
});

// ../../node_modules/@tamagui/animate-presence/dist/cjs/AnimatePresence.js
var require_AnimatePresence = __commonJS({
  "../../node_modules/@tamagui/animate-presence/dist/cjs/AnimatePresence.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var AnimatePresence_exports = {};
    __export3(AnimatePresence_exports, {
      AnimatePresence: () => AnimatePresence
    });
    module2.exports = __toCommonJS3(AnimatePresence_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_core2 = require("@tamagui/core-node");
    var import_react = __toESM2(require("react"));
    var import_LayoutGroupContext = require_LayoutGroupContext();
    var import_PresenceChild = require_PresenceChild();
    import_react.default["keep"];
    var getChildKey = /* @__PURE__ */ __name((child) => child.key || "", "getChildKey");
    var isDev = process.env.NODE_ENV !== "production";
    function updateChildLookup(children, allChildren) {
      const seenChildren = isDev ? /* @__PURE__ */ new Set() : null;
      children.forEach((child) => {
        const key = getChildKey(child);
        if (isDev && seenChildren && seenChildren.has(key)) {
          console.warn(`Children of AnimatePresence require unique keys. "${key}" is a duplicate.`);
          seenChildren.add(key);
        }
        allChildren.set(key, child);
      });
    }
    __name(updateChildLookup, "updateChildLookup");
    function onlyElements(children) {
      const filtered = [];
      import_react.Children.forEach(children, (child, index) => {
        if ((0, import_react.isValidElement)(child)) {
          if (!child.key) {
            if (process.env.NODE_ENV === "development") {
              console.warn(`No key given to AnimatePresence child, assigning index as key`);
            }
            filtered.push(
              import_react.default.cloneElement(child, {
                key: index
              })
            );
          } else {
            filtered.push(child);
          }
        }
      });
      return filtered;
    }
    __name(onlyElements, "onlyElements");
    var AnimatePresence = /* @__PURE__ */ __name(({
      children,
      enterVariant,
      exitVariant,
      initial = true,
      onExitComplete,
      exitBeforeEnter,
      presenceAffectsLayout = true
    }) => {
      let forceRender = (0, import_core2.useForceUpdate)();
      const forceRenderLayoutGroup = (0, import_react.useContext)(import_LayoutGroupContext.LayoutGroupContext).forceRender;
      if (forceRenderLayoutGroup)
        forceRender = forceRenderLayoutGroup;
      const isMounted = (0, import_react.useRef)(false);
      const filteredChildren = onlyElements(children);
      let childrenToRender = filteredChildren;
      const exiting = /* @__PURE__ */ new Set();
      const presentChildren = (0, import_react.useRef)(childrenToRender);
      const allChildren = (0, import_react.useRef)(/* @__PURE__ */ new Map()).current;
      const isInitialRender = (0, import_react.useRef)(true);
      (0, import_react.useEffect)(() => {
        isMounted.current = true;
        return () => {
          isMounted.current = false;
          isInitialRender.current = true;
          allChildren.clear();
          exiting.clear();
        };
      }, []);
      (0, import_core2.useIsomorphicLayoutEffect)(() => {
        isInitialRender.current = false;
        updateChildLookup(filteredChildren, allChildren);
        presentChildren.current = childrenToRender;
      });
      if (isInitialRender.current) {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
          children: childrenToRender.map((child) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_PresenceChild.PresenceChild, {
            isPresent: true,
            exitVariant,
            enterVariant,
            initial: initial ? void 0 : false,
            presenceAffectsLayout,
            children: child
          }, getChildKey(child)))
        });
      }
      childrenToRender = [...childrenToRender];
      const presentKeys = presentChildren.current.map(getChildKey);
      const targetKeys = filteredChildren.map(getChildKey);
      const numPresent = presentKeys.length;
      for (let i = 0; i < numPresent; i++) {
        const key = presentKeys[i];
        if (targetKeys.indexOf(key) === -1) {
          exiting.add(key);
        }
      }
      if (exitBeforeEnter && exiting.size) {
        childrenToRender = [];
      }
      exiting.forEach((key) => {
        if (targetKeys.indexOf(key) !== -1)
          return;
        const child = allChildren.get(key);
        if (!child)
          return;
        const insertionIndex = presentKeys.indexOf(key);
        childrenToRender.splice(
          insertionIndex,
          0,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_PresenceChild.PresenceChild, {
            isPresent: false,
            onExitComplete: () => {
              allChildren.delete(key);
              exiting.delete(key);
              const removeIndex = presentChildren.current.findIndex(
                (presentChild) => presentChild.key === key
              );
              presentChildren.current.splice(removeIndex, 1);
              if (!exiting.size) {
                presentChildren.current = filteredChildren;
                if (isMounted.current === false)
                  return;
                forceRender();
                onExitComplete == null ? void 0 : onExitComplete();
              }
            },
            exitVariant,
            enterVariant,
            presenceAffectsLayout,
            children: child
          }, getChildKey(child))
        );
      });
      childrenToRender = childrenToRender.map((child) => {
        const key = child.key;
        return exiting.has(key) ? child : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_PresenceChild.PresenceChild, {
          isPresent: true,
          exitVariant,
          enterVariant,
          presenceAffectsLayout,
          children: child
        }, getChildKey(child));
      });
      if (process.env.NODE_ENV !== "production" && exitBeforeEnter && childrenToRender.length > 1) {
        console.warn(
          `You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour.`
        );
      }
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
        children: exiting.size ? childrenToRender : childrenToRender.map((child) => (0, import_react.cloneElement)(child))
      });
    }, "AnimatePresence");
    AnimatePresence.displayName = "AnimatePresence";
  }
});

// ../../node_modules/@tamagui/animate-presence/dist/cjs/index.js
var require_cjs2 = __commonJS({
  "../../node_modules/@tamagui/animate-presence/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_AnimatePresence(), module2.exports);
    __reExport2(src_exports2, require_cjs(), module2.exports);
  }
});

// ../../node_modules/@tamagui/compose-refs/dist/cjs/compose-refs.js
var require_compose_refs = __commonJS({
  "../../node_modules/@tamagui/compose-refs/dist/cjs/compose-refs.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var compose_refs_exports = {};
    __export3(compose_refs_exports, {
      composeRefs: () => composeRefs,
      useComposedRefs: () => useComposedRefs
    });
    module2.exports = __toCommonJS3(compose_refs_exports);
    var React3 = __toESM2(require("react"));
    function setRef(ref, value) {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref !== null && ref !== void 0) {
        const next = ref;
        next.current = value;
      }
    }
    __name(setRef, "setRef");
    function composeRefs(...refs) {
      return (node) => refs.forEach((ref) => setRef(ref, node));
    }
    __name(composeRefs, "composeRefs");
    function useComposedRefs(...refs) {
      return React3.useCallback(composeRefs(...refs), refs);
    }
    __name(useComposedRefs, "useComposedRefs");
  }
});

// ../../node_modules/@tamagui/compose-refs/dist/cjs/index.js
var require_cjs3 = __commonJS({
  "../../node_modules/@tamagui/compose-refs/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_compose_refs(), module2.exports);
  }
});

// ../../node_modules/@tamagui/create-context/dist/cjs/create-context.js
var require_create_context = __commonJS({
  "../../node_modules/@tamagui/create-context/dist/cjs/create-context.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var create_context_exports = {};
    __export3(create_context_exports, {
      createContext: () => createContext,
      createContextScope: () => createContextScope
    });
    module2.exports = __toCommonJS3(create_context_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var React3 = __toESM2(require("react"));
    function createContext(rootComponentName, defaultContext) {
      const Context = React3.createContext(defaultContext);
      function Provider(props) {
        const { children, ...context } = props;
        const value = React3.useMemo(() => context, Object.values(context));
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Context.Provider, {
          value,
          children
        });
      }
      __name(Provider, "Provider");
      function useContext(consumerName) {
        const context = React3.useContext(Context);
        if (context)
          return context;
        if (defaultContext !== void 0)
          return defaultContext;
        throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
      }
      __name(useContext, "useContext");
      Provider.displayName = rootComponentName + "Provider";
      return [Provider, useContext];
    }
    __name(createContext, "createContext");
    function createContextScope(scopeName, createContextScopeDeps = []) {
      let defaultContexts = [];
      function createContext2(rootComponentName, defaultContext) {
        const BaseContext = React3.createContext(defaultContext);
        const index = defaultContexts.length;
        defaultContexts = [...defaultContexts, defaultContext];
        function Provider(props) {
          const { scope, children, ...context } = props;
          const Context = (scope == null ? void 0 : scope[scopeName][index]) || BaseContext;
          const value = React3.useMemo(() => context, Object.values(context));
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Context.Provider, {
            value,
            children
          });
        }
        __name(Provider, "Provider");
        function useContext(consumerName, scope) {
          const Context = (scope == null ? void 0 : scope[scopeName][index]) || BaseContext;
          const context = React3.useContext(Context);
          if (context)
            return context;
          if (defaultContext !== void 0)
            return defaultContext;
          throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
        }
        __name(useContext, "useContext");
        Provider.displayName = rootComponentName + "Provider";
        return [Provider, useContext];
      }
      __name(createContext2, "createContext2");
      const createScope = /* @__PURE__ */ __name(() => {
        const scopeContexts = defaultContexts.map((defaultContext) => {
          return React3.createContext(defaultContext);
        });
        return /* @__PURE__ */ __name(function useScope(scope) {
          const contexts = (scope == null ? void 0 : scope[scopeName]) || scopeContexts;
          return React3.useMemo(
            () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
            [scope, contexts]
          );
        }, "useScope");
      }, "createScope");
      createScope.scopeName = scopeName;
      return [createContext2, composeContextScopes(createScope, ...createContextScopeDeps)];
    }
    __name(createContextScope, "createContextScope");
    function composeContextScopes(...scopes) {
      const baseScope = scopes[0];
      if (scopes.length === 1)
        return baseScope;
      const createScope = /* @__PURE__ */ __name(() => {
        const scopeHooks = scopes.map((createScope2) => ({
          useScope: createScope2(),
          scopeName: createScope2.scopeName
        }));
        return /* @__PURE__ */ __name(function useComposedScopes(overrideScopes) {
          const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
            const scopeProps = useScope(overrideScopes);
            const currentScope = scopeProps[`__scope${scopeName}`];
            return { ...nextScopes2, ...currentScope };
          }, {});
          return React3.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
        }, "useComposedScopes");
      }, "createScope");
      createScope.scopeName = baseScope.scopeName;
      return createScope;
    }
    __name(composeContextScopes, "composeContextScopes");
  }
});

// ../../node_modules/@tamagui/create-context/dist/cjs/index.js
var require_cjs4 = __commonJS({
  "../../node_modules/@tamagui/create-context/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_create_context(), module2.exports);
  }
});

// ../../node_modules/aria-hidden/dist/es5/index.js
var require_es5 = __commonJS({
  "../../node_modules/aria-hidden/dist/es5/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var getDefaultParent = /* @__PURE__ */ __name(function(originalTarget) {
      if (typeof document === "undefined") {
        return null;
      }
      var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
      return sampleTarget.ownerDocument.body;
    }, "getDefaultParent");
    var counterMap = /* @__PURE__ */ new WeakMap();
    var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
    var markerMap = {};
    var lockCount = 0;
    exports2.hideOthers = function(originalTarget, parentNode, markerName) {
      if (parentNode === void 0) {
        parentNode = getDefaultParent(originalTarget);
      }
      if (markerName === void 0) {
        markerName = "data-aria-hidden";
      }
      var targets = Array.isArray(originalTarget) ? originalTarget : [originalTarget];
      if (!markerMap[markerName]) {
        markerMap[markerName] = /* @__PURE__ */ new WeakMap();
      }
      var markerCounter = markerMap[markerName];
      var hiddenNodes = [];
      var elementsToKeep = /* @__PURE__ */ new Set();
      var keep = /* @__PURE__ */ __name(function(el) {
        if (!el || elementsToKeep.has(el)) {
          return;
        }
        elementsToKeep.add(el);
        keep(el.parentNode);
      }, "keep");
      targets.forEach(keep);
      var deep = /* @__PURE__ */ __name(function(parent) {
        if (!parent || targets.indexOf(parent) >= 0) {
          return;
        }
        Array.prototype.forEach.call(parent.children, function(node) {
          if (elementsToKeep.has(node)) {
            deep(node);
          } else {
            var attr = node.getAttribute("aria-hidden");
            var alreadyHidden = attr !== null && attr !== "false";
            var counterValue = (counterMap.get(node) || 0) + 1;
            var markerValue = (markerCounter.get(node) || 0) + 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            hiddenNodes.push(node);
            if (counterValue === 1 && alreadyHidden) {
              uncontrolledNodes.set(node, true);
            }
            if (markerValue === 1) {
              node.setAttribute(markerName, "true");
            }
            if (!alreadyHidden) {
              node.setAttribute("aria-hidden", "true");
            }
          }
        });
      }, "deep");
      deep(parentNode);
      elementsToKeep.clear();
      lockCount++;
      return function() {
        hiddenNodes.forEach(function(node) {
          var counterValue = counterMap.get(node) - 1;
          var markerValue = markerCounter.get(node) - 1;
          counterMap.set(node, counterValue);
          markerCounter.set(node, markerValue);
          if (!counterValue) {
            if (!uncontrolledNodes.has(node)) {
              node.removeAttribute("aria-hidden");
            }
            uncontrolledNodes.delete(node);
          }
          if (!markerValue) {
            node.removeAttribute(markerName);
          }
        });
        lockCount--;
        if (!lockCount) {
          counterMap = /* @__PURE__ */ new WeakMap();
          counterMap = /* @__PURE__ */ new WeakMap();
          uncontrolledNodes = /* @__PURE__ */ new WeakMap();
          markerMap = {};
        }
      };
    };
  }
});

// ../../node_modules/@tamagui/aria-hidden/dist/cjs/AriaHidden.js
var require_AriaHidden = __commonJS({
  "../../node_modules/@tamagui/aria-hidden/dist/cjs/AriaHidden.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var AriaHidden_exports = {};
    __export3(AriaHidden_exports, {
      hideOthers: () => import_aria_hidden.hideOthers
    });
    module2.exports = __toCommonJS3(AriaHidden_exports);
    var import_aria_hidden = require_es5();
  }
});

// ../../node_modules/@tamagui/aria-hidden/dist/cjs/index.js
var require_cjs5 = __commonJS({
  "../../node_modules/@tamagui/aria-hidden/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_AriaHidden(), module2.exports);
  }
});

// ../../node_modules/@radix-ui/react-use-callback-ref/dist/index.js
var require_dist = __commonJS({
  "../../node_modules/@radix-ui/react-use-callback-ref/dist/index.js"(exports2) {
    var e;
    var r;
    var t = (e = {}, r = require("react"), Object.keys(r).forEach(function(t2) {
      "default" !== t2 && "__esModule" !== t2 && Object.defineProperty(e, t2, { enumerable: true, get: function() {
        return r[t2];
      } });
    }), e);
    exports2.useCallbackRef = function(e2) {
      const r2 = t.useRef(e2);
      return t.useEffect(() => {
        r2.current = e2;
      }), t.useMemo(() => (...e3) => {
        var t2;
        return null === (t2 = r2.current) || void 0 === t2 ? void 0 : t2.call(r2, ...e3);
      }, []);
    };
  }
});

// ../../node_modules/@radix-ui/react-use-escape-keydown/dist/index.js
var require_dist2 = __commonJS({
  "../../node_modules/@radix-ui/react-use-escape-keydown/dist/index.js"(exports2) {
    var e;
    var t;
    var n = require_dist().useCallbackRef;
    var r = (e = {}, t = require("react"), Object.keys(t).forEach(function(n2) {
      "default" !== n2 && "__esModule" !== n2 && Object.defineProperty(e, n2, { enumerable: true, get: function() {
        return t[n2];
      } });
    }), e);
    exports2.useEscapeKeydown = function(e2) {
      const t2 = n(e2);
      r.useEffect(() => {
        const e3 = /* @__PURE__ */ __name((e4) => {
          "Escape" === e4.key && t2(e4);
        }, "e");
        return document.addEventListener("keydown", e3), () => document.removeEventListener("keydown", e3);
      }, [t2]);
    };
  }
});

// ../../node_modules/@tamagui/use-event/dist/cjs/useGet.js
var require_useGet = __commonJS({
  "../../node_modules/@tamagui/use-event/dist/cjs/useGet.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useGet_exports = {};
    __export3(useGet_exports, {
      useGet: () => useGet2
    });
    module2.exports = __toCommonJS3(useGet_exports);
    var import_react = require("react");
    var isWeb2 = process.env.TAMAGUI_TARGET === "web";
    var isClient2 = typeof window !== "undefined";
    var useIsomorphicLayoutEffect2 = !isWeb2 || isClient2 ? import_react.useLayoutEffect : import_react.useEffect;
    function useGet2(currentValue, initialValue, forwardToFunction) {
      const curRef = (0, import_react.useRef)(initialValue ?? currentValue);
      useIsomorphicLayoutEffect2(() => {
        curRef.current = currentValue;
      });
      return (0, import_react.useCallback)(
        forwardToFunction ? (...args) => {
          var _a;
          return (_a = curRef.current) == null ? void 0 : _a.apply(null, args);
        } : () => curRef.current,
        []
      );
    }
    __name(useGet2, "useGet");
  }
});

// ../../node_modules/@tamagui/use-event/dist/cjs/useEvent.js
var require_useEvent = __commonJS({
  "../../node_modules/@tamagui/use-event/dist/cjs/useEvent.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useEvent_exports = {};
    __export3(useEvent_exports, {
      useEvent: () => useEvent2
    });
    module2.exports = __toCommonJS3(useEvent_exports);
    var import_useGet = require_useGet();
    function useEvent2(callback) {
      return (0, import_useGet.useGet)(callback, defaultValue, true);
    }
    __name(useEvent2, "useEvent");
    var defaultValue = /* @__PURE__ */ __name(() => {
      throw new Error("Cannot call an event handler while rendering.");
    }, "defaultValue");
  }
});

// ../../node_modules/@tamagui/use-event/dist/cjs/index.js
var require_cjs6 = __commonJS({
  "../../node_modules/@tamagui/use-event/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_useEvent(), module2.exports);
    __reExport2(src_exports2, require_useGet(), module2.exports);
  }
});

// ../../node_modules/@tamagui/dismissable/dist/cjs/Dismissable.js
var require_Dismissable = __commonJS({
  "../../node_modules/@tamagui/dismissable/dist/cjs/Dismissable.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Dismissable_exports = {};
    __export3(Dismissable_exports, {
      Dismissable: () => Dismissable,
      DismissableBranch: () => DismissableBranch
    });
    module2.exports = __toCommonJS3(Dismissable_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_react_use_escape_keydown = require_dist2();
    var import_compose_refs = require_cjs3();
    var import_core2 = require("@tamagui/core-node");
    var import_use_event = require_cjs6();
    var React3 = __toESM2(require("react"));
    var ReactDOM = __toESM2(require("react-dom"));
    function dispatchDiscreteCustomEvent(target, event) {
      if (target)
        ReactDOM.flushSync(() => target.dispatchEvent(event));
    }
    __name(dispatchDiscreteCustomEvent, "dispatchDiscreteCustomEvent");
    var DISMISSABLE_LAYER_NAME = "Dismissable";
    var CONTEXT_UPDATE = "dismissable.update";
    var POINTER_DOWN_OUTSIDE = "dismissable.pointerDownOutside";
    var FOCUS_OUTSIDE = "dismissable.focusOutside";
    var originalBodyPointerEvents;
    var DismissableContext = React3.createContext({
      layers: /* @__PURE__ */ new Set(),
      layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
      branches: /* @__PURE__ */ new Set()
    });
    var Dismissable = React3.forwardRef((props, forwardedRef) => {
      const {
        disableOutsidePointerEvents = false,
        forceUnmount,
        onEscapeKeyDown,
        onPointerDownOutside,
        onFocusOutside,
        onInteractOutside,
        onDismiss,
        ...layerProps
      } = props;
      const context = React3.useContext(DismissableContext);
      const [node, setNode] = React3.useState(null);
      const [, force] = React3.useState({});
      const composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, (node2) => setNode(node2));
      const layers = Array.from(context.layers);
      const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
      const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
      const index = node ? layers.indexOf(node) : -1;
      const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
      const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
      const pointerDownOutside = usePointerDownOutside((event) => {
        const target = event.target;
        const isPointerDownOnBranch = [...context.branches].some((branch) => branch.contains(target));
        if (!isPointerEventsEnabled || isPointerDownOnBranch)
          return;
        onPointerDownOutside == null ? void 0 : onPointerDownOutside(event);
        onInteractOutside == null ? void 0 : onInteractOutside(event);
        if (!event.defaultPrevented)
          onDismiss == null ? void 0 : onDismiss();
      });
      const focusOutside = useFocusOutside((event) => {
        const target = event.target;
        const isFocusInBranch = [...context.branches].some((branch) => branch.contains(target));
        if (isFocusInBranch)
          return;
        onFocusOutside == null ? void 0 : onFocusOutside(event);
        onInteractOutside == null ? void 0 : onInteractOutside(event);
        if (!event.defaultPrevented)
          onDismiss == null ? void 0 : onDismiss();
      });
      (0, import_react_use_escape_keydown.useEscapeKeydown)((event) => {
        const isHighestLayer = index === context.layers.size - 1;
        if (!isHighestLayer)
          return;
        onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(event);
        if (!event.defaultPrevented && onDismiss) {
          event.preventDefault();
          onDismiss();
        }
      });
      React3.useEffect(() => {
        if (!node)
          return;
        if (disableOutsidePointerEvents) {
          if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
            originalBodyPointerEvents = document.body.style.pointerEvents;
            document.body.style.pointerEvents = "none";
          }
          context.layersWithOutsidePointerEventsDisabled.add(node);
        }
        context.layers.add(node);
        dispatchUpdate();
        return () => {
          if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
            document.body.style.pointerEvents = originalBodyPointerEvents;
          }
        };
      }, [node, disableOutsidePointerEvents, context]);
      React3.useEffect(() => {
        if (forceUnmount)
          return;
        return () => {
          if (!node)
            return;
          context.layers.delete(node);
          context.layersWithOutsidePointerEventsDisabled.delete(node);
          dispatchUpdate();
        };
      }, [node, context, forceUnmount]);
      React3.useEffect(() => {
        const handleUpdate = /* @__PURE__ */ __name(() => {
          force({});
        }, "handleUpdate");
        document.addEventListener(CONTEXT_UPDATE, handleUpdate);
        return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
      }, []);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        ...layerProps,
        ref: composedRefs,
        style: {
          display: "contents",
          pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
          ...props.style
        },
        onFocusCapture: (0, import_core2.composeEventHandlers)(
          props.onFocusCapture,
          focusOutside.onFocusCapture
        ),
        onBlurCapture: (0, import_core2.composeEventHandlers)(
          props.onBlurCapture,
          focusOutside.onBlurCapture
        ),
        onPointerDownCapture: (0, import_core2.composeEventHandlers)(
          props.onPointerDownCapture,
          pointerDownOutside.onPointerDownCapture
        )
      });
    });
    Dismissable.displayName = DISMISSABLE_LAYER_NAME;
    var BRANCH_NAME = "DismissableBranch";
    var DismissableBranch = React3.forwardRef(
      (props, forwardedRef) => {
        const context = React3.useContext(DismissableContext);
        const ref = React3.useRef(null);
        const composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, ref);
        React3.useEffect(() => {
          const node = ref.current;
          if (node) {
            context.branches.add(node);
            return () => {
              context.branches.delete(node);
            };
          }
        }, [context.branches]);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          style: { display: "contents" },
          ...props,
          ref: composedRefs
        });
      }
    );
    DismissableBranch.displayName = BRANCH_NAME;
    function usePointerDownOutside(onPointerDownOutside) {
      const handlePointerDownOutside = (0, import_use_event.useEvent)(onPointerDownOutside);
      const isPointerInsideReactTreeRef = React3.useRef(false);
      const handleClickRef = React3.useRef(() => {
      });
      React3.useEffect(() => {
        const handlePointerDown = /* @__PURE__ */ __name((event) => {
          if (event.target && !isPointerInsideReactTreeRef.current) {
            let handleAndDispatchPointerDownOutsideEvent2 = /* @__PURE__ */ __name(function() {
              handleAndDispatchCustomEvent(
                POINTER_DOWN_OUTSIDE,
                handlePointerDownOutside,
                eventDetail,
                { discrete: true }
              );
            }, "handleAndDispatchPointerDownOutsideEvent2");
            var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
            const eventDetail = { originalEvent: event };
            if (event.pointerType === "touch") {
              document.removeEventListener("click", handleClickRef.current);
              handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
              document.addEventListener("click", handleClickRef.current, { once: true });
            } else {
              handleAndDispatchPointerDownOutsideEvent2();
            }
          }
          isPointerInsideReactTreeRef.current = false;
        }, "handlePointerDown");
        const timerId = setTimeout(() => {
          document.addEventListener("pointerdown", handlePointerDown);
        }, 0);
        return () => {
          window.clearTimeout(timerId);
          document.removeEventListener("pointerdown", handlePointerDown);
          document.removeEventListener("click", handleClickRef.current);
        };
      }, [handlePointerDownOutside]);
      return {
        onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
      };
    }
    __name(usePointerDownOutside, "usePointerDownOutside");
    function useFocusOutside(onFocusOutside) {
      const handleFocusOutside = (0, import_use_event.useEvent)(onFocusOutside);
      const isFocusInsideReactTreeRef = React3.useRef(false);
      React3.useEffect(() => {
        const handleFocus = /* @__PURE__ */ __name((event) => {
          if (event.target && !isFocusInsideReactTreeRef.current) {
            const eventDetail = { originalEvent: event };
            handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
              discrete: false
            });
          }
        }, "handleFocus");
        document.addEventListener("focusin", handleFocus);
        return () => document.removeEventListener("focusin", handleFocus);
      }, [handleFocusOutside]);
      return {
        onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
        onBlurCapture: () => isFocusInsideReactTreeRef.current = false
      };
    }
    __name(useFocusOutside, "useFocusOutside");
    function dispatchUpdate() {
      const event = new CustomEvent(CONTEXT_UPDATE);
      document.dispatchEvent(event);
    }
    __name(dispatchUpdate, "dispatchUpdate");
    function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
      const target = detail.originalEvent.target;
      const event = new CustomEvent(name, { bubbles: false, cancelable: true, detail });
      if (handler)
        target.addEventListener(name, handler, { once: true });
      if (discrete) {
        dispatchDiscreteCustomEvent(target, event);
      } else {
        target.dispatchEvent(event);
      }
    }
    __name(handleAndDispatchCustomEvent, "handleAndDispatchCustomEvent");
  }
});

// ../../node_modules/@tamagui/dismissable/dist/cjs/index.js
var require_cjs7 = __commonJS({
  "../../node_modules/@tamagui/dismissable/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_Dismissable(), module2.exports);
  }
});

// ../../node_modules/@tamagui/focus-scope/dist/cjs/FocusScope.js
var require_FocusScope = __commonJS({
  "../../node_modules/@tamagui/focus-scope/dist/cjs/FocusScope.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var FocusScope_exports = {};
    __export3(FocusScope_exports, {
      FocusScope: () => FocusScope
    });
    module2.exports = __toCommonJS3(FocusScope_exports);
    var import_compose_refs = require_cjs3();
    var import_use_event = require_cjs6();
    var React3 = __toESM2(require("react"));
    var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
    var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
    var EVENT_OPTIONS = { bubbles: false, cancelable: true };
    var FOCUS_SCOPE_NAME = "FocusScope";
    var FocusScope = React3.forwardRef((props, forwardedRef) => {
      const {
        loop = false,
        trapped = false,
        onMountAutoFocus: onMountAutoFocusProp,
        onUnmountAutoFocus: onUnmountAutoFocusProp,
        children,
        forceUnmount,
        ...scopeProps
      } = props;
      const [container, setContainer] = React3.useState(null);
      const onMountAutoFocus = (0, import_use_event.useEvent)(onMountAutoFocusProp);
      const onUnmountAutoFocus = (0, import_use_event.useEvent)(onUnmountAutoFocusProp);
      const lastFocusedElementRef = React3.useRef(null);
      const composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, (node) => setContainer(node));
      const focusScope = React3.useRef({
        paused: false,
        pause() {
          this.paused = true;
        },
        resume() {
          this.paused = false;
        }
      }).current;
      React3.useEffect(() => {
        if (!trapped)
          return;
        function handleFocusIn(event) {
          if (focusScope.paused || !container)
            return;
          const target = event.target;
          if (container.contains(target)) {
            lastFocusedElementRef.current = target;
          } else {
            focus(lastFocusedElementRef.current, { select: true });
          }
        }
        __name(handleFocusIn, "handleFocusIn");
        function handleFocusOut(event) {
          if (focusScope.paused || !container)
            return;
          if (!container.contains(event.relatedTarget)) {
            focus(lastFocusedElementRef.current, { select: true });
          }
        }
        __name(handleFocusOut, "handleFocusOut");
        document.addEventListener("focusin", handleFocusIn);
        document.addEventListener("focusout", handleFocusOut);
        return () => {
          document.removeEventListener("focusin", handleFocusIn);
          document.removeEventListener("focusout", handleFocusOut);
        };
      }, [trapped, forceUnmount, container, focusScope.paused]);
      React3.useEffect(() => {
        if (!container)
          return;
        if (forceUnmount)
          return;
        focusScopesStack.add(focusScope);
        const previouslyFocusedElement = document.activeElement;
        const hasFocusedCandidate = container.contains(previouslyFocusedElement);
        if (!hasFocusedCandidate) {
          const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
          container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
          container.dispatchEvent(mountEvent);
          if (!mountEvent.defaultPrevented) {
            focusFirst(removeLinks(getTabbableCandidates(container)), { select: true });
            if (document.activeElement === previouslyFocusedElement) {
              focus(container);
            }
          }
        }
        return () => {
          container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
          const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
          container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          container.dispatchEvent(unmountEvent);
          if (!unmountEvent.defaultPrevented) {
            focus(previouslyFocusedElement ?? document.body, { select: true });
          }
          container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          focusScopesStack.remove(focusScope);
        };
      }, [container, forceUnmount, onMountAutoFocus, onUnmountAutoFocus, focusScope]);
      const handleKeyDown = React3.useCallback(
        (event) => {
          if (!loop && !trapped)
            return;
          if (focusScope.paused)
            return;
          const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
          const focusedElement = document.activeElement;
          if (isTabKey && focusedElement) {
            const container2 = event.currentTarget;
            const [first, last] = getTabbableEdges(container2);
            const hasTabbableElementsInside = first && last;
            if (!hasTabbableElementsInside) {
              if (focusedElement === container2)
                event.preventDefault();
            } else {
              if (!event.shiftKey && focusedElement === last) {
                event.preventDefault();
                if (loop)
                  focus(first, { select: true });
              } else if (event.shiftKey && focusedElement === first) {
                event.preventDefault();
                if (loop)
                  focus(last, { select: true });
              }
            }
          }
        },
        [loop, trapped, focusScope.paused]
      );
      const child = React3.Children.only(children);
      return React3.cloneElement(child, {
        tabIndex: -1,
        ...scopeProps,
        ref: composedRefs,
        onKeyDown: handleKeyDown
      });
    });
    FocusScope.displayName = FOCUS_SCOPE_NAME;
    function focusFirst(candidates, { select = false } = {}) {
      const previouslyFocusedElement = document.activeElement;
      for (const candidate of candidates) {
        focus(candidate, { select });
        if (document.activeElement !== previouslyFocusedElement)
          return;
      }
    }
    __name(focusFirst, "focusFirst");
    function getTabbableEdges(container) {
      const candidates = getTabbableCandidates(container);
      const first = findVisible(candidates, container);
      const last = findVisible(candidates.reverse(), container);
      return [first, last];
    }
    __name(getTabbableEdges, "getTabbableEdges");
    function getTabbableCandidates(container) {
      const nodes = [];
      const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (node) => {
          const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
          if (node.disabled || node.hidden || isHiddenInput)
            return NodeFilter.FILTER_SKIP;
          return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
      });
      while (walker.nextNode())
        nodes.push(walker.currentNode);
      return nodes;
    }
    __name(getTabbableCandidates, "getTabbableCandidates");
    function findVisible(elements, container) {
      for (const element of elements) {
        if (!isHidden(element, { upTo: container }))
          return element;
      }
    }
    __name(findVisible, "findVisible");
    function isHidden(node, { upTo }) {
      if (getComputedStyle(node).visibility === "hidden")
        return true;
      while (node) {
        if (upTo !== void 0 && node === upTo)
          return false;
        if (getComputedStyle(node).display === "none")
          return true;
        node = node.parentElement;
      }
      return false;
    }
    __name(isHidden, "isHidden");
    function isSelectableInput(element) {
      return element instanceof HTMLInputElement && "select" in element;
    }
    __name(isSelectableInput, "isSelectableInput");
    function focus(element, { select = false } = {}) {
      if (element && element.focus) {
        const previouslyFocusedElement = document.activeElement;
        element.focus({ preventScroll: true });
        if (element !== previouslyFocusedElement && isSelectableInput(element) && select)
          element.select();
      }
    }
    __name(focus, "focus");
    var focusScopesStack = createFocusScopesStack();
    function createFocusScopesStack() {
      let stack = [];
      return {
        add(focusScope) {
          const activeFocusScope = stack[0];
          if (focusScope !== activeFocusScope) {
            activeFocusScope == null ? void 0 : activeFocusScope.pause();
          }
          stack = arrayRemove(stack, focusScope);
          stack.unshift(focusScope);
        },
        remove(focusScope) {
          var _a;
          stack = arrayRemove(stack, focusScope);
          (_a = stack[0]) == null ? void 0 : _a.resume();
        }
      };
    }
    __name(createFocusScopesStack, "createFocusScopesStack");
    function arrayRemove(array, item) {
      const updatedArray = [...array];
      const index = updatedArray.indexOf(item);
      if (index !== -1) {
        updatedArray.splice(index, 1);
      }
      return updatedArray;
    }
    __name(arrayRemove, "arrayRemove");
    function removeLinks(items) {
      return items.filter((item) => item.tagName !== "A");
    }
    __name(removeLinks, "removeLinks");
  }
});

// ../../node_modules/@tamagui/focus-scope/dist/cjs/index.js
var require_cjs8 = __commonJS({
  "../../node_modules/@tamagui/focus-scope/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_FocusScope(), module2.exports);
  }
});

// ../../node_modules/@tamagui/polyfill-dev/index.js
var require_polyfill_dev = __commonJS({
  "../../node_modules/@tamagui/polyfill-dev/index.js"() {
    if (typeof globalThis["__DEV__"] === "undefined") {
      globalThis["__DEV__"] = process.env.NODE_ENV === "development";
    }
  }
});

// ../../node_modules/@tamagui/stacks/dist/cjs/Stacks.js
var require_Stacks = __commonJS({
  "../../node_modules/@tamagui/stacks/dist/cjs/Stacks.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Stacks_exports = {};
    __export3(Stacks_exports, {
      XStack: () => XStack,
      YStack: () => YStack,
      ZStack: () => ZStack,
      getElevation: () => getElevation,
      getSizedElevation: () => getSizedElevation
    });
    module2.exports = __toCommonJS3(Stacks_exports);
    var import_core2 = require("@tamagui/core-node");
    var getElevation = /* @__PURE__ */ __name((size, extras) => {
      if (!size)
        return;
      const { tokens } = extras;
      const token = tokens.size[size];
      const sizeNum = (0, import_core2.isVariable)(token) ? +token.val : size;
      return getSizedElevation(sizeNum, extras);
    }, "getElevation");
    var fullscreenStyle = {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };
    var variants = {
      fullscreen: {
        true: fullscreenStyle
      },
      elevation: {
        "...size": getElevation
      }
    };
    var YStack = (0, import_core2.styled)(import_core2.Stack, {
      flexDirection: "column",
      name: "YStack",
      variants
    });
    var XStack = (0, import_core2.styled)(import_core2.Stack, {
      flexDirection: "row",
      name: "XStack",
      variants
    });
    var ZStack = (0, import_core2.styled)(
      YStack,
      {
        name: "ZStack",
        position: "relative"
      },
      {
        neverFlatten: true,
        isZStack: true
      }
    );
    var getSizedElevation = /* @__PURE__ */ __name((val, { theme, tokens }) => {
      let num = 0;
      if (val === true) {
        const val2 = (0, import_core2.getVariableValue)(tokens.size["true"]);
        if (typeof val2 === "number") {
          num = val2;
        } else {
          num = 10;
        }
      } else {
        num = +val;
      }
      if (process.env.NODE_ENV === "development") {
        if (num !== null && isNaN(num)) {
          console.warn("NaN shadow", num, val);
        }
      }
      const [height, shadowRadius] = [Math.round(num / 4 + 1), Math.round(num / 2 + 2)];
      const shadow = {
        shadowColor: theme.shadowColor,
        shadowRadius,
        shadowOffset: { height, width: 0 }
      };
      return shadow;
    }, "getSizedElevation");
  }
});

// ../../node_modules/@tamagui/get-button-sized/dist/cjs/index.js
var require_cjs9 = __commonJS({
  "../../node_modules/@tamagui/get-button-sized/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    __export3(src_exports2, {
      getButtonSized: () => getButtonSized
    });
    module2.exports = __toCommonJS3(src_exports2);
    var import_core2 = require("@tamagui/core-node");
    var getButtonSized = /* @__PURE__ */ __name((val, { tokens }) => {
      if (typeof val === "number") {
        return {
          paddingHorizontal: val * 0.25,
          height: val,
          borderRadius: val * 0.2
        };
      }
      const ySize = (0, import_core2.getSize)(val, 0);
      const xSize = (0, import_core2.stepTokenUpOrDown)(tokens.space, val);
      const radiusToken = tokens.radius[val] ?? tokens.radius["$4"];
      return {
        paddingHorizontal: xSize,
        height: ySize,
        borderRadius: radiusToken
      };
    }, "getButtonSized");
  }
});

// ../../node_modules/@tamagui/stacks/dist/cjs/variants.js
var require_variants = __commonJS({
  "../../node_modules/@tamagui/stacks/dist/cjs/variants.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var variants_exports = {};
    __export3(variants_exports, {
      bordered: () => bordered,
      circular: () => circular,
      elevate: () => elevate,
      focusTheme: () => focusTheme,
      hoverTheme: () => hoverTheme,
      padded: () => padded,
      pressTheme: () => pressTheme,
      radiused: () => radiused
    });
    module2.exports = __toCommonJS3(variants_exports);
    var import_Stacks = require_Stacks();
    var elevate = {
      true: (_, extras) => {
        return (0, import_Stacks.getElevation)(extras.props["size"], extras);
      }
    };
    var bordered = /* @__PURE__ */ __name((val, { props }) => {
      return {
        borderWidth: typeof val === "number" ? val : 1,
        borderColor: "$borderColor",
        ...props.hoverTheme && {
          hoverStyle: {
            borderColor: "$borderColorHover"
          }
        },
        ...props.pressTheme && {
          pressStyle: {
            borderColor: "$borderColorPress"
          }
        },
        ...props.focusTheme && {
          focusStyle: {
            borderColor: "$borderColorFocus"
          }
        }
      };
    }, "bordered");
    var padded = {
      true: (_, extras) => {
        const { tokens, props } = extras;
        return {
          padding: tokens.space[props.size] || tokens.space["$4"]
        };
      }
    };
    var radiused = {
      true: (_, extras) => {
        const { tokens, props } = extras;
        return {
          borderRadius: tokens.radius[props.size] || tokens.radius["$4"]
        };
      }
    };
    var circular = {
      true: (_, { props, tokens }) => {
        const size = tokens.size[props.size];
        return {
          width: size,
          height: size,
          maxWidth: size,
          maxHeight: size,
          minWidth: size,
          minHeight: size,
          borderRadius: 1e5,
          paddingVertical: 0,
          paddingHorizontal: 0
        };
      }
    };
    var hoverTheme = {
      true: {
        hoverStyle: {
          backgroundColor: "$backgroundHover",
          borderColor: "$borderColorHover"
        }
      },
      false: {}
    };
    var pressTheme = {
      true: {
        pressStyle: {
          backgroundColor: "$backgroundPress",
          borderColor: "$borderColorPress"
        }
      },
      false: {}
    };
    var focusTheme = {
      true: {
        focusStyle: {
          backgroundColor: "$backgroundFocus",
          borderColor: "$borderColorFocus"
        }
      },
      false: {}
    };
  }
});

// ../../node_modules/@tamagui/stacks/dist/cjs/SizableStack.js
var require_SizableStack = __commonJS({
  "../../node_modules/@tamagui/stacks/dist/cjs/SizableStack.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SizableStack_exports = {};
    __export3(SizableStack_exports, {
      SizableStack: () => SizableStack
    });
    module2.exports = __toCommonJS3(SizableStack_exports);
    var import_core2 = require("@tamagui/core-node");
    var import_get_button_sized = require_cjs9();
    var import_Stacks = require_Stacks();
    var import_variants = require_variants();
    var SizableStack = (0, import_core2.styled)(import_Stacks.YStack, {
      name: "SizableStack",
      backgroundColor: "$background",
      flexDirection: "row",
      flexShrink: 1,
      variants: {
        fontFamily: () => ({}),
        hoverTheme: import_variants.hoverTheme,
        pressTheme: import_variants.pressTheme,
        focusTheme: import_variants.focusTheme,
        circular: import_variants.circular,
        elevate: import_variants.elevate,
        bordered: import_variants.bordered,
        size: {
          "...size": import_get_button_sized.getButtonSized
        }
      }
    });
  }
});

// ../../node_modules/@tamagui/stacks/dist/cjs/ThemeableStack.js
var require_ThemeableStack = __commonJS({
  "../../node_modules/@tamagui/stacks/dist/cjs/ThemeableStack.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var ThemeableStack_exports = {};
    __export3(ThemeableStack_exports, {
      ThemeableStack: () => ThemeableStack
    });
    module2.exports = __toCommonJS3(ThemeableStack_exports);
    var import_core2 = require("@tamagui/core-node");
    var import_Stacks = require_Stacks();
    var import_variants = require_variants();
    var chromelessStyle = {
      backgroundColor: "transparent",
      borderColor: "transparent",
      shadowColor: "transparent"
    };
    var ThemeableStack = (0, import_core2.styled)(import_Stacks.YStack, {
      name: "SizableStack",
      variants: {
        fontFamily: () => ({}),
        backgrounded: {
          true: {
            backgroundColor: "$background"
          }
        },
        radiused: import_variants.radiused,
        hoverTheme: import_variants.hoverTheme,
        pressTheme: import_variants.pressTheme,
        focusTheme: import_variants.focusTheme,
        circular: import_variants.circular,
        padded: import_variants.padded,
        elevate: import_variants.elevate,
        bordered: import_variants.bordered,
        transparent: {
          true: {
            backgroundColor: "transparent"
          }
        },
        chromeless: {
          true: chromelessStyle,
          all: {
            ...chromelessStyle,
            hoverStyle: chromelessStyle,
            pressStyle: chromelessStyle,
            focusStyle: chromelessStyle
          }
        }
      }
    });
  }
});

// ../../node_modules/@tamagui/stacks/dist/cjs/index.js
var require_cjs10 = __commonJS({
  "../../node_modules/@tamagui/stacks/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_Stacks(), module2.exports);
    __reExport2(src_exports2, require_SizableStack(), module2.exports);
    __reExport2(src_exports2, require_ThemeableStack(), module2.exports);
  }
});

// ../../node_modules/@tamagui/portal/dist/cjs/Portal.js
var require_Portal = __commonJS({
  "../../node_modules/@tamagui/portal/dist/cjs/Portal.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Portal_exports = {};
    __export3(Portal_exports, {
      Portal: () => Portal
    });
    module2.exports = __toCommonJS3(Portal_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_polyfill_dev = require_polyfill_dev();
    var import_core2 = require("@tamagui/core-node");
    var import_stacks = require_cjs10();
    var React3 = __toESM2(require("react"));
    var import_react_dom = require("react-dom");
    var Portal = /* @__PURE__ */ __name(({ host = ((_a) => (_a = globalThis.document) == null ? void 0 : _a.body)(), ...props }) => {
      const contents = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_stacks.YStack, {
        pointerEvents: "box-none",
        contain: "strict",
        fullscreen: true,
        position: import_core2.isWeb ? "fixed" : "absolute",
        maxWidth: import_core2.isWeb ? "100vw" : "100%",
        maxHeight: import_core2.isWeb ? "100vh" : "100%",
        ...props
      });
      const [hostElement, setHostElement] = React3.useState(null);
      (0, import_core2.useIsomorphicLayoutEffect)(() => {
        setHostElement(host);
      }, [host]);
      if (hostElement) {
        return (0, import_react_dom.createPortal)(contents, hostElement);
      }
      return null;
    }, "Portal");
  }
});

// ../../node_modules/@tamagui/portal/dist/cjs/GorhomPortal.js
var require_GorhomPortal = __commonJS({
  "../../node_modules/@tamagui/portal/dist/cjs/GorhomPortal.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var GorhomPortal_exports = {};
    __export3(GorhomPortal_exports, {
      ACTIONS: () => ACTIONS,
      INITIAL_STATE: () => INITIAL_STATE,
      PortalHost: () => PortalHost,
      PortalItem: () => PortalItem,
      PortalProvider: () => PortalProvider,
      usePortal: () => usePortal
    });
    module2.exports = __toCommonJS3(GorhomPortal_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_core2 = require("@tamagui/core-node");
    var import_react = require("react");
    var import_react2 = require("react");
    var ACTIONS = /* @__PURE__ */ ((ACTIONS2) => {
      ACTIONS2[ACTIONS2["REGISTER_HOST"] = 0] = "REGISTER_HOST";
      ACTIONS2[ACTIONS2["DEREGISTER_HOST"] = 1] = "DEREGISTER_HOST";
      ACTIONS2[ACTIONS2["ADD_UPDATE_PORTAL"] = 2] = "ADD_UPDATE_PORTAL";
      ACTIONS2[ACTIONS2["REMOVE_PORTAL"] = 3] = "REMOVE_PORTAL";
      return ACTIONS2;
    })(ACTIONS || {});
    var INITIAL_STATE = {};
    var registerHost = /* @__PURE__ */ __name((state, hostName) => {
      if (!(hostName in state)) {
        state[hostName] = [];
      }
      return state;
    }, "registerHost");
    var deregisterHost = /* @__PURE__ */ __name((state, hostName) => {
      delete state[hostName];
      return state;
    }, "deregisterHost");
    var addUpdatePortal = /* @__PURE__ */ __name((state, hostName, portalName, node) => {
      if (!(hostName in state)) {
        state = registerHost(state, hostName);
      }
      const index = state[hostName].findIndex((item) => item.name === portalName);
      if (index !== -1) {
        state[hostName][index].node = node;
      } else {
        state[hostName].push({
          name: portalName,
          node
        });
      }
      return state;
    }, "addUpdatePortal");
    var removePortal = /* @__PURE__ */ __name((state, hostName, portalName) => {
      if (!(hostName in state)) {
        console.log(`Failed to remove portal '${portalName}', '${hostName}' was not registered!`);
        return state;
      }
      const index = state[hostName].findIndex((item) => item.name === portalName);
      if (index !== -1)
        state[hostName].splice(index, 1);
      return state;
    }, "removePortal");
    var reducer = /* @__PURE__ */ __name((state, action) => {
      const { type } = action;
      switch (type) {
        case 0:
          return registerHost({ ...state }, action.hostName);
        case 1:
          return deregisterHost({ ...state }, action.hostName);
        case 2:
          return addUpdatePortal(
            { ...state },
            action.hostName,
            action.portalName,
            action.node
          );
        case 3:
          return removePortal({ ...state }, action.hostName, action.portalName);
        default:
          return state;
      }
    }, "reducer");
    var PortalStateContext = (0, import_react2.createContext)(null);
    var PortalDispatchContext = (0, import_react2.createContext)(null);
    var usePortalState = /* @__PURE__ */ __name((hostName) => {
      const state = (0, import_react2.useContext)(PortalStateContext);
      if (state === null) {
        throw new Error(
          "'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component."
        );
      }
      return state[hostName] || [];
    }, "usePortalState");
    var usePortal = /* @__PURE__ */ __name((hostName = "root") => {
      const dispatch = (0, import_react2.useContext)(PortalDispatchContext);
      if (dispatch === null) {
        throw new Error(
          "'PortalDispatchContext' cannot be null, please add 'PortalProvider' to the root component."
        );
      }
      const registerHost2 = (0, import_react2.useCallback)(() => {
        dispatch({
          type: 0,
          hostName
        });
      }, []);
      const deregisterHost2 = (0, import_react2.useCallback)(() => {
        dispatch({
          type: 1,
          hostName
        });
      }, []);
      const addUpdatePortal2 = (0, import_react2.useCallback)((name, node) => {
        dispatch({
          type: 2,
          hostName,
          portalName: name,
          node
        });
      }, []);
      const removePortal2 = (0, import_react2.useCallback)((name) => {
        dispatch({
          type: 3,
          hostName,
          portalName: name
        });
      }, []);
      return {
        registerHost: registerHost2,
        deregisterHost: deregisterHost2,
        addPortal: addUpdatePortal2,
        updatePortal: addUpdatePortal2,
        removePortal: removePortal2
      };
    }, "usePortal");
    var PortalProviderComponent = /* @__PURE__ */ __name(({
      rootHostName = "root",
      shouldAddRootHost = true,
      children
    }) => {
      const [state, dispatch] = (0, import_react2.useReducer)(reducer, INITIAL_STATE);
      const transitionDispatch = (0, import_react.useMemo)(() => {
        const next = /* @__PURE__ */ __name((value) => {
          (0, import_react.startTransition)(() => {
            dispatch(value);
          });
        }, "next");
        return next;
      }, [dispatch]);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalDispatchContext.Provider, {
        value: transitionDispatch,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalStateContext.Provider, {
          value: state,
          children: [
            children,
            shouldAddRootHost && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalHost, {
              name: rootHostName
            })
          ]
        })
      });
    }, "PortalProviderComponent");
    var PortalProvider = (0, import_react2.memo)(PortalProviderComponent);
    PortalProvider.displayName = "PortalProvider";
    var PortalHostComponent = /* @__PURE__ */ __name(({ name }) => {
      const isServer2 = !(0, import_core2.useDidFinishSSR)();
      const state = usePortalState(name);
      const { registerHost: registerHost2, deregisterHost: deregisterHost2 } = usePortal(name);
      (0, import_react2.useEffect)(() => {
        if (isServer2)
          return;
        registerHost2();
        return () => {
          deregisterHost2();
        };
      }, [isServer2]);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
        children: state.map((item) => item.node)
      });
    }, "PortalHostComponent");
    var PortalHost = (0, import_react2.memo)(PortalHostComponent);
    PortalHost.displayName = "PortalHost";
    var PortalComponent = /* @__PURE__ */ __name(({
      name: _providedName,
      hostName,
      handleOnMount: _providedHandleOnMount,
      handleOnUnmount: _providedHandleOnUnmount,
      handleOnUpdate: _providedHandleOnUpdate,
      children
    }) => {
      const { addPortal: addUpdatePortal2, removePortal: removePortal2 } = usePortal(hostName);
      let id = 0;
      const nanoid = /* @__PURE__ */ __name(() => {
        id = (id + 1) % Number.MAX_SAFE_INTEGER;
        return `${id}`;
      }, "nanoid");
      const name = (0, import_react.useMemo)(() => _providedName || nanoid(), [_providedName]);
      const handleOnMountRef = (0, import_react.useRef)();
      const handleOnUnmountRef = (0, import_react.useRef)();
      const handleOnUpdateRef = (0, import_react.useRef)();
      const handleOnMount = (0, import_react2.useCallback)(() => {
        if (_providedHandleOnMount) {
          _providedHandleOnMount(() => addUpdatePortal2(name, children));
        } else {
          addUpdatePortal2(name, children);
        }
      }, [_providedHandleOnMount, addUpdatePortal2]);
      handleOnMountRef.current = handleOnMount;
      const handleOnUnmount = (0, import_react2.useCallback)(() => {
        if (_providedHandleOnUnmount) {
          _providedHandleOnUnmount(() => removePortal2(name));
        } else {
          removePortal2(name);
        }
      }, [_providedHandleOnUnmount, removePortal2]);
      handleOnUnmountRef.current = handleOnUnmount;
      const handleOnUpdate = (0, import_react2.useCallback)(() => {
        if (_providedHandleOnUpdate) {
          _providedHandleOnUpdate(() => addUpdatePortal2(name, children));
        } else {
          addUpdatePortal2(name, children);
        }
      }, [_providedHandleOnUpdate, addUpdatePortal2, children]);
      handleOnUpdateRef.current = handleOnUpdate;
      (0, import_react2.useEffect)(() => {
        var _a;
        (_a = handleOnMountRef.current) == null ? void 0 : _a.call(handleOnMountRef);
        return () => {
          var _a2;
          (_a2 = handleOnUnmountRef.current) == null ? void 0 : _a2.call(handleOnUnmountRef);
          handleOnMountRef.current = void 0;
          handleOnUnmountRef.current = void 0;
          handleOnUpdateRef.current = void 0;
        };
      }, []);
      (0, import_react2.useEffect)(() => {
        var _a;
        (_a = handleOnUpdateRef.current) == null ? void 0 : _a.call(handleOnUpdateRef);
      }, [children]);
      return null;
    }, "PortalComponent");
    var PortalItem = (0, import_react2.memo)(PortalComponent);
    PortalItem.displayName = "Portal";
  }
});

// ../../node_modules/@tamagui/portal/dist/cjs/index.js
var require_cjs11 = __commonJS({
  "../../node_modules/@tamagui/portal/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_Portal(), module2.exports);
    __reExport2(src_exports2, require_GorhomPortal(), module2.exports);
  }
});

// ../../node_modules/tslib/tslib.js
var require_tslib = __commonJS({
  "../../node_modules/tslib/tslib.js"(exports2, module2) {
    var __extends;
    var __assign;
    var __rest;
    var __decorate;
    var __param;
    var __metadata;
    var __awaiter;
    var __generator;
    var __exportStar;
    var __values;
    var __read;
    var __spread;
    var __spreadArrays;
    var __spreadArray;
    var __await;
    var __asyncGenerator;
    var __asyncDelegator;
    var __asyncValues;
    var __makeTemplateObject;
    var __importStar;
    var __importDefault;
    var __classPrivateFieldGet;
    var __classPrivateFieldSet;
    var __classPrivateFieldIn;
    var __createBinding;
    (function(factory) {
      var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports3) {
          factory(createExporter(root, createExporter(exports3)));
        });
      } else if (typeof module2 === "object" && typeof module2.exports === "object") {
        factory(createExporter(root, createExporter(module2.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports3, previous) {
        if (exports3 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports3, "__esModule", { value: true });
          } else {
            exports3.__esModule = true;
          }
        }
        return function(id, v) {
          return exports3[id] = previous ? previous(id, v) : v;
        };
      }
      __name(createExporter, "createExporter");
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b)
          if (Object.prototype.hasOwnProperty.call(b, p))
            d[p] = b[p];
      };
      __extends = /* @__PURE__ */ __name(function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        __name(__, "__");
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }, "__extends");
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest = /* @__PURE__ */ __name(function(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      }, "__rest");
      __decorate = /* @__PURE__ */ __name(function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }, "__decorate");
      __param = /* @__PURE__ */ __name(function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      }, "__param");
      __metadata = /* @__PURE__ */ __name(function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      }, "__metadata");
      __awaiter = /* @__PURE__ */ __name(function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        __name(adopt, "adopt");
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          __name(fulfilled, "fulfilled");
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          __name(rejected, "rejected");
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          __name(step, "step");
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }, "__awaiter");
      __generator = /* @__PURE__ */ __name(function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        __name(verb, "verb");
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
        __name(step, "step");
      }, "__generator");
      __exportStar = /* @__PURE__ */ __name(function(m, o) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding(o, m, p);
      }, "__exportStar");
      __createBinding = Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __values = /* @__PURE__ */ __name(function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return { value: o && o[i++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }, "__values");
      __read = /* @__PURE__ */ __name(function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      }, "__read");
      __spread = /* @__PURE__ */ __name(function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read(arguments[i]));
        return ar;
      }, "__spread");
      __spreadArrays = /* @__PURE__ */ __name(function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      }, "__spreadArrays");
      __spreadArray = /* @__PURE__ */ __name(function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      }, "__spreadArray");
      __await = /* @__PURE__ */ __name(function(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
      }, "__await");
      __asyncGenerator = /* @__PURE__ */ __name(function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n) {
          if (g[n])
            i[n] = function(v) {
              return new Promise(function(a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v);
              });
            };
        }
        __name(verb, "verb");
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        __name(resume, "resume");
        function step(r) {
          r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        __name(step, "step");
        function fulfill(value) {
          resume("next", value);
        }
        __name(fulfill, "fulfill");
        function reject(value) {
          resume("throw", value);
        }
        __name(reject, "reject");
        function settle(f, v) {
          if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
        __name(settle, "settle");
      }, "__asyncGenerator");
      __asyncDelegator = /* @__PURE__ */ __name(function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
        __name(verb, "verb");
      }, "__asyncDelegator");
      __asyncValues = /* @__PURE__ */ __name(function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }
        __name(verb, "verb");
        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve({ value: v2, done: d });
          }, reject);
        }
        __name(settle, "settle");
      }, "__asyncValues");
      __makeTemplateObject = /* @__PURE__ */ __name(function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      }, "__makeTemplateObject");
      var __setModuleDefault = Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      };
      __importStar = /* @__PURE__ */ __name(function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      }, "__importStar");
      __importDefault = /* @__PURE__ */ __name(function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      }, "__importDefault");
      __classPrivateFieldGet = /* @__PURE__ */ __name(function(receiver, state, kind, f) {
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      }, "__classPrivateFieldGet");
      __classPrivateFieldSet = /* @__PURE__ */ __name(function(receiver, state, value, kind, f) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      }, "__classPrivateFieldSet");
      __classPrivateFieldIn = /* @__PURE__ */ __name(function(state, receiver) {
        if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
          throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
      }, "__classPrivateFieldIn");
      exporter("__extends", __extends);
      exporter("__assign", __assign);
      exporter("__rest", __rest);
      exporter("__decorate", __decorate);
      exporter("__param", __param);
      exporter("__metadata", __metadata);
      exporter("__awaiter", __awaiter);
      exporter("__generator", __generator);
      exporter("__exportStar", __exportStar);
      exporter("__createBinding", __createBinding);
      exporter("__values", __values);
      exporter("__read", __read);
      exporter("__spread", __spread);
      exporter("__spreadArrays", __spreadArrays);
      exporter("__spreadArray", __spreadArray);
      exporter("__await", __await);
      exporter("__asyncGenerator", __asyncGenerator);
      exporter("__asyncDelegator", __asyncDelegator);
      exporter("__asyncValues", __asyncValues);
      exporter("__makeTemplateObject", __makeTemplateObject);
      exporter("__importStar", __importStar);
      exporter("__importDefault", __importDefault);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet);
      exporter("__classPrivateFieldIn", __classPrivateFieldIn);
    });
  }
});

// ../../node_modules/react-remove-scroll-bar/dist/es5/constants.js
var require_constants = __commonJS({
  "../../node_modules/react-remove-scroll-bar/dist/es5/constants.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.removedBarSizeVariable = exports2.noScrollbarsClassName = exports2.fullWidthClassName = exports2.zeroRightClassName = void 0;
    exports2.zeroRightClassName = "right-scroll-bar-position";
    exports2.fullWidthClassName = "width-before-scroll-bar";
    exports2.noScrollbarsClassName = "with-scroll-bars-hidden";
    exports2.removedBarSizeVariable = "--removed-body-scroll-bar-size";
  }
});

// ../../node_modules/use-callback-ref/dist/es5/assignRef.js
var require_assignRef = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/assignRef.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.assignRef = void 0;
    function assignRef(ref, value) {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref) {
        ref.current = value;
      }
      return ref;
    }
    __name(assignRef, "assignRef");
    exports2.assignRef = assignRef;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/useRef.js
var require_useRef = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/useRef.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.useCallbackRef = void 0;
    var react_1 = require("react");
    function useCallbackRef(initialValue, callback) {
      var ref = (0, react_1.useState)(function() {
        return {
          value: initialValue,
          callback,
          facade: {
            get current() {
              return ref.value;
            },
            set current(value) {
              var last = ref.value;
              if (last !== value) {
                ref.value = value;
                ref.callback(value, last);
              }
            }
          }
        };
      })[0];
      ref.callback = callback;
      return ref.facade;
    }
    __name(useCallbackRef, "useCallbackRef");
    exports2.useCallbackRef = useCallbackRef;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/createRef.js
var require_createRef = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/createRef.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createCallbackRef = void 0;
    function createCallbackRef(callback) {
      var current = null;
      return {
        get current() {
          return current;
        },
        set current(value) {
          var last = current;
          if (last !== value) {
            current = value;
            callback(value, last);
          }
        }
      };
    }
    __name(createCallbackRef, "createCallbackRef");
    exports2.createCallbackRef = createCallbackRef;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/mergeRef.js
var require_mergeRef = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/mergeRef.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.mergeRefs = void 0;
    var assignRef_1 = require_assignRef();
    var createRef_1 = require_createRef();
    function mergeRefs(refs) {
      return (0, createRef_1.createCallbackRef)(function(newValue) {
        return refs.forEach(function(ref) {
          return (0, assignRef_1.assignRef)(ref, newValue);
        });
      });
    }
    __name(mergeRefs, "mergeRefs");
    exports2.mergeRefs = mergeRefs;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/useMergeRef.js
var require_useMergeRef = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/useMergeRef.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.useMergeRefs = void 0;
    var assignRef_1 = require_assignRef();
    var useRef_1 = require_useRef();
    function useMergeRefs(refs, defaultValue) {
      return (0, useRef_1.useCallbackRef)(defaultValue || null, function(newValue) {
        return refs.forEach(function(ref) {
          return (0, assignRef_1.assignRef)(ref, newValue);
        });
      });
    }
    __name(useMergeRefs, "useMergeRefs");
    exports2.useMergeRefs = useMergeRefs;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/useTransformRef.js
var require_useTransformRef = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/useTransformRef.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.useTransformRef = void 0;
    var assignRef_1 = require_assignRef();
    var useRef_1 = require_useRef();
    function useTransformRef(ref, transformer) {
      return (0, useRef_1.useCallbackRef)(null, function(value) {
        return (0, assignRef_1.assignRef)(ref, transformer(value));
      });
    }
    __name(useTransformRef, "useTransformRef");
    exports2.useTransformRef = useTransformRef;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/transformRef.js
var require_transformRef = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/transformRef.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformRef = void 0;
    var assignRef_1 = require_assignRef();
    var createRef_1 = require_createRef();
    function transformRef(ref, transformer) {
      return (0, createRef_1.createCallbackRef)(function(value) {
        return (0, assignRef_1.assignRef)(ref, transformer(value));
      });
    }
    __name(transformRef, "transformRef");
    exports2.transformRef = transformRef;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/refToCallback.js
var require_refToCallback = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/refToCallback.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.useRefToCallback = exports2.refToCallback = void 0;
    function refToCallback(ref) {
      return function(newValue) {
        if (typeof ref === "function") {
          ref(newValue);
        } else if (ref) {
          ref.current = newValue;
        }
      };
    }
    __name(refToCallback, "refToCallback");
    exports2.refToCallback = refToCallback;
    var nullCallback = /* @__PURE__ */ __name(function() {
      return null;
    }, "nullCallback");
    var weakMem = /* @__PURE__ */ new WeakMap();
    var weakMemoize = /* @__PURE__ */ __name(function(ref) {
      var usedRef = ref || nullCallback;
      var storedRef = weakMem.get(usedRef);
      if (storedRef) {
        return storedRef;
      }
      var cb = refToCallback(usedRef);
      weakMem.set(usedRef, cb);
      return cb;
    }, "weakMemoize");
    function useRefToCallback(ref) {
      return weakMemoize(ref);
    }
    __name(useRefToCallback, "useRefToCallback");
    exports2.useRefToCallback = useRefToCallback;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/index.js
var require_es52 = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.useRefToCallback = exports2.refToCallback = exports2.transformRef = exports2.useTransformRef = exports2.useMergeRefs = exports2.mergeRefs = exports2.createCallbackRef = exports2.useCallbackRef = exports2.assignRef = void 0;
    var assignRef_1 = require_assignRef();
    Object.defineProperty(exports2, "assignRef", { enumerable: true, get: function() {
      return assignRef_1.assignRef;
    } });
    var useRef_1 = require_useRef();
    Object.defineProperty(exports2, "useCallbackRef", { enumerable: true, get: function() {
      return useRef_1.useCallbackRef;
    } });
    var createRef_1 = require_createRef();
    Object.defineProperty(exports2, "createCallbackRef", { enumerable: true, get: function() {
      return createRef_1.createCallbackRef;
    } });
    var mergeRef_1 = require_mergeRef();
    Object.defineProperty(exports2, "mergeRefs", { enumerable: true, get: function() {
      return mergeRef_1.mergeRefs;
    } });
    var useMergeRef_1 = require_useMergeRef();
    Object.defineProperty(exports2, "useMergeRefs", { enumerable: true, get: function() {
      return useMergeRef_1.useMergeRefs;
    } });
    var useTransformRef_1 = require_useTransformRef();
    Object.defineProperty(exports2, "useTransformRef", { enumerable: true, get: function() {
      return useTransformRef_1.useTransformRef;
    } });
    var transformRef_1 = require_transformRef();
    Object.defineProperty(exports2, "transformRef", { enumerable: true, get: function() {
      return transformRef_1.transformRef;
    } });
    var refToCallback_1 = require_refToCallback();
    Object.defineProperty(exports2, "refToCallback", { enumerable: true, get: function() {
      return refToCallback_1.refToCallback;
    } });
    Object.defineProperty(exports2, "useRefToCallback", { enumerable: true, get: function() {
      return refToCallback_1.useRefToCallback;
    } });
  }
});

// ../../node_modules/detect-node-es/es5/node.js
var require_node = __commonJS({
  "../../node_modules/detect-node-es/es5/node.js"(exports2, module2) {
    module2.exports.isNode = Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
  }
});

// ../../node_modules/use-sidecar/dist/es5/env.js
var require_env = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/env.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.env = void 0;
    var detect_node_es_1 = require_node();
    exports2.env = {
      isNode: detect_node_es_1.isNode,
      forceCache: false
    };
  }
});

// ../../node_modules/use-sidecar/dist/es5/hook.js
var require_hook = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/hook.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.useSidecar = void 0;
    var react_1 = require("react");
    var env_1 = require_env();
    var cache = /* @__PURE__ */ new WeakMap();
    var NO_OPTIONS = {};
    function useSidecar(importer, effect) {
      var options = effect && effect.options || NO_OPTIONS;
      if (env_1.env.isNode && !options.ssr) {
        return [null, null];
      }
      return useRealSidecar(importer, effect);
    }
    __name(useSidecar, "useSidecar");
    exports2.useSidecar = useSidecar;
    function useRealSidecar(importer, effect) {
      var options = effect && effect.options || NO_OPTIONS;
      var couldUseCache = env_1.env.forceCache || env_1.env.isNode && !!options.ssr || !options.async;
      var _a = (0, react_1.useState)(couldUseCache ? function() {
        return cache.get(importer);
      } : void 0), Car = _a[0], setCar = _a[1];
      var _b = (0, react_1.useState)(null), error = _b[0], setError = _b[1];
      (0, react_1.useEffect)(function() {
        if (!Car) {
          importer().then(function(car) {
            var resolved = effect ? effect.read() : car.default || car;
            if (!resolved) {
              console.error("Sidecar error: with importer", importer);
              var error_1;
              if (effect) {
                console.error("Sidecar error: with medium", effect);
                error_1 = new Error("Sidecar medium was not found");
              } else {
                error_1 = new Error("Sidecar was not found in exports");
              }
              setError(function() {
                return error_1;
              });
              throw error_1;
            }
            cache.set(importer, resolved);
            setCar(function() {
              return resolved;
            });
          }, function(e) {
            return setError(function() {
              return e;
            });
          });
        }
      }, []);
      return [Car, error];
    }
    __name(useRealSidecar, "useRealSidecar");
  }
});

// ../../node_modules/use-sidecar/dist/es5/hoc.js
var require_hoc = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/hoc.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.sidecar = void 0;
    var tslib_1 = require_tslib();
    var React3 = tslib_1.__importStar(require("react"));
    var hook_1 = require_hook();
    function sidecar(importer, errorComponent) {
      var ErrorCase = /* @__PURE__ */ __name(function() {
        return errorComponent;
      }, "ErrorCase");
      return /* @__PURE__ */ __name(function Sidecar(props) {
        var _a = (0, hook_1.useSidecar)(importer, props.sideCar), Car = _a[0], error = _a[1];
        if (error && errorComponent) {
          return ErrorCase;
        }
        return Car ? React3.createElement(Car, tslib_1.__assign({}, props)) : null;
      }, "Sidecar");
    }
    __name(sidecar, "sidecar");
    exports2.sidecar = sidecar;
  }
});

// ../../node_modules/use-sidecar/dist/es5/config.js
var require_config = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/config.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.setConfig = exports2.config = void 0;
    exports2.config = {
      onError: function(e) {
        return console.error(e);
      }
    };
    var setConfig = /* @__PURE__ */ __name(function(conf) {
      Object.assign(exports2.config, conf);
    }, "setConfig");
    exports2.setConfig = setConfig;
  }
});

// ../../node_modules/use-sidecar/dist/es5/medium.js
var require_medium = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/medium.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createSidecarMedium = exports2.createMedium = void 0;
    var tslib_1 = require_tslib();
    function ItoI(a) {
      return a;
    }
    __name(ItoI, "ItoI");
    function innerCreateMedium(defaults, middleware) {
      if (middleware === void 0) {
        middleware = ItoI;
      }
      var buffer = [];
      var assigned = false;
      var medium = {
        read: function() {
          if (assigned) {
            throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
          }
          if (buffer.length) {
            return buffer[buffer.length - 1];
          }
          return defaults;
        },
        useMedium: function(data) {
          var item = middleware(data, assigned);
          buffer.push(item);
          return function() {
            buffer = buffer.filter(function(x) {
              return x !== item;
            });
          };
        },
        assignSyncMedium: function(cb) {
          assigned = true;
          while (buffer.length) {
            var cbs = buffer;
            buffer = [];
            cbs.forEach(cb);
          }
          buffer = {
            push: function(x) {
              return cb(x);
            },
            filter: function() {
              return buffer;
            }
          };
        },
        assignMedium: function(cb) {
          assigned = true;
          var pendingQueue = [];
          if (buffer.length) {
            var cbs = buffer;
            buffer = [];
            cbs.forEach(cb);
            pendingQueue = buffer;
          }
          var executeQueue = /* @__PURE__ */ __name(function() {
            var cbs2 = pendingQueue;
            pendingQueue = [];
            cbs2.forEach(cb);
          }, "executeQueue");
          var cycle = /* @__PURE__ */ __name(function() {
            return Promise.resolve().then(executeQueue);
          }, "cycle");
          cycle();
          buffer = {
            push: function(x) {
              pendingQueue.push(x);
              cycle();
            },
            filter: function(filter) {
              pendingQueue = pendingQueue.filter(filter);
              return buffer;
            }
          };
        }
      };
      return medium;
    }
    __name(innerCreateMedium, "innerCreateMedium");
    function createMedium(defaults, middleware) {
      if (middleware === void 0) {
        middleware = ItoI;
      }
      return innerCreateMedium(defaults, middleware);
    }
    __name(createMedium, "createMedium");
    exports2.createMedium = createMedium;
    function createSidecarMedium(options) {
      if (options === void 0) {
        options = {};
      }
      var medium = innerCreateMedium(null);
      medium.options = tslib_1.__assign({ async: true, ssr: false }, options);
      return medium;
    }
    __name(createSidecarMedium, "createSidecarMedium");
    exports2.createSidecarMedium = createSidecarMedium;
  }
});

// ../../node_modules/use-sidecar/dist/es5/renderProp.js
var require_renderProp = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/renderProp.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.renderCar = void 0;
    var tslib_1 = require_tslib();
    var React3 = tslib_1.__importStar(require("react"));
    var react_1 = require("react");
    function renderCar(WrappedComponent, defaults) {
      function State(_a) {
        var stateRef = _a.stateRef, props = _a.props;
        var renderTarget = (0, react_1.useCallback)(/* @__PURE__ */ __name(function SideTarget() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          (0, react_1.useLayoutEffect)(function() {
            stateRef.current(args);
          });
          return null;
        }, "SideTarget"), []);
        return React3.createElement(WrappedComponent, tslib_1.__assign({}, props, { children: renderTarget }));
      }
      __name(State, "State");
      var Children = React3.memo(function(_a) {
        var stateRef = _a.stateRef, defaultState = _a.defaultState, children = _a.children;
        var _b = (0, react_1.useState)(defaultState.current), state = _b[0], setState = _b[1];
        (0, react_1.useEffect)(function() {
          stateRef.current = setState;
        }, []);
        return children.apply(void 0, state);
      }, function() {
        return true;
      });
      return /* @__PURE__ */ __name(function Combiner(props) {
        var defaultState = React3.useRef(defaults(props));
        var ref = React3.useRef(function(state) {
          return defaultState.current = state;
        });
        return React3.createElement(
          React3.Fragment,
          null,
          React3.createElement(State, { stateRef: ref, props }),
          React3.createElement(Children, { stateRef: ref, defaultState, children: props.children })
        );
      }, "Combiner");
    }
    __name(renderCar, "renderCar");
    exports2.renderCar = renderCar;
  }
});

// ../../node_modules/use-sidecar/dist/es5/exports.js
var require_exports = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/exports.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.exportSidecar = void 0;
    var tslib_1 = require_tslib();
    var React3 = tslib_1.__importStar(require("react"));
    var SideCar = /* @__PURE__ */ __name(function(_a) {
      var sideCar = _a.sideCar, rest = tslib_1.__rest(_a, ["sideCar"]);
      if (!sideCar) {
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
      }
      var Target = sideCar.read();
      if (!Target) {
        throw new Error("Sidecar medium not found");
      }
      return React3.createElement(Target, tslib_1.__assign({}, rest));
    }, "SideCar");
    SideCar.isSideCarExport = true;
    function exportSidecar(medium, exported) {
      medium.useMedium(exported);
      return SideCar;
    }
    __name(exportSidecar, "exportSidecar");
    exports2.exportSidecar = exportSidecar;
  }
});

// ../../node_modules/use-sidecar/dist/es5/index.js
var require_es53 = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.exportSidecar = exports2.renderCar = exports2.createSidecarMedium = exports2.createMedium = exports2.setConfig = exports2.useSidecar = exports2.sidecar = void 0;
    var hoc_1 = require_hoc();
    Object.defineProperty(exports2, "sidecar", { enumerable: true, get: function() {
      return hoc_1.sidecar;
    } });
    var hook_1 = require_hook();
    Object.defineProperty(exports2, "useSidecar", { enumerable: true, get: function() {
      return hook_1.useSidecar;
    } });
    var config_1 = require_config();
    Object.defineProperty(exports2, "setConfig", { enumerable: true, get: function() {
      return config_1.setConfig;
    } });
    var medium_1 = require_medium();
    Object.defineProperty(exports2, "createMedium", { enumerable: true, get: function() {
      return medium_1.createMedium;
    } });
    Object.defineProperty(exports2, "createSidecarMedium", { enumerable: true, get: function() {
      return medium_1.createSidecarMedium;
    } });
    var renderProp_1 = require_renderProp();
    Object.defineProperty(exports2, "renderCar", { enumerable: true, get: function() {
      return renderProp_1.renderCar;
    } });
    var exports_1 = require_exports();
    Object.defineProperty(exports2, "exportSidecar", { enumerable: true, get: function() {
      return exports_1.exportSidecar;
    } });
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/medium.js
var require_medium2 = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/medium.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.effectCar = void 0;
    var use_sidecar_1 = require_es53();
    exports2.effectCar = (0, use_sidecar_1.createSidecarMedium)();
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/UI.js
var require_UI = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/UI.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RemoveScroll = void 0;
    var tslib_1 = require_tslib();
    var React3 = tslib_1.__importStar(require("react"));
    var constants_1 = require_constants();
    var use_callback_ref_1 = require_es52();
    var medium_1 = require_medium2();
    var nothing = /* @__PURE__ */ __name(function() {
      return;
    }, "nothing");
    var RemoveScroll = React3.forwardRef(function(props, parentRef) {
      var ref = React3.useRef(null);
      var _a = React3.useState({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing
      }), callbacks = _a[0], setCallbacks = _a[1];
      var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, rest = tslib_1.__rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
      var SideCar = sideCar;
      var containerRef = (0, use_callback_ref_1.useMergeRefs)([ref, parentRef]);
      var containerProps = tslib_1.__assign(tslib_1.__assign({}, rest), callbacks);
      return React3.createElement(
        React3.Fragment,
        null,
        enabled && React3.createElement(SideCar, { sideCar: medium_1.effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref }),
        forwardProps ? React3.cloneElement(React3.Children.only(children), tslib_1.__assign(tslib_1.__assign({}, containerProps), { ref: containerRef })) : React3.createElement(Container, tslib_1.__assign({}, containerProps, { className, ref: containerRef }), children)
      );
    });
    exports2.RemoveScroll = RemoveScroll;
    RemoveScroll.defaultProps = {
      enabled: true,
      removeScrollBar: true,
      inert: false
    };
    RemoveScroll.classNames = {
      fullWidth: constants_1.fullWidthClassName,
      zeroRight: constants_1.zeroRightClassName
    };
  }
});

// ../../node_modules/get-nonce/dist/es5/index.js
var require_es54 = __commonJS({
  "../../node_modules/get-nonce/dist/es5/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var currentNonce;
    exports2.setNonce = function(nonce) {
      currentNonce = nonce;
    };
    exports2.getNonce = function() {
      if (currentNonce) {
        return currentNonce;
      }
      if (typeof __webpack_nonce__ !== "undefined") {
        return __webpack_nonce__;
      }
      return void 0;
    };
  }
});

// ../../node_modules/react-style-singleton/dist/es5/singleton.js
var require_singleton = __commonJS({
  "../../node_modules/react-style-singleton/dist/es5/singleton.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.stylesheetSingleton = void 0;
    var get_nonce_1 = require_es54();
    function makeStyleTag() {
      if (!document)
        return null;
      var tag = document.createElement("style");
      tag.type = "text/css";
      var nonce = (0, get_nonce_1.getNonce)();
      if (nonce) {
        tag.setAttribute("nonce", nonce);
      }
      return tag;
    }
    __name(makeStyleTag, "makeStyleTag");
    function injectStyles(tag, css) {
      if (tag.styleSheet) {
        tag.styleSheet.cssText = css;
      } else {
        tag.appendChild(document.createTextNode(css));
      }
    }
    __name(injectStyles, "injectStyles");
    function insertStyleTag(tag) {
      var head = document.head || document.getElementsByTagName("head")[0];
      head.appendChild(tag);
    }
    __name(insertStyleTag, "insertStyleTag");
    var stylesheetSingleton = /* @__PURE__ */ __name(function() {
      var counter = 0;
      var stylesheet = null;
      return {
        add: function(style) {
          if (counter == 0) {
            if (stylesheet = makeStyleTag()) {
              injectStyles(stylesheet, style);
              insertStyleTag(stylesheet);
            }
          }
          counter++;
        },
        remove: function() {
          counter--;
          if (!counter && stylesheet) {
            stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
            stylesheet = null;
          }
        }
      };
    }, "stylesheetSingleton");
    exports2.stylesheetSingleton = stylesheetSingleton;
  }
});

// ../../node_modules/react-style-singleton/dist/es5/hook.js
var require_hook2 = __commonJS({
  "../../node_modules/react-style-singleton/dist/es5/hook.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.styleHookSingleton = void 0;
    var tslib_1 = require_tslib();
    var React3 = tslib_1.__importStar(require("react"));
    var singleton_1 = require_singleton();
    var styleHookSingleton = /* @__PURE__ */ __name(function() {
      var sheet = (0, singleton_1.stylesheetSingleton)();
      return function(styles, isDynamic) {
        React3.useEffect(function() {
          sheet.add(styles);
          return function() {
            sheet.remove();
          };
        }, [styles && isDynamic]);
      };
    }, "styleHookSingleton");
    exports2.styleHookSingleton = styleHookSingleton;
  }
});

// ../../node_modules/react-style-singleton/dist/es5/component.js
var require_component = __commonJS({
  "../../node_modules/react-style-singleton/dist/es5/component.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.styleSingleton = void 0;
    var hook_1 = require_hook2();
    var styleSingleton = /* @__PURE__ */ __name(function() {
      var useStyle = (0, hook_1.styleHookSingleton)();
      var Sheet = /* @__PURE__ */ __name(function(_a) {
        var styles = _a.styles, dynamic = _a.dynamic;
        useStyle(styles, dynamic);
        return null;
      }, "Sheet");
      return Sheet;
    }, "styleSingleton");
    exports2.styleSingleton = styleSingleton;
  }
});

// ../../node_modules/react-style-singleton/dist/es5/index.js
var require_es55 = __commonJS({
  "../../node_modules/react-style-singleton/dist/es5/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.styleHookSingleton = exports2.stylesheetSingleton = exports2.styleSingleton = void 0;
    var component_1 = require_component();
    Object.defineProperty(exports2, "styleSingleton", { enumerable: true, get: function() {
      return component_1.styleSingleton;
    } });
    var singleton_1 = require_singleton();
    Object.defineProperty(exports2, "stylesheetSingleton", { enumerable: true, get: function() {
      return singleton_1.stylesheetSingleton;
    } });
    var hook_1 = require_hook2();
    Object.defineProperty(exports2, "styleHookSingleton", { enumerable: true, get: function() {
      return hook_1.styleHookSingleton;
    } });
  }
});

// ../../node_modules/react-remove-scroll-bar/dist/es5/utils.js
var require_utils = __commonJS({
  "../../node_modules/react-remove-scroll-bar/dist/es5/utils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getGapWidth = exports2.zeroGap = void 0;
    exports2.zeroGap = {
      left: 0,
      top: 0,
      right: 0,
      gap: 0
    };
    var parse = /* @__PURE__ */ __name(function(x) {
      return parseInt(x || "", 10) || 0;
    }, "parse");
    var getOffset = /* @__PURE__ */ __name(function(gapMode) {
      var cs = window.getComputedStyle(document.body);
      if (process.env.NODE_ENV !== "production") {
        if (cs.overflowY === "hidden") {
          console.error("react-remove-scroll-bar: cannot calculate scrollbar size because it is removed (overflow:hidden on body");
        }
      }
      var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
      var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
      var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
      return [parse(left), parse(top), parse(right)];
    }, "getOffset");
    var getGapWidth = /* @__PURE__ */ __name(function(gapMode) {
      if (gapMode === void 0) {
        gapMode = "margin";
      }
      if (typeof window === "undefined") {
        return exports2.zeroGap;
      }
      var offsets = getOffset(gapMode);
      var documentWidth = document.documentElement.clientWidth;
      var windowWidth = window.innerWidth;
      return {
        left: offsets[0],
        top: offsets[1],
        right: offsets[2],
        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
      };
    }, "getGapWidth");
    exports2.getGapWidth = getGapWidth;
  }
});

// ../../node_modules/react-remove-scroll-bar/dist/es5/component.js
var require_component2 = __commonJS({
  "../../node_modules/react-remove-scroll-bar/dist/es5/component.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RemoveScrollBar = void 0;
    var tslib_1 = require_tslib();
    var React3 = tslib_1.__importStar(require("react"));
    var react_style_singleton_1 = require_es55();
    var constants_1 = require_constants();
    var utils_1 = require_utils();
    var Style = (0, react_style_singleton_1.styleSingleton)();
    var getStyles = /* @__PURE__ */ __name(function(_a, allowRelative, gapMode, important) {
      var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
      if (gapMode === void 0) {
        gapMode = "margin";
      }
      return "\n  .".concat(constants_1.noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
        allowRelative && "position: relative ".concat(important, ";"),
        gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
        gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
      ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(constants_1.zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(constants_1.fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(constants_1.zeroRightClassName, " .").concat(constants_1.zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(constants_1.fullWidthClassName, " .").concat(constants_1.fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body {\n    ").concat(constants_1.removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
    }, "getStyles");
    var RemoveScrollBar = /* @__PURE__ */ __name(function(props) {
      var noRelative = props.noRelative, noImportant = props.noImportant, _a = props.gapMode, gapMode = _a === void 0 ? "margin" : _a;
      var gap = React3.useMemo(function() {
        return (0, utils_1.getGapWidth)(gapMode);
      }, [gapMode]);
      return React3.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
    }, "RemoveScrollBar");
    exports2.RemoveScrollBar = RemoveScrollBar;
  }
});

// ../../node_modules/react-remove-scroll-bar/dist/es5/index.js
var require_es56 = __commonJS({
  "../../node_modules/react-remove-scroll-bar/dist/es5/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getGapWidth = exports2.removedBarSizeVariable = exports2.noScrollbarsClassName = exports2.fullWidthClassName = exports2.zeroRightClassName = exports2.RemoveScrollBar = void 0;
    var component_1 = require_component2();
    Object.defineProperty(exports2, "RemoveScrollBar", { enumerable: true, get: function() {
      return component_1.RemoveScrollBar;
    } });
    var constants_1 = require_constants();
    Object.defineProperty(exports2, "zeroRightClassName", { enumerable: true, get: function() {
      return constants_1.zeroRightClassName;
    } });
    Object.defineProperty(exports2, "fullWidthClassName", { enumerable: true, get: function() {
      return constants_1.fullWidthClassName;
    } });
    Object.defineProperty(exports2, "noScrollbarsClassName", { enumerable: true, get: function() {
      return constants_1.noScrollbarsClassName;
    } });
    Object.defineProperty(exports2, "removedBarSizeVariable", { enumerable: true, get: function() {
      return constants_1.removedBarSizeVariable;
    } });
    var utils_1 = require_utils();
    Object.defineProperty(exports2, "getGapWidth", { enumerable: true, get: function() {
      return utils_1.getGapWidth;
    } });
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/aggresiveCapture.js
var require_aggresiveCapture = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/aggresiveCapture.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.nonPassive = void 0;
    var passiveSupported = false;
    if (typeof window !== "undefined") {
      try {
        options = Object.defineProperty({}, "passive", {
          get: function() {
            passiveSupported = true;
            return true;
          }
        });
        window.addEventListener("test", options, options);
        window.removeEventListener("test", options, options);
      } catch (err) {
        passiveSupported = false;
      }
    }
    var options;
    exports2.nonPassive = passiveSupported ? { passive: false } : false;
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/handleScroll.js
var require_handleScroll = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/handleScroll.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.handleScroll = exports2.locationCouldBeScrolled = void 0;
    var alwaysContainsScroll = /* @__PURE__ */ __name(function(node) {
      return node.tagName === "TEXTAREA";
    }, "alwaysContainsScroll");
    var elementCanBeScrolled = /* @__PURE__ */ __name(function(node, overflow) {
      var styles = window.getComputedStyle(node);
      return styles[overflow] !== "hidden" && !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible");
    }, "elementCanBeScrolled");
    var elementCouldBeVScrolled = /* @__PURE__ */ __name(function(node) {
      return elementCanBeScrolled(node, "overflowY");
    }, "elementCouldBeVScrolled");
    var elementCouldBeHScrolled = /* @__PURE__ */ __name(function(node) {
      return elementCanBeScrolled(node, "overflowX");
    }, "elementCouldBeHScrolled");
    var locationCouldBeScrolled = /* @__PURE__ */ __name(function(axis, node) {
      var current = node;
      do {
        if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
          current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
          var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
          if (s > d) {
            return true;
          }
        }
        current = current.parentNode;
      } while (current && current !== document.body);
      return false;
    }, "locationCouldBeScrolled");
    exports2.locationCouldBeScrolled = locationCouldBeScrolled;
    var getVScrollVariables = /* @__PURE__ */ __name(function(_a) {
      var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
      return [
        scrollTop,
        scrollHeight,
        clientHeight
      ];
    }, "getVScrollVariables");
    var getHScrollVariables = /* @__PURE__ */ __name(function(_a) {
      var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
      return [
        scrollLeft,
        scrollWidth,
        clientWidth
      ];
    }, "getHScrollVariables");
    var elementCouldBeScrolled = /* @__PURE__ */ __name(function(axis, node) {
      return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
    }, "elementCouldBeScrolled");
    var getScrollVariables = /* @__PURE__ */ __name(function(axis, node) {
      return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
    }, "getScrollVariables");
    var getDirectionFactor = /* @__PURE__ */ __name(function(axis, direction) {
      return axis === "h" && direction === "rtl" ? -1 : 1;
    }, "getDirectionFactor");
    var handleScroll = /* @__PURE__ */ __name(function(axis, endTarget, event, sourceDelta, noOverscroll) {
      var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
      var delta = directionFactor * sourceDelta;
      var target = event.target;
      var targetInLock = endTarget.contains(target);
      var shouldCancelScroll = false;
      var isDeltaPositive = delta > 0;
      var availableScroll = 0;
      var availableScrollTop = 0;
      do {
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - directionFactor * position;
        if (position || elementScroll) {
          if (elementCouldBeScrolled(axis, target)) {
            availableScroll += elementScroll;
            availableScrollTop += position;
          }
        }
        target = target.parentNode;
      } while (!targetInLock && target !== document.body || targetInLock && (endTarget.contains(target) || endTarget === target));
      if (isDeltaPositive && (noOverscroll && availableScroll === 0 || !noOverscroll && delta > availableScroll)) {
        shouldCancelScroll = true;
      } else if (!isDeltaPositive && (noOverscroll && availableScrollTop === 0 || !noOverscroll && -delta > availableScrollTop)) {
        shouldCancelScroll = true;
      }
      return shouldCancelScroll;
    }, "handleScroll");
    exports2.handleScroll = handleScroll;
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/SideEffect.js
var require_SideEffect = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/SideEffect.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RemoveScrollSideCar = exports2.getDeltaXY = exports2.getTouchXY = void 0;
    var tslib_1 = require_tslib();
    var React3 = tslib_1.__importStar(require("react"));
    var react_remove_scroll_bar_1 = require_es56();
    var react_style_singleton_1 = require_es55();
    var aggresiveCapture_1 = require_aggresiveCapture();
    var handleScroll_1 = require_handleScroll();
    var getTouchXY = /* @__PURE__ */ __name(function(event) {
      return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
    }, "getTouchXY");
    exports2.getTouchXY = getTouchXY;
    var getDeltaXY = /* @__PURE__ */ __name(function(event) {
      return [event.deltaX, event.deltaY];
    }, "getDeltaXY");
    exports2.getDeltaXY = getDeltaXY;
    var extractRef = /* @__PURE__ */ __name(function(ref) {
      return ref && "current" in ref ? ref.current : ref;
    }, "extractRef");
    var deltaCompare = /* @__PURE__ */ __name(function(x, y) {
      return x[0] === y[0] && x[1] === y[1];
    }, "deltaCompare");
    var generateStyle = /* @__PURE__ */ __name(function(id) {
      return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
    }, "generateStyle");
    var idCounter = 0;
    var lockStack = [];
    function RemoveScrollSideCar(props) {
      var shouldPreventQueue = React3.useRef([]);
      var touchStartRef = React3.useRef([0, 0]);
      var activeAxis = React3.useRef();
      var id = React3.useState(idCounter++)[0];
      var Style = React3.useState(function() {
        return (0, react_style_singleton_1.styleSingleton)();
      })[0];
      var lastProps = React3.useRef(props);
      React3.useEffect(function() {
        lastProps.current = props;
      }, [props]);
      React3.useEffect(function() {
        if (props.inert) {
          document.body.classList.add("block-interactivity-".concat(id));
          var allow_1 = tslib_1.__spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
          allow_1.forEach(function(el) {
            return el.classList.add("allow-interactivity-".concat(id));
          });
          return function() {
            document.body.classList.remove("block-interactivity-".concat(id));
            allow_1.forEach(function(el) {
              return el.classList.remove("allow-interactivity-".concat(id));
            });
          };
        }
        return;
      }, [props.inert, props.lockRef.current, props.shards]);
      var shouldCancelEvent = React3.useCallback(function(event, parent) {
        if ("touches" in event && event.touches.length === 2) {
          return !lastProps.current.allowPinchZoom;
        }
        var touch = (0, exports2.getTouchXY)(event);
        var touchStart = touchStartRef.current;
        var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
        var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
        var currentAxis;
        var target = event.target;
        var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
        if ("touches" in event && moveDirection === "h" && target.type === "range") {
          return false;
        }
        var canBeScrolledInMainDirection = (0, handleScroll_1.locationCouldBeScrolled)(moveDirection, target);
        if (!canBeScrolledInMainDirection) {
          return true;
        }
        if (canBeScrolledInMainDirection) {
          currentAxis = moveDirection;
        } else {
          currentAxis = moveDirection === "v" ? "h" : "v";
          canBeScrolledInMainDirection = (0, handleScroll_1.locationCouldBeScrolled)(moveDirection, target);
        }
        if (!canBeScrolledInMainDirection) {
          return false;
        }
        if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
          activeAxis.current = currentAxis;
        }
        if (!currentAxis) {
          return true;
        }
        var cancelingAxis = activeAxis.current || currentAxis;
        return (0, handleScroll_1.handleScroll)(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
      }, []);
      var shouldPrevent = React3.useCallback(function(_event) {
        var event = _event;
        if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
          return;
        }
        var delta = "deltaY" in event ? (0, exports2.getDeltaXY)(event) : (0, exports2.getTouchXY)(event);
        var sourceEvent = shouldPreventQueue.current.filter(function(e) {
          return e.name === event.type && e.target === event.target && deltaCompare(e.delta, delta);
        })[0];
        if (sourceEvent && sourceEvent.should) {
          if (event.cancelable) {
            event.preventDefault();
          }
          return;
        }
        if (!sourceEvent) {
          var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
            return node.contains(event.target);
          });
          var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
          if (shouldStop) {
            if (event.cancelable) {
              event.preventDefault();
            }
          }
        }
      }, []);
      var shouldCancel = React3.useCallback(function(name, delta, target, should) {
        var event = { name, delta, target, should };
        shouldPreventQueue.current.push(event);
        setTimeout(function() {
          shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
            return e !== event;
          });
        }, 1);
      }, []);
      var scrollTouchStart = React3.useCallback(function(event) {
        touchStartRef.current = (0, exports2.getTouchXY)(event);
        activeAxis.current = void 0;
      }, []);
      var scrollWheel = React3.useCallback(function(event) {
        shouldCancel(event.type, (0, exports2.getDeltaXY)(event), event.target, shouldCancelEvent(event, props.lockRef.current));
      }, []);
      var scrollTouchMove = React3.useCallback(function(event) {
        shouldCancel(event.type, (0, exports2.getTouchXY)(event), event.target, shouldCancelEvent(event, props.lockRef.current));
      }, []);
      React3.useEffect(function() {
        lockStack.push(Style);
        props.setCallbacks({
          onScrollCapture: scrollWheel,
          onWheelCapture: scrollWheel,
          onTouchMoveCapture: scrollTouchMove
        });
        document.addEventListener("wheel", shouldPrevent, aggresiveCapture_1.nonPassive);
        document.addEventListener("touchmove", shouldPrevent, aggresiveCapture_1.nonPassive);
        document.addEventListener("touchstart", scrollTouchStart, aggresiveCapture_1.nonPassive);
        return function() {
          lockStack = lockStack.filter(function(inst) {
            return inst !== Style;
          });
          document.removeEventListener("wheel", shouldPrevent, aggresiveCapture_1.nonPassive);
          document.removeEventListener("touchmove", shouldPrevent, aggresiveCapture_1.nonPassive);
          document.removeEventListener("touchstart", scrollTouchStart, aggresiveCapture_1.nonPassive);
        };
      }, []);
      var removeScrollBar = props.removeScrollBar, inert = props.inert;
      return React3.createElement(
        React3.Fragment,
        null,
        inert ? React3.createElement(Style, { styles: generateStyle(id) }) : null,
        removeScrollBar ? React3.createElement(react_remove_scroll_bar_1.RemoveScrollBar, { gapMode: "margin" }) : null
      );
    }
    __name(RemoveScrollSideCar, "RemoveScrollSideCar");
    exports2.RemoveScrollSideCar = RemoveScrollSideCar;
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/sidecar.js
var require_sidecar = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/sidecar.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var use_sidecar_1 = require_es53();
    var SideEffect_1 = require_SideEffect();
    var medium_1 = require_medium2();
    exports2.default = (0, use_sidecar_1.exportSidecar)(medium_1.effectCar, SideEffect_1.RemoveScrollSideCar);
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/Combination.js
var require_Combination = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/Combination.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = require_tslib();
    var React3 = tslib_1.__importStar(require("react"));
    var UI_1 = require_UI();
    var sidecar_1 = tslib_1.__importDefault(require_sidecar());
    var ReactRemoveScroll = React3.forwardRef(function(props, ref) {
      return React3.createElement(UI_1.RemoveScroll, tslib_1.__assign({}, props, { ref, sideCar: sidecar_1.default }));
    });
    ReactRemoveScroll.classNames = UI_1.RemoveScroll.classNames;
    exports2.default = ReactRemoveScroll;
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/index.js
var require_es57 = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RemoveScroll = void 0;
    var tslib_1 = require_tslib();
    var Combination_1 = tslib_1.__importDefault(require_Combination());
    exports2.RemoveScroll = Combination_1.default;
  }
});

// ../../node_modules/@tamagui/remove-scroll/dist/cjs/RemoveScroll.js
var require_RemoveScroll = __commonJS({
  "../../node_modules/@tamagui/remove-scroll/dist/cjs/RemoveScroll.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var RemoveScroll_exports = {};
    __export3(RemoveScroll_exports, {
      RemoveScroll: () => RemoveScroll
    });
    module2.exports = __toCommonJS3(RemoveScroll_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_react_remove_scroll = require_es57();
    var RemoveScroll = /* @__PURE__ */ __name((props) => {
      if (!props.children)
        return null;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_remove_scroll.RemoveScroll, {
        ...props
      });
    }, "RemoveScroll");
    RemoveScroll.classNames = import_react_remove_scroll.RemoveScroll.classNames;
  }
});

// ../../node_modules/@tamagui/remove-scroll/dist/cjs/index.js
var require_cjs12 = __commonJS({
  "../../node_modules/@tamagui/remove-scroll/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_RemoveScroll(), module2.exports);
  }
});

// ../../node_modules/@tamagui/use-constant/dist/cjs/index.js
var require_cjs13 = __commonJS({
  "../../node_modules/@tamagui/use-constant/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    __export3(src_exports2, {
      useConstant: () => useConstant
    });
    module2.exports = __toCommonJS3(src_exports2);
    var import_react = require("react");
    function useConstant(fn) {
      if (typeof document === "undefined") {
        return (0, import_react.useMemo)(() => fn(), []);
      }
      const ref = (0, import_react.useRef)();
      if (!ref.current) {
        ref.current = { v: fn() };
      }
      return ref.current.v;
    }
    __name(useConstant, "useConstant");
  }
});

// ../../node_modules/@tamagui/use-controllable-state/dist/cjs/useControllableState.js
var require_useControllableState = __commonJS({
  "../../node_modules/@tamagui/use-controllable-state/dist/cjs/useControllableState.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useControllableState_exports = {};
    __export3(useControllableState_exports, {
      useControllableState: () => useControllableState
    });
    module2.exports = __toCommonJS3(useControllableState_exports);
    var import_use_event = require_cjs6();
    var import_react = require("react");
    function useControllableState({
      prop,
      defaultProp,
      onChange,
      strategy = "prop-wins",
      preventUpdate
    }) {
      const [state, setState] = (0, import_react.useState)(prop ?? defaultProp);
      const previous = (0, import_react.useRef)(state);
      const propWins = strategy === "prop-wins" && prop !== void 0;
      const value = propWins ? prop : state;
      const onChangeCb = (0, import_use_event.useEvent)(onChange || idFn);
      (0, import_react.useEffect)(() => {
        if (prop === void 0)
          return;
        previous.current = prop;
        setState(prop);
      }, [prop]);
      (0, import_react.useEffect)(() => {
        if (propWins)
          return;
        if (state !== previous.current) {
          previous.current = state;
          onChangeCb(state);
        }
      }, [onChangeCb, state, propWins]);
      const setter = (0, import_use_event.useEvent)((next) => {
        if (preventUpdate)
          return;
        if (propWins) {
          const nextValue = typeof next === "function" ? next(previous.current) : next;
          onChangeCb(nextValue);
        } else {
          setState(next);
        }
      });
      return [value, setter];
    }
    __name(useControllableState, "useControllableState");
    var idFn = /* @__PURE__ */ __name(() => {
    }, "idFn");
  }
});

// ../../node_modules/@tamagui/use-controllable-state/dist/cjs/index.js
var require_cjs14 = __commonJS({
  "../../node_modules/@tamagui/use-controllable-state/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_useControllableState(), module2.exports);
  }
});

// ../../node_modules/@tamagui/sheet/dist/cjs/SHEET_HANDLE_NAME.js
var require_SHEET_HANDLE_NAME = __commonJS({
  "../../node_modules/@tamagui/sheet/dist/cjs/SHEET_HANDLE_NAME.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SHEET_HANDLE_NAME_exports = {};
    __export3(SHEET_HANDLE_NAME_exports, {
      SHEET_HANDLE_NAME: () => SHEET_HANDLE_NAME,
      SHEET_NAME: () => SHEET_NAME,
      constants: () => constants
    });
    module2.exports = __toCommonJS3(SHEET_HANDLE_NAME_exports);
    var constants = {};
    var SHEET_NAME = "Sheet";
    var SHEET_HANDLE_NAME = "SheetHandle";
  }
});

// ../../node_modules/@tamagui/sheet/dist/cjs/SheetContext.js
var require_SheetContext = __commonJS({
  "../../node_modules/@tamagui/sheet/dist/cjs/SheetContext.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SheetContext_exports = {};
    __export3(SheetContext_exports, {
      SheetProvider: () => SheetProvider,
      createSheetContext: () => createSheetContext,
      createSheetScope: () => createSheetScope2,
      useSheetContext: () => useSheetContext
    });
    module2.exports = __toCommonJS3(SheetContext_exports);
    var import_create_context = require_cjs4();
    var import_SHEET_HANDLE_NAME = require_SHEET_HANDLE_NAME();
    var [createSheetContext, createSheetScope2] = (0, import_create_context.createContextScope)(import_SHEET_HANDLE_NAME.SHEET_NAME);
    var [SheetProvider, useSheetContext] = createSheetContext(
      import_SHEET_HANDLE_NAME.SHEET_NAME,
      {}
    );
  }
});

// ../../node_modules/@tamagui/scroll-view/dist/cjs/ScrollView.js
var require_ScrollView = __commonJS({
  "../../node_modules/@tamagui/scroll-view/dist/cjs/ScrollView.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var ScrollView_exports = {};
    __export3(ScrollView_exports, {
      ScrollView: () => ScrollView
    });
    module2.exports = __toCommonJS3(ScrollView_exports);
    var import_core2 = require("@tamagui/core-node");
    var import_react_native3 = require("react-native-web-lite");
    var ScrollView = (0, import_core2.styled)(
      import_react_native3.ScrollView,
      {
        name: "ScrollView"
      },
      {
        isReactNative: true
      }
    );
  }
});

// ../../node_modules/@tamagui/scroll-view/dist/cjs/index.js
var require_cjs15 = __commonJS({
  "../../node_modules/@tamagui/scroll-view/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_ScrollView(), module2.exports);
  }
});

// ../../node_modules/@tamagui/sheet/dist/cjs/SheetScrollView.js
var require_SheetScrollView = __commonJS({
  "../../node_modules/@tamagui/sheet/dist/cjs/SheetScrollView.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SheetScrollView_exports = {};
    __export3(SheetScrollView_exports, {
      SheetScrollView: () => SheetScrollView
    });
    module2.exports = __toCommonJS3(SheetScrollView_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_scroll_view = require_cjs15();
    var import_react = require("react");
    var import_SheetContext = require_SheetContext();
    var SHEET_SCROLL_VIEW_NAME = "SheetScrollView";
    var SheetScrollView = (0, import_react.forwardRef)(
      ({ __scopeSheet, ...props }, ref) => {
        const { scrollBridge } = (0, import_SheetContext.useSheetContext)(SHEET_SCROLL_VIEW_NAME, __scopeSheet);
        const [scrollEnabled, setScrollEnabled] = (0, import_react.useState)(true);
        const state = (0, import_react.useRef)({
          lastPageY: 0,
          dragAt: 0,
          dys: [],
          isScrolling: false
        });
        const release = /* @__PURE__ */ __name(() => {
          scrollBridge.scrollStartY = -1;
          state.current.isScrolling = false;
          setScrollEnabled(true);
          let vy = 0;
          if (state.current.dys.length) {
            const recentDys = state.current.dys.slice(-10);
            const dist = recentDys.length ? recentDys.reduce((a, b) => a + b, 0) : 0;
            const avgDy = dist / recentDys.length;
            vy = avgDy * 0.04;
          }
          state.current.dys = [];
          scrollBridge.release({
            dragAt: state.current.dragAt,
            vy
          });
        }, "release");
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_scroll_view.ScrollView, {
          ref,
          flex: 1,
          scrollEventThrottle: 8,
          scrollEnabled,
          onScroll: (e) => {
            const { y } = e.nativeEvent.contentOffset;
            scrollBridge.y = y;
            if (y > 0) {
              scrollBridge.scrollStartY = -1;
            }
          },
          onStartShouldSetResponder: () => {
            scrollBridge.scrollStartY = -1;
            return true;
          },
          onMoveShouldSetResponder: () => true,
          onResponderMove: (e) => {
            const { pageY } = e.nativeEvent;
            if (state.current.isScrolling) {
              return;
            }
            if (scrollBridge.scrollStartY === -1) {
              scrollBridge.scrollStartY = pageY;
              state.current.lastPageY = pageY;
            }
            const dragAt = pageY - scrollBridge.scrollStartY;
            const dy = pageY - state.current.lastPageY;
            state.current.lastPageY = pageY;
            const isDraggingUp = dy < 0;
            const isPaneAtTop = scrollBridge.paneY <= scrollBridge.paneMinY;
            if ((dy === 0 || isDraggingUp) && isPaneAtTop) {
              state.current.isScrolling = true;
              setScrollEnabled(true);
              return;
            }
            setScrollEnabled(false);
            scrollBridge.drag(dragAt);
            state.current.dragAt = dragAt;
            state.current.dys.push(dy);
            if (state.current.dys.length > 100) {
              state.current.dys = state.current.dys.slice(-10);
            }
          },
          onResponderRelease: release,
          ...props
        });
      }
    );
  }
});

// ../../node_modules/@tamagui/sheet/dist/cjs/Sheet.js
var require_Sheet = __commonJS({
  "../../node_modules/@tamagui/sheet/dist/cjs/Sheet.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Sheet_exports = {};
    __export3(Sheet_exports, {
      ControlledSheet: () => ControlledSheet,
      Sheet: () => Sheet,
      SheetController: () => SheetController,
      SheetFrame: () => SheetFrame,
      SheetFrameFrame: () => SheetFrameFrame,
      SheetHandle: () => SheetHandle,
      SheetHandleFrame: () => SheetHandleFrame,
      SheetOverlay: () => SheetOverlay,
      SheetOverlayFrame: () => SheetOverlayFrame,
      createSheetScope: () => import_SheetContext2.createSheetScope
    });
    module2.exports = __toCommonJS3(Sheet_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_compose_refs = require_cjs3();
    var import_core2 = require("@tamagui/core-node");
    var import_portal = require_cjs11();
    var import_remove_scroll = require_cjs12();
    var import_stacks = require_cjs10();
    var import_use_constant = require_cjs13();
    var import_use_controllable_state = require_cjs14();
    var import_react = __toESM2(require("react"));
    var import_react_native3 = require("react-native-web-lite");
    var import_SHEET_HANDLE_NAME = require_SHEET_HANDLE_NAME();
    var import_SheetContext = require_SheetContext();
    var import_SheetScrollView = require_SheetScrollView();
    var import_SheetContext2 = require_SheetContext();
    var SheetHandleFrame = (0, import_core2.styled)(import_stacks.XStack, {
      name: import_SHEET_HANDLE_NAME.SHEET_HANDLE_NAME,
      height: 10,
      borderRadius: 100,
      backgroundColor: "$background",
      zIndex: 10,
      marginHorizontal: "35%",
      marginBottom: "$2",
      opacity: 0.5,
      hoverStyle: {
        opacity: 0.7
      },
      variants: {
        open: {
          true: {
            pointerEvents: "auto"
          },
          false: {
            opacity: 0,
            pointerEvents: "none"
          }
        }
      }
    });
    var SheetHandle = SheetHandleFrame.extractable(
      ({ __scopeSheet, ...props }) => {
        const context = (0, import_SheetContext.useSheetContext)(import_SHEET_HANDLE_NAME.SHEET_HANDLE_NAME, __scopeSheet);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHandleFrame, {
          onPress: () => {
            const max = context.snapPoints.length + (context.dismissOnSnapToBottom ? -1 : 0);
            const nextPos = (context.position + 1) % max;
            context.setPosition(nextPos);
          },
          open: context.open,
          ...props
        });
      }
    );
    var SHEET_OVERLAY_NAME = "SheetOverlay";
    var SheetOverlayFrame = (0, import_core2.styled)(import_stacks.YStack, {
      name: SHEET_OVERLAY_NAME,
      backgroundColor: "$color",
      fullscreen: true,
      opacity: 0.2,
      zIndex: 0,
      variants: {
        closed: {
          true: {
            opacity: 0,
            pointerEvents: "none"
          },
          false: {
            pointerEvents: "auto"
          }
        }
      }
    });
    var SheetOverlay = SheetOverlayFrame.extractable(
      ({ __scopeSheet, ...props }) => {
        const context = (0, import_SheetContext.useSheetContext)(SHEET_OVERLAY_NAME, __scopeSheet);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlayFrame, {
          closed: !context.open || context.hidden,
          ...props,
          onPress: (0, import_core2.mergeEvent)(
            props.onPress,
            context.dismissOnOverlayPress ? () => {
              context.setOpen(false);
            } : void 0
          )
        });
      }
    );
    var selectionStyleSheet = import_core2.isClient ? document.createElement("style") : null;
    if (selectionStyleSheet) {
      document.head.appendChild(selectionStyleSheet);
    }
    var SheetFrameFrame = (0, import_core2.styled)(import_stacks.YStack, {
      name: import_SHEET_HANDLE_NAME.SHEET_NAME,
      flex: 1,
      backgroundColor: "$background",
      borderTopLeftRadius: "$4",
      borderTopRightRadius: "$4",
      width: "100%",
      maxHeight: "100%",
      overflow: "hidden",
      pointerEvents: "auto"
    });
    var SheetFrame = SheetFrameFrame.extractable(
      (0, import_react.forwardRef)(({ __scopeSheet, ...props }, forwardedRef) => {
        const context = (0, import_SheetContext.useSheetContext)(import_SHEET_HANDLE_NAME.SHEET_NAME, __scopeSheet);
        const composedContentRef = (0, import_compose_refs.useComposedRefs)(forwardedRef, context.contentRef);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetFrameFrame, {
          ref: composedContentRef,
          ...props
        });
      })
    );
    var HIDDEN_SIZE = 1e4;
    var sheetComponents = {
      Handle: SheetHandle,
      Frame: SheetFrame,
      Overlay: SheetOverlay,
      ScrollView: import_SheetScrollView.SheetScrollView
    };
    var ParentSheetContext = (0, import_react.createContext)({
      zIndex: 40
    });
    var useSheetContoller = /* @__PURE__ */ __name(() => {
      const controller = (0, import_react.useContext)(SheetControllerContext);
      const isHidden = (controller == null ? void 0 : controller.hidden) || false;
      const isShowingNonSheet = isHidden && (controller == null ? void 0 : controller.open);
      return {
        controller,
        isHidden,
        isShowingNonSheet
      };
    }, "useSheetContoller");
    var Sheet = (0, import_core2.withStaticProperties)(
      (0, import_react.forwardRef)(/* @__PURE__ */ __name(function Sheet2(props, ref) {
        const { isShowingNonSheet } = useSheetContoller();
        if (isShowingNonSheet) {
          return null;
        }
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetImplementation, {
          ref,
          ...props
        });
      }, "Sheet2")),
      sheetComponents
    );
    var SheetImplementation = (0, import_core2.themeable)(
      (0, import_react.forwardRef)(/* @__PURE__ */ __name(function SheetImplementation2(props, ref) {
        const parentSheet = (0, import_react.useContext)(ParentSheetContext);
        const { isHidden, controller } = useSheetContoller();
        const {
          __scopeSheet,
          snapPoints: snapPointsProp = [80],
          open: openProp,
          defaultOpen,
          children: childrenProp,
          position: positionProp,
          onPositionChange,
          onOpenChange,
          defaultPosition,
          dismissOnOverlayPress = true,
          animationConfig,
          dismissOnSnapToBottom = false,
          disableDrag: disableDragProp,
          modal = false,
          handleDisableScroll = true,
          zIndex = parentSheet.zIndex + 1
        } = props;
        if (process.env.NODE_ENV === "development") {
          if (snapPointsProp.some((p) => p < 0 || p > 100)) {
            console.warn(
              `\u26A0\uFE0F Invalid snapPoint given, snapPoints must be between 0 and 100, equal to percent height of frame`
            );
          }
        }
        const driver = (0, import_core2.getAnimationDriver)();
        if (!driver) {
          throw new Error(`Must set animations in tamagui.config.ts`);
        }
        const disableDrag = disableDragProp ?? (controller == null ? void 0 : controller.disableDrag);
        const themeName = (0, import_core2.useThemeName)();
        const contentRef = import_react.default.useRef(null);
        const scrollBridge = (0, import_use_constant.useConstant)(() => ({
          enabled: false,
          y: 0,
          paneY: 0,
          paneMinY: 0,
          scrollStartY: -1,
          drag: () => {
          },
          release: () => {
          },
          scrollLock: false
        }));
        const onOpenChangeInternal = /* @__PURE__ */ __name((val) => {
          var _a;
          (_a = controller == null ? void 0 : controller.onOpenChange) == null ? void 0 : _a.call(controller, val);
          onOpenChange == null ? void 0 : onOpenChange(val);
        }, "onOpenChangeInternal");
        const [open, setOpen] = (0, import_use_controllable_state.useControllableState)({
          prop: (controller == null ? void 0 : controller.open) ?? openProp,
          defaultProp: defaultOpen || true,
          onChange: onOpenChangeInternal,
          strategy: "most-recent-wins"
        });
        const [frameSize, setFrameSize] = (0, import_react.useState)(0);
        const snapPoints = (0, import_react.useMemo)(
          () => dismissOnSnapToBottom ? [...snapPointsProp, 0] : snapPointsProp,
          [JSON.stringify(snapPointsProp), dismissOnSnapToBottom]
        );
        const [position_, setPosition_] = (0, import_use_controllable_state.useControllableState)({
          prop: positionProp,
          defaultProp: defaultPosition || (open ? 0 : -1),
          onChange: onPositionChange,
          strategy: "most-recent-wins"
        });
        const position = open === false ? -1 : position_;
        if (open && dismissOnSnapToBottom && position === snapPoints.length - 1) {
          setPosition_(0);
        }
        const setPosition = (0, import_react.useCallback)(
          (next) => {
            if (dismissOnSnapToBottom && next === snapPoints.length - 1) {
              setOpen(false);
            } else {
              setPosition_(next);
            }
          },
          [dismissOnSnapToBottom, snapPoints.length, setPosition_, setOpen]
        );
        const animatedNumber = driver.useAnimatedNumber(HIDDEN_SIZE);
        const at = (0, import_react.useRef)(0);
        driver.useAnimatedNumberReaction(animatedNumber, (value) => {
          at.current = value;
          scrollBridge.paneY = value;
        });
        const [isResizing, setIsResizing] = (0, import_react.useState)(true);
        (0, import_core2.useIsomorphicLayoutEffect)(() => {
          if (!isResizing) {
            setIsResizing(true);
          }
        }, [modal]);
        function stopSpring() {
          animatedNumber.stop();
          if (scrollBridge.onFinishAnimate) {
            scrollBridge.onFinishAnimate();
            scrollBridge.onFinishAnimate = void 0;
          }
        }
        __name(stopSpring, "stopSpring");
        const shouldSetPositionOpen = open && position < 0;
        (0, import_react.useEffect)(() => {
          if (shouldSetPositionOpen) {
            setPosition(0);
          }
        }, [setPosition, shouldSetPositionOpen]);
        const positions = (0, import_react.useMemo)(
          () => snapPoints.map((point) => getPercentSize(point, frameSize)),
          [frameSize, snapPoints]
        );
        const animateTo = (0, import_core2.useEvent)((position2) => {
          const current = animatedNumber.getValue();
          if (isHidden && open)
            return;
          if (!current)
            return;
          if (frameSize === 0)
            return;
          const hiddenValue = frameSize === 0 ? HIDDEN_SIZE : frameSize;
          const toValue = isHidden || position2 === -1 ? hiddenValue : positions[position2];
          if (at.current === toValue)
            return;
          stopSpring();
          if (isHidden || isResizing) {
            if (isResizing) {
              setIsResizing(false);
            }
            animatedNumber.setValue(toValue, {
              type: "timing",
              duration: 0
            });
            at.current = toValue;
            return;
          }
          const overshootClamping = at.current === HIDDEN_SIZE;
          animatedNumber.setValue(toValue, {
            ...animationConfig,
            type: "spring",
            overshootClamping
          });
        });
        (0, import_core2.useIsomorphicLayoutEffect)(() => {
          animateTo(position);
        }, [isHidden, frameSize, position, animateTo]);
        const panResponder = (0, import_react.useMemo)(
          () => {
            if (disableDrag)
              return;
            if (!frameSize)
              return;
            const minY = positions[0];
            scrollBridge.paneMinY = minY;
            let startY = at.current;
            function makeUnselectable(val) {
              if (!selectionStyleSheet)
                return;
              if (!val) {
                selectionStyleSheet.innerText = ``;
              } else {
                selectionStyleSheet.innerText = `:root * { user-select: none !important; -webkit-user-select: none !important; }`;
              }
            }
            __name(makeUnselectable, "makeUnselectable");
            const release = /* @__PURE__ */ __name(({ vy, dragAt }) => {
              isExternalDrag = false;
              previouslyScrolling = false;
              makeUnselectable(false);
              const at2 = dragAt + startY;
              const end = at2 + frameSize * vy * 0.2;
              let closestPoint = 0;
              let dist = Infinity;
              for (let i = 0; i < positions.length; i++) {
                const position2 = positions[i];
                const curDist = end > position2 ? end - position2 : position2 - end;
                if (curDist < dist) {
                  dist = curDist;
                  closestPoint = i;
                }
              }
              setPosition(closestPoint);
              animateTo(closestPoint);
            }, "release");
            const finish = /* @__PURE__ */ __name((_e, state) => {
              release({
                vy: state.vy,
                dragAt: state.dy
              });
            }, "finish");
            let previouslyScrolling = false;
            const onMoveShouldSet = /* @__PURE__ */ __name((_e, { dy }) => {
              const isScrolled = scrollBridge.y !== 0;
              const isDraggingUp = dy < 0;
              const isAtTop = scrollBridge.paneY <= scrollBridge.paneMinY;
              if (isScrolled) {
                previouslyScrolling = true;
                return false;
              }
              if (previouslyScrolling) {
                previouslyScrolling = false;
                return true;
              }
              if (isAtTop) {
                if (!isScrolled && isDraggingUp) {
                  return false;
                }
              }
              return Math.abs(dy) > 5;
            }, "onMoveShouldSet");
            const grant = /* @__PURE__ */ __name(() => {
              makeUnselectable(true);
              stopSpring();
              startY = at.current;
            }, "grant");
            let isExternalDrag = false;
            scrollBridge.drag = (dy) => {
              if (!isExternalDrag) {
                isExternalDrag = true;
                grant();
              }
              const to = dy + startY;
              animatedNumber.setValue(resisted(to, minY), { type: "direct" });
            };
            scrollBridge.release = release;
            return import_react_native3.PanResponder.create({
              onMoveShouldSetPanResponder: onMoveShouldSet,
              onPanResponderGrant: grant,
              onPanResponderMove: (_e, { dy }) => {
                const toFull = dy + startY;
                const to = resisted(toFull, minY);
                animatedNumber.setValue(to, { type: "direct" });
              },
              onPanResponderEnd: finish,
              onPanResponderTerminate: finish,
              onPanResponderRelease: finish
            });
          },
          [disableDrag, animateTo, frameSize, positions, setPosition]
        );
        let handleComponent = null;
        let overlayComponent = null;
        let frameComponent = null;
        import_react.default.Children.forEach(childrenProp, (child) => {
          var _a, _b;
          if ((0, import_react.isValidElement)(child)) {
            const name = (_b = (_a = child.type) == null ? void 0 : _a["staticConfig"]) == null ? void 0 : _b.componentName;
            switch (name) {
              case "SheetHandle":
                handleComponent = child;
                break;
              case "Sheet":
                frameComponent = child;
                break;
              case "SheetOverlay":
                overlayComponent = child;
                break;
              default:
                console.warn("Warning: passed invalid child to Sheet", child);
            }
          }
        });
        const animatedStyle = driver.useAnimatedNumberStyle(animatedNumber, (val) => {
          return {
            transform: [{ translateY: frameSize === 0 ? HIDDEN_SIZE : val }]
          };
        });
        const AnimatedView = driver["NumberView"] ?? driver.View;
        const [isShowingInnerSheet, setIsShowingInnerSheet] = (0, import_react.useState)(false);
        const shouldHideParentSheet = !import_core2.isWeb && modal && isShowingInnerSheet;
        const parentSheetContext = (0, import_react.useContext)(SheetInsideSheetContext);
        const onInnerSheet = (0, import_react.useCallback)((hasChild) => {
          setIsShowingInnerSheet(hasChild);
        }, []);
        (0, import_core2.useIsomorphicLayoutEffect)(() => {
          if (!parentSheetContext || !open)
            return;
          parentSheetContext(true);
          return () => {
            parentSheetContext(false);
          };
        }, [parentSheetContext, open]);
        const nextParentContext = (0, import_react.useMemo)(
          () => ({
            zIndex
          }),
          [zIndex]
        );
        const contents = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParentSheetContext.Provider, {
          value: nextParentContext,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_SheetContext.SheetProvider, {
            modal,
            contentRef,
            dismissOnOverlayPress,
            dismissOnSnapToBottom,
            open,
            hidden: isHidden,
            scope: __scopeSheet,
            position,
            snapPoints,
            setPosition,
            setOpen,
            scrollBridge,
            children: [
              isResizing || shouldHideParentSheet ? null : overlayComponent,
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedView, {
                ref,
                ...panResponder == null ? void 0 : panResponder.panHandlers,
                onLayout: (e) => {
                  const next = e.nativeEvent.layout.height;
                  setFrameSize((prev) => {
                    const isBigChange = Math.abs(prev - next) > 50;
                    setIsResizing(isBigChange);
                    return next;
                  });
                },
                pointerEvents: open && !shouldHideParentSheet ? "auto" : "none",
                style: [
                  {
                    position: "absolute",
                    zIndex,
                    width: "100%",
                    height: "100%",
                    opacity: shouldHideParentSheet ? 0 : 1
                  },
                  animatedStyle
                ],
                children: [
                  handleComponent,
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remove_scroll.RemoveScroll, {
                    enabled: open && modal && handleDisableScroll,
                    as: import_core2.Slot,
                    allowPinchZoom: true,
                    shards: [contentRef],
                    removeScrollBar: false,
                    children: isResizing ? null : frameComponent
                  })
                ]
              })
            ]
          })
        });
        if (modal) {
          const modalContents = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_portal.Portal, {
            zIndex,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core2.Theme, {
              name: themeName,
              children: contents
            })
          });
          if (import_core2.isWeb) {
            return modalContents;
          }
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetInsideSheetContext.Provider, {
            value: onInnerSheet,
            children: modalContents
          });
        }
        return contents;
      }, "SheetImplementation2"))
    );
    var SheetInsideSheetContext = (0, import_react.createContext)(null);
    var ControlledSheet = Sheet;
    function getPercentSize(point, frameSize) {
      if (!frameSize)
        return 0;
      if (point === void 0) {
        console.warn(`No snapPoint`);
        return 0;
      }
      const pct = point / 100;
      const next = Math.round(frameSize - pct * frameSize);
      return next;
    }
    __name(getPercentSize, "getPercentSize");
    function resisted(y, minY, maxOverflow = 25) {
      if (y < minY) {
        const past = minY - y;
        const pctPast = Math.min(maxOverflow, past) / maxOverflow;
        const diminishBy = 1.1 - Math.pow(0.1, pctPast);
        const extra = -diminishBy * maxOverflow;
        return minY + extra;
      }
      return y;
    }
    __name(resisted, "resisted");
    var SheetControllerContext = (0, import_react.createContext)(null);
    var SheetController = /* @__PURE__ */ __name(({
      children,
      onOpenChange: onOpenChangeProp,
      ...value
    }) => {
      const onOpenChange = (0, import_core2.useEvent)(onOpenChangeProp);
      const memoValue = (0, import_react.useMemo)(
        () => ({
          open: value.open,
          hidden: value.hidden,
          disableDrag: value.disableDrag,
          onOpenChange
        }),
        [onOpenChange, value.open, value.hidden, value.disableDrag]
      );
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetControllerContext.Provider, {
        value: memoValue,
        children
      });
    }, "SheetController");
  }
});

// ../../node_modules/@tamagui/sheet/dist/cjs/index.js
var require_cjs16 = __commonJS({
  "../../node_modules/@tamagui/sheet/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_Sheet(), module2.exports);
  }
});

// ../../node_modules/@tamagui/get-font-sized/dist/cjs/index.js
var require_cjs17 = __commonJS({
  "../../node_modules/@tamagui/get-font-sized/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    __export3(src_exports2, {
      getFontSized: () => getFontSized
    });
    module2.exports = __toCommonJS3(src_exports2);
    var import_core2 = require("@tamagui/core-node");
    var getFontSized = /* @__PURE__ */ __name((val = "$4", { fonts, theme, props }) => {
      var _a, _b, _c;
      const family = (0, import_core2.getVariableValue)(props.fontFamily) || "$body";
      const font = fonts[family] || fonts["$body"];
      if (!font) {
        if (process.env.NODE_ENV === "development") {
          console.warn("\u26A0\uFE0F no font found", { family, fontTokens: Object.keys(fonts), val });
        }
        return {};
      }
      const fontFamily = font.family;
      const fontSize = props.fontSize || font.size[val];
      const lineHeight = props.lineHeight || font.lineHeight[val];
      const fontWeight = props.fontWeight || font.weight[val];
      const letterSpacing = props.letterSpacing || font.letterSpacing[val];
      const fontStyle = props.fontStyle || ((_a = font.style) == null ? void 0 : _a[val]);
      const textTransform = props.textTransform || ((_b = font.transform) == null ? void 0 : _b[val]);
      const color = props.color || ((_c = font.color) == null ? void 0 : _c[val]) || theme.color;
      const style = {
        color,
        fontStyle,
        textTransform,
        fontFamily,
        fontWeight,
        letterSpacing,
        fontSize,
        lineHeight
      };
      if (process.env.NODE_ENV === "development") {
        if (props["debug"]) {
          console.groupCollapsed("  \u{1F539} getFont", val, props["fontWeight"], props["fow"]);
          console.log({ style, props, font });
          console.groupEnd();
        }
      }
      return style;
    }, "getFontSized");
  }
});

// ../../node_modules/@tamagui/text/dist/cjs/SizableText.js
var require_SizableText = __commonJS({
  "../../node_modules/@tamagui/text/dist/cjs/SizableText.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SizableText_exports = {};
    __export3(SizableText_exports, {
      SizableText: () => SizableText
    });
    module2.exports = __toCommonJS3(SizableText_exports);
    var import_core2 = require("@tamagui/core-node");
    var import_get_font_sized = require_cjs17();
    var SizableText = (0, import_core2.styled)(import_core2.Text, {
      name: "SizableText",
      fontFamily: "$body",
      variants: {
        size: import_get_font_sized.getFontSized
      },
      defaultVariants: {
        size: "$4"
      }
    });
  }
});

// ../../node_modules/@tamagui/text/dist/cjs/Paragraph.js
var require_Paragraph = __commonJS({
  "../../node_modules/@tamagui/text/dist/cjs/Paragraph.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Paragraph_exports = {};
    __export3(Paragraph_exports, {
      Paragraph: () => Paragraph
    });
    module2.exports = __toCommonJS3(Paragraph_exports);
    var import_core2 = require("@tamagui/core-node");
    var import_SizableText = require_SizableText();
    var Paragraph = (0, import_core2.styled)(import_SizableText.SizableText, {
      name: "Paragraph",
      tag: "p",
      selectable: true,
      cursor: "text"
    });
  }
});

// ../../node_modules/@tamagui/text/dist/cjs/Headings.js
var require_Headings = __commonJS({
  "../../node_modules/@tamagui/text/dist/cjs/Headings.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Headings_exports = {};
    __export3(Headings_exports, {
      H1: () => H1,
      H2: () => H2,
      H3: () => H3,
      H4: () => H4,
      H5: () => H5,
      H6: () => H6,
      Heading: () => Heading
    });
    module2.exports = __toCommonJS3(Headings_exports);
    var import_core2 = require("@tamagui/core-node");
    var import_Paragraph = require_Paragraph();
    var Heading = (0, import_core2.styled)(import_Paragraph.Paragraph, {
      tag: "span",
      name: "Heading",
      accessibilityRole: "header",
      fontFamily: "$heading",
      size: "$8",
      margin: 0
    });
    var H1 = (0, import_core2.styled)(Heading, {
      name: "H1",
      tag: "h1",
      size: "$10"
    });
    var H2 = (0, import_core2.styled)(Heading, {
      name: "H2",
      tag: "h2",
      size: "$9"
    });
    var H3 = (0, import_core2.styled)(Heading, {
      name: "H3",
      tag: "h3",
      size: "$8"
    });
    var H4 = (0, import_core2.styled)(Heading, {
      name: "H4",
      tag: "h4",
      size: "$7"
    });
    var H5 = (0, import_core2.styled)(Heading, {
      name: "H5",
      tag: "h5",
      size: "$6"
    });
    var H6 = (0, import_core2.styled)(Heading, {
      name: "H6",
      tag: "h6",
      size: "$5"
    });
  }
});

// ../../node_modules/@tamagui/text/dist/cjs/wrapChildrenInText.js
var require_wrapChildrenInText = __commonJS({
  "../../node_modules/@tamagui/text/dist/cjs/wrapChildrenInText.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var wrapChildrenInText_exports = {};
    __export3(wrapChildrenInText_exports, {
      wrapChildrenInText: () => wrapChildrenInText
    });
    module2.exports = __toCommonJS3(wrapChildrenInText_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_react = __toESM2(require("react"));
    function wrapChildrenInText(TextComponent, propsIn) {
      const {
        children,
        textProps,
        size,
        noTextWrap,
        color,
        fontFamily,
        fontSize,
        fontWeight,
        letterSpacing,
        textAlign
      } = propsIn;
      if (noTextWrap || !children) {
        return children;
      }
      const allChildren = import_react.default.Children.toArray(children);
      const nextChildren = [];
      let lastIsString = false;
      const props = {};
      if (color)
        props.color = color;
      if (fontFamily)
        props.fontFamily = fontFamily;
      if (fontSize)
        props.fontSize = fontSize;
      if (fontWeight)
        props.fontWeight = fontWeight;
      if (letterSpacing)
        props.letterSpacing = letterSpacing;
      if (textAlign)
        props.textAlign = textAlign;
      if (size)
        props.size = size;
      function concatStringChildren() {
        if (!lastIsString)
          return;
        const index = nextChildren.length - 1;
        const childrenStrings = nextChildren[index];
        nextChildren[index] = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextComponent, {
          ...props,
          ...textProps,
          children: childrenStrings
        }, index);
      }
      __name(concatStringChildren, "concatStringChildren");
      for (const child of allChildren) {
        const last = nextChildren[nextChildren.length - 1];
        const isString = typeof child === "string";
        if (isString) {
          if (lastIsString) {
            last.push(child);
          } else {
            nextChildren.push([child]);
          }
        } else {
          concatStringChildren();
          nextChildren.push(child);
        }
        lastIsString = isString;
      }
      concatStringChildren();
      return nextChildren;
    }
    __name(wrapChildrenInText, "wrapChildrenInText");
  }
});

// ../../node_modules/@tamagui/text/dist/cjs/types.js
var require_types = __commonJS({
  "../../node_modules/@tamagui/text/dist/cjs/types.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var types_exports = {};
    module2.exports = __toCommonJS3(types_exports);
  }
});

// ../../node_modules/@tamagui/text/dist/cjs/index.js
var require_cjs18 = __commonJS({
  "../../node_modules/@tamagui/text/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_SizableText(), module2.exports);
    __reExport2(src_exports2, require_Paragraph(), module2.exports);
    __reExport2(src_exports2, require_Headings(), module2.exports);
    __reExport2(src_exports2, require_wrapChildrenInText(), module2.exports);
    __reExport2(src_exports2, require_types(), module2.exports);
  }
});

// ../../node_modules/@tamagui/dialog/dist/cjs/Dialog.js
var require_Dialog = __commonJS({
  "../../node_modules/@tamagui/dialog/dist/cjs/Dialog.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Dialog_exports = {};
    __export3(Dialog_exports, {
      Dialog: () => Dialog2,
      DialogClose: () => DialogClose,
      DialogContent: () => DialogContent,
      DialogDescription: () => DialogDescription,
      DialogOverlay: () => DialogOverlay,
      DialogPortal: () => DialogPortal,
      DialogPortalFrame: () => DialogPortalFrame,
      DialogSheetContents: () => DialogSheetContents,
      DialogTitle: () => DialogTitle,
      DialogTrigger: () => DialogTrigger,
      DialogWarningProvider: () => DialogWarningProvider,
      createDialogScope: () => createDialogScope
    });
    module2.exports = __toCommonJS3(Dialog_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_animate_presence = require_cjs2();
    var import_aria_hidden = require_cjs5();
    var import_compose_refs = require_cjs3();
    var import_core2 = require("@tamagui/core-node");
    var import_create_context = require_cjs4();
    var import_dismissable = require_cjs7();
    var import_focus_scope = require_cjs8();
    var import_portal = require_cjs11();
    var import_remove_scroll = require_cjs12();
    var import_sheet = require_cjs16();
    var import_stacks = require_cjs10();
    var import_text = require_cjs18();
    var import_use_controllable_state = require_cjs14();
    var React3 = __toESM2(require("react"));
    var DIALOG_NAME = "Dialog";
    var [createDialogContext, createDialogScope] = (0, import_create_context.createContextScope)(DIALOG_NAME);
    var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
    var TRIGGER_NAME = "DialogTrigger";
    var DialogTriggerFrame = (0, import_core2.styled)(import_stacks.YStack, {
      name: TRIGGER_NAME
    });
    var DialogTrigger = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeDialog, ...triggerProps } = props;
        const context = useDialogContext(TRIGGER_NAME, __scopeDialog);
        const composedTriggerRef = (0, import_compose_refs.useComposedRefs)(forwardedRef, context.triggerRef);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTriggerFrame, {
          tag: "button",
          "aria-haspopup": "dialog",
          "aria-expanded": context.open,
          "aria-controls": context.contentId,
          "data-state": getState(context.open),
          ...triggerProps,
          ref: composedTriggerRef,
          onPress: (0, import_core2.composeEventHandlers)(props.onPress, context.onOpenToggle)
        });
      }
    );
    DialogTrigger.displayName = TRIGGER_NAME;
    var PORTAL_NAME = "DialogPortal";
    var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME, {
      forceMount: void 0
    });
    var DialogPortalFrame = (0, import_core2.styled)(import_stacks.YStack, {
      alignItems: "center",
      justifyContent: "center",
      fullscreen: true,
      zIndex: 100,
      ...import_core2.isWeb && {
        maxHeight: "100vh"
      }
    });
    var DialogPortal = DialogPortalFrame.extractable(
      (props) => {
        const { __scopeDialog, forceMount, children, ...frameProps } = props;
        const themeName = (0, import_core2.useThemeName)();
        const context = useDialogContext(PORTAL_NAME, __scopeDialog);
        const isShowing = forceMount || context.open;
        const contents = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_animate_presence.AnimatePresence, {
          children: isShowing ? children : null
        });
        const isSheet = useShowDialogSheet(context);
        if (!context.modal || isSheet) {
          return contents;
        }
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_portal.PortalItem, {
          name: `${context.scopeKey}SheetContents`,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogProvider, {
            scope: __scopeDialog,
            ...context,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core2.Theme, {
              name: themeName,
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider, {
                scope: __scopeDialog,
                forceMount,
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogPortalFrame, {
                  pointerEvents: isShowing ? "auto" : "none",
                  ...frameProps,
                  children: contents
                })
              })
            })
          })
        });
      }
    );
    DialogPortal.displayName = PORTAL_NAME;
    var OVERLAY_NAME = "DialogOverlay";
    var DialogOverlayFrame = (0, import_core2.styled)(import_stacks.ThemeableStack, {
      name: OVERLAY_NAME,
      backgrounded: true,
      fullscreen: true
    });
    var DialogOverlay = React3.forwardRef(
      ({ __scopeDialog, ...props }, forwardedRef) => {
        const portalContext = usePortalContext(OVERLAY_NAME, __scopeDialog);
        const { forceMount = portalContext.forceMount, ...overlayProps } = props;
        const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
        const showSheet = useShowDialogSheet(context);
        if (!forceMount) {
          if (!context.modal || showSheet) {
            return null;
          }
        }
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlayImpl, {
          context,
          ...overlayProps,
          ref: forwardedRef
        });
      }
    );
    DialogOverlay.displayName = OVERLAY_NAME;
    var DialogOverlayImpl = React3.forwardRef(
      (props, forwardedRef) => {
        const { context, ...overlayProps } = props;
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remove_scroll.RemoveScroll, {
          enabled: context.open,
          as: import_core2.Slot,
          allowPinchZoom: context.allowPinchZoom,
          shards: [context.contentRef],
          removeScrollBar: false,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlayFrame, {
            "data-state": getState(context.open),
            pointerEvents: context.open ? "auto" : "none",
            ...overlayProps,
            ref: forwardedRef
          })
        });
      }
    );
    var CONTENT_NAME = "DialogContent";
    var DialogContentFrame = (0, import_core2.styled)(import_stacks.ThemeableStack, {
      name: CONTENT_NAME,
      tag: "dialog",
      position: "relative",
      backgrounded: true,
      padded: true,
      radiused: true,
      elevate: true,
      variants: {
        size: {
          "...size": (val, extras) => {
            return {};
          }
        }
      },
      defaultVariants: {
        size: "$4"
      }
    });
    var DialogContent = DialogContentFrame.extractable(
      React3.forwardRef(
        ({ __scopeDialog, ...props }, forwardedRef) => {
          const portalContext = usePortalContext(CONTENT_NAME, __scopeDialog);
          const { forceMount = portalContext.forceMount, ...contentProps } = props;
          const context = useDialogContext(CONTENT_NAME, __scopeDialog);
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
            children: context.modal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentModal, {
              context,
              ...contentProps,
              ref: forwardedRef
            }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentNonModal, {
              context,
              ...contentProps,
              ref: forwardedRef
            })
          });
        }
      )
    );
    DialogContent.displayName = CONTENT_NAME;
    var DialogContentModal = React3.forwardRef(
      ({ children, context, ...props }, forwardedRef) => {
        const contentRef = React3.useRef(null);
        const composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, context.contentRef, contentRef);
        React3.useEffect(() => {
          if (!context.open)
            return;
          const content = contentRef.current;
          if (content)
            return (0, import_aria_hidden.hideOthers)(content);
        }, [context.open]);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentImpl, {
          ...props,
          context,
          ref: composedRefs,
          trapFocus: context.open,
          disableOutsidePointerEvents: true,
          onCloseAutoFocus: (0, import_core2.composeEventHandlers)(props.onCloseAutoFocus, (event) => {
            var _a;
            event.preventDefault();
            (_a = context.triggerRef.current) == null ? void 0 : _a.focus();
          }),
          onPointerDownOutside: (0, import_core2.composeEventHandlers)(props.onPointerDownOutside, (event) => {
            const originalEvent = event["detail"].originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            if (isRightClick)
              event.preventDefault();
          }),
          onFocusOutside: (0, import_core2.composeEventHandlers)(
            props.onFocusOutside,
            (event) => event.preventDefault()
          ),
          children
        });
      }
    );
    var DialogContentNonModal = React3.forwardRef(
      (props, forwardedRef) => {
        const hasInteractedOutsideRef = React3.useRef(false);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentImpl, {
          ...props,
          ref: forwardedRef,
          trapFocus: false,
          disableOutsidePointerEvents: false,
          onCloseAutoFocus: (event) => {
            var _a, _b;
            console.log("on close autofocus");
            (_a = props.onCloseAutoFocus) == null ? void 0 : _a.call(props, event);
            if (!event.defaultPrevented) {
              if (!hasInteractedOutsideRef.current) {
                (_b = props.context.triggerRef.current) == null ? void 0 : _b.focus();
              }
              event.preventDefault();
            }
            hasInteractedOutsideRef.current = false;
          },
          onInteractOutside: (event) => {
            var _a;
            (_a = props.onInteractOutside) == null ? void 0 : _a.call(props, event);
            if (!event.defaultPrevented)
              hasInteractedOutsideRef.current = true;
            const target = event.target;
            const trigger = props.context.triggerRef.current;
            if (!(trigger instanceof HTMLElement))
              return;
            const targetIsTrigger = trigger.contains(target);
            if (targetIsTrigger)
              event.preventDefault();
          }
        });
      }
    );
    var DialogContentImpl = React3.forwardRef(
      (props, forwardedRef) => {
        const {
          __scopeDialog,
          trapFocus,
          onOpenAutoFocus,
          onCloseAutoFocus,
          disableOutsidePointerEvents,
          onEscapeKeyDown,
          onPointerDownOutside,
          onFocusOutside,
          onInteractOutside,
          context,
          ...contentProps
        } = props;
        const contentRef = React3.useRef(null);
        const composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, contentRef);
        const showSheet = useShowDialogSheet(context);
        const contents = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentFrame, {
          id: context.contentId,
          "aria-describedby": context.descriptionId,
          "aria-labelledby": context.titleId,
          "data-state": getState(context.open),
          ...contentProps
        });
        if (showSheet) {
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_portal.PortalItem, {
            hostName: `${context.scopeKey}SheetContents`,
            children: contentProps.children
          });
        }
        if (!import_core2.isWeb) {
          return contents;
        }
        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_focus_scope.FocusScope, {
              loop: true,
              trapped: trapFocus,
              onMountAutoFocus: onOpenAutoFocus,
              forceUnmount: !context.open,
              onUnmountAutoFocus: onCloseAutoFocus,
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dismissable.Dismissable, {
                disableOutsidePointerEvents: context.open && disableOutsidePointerEvents,
                forceUnmount: !context.open,
                onEscapeKeyDown,
                onPointerDownOutside,
                onFocusOutside,
                onInteractOutside,
                ref: composedRefs,
                onDismiss: () => context.onOpenChange(false),
                children: contents
              })
            }),
            process.env.NODE_ENV === "development" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TitleWarning, {
                  titleId: context.titleId
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DescriptionWarning, {
                  contentRef,
                  descriptionId: context.descriptionId
                })
              ]
            })
          ]
        });
      }
    );
    var SHEET_CONTENTS_NAME = "DialogSheetContents";
    var DialogSheetContents = /* @__PURE__ */ __name(({ __scopeDialog }) => {
      const context = useDialogContext(SHEET_CONTENTS_NAME, __scopeDialog);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_portal.PortalHost, {
        name: `${context.scopeKey}SheetContents`
      });
    }, "DialogSheetContents");
    DialogSheetContents.displayName = SHEET_CONTENTS_NAME;
    var TITLE_NAME = "DialogTitle";
    var DialogTitleFrame = (0, import_core2.styled)(import_text.H2, {
      name: TITLE_NAME
    });
    var DialogTitle = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeDialog, ...titleProps } = props;
        const context = useDialogContext(TITLE_NAME, __scopeDialog);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitleFrame, {
          id: context.titleId,
          ...titleProps,
          ref: forwardedRef
        });
      }
    );
    DialogTitle.displayName = TITLE_NAME;
    var DialogDescriptionFrame = (0, import_core2.styled)(import_text.Paragraph, {
      name: "DialogDescription"
    });
    var DESCRIPTION_NAME = "DialogDescription";
    var DialogDescription = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeDialog, ...descriptionProps } = props;
        const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescriptionFrame, {
          id: context.descriptionId,
          ...descriptionProps,
          ref: forwardedRef
        });
      }
    );
    DialogDescription.displayName = DESCRIPTION_NAME;
    var CLOSE_NAME = "DialogClose";
    var DialogClose = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeDialog, ...closeProps } = props;
        const context = useDialogContext(CLOSE_NAME, __scopeDialog);
        const isSheet = useShowDialogSheet(context);
        if (isSheet) {
          return null;
        }
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_stacks.YStack, {
          tag: "button",
          ...closeProps,
          ref: forwardedRef,
          onPress: (0, import_core2.composeEventHandlers)(props.onPress, () => context.onOpenChange(false))
        });
      }
    );
    DialogClose.displayName = CLOSE_NAME;
    function getState(open) {
      return open ? "open" : "closed";
    }
    __name(getState, "getState");
    var TITLE_WARNING_NAME = "DialogTitleWarning";
    var [DialogWarningProvider, useWarningContext] = (0, import_create_context.createContext)(TITLE_WARNING_NAME, {
      contentName: CONTENT_NAME,
      titleName: TITLE_NAME,
      docsSlug: "dialog"
    });
    var TitleWarning = /* @__PURE__ */ __name(({ titleId }) => {
      const titleWarningContext = useWarningContext(TITLE_WARNING_NAME);
      const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
      React3.useEffect(() => {
        if (!import_core2.isWeb)
          return;
        if (titleId) {
          const hasTitle = document.getElementById(titleId);
          if (!hasTitle)
            throw new Error(MESSAGE);
        }
      }, [MESSAGE, titleId]);
      return null;
    }, "TitleWarning");
    var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
    var DescriptionWarning = /* @__PURE__ */ __name(({ contentRef, descriptionId }) => {
      const descriptionWarningContext = useWarningContext(DESCRIPTION_WARNING_NAME);
      const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
      React3.useEffect(() => {
        if (!import_core2.isWeb)
          return;
        const contentNode = contentRef.current;
        if (!(contentNode instanceof HTMLElement)) {
          return;
        }
        const describedById = contentNode.getAttribute("aria-describedby");
        if (descriptionId && describedById) {
          const hasDescription = document.getElementById(descriptionId);
          if (!hasDescription)
            console.warn(MESSAGE);
        }
      }, [MESSAGE, contentRef, descriptionId]);
      return null;
    }, "DescriptionWarning");
    var DialogInner = React3.forwardRef(/* @__PURE__ */ __name(function Dialog3(props, ref) {
      const {
        __scopeDialog,
        children,
        open: openProp,
        defaultOpen = false,
        onOpenChange,
        modal = true,
        allowPinchZoom = false,
        sheetBreakpoint = false
      } = props;
      const triggerRef = React3.useRef(null);
      const contentRef = React3.useRef(null);
      const [open, setOpen] = (0, import_use_controllable_state.useControllableState)({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
      });
      React3.useImperativeHandle(
        ref,
        () => ({
          open: setOpen
        }),
        [setOpen]
      );
      const scopeId = (0, import_core2.useId)();
      const scopeKey = __scopeDialog ? Object.keys(__scopeDialog)[0] : scopeId;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogProvider, {
        scope: __scopeDialog,
        scopeKey,
        triggerRef,
        contentRef,
        contentId: (0, import_core2.useId)() || "",
        titleId: (0, import_core2.useId)() || "",
        descriptionId: (0, import_core2.useId)() || "",
        open,
        onOpenChange: setOpen,
        onOpenToggle: React3.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
        modal,
        allowPinchZoom,
        sheetBreakpoint,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogSheetController, {
          onOpenChange: setOpen,
          __scopeDialog,
          children
        })
      });
    }, "Dialog"));
    var Dialog2 = (0, import_core2.withStaticProperties)(DialogInner, {
      Trigger: DialogTrigger,
      Portal: DialogPortal,
      Overlay: DialogOverlay,
      Content: DialogContent,
      Title: DialogTitle,
      Description: DialogDescription,
      Close: DialogClose,
      SheetContents: DialogSheetContents,
      Sheet: import_sheet.ControlledSheet
    });
    var DialogSheetController = /* @__PURE__ */ __name((props) => {
      const context = useDialogContext("DialogSheetController", props.__scopeDialog);
      const showSheet = useShowDialogSheet(context);
      const breakpointActive = useSheetBreakpointActive(context);
      const getShowSheet = (0, import_core2.useGet)(showSheet);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_sheet.SheetController, {
        onOpenChange: (val) => {
          if (getShowSheet()) {
            props.onOpenChange(val);
          }
        },
        open: context.open,
        hidden: breakpointActive === false,
        children: props.children
      });
    }, "DialogSheetController");
    var useSheetBreakpointActive = /* @__PURE__ */ __name((context) => {
      const media = (0, import_core2.useMedia)();
      return context.sheetBreakpoint ? media[context.sheetBreakpoint] : false;
    }, "useSheetBreakpointActive");
    var useShowDialogSheet = /* @__PURE__ */ __name((context) => {
      const breakpointActive = useSheetBreakpointActive(context);
      return context.open === false ? false : breakpointActive;
    }, "useShowDialogSheet");
  }
});

// ../../node_modules/@tamagui/dialog/dist/cjs/index.js
var require_cjs19 = __commonJS({
  "../../node_modules/@tamagui/dialog/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_Dialog(), module2.exports);
  }
});

// ../../node_modules/@tamagui/alert-dialog/dist/cjs/AlertDialog.js
var require_AlertDialog = __commonJS({
  "../../node_modules/@tamagui/alert-dialog/dist/cjs/AlertDialog.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var AlertDialog_exports = {};
    __export3(AlertDialog_exports, {
      AlertDialog: () => AlertDialog,
      AlertDialogAction: () => AlertDialogAction,
      AlertDialogCancel: () => AlertDialogCancel,
      AlertDialogContent: () => AlertDialogContent,
      AlertDialogDescription: () => AlertDialogDescription,
      AlertDialogOverlay: () => AlertDialogOverlay,
      AlertDialogPortal: () => AlertDialogPortal,
      AlertDialogTitle: () => AlertDialogTitle,
      AlertDialogTrigger: () => AlertDialogTrigger,
      createAlertDialogScope: () => createAlertDialogScope
    });
    module2.exports = __toCommonJS3(AlertDialog_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_compose_refs = require_cjs3();
    var import_core2 = require("@tamagui/core-node");
    var import_create_context = require_cjs4();
    var import_dialog = require_cjs19();
    var import_stacks = require_cjs10();
    var import_use_controllable_state = require_cjs14();
    var React3 = __toESM2(require("react"));
    var import_react_native3 = require("react-native-web-lite");
    var ROOT_NAME = "AlertDialog";
    var [createAlertDialogContext, createAlertDialogScope] = (0, import_create_context.createContextScope)(ROOT_NAME, [
      import_dialog.createDialogScope
    ]);
    var useDialogScope = (0, import_dialog.createDialogScope)();
    var TRIGGER_NAME = "AlertDialogTrigger";
    var NativeAlertDialogTriggerFrame = (0, import_core2.styled)(import_stacks.YStack, {
      name: "DialogTrigger"
    });
    var AlertDialogTrigger = React3.forwardRef(
      (props, forwardedRef) => {
        if (props["__native"]) {
          const { __native, onPress, __onPress, ...rest } = props;
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeAlertDialogTriggerFrame, {
            ...rest,
            onPress: (0, import_core2.composeEventHandlers)(onPress, __onPress)
          });
        }
        const { __scopeAlertDialog, ...triggerProps } = props;
        const dialogScope = useDialogScope(__scopeAlertDialog);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.DialogTrigger, {
          ...dialogScope,
          ...triggerProps,
          ref: forwardedRef
        });
      }
    );
    AlertDialogTrigger.displayName = TRIGGER_NAME;
    var PORTAL_NAME = "AlertDialogPortal";
    var AlertDialogPortal = /* @__PURE__ */ __name((props) => {
      const { __scopeAlertDialog, ...portalProps } = props;
      const dialogScope = useDialogScope(__scopeAlertDialog);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.DialogPortal, {
        ...dialogScope,
        ...portalProps
      });
    }, "AlertDialogPortal");
    AlertDialogPortal.displayName = PORTAL_NAME;
    var OVERLAY_NAME = "AlertDialogOverlay";
    var AlertDialogOverlay = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeAlertDialog, ...overlayProps } = props;
        const dialogScope = useDialogScope(__scopeAlertDialog);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.DialogOverlay, {
          ...dialogScope,
          ...overlayProps,
          ref: forwardedRef
        });
      }
    );
    AlertDialogOverlay.displayName = OVERLAY_NAME;
    var CONTENT_NAME = "AlertDialogContent";
    var [AlertDialogContentProvider, useAlertDialogContentContext] = createAlertDialogContext(CONTENT_NAME);
    var AlertDialogContent = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeAlertDialog, children, ...contentProps } = props;
        const dialogScope = useDialogScope(__scopeAlertDialog);
        const contentRef = React3.useRef(null);
        const composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, contentRef);
        const cancelRef = React3.useRef(null);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.DialogWarningProvider, {
          contentName: CONTENT_NAME,
          titleName: TITLE_NAME,
          docsSlug: "alert-dialog",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogContentProvider, {
            scope: __scopeAlertDialog,
            cancelRef,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_dialog.DialogContent, {
              role: "alertdialog",
              ...dialogScope,
              ...contentProps,
              ref: composedRefs,
              onOpenAutoFocus: (0, import_core2.composeEventHandlers)(contentProps.onOpenAutoFocus, (event) => {
                var _a;
                event.preventDefault();
                if (import_core2.isWeb) {
                  (_a = cancelRef.current) == null ? void 0 : _a.focus({ preventScroll: true });
                }
              }),
              onPointerDownOutside: (event) => event.preventDefault(),
              onInteractOutside: (event) => event.preventDefault(),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core2.Slottable, {
                  children
                }),
                process.env.NODE_ENV === "development" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DescriptionWarning, {
                  contentRef
                })
              ]
            })
          })
        });
      }
    );
    AlertDialogContent.displayName = CONTENT_NAME;
    var TITLE_NAME = "AlertDialogTitle";
    var AlertDialogTitle = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeAlertDialog, ...titleProps } = props;
        const dialogScope = useDialogScope(__scopeAlertDialog);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.DialogTitle, {
          ...dialogScope,
          ...titleProps,
          ref: forwardedRef
        });
      }
    );
    AlertDialogTitle.displayName = TITLE_NAME;
    var DESCRIPTION_NAME = "AlertDialogDescription";
    var AlertDialogDescription = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeAlertDialog, ...descriptionProps } = props;
        const dialogScope = useDialogScope(__scopeAlertDialog);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.DialogDescription, {
          ...dialogScope,
          ...descriptionProps,
          ref: forwardedRef
        });
      }
    );
    AlertDialogDescription.displayName = DESCRIPTION_NAME;
    var ACTION_NAME = "AlertDialogAction";
    var AlertDialogAction = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeAlertDialog, ...actionProps } = props;
        const dialogScope = useDialogScope(__scopeAlertDialog);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.DialogClose, {
          ...dialogScope,
          ...actionProps,
          ref: forwardedRef
        });
      }
    );
    AlertDialogAction.displayName = ACTION_NAME;
    var CANCEL_NAME = "AlertDialogCancel";
    var AlertDialogCancel = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeAlertDialog, ...cancelProps } = props;
        const { cancelRef } = useAlertDialogContentContext(CANCEL_NAME, __scopeAlertDialog);
        const dialogScope = useDialogScope(__scopeAlertDialog);
        const ref = (0, import_compose_refs.useComposedRefs)(forwardedRef, cancelRef);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.DialogClose, {
          ...dialogScope,
          ...cancelProps,
          ref
        });
      }
    );
    AlertDialogCancel.displayName = CANCEL_NAME;
    var DescriptionWarning = /* @__PURE__ */ __name(({ contentRef }) => {
      if (process.env.NODE_ENV === "development") {
        React3.useEffect(() => {
          var _a;
          if (!import_core2.isWeb)
            return;
          const hasDescription = document.getElementById(
            (_a = contentRef.current) == null ? void 0 : _a.getAttribute("aria-describedby")
          );
          if (!hasDescription) {
            console.warn(`\`${CONTENT_NAME}\` requires a description for the component to be accessible for screen reader users.
  
        You can add a description to the \`${CONTENT_NAME}\` by passing a \`${DESCRIPTION_NAME}\` component as a child, which also benefits sighted users by adding visible context to the dialog.
        
        Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${CONTENT_NAME}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.
        
        For more information, see https://tamagui.dev/docs/components/alert-dialog`);
          }
        }, [contentRef]);
      }
      return null;
    }, "DescriptionWarning");
    var AlertDialogInner = /* @__PURE__ */ __name((props) => {
      const { __scopeAlertDialog, native, ...alertDialogProps } = props;
      const dialogScope = useDialogScope(__scopeAlertDialog);
      if (process.env.TAMAGUI_TARGET === "native") {
        const [open, setOpen] = (0, import_use_controllable_state.useControllableState)({
          prop: props.open,
          defaultProp: props.defaultOpen || false,
          onChange: props.onOpenChange
        });
        let triggerElement = null;
        let title = "";
        let description = "";
        const buttons = [];
        forEachChildDeep(React3.Children.toArray(props.children), (child) => {
          if (!React3.isValidElement(child))
            return false;
          const name = (0, import_core2.isTamaguiElement)(child) ? child.type.staticConfig.componentName : child.type["displayName"];
          switch (name) {
            case TRIGGER_NAME: {
              triggerElement = React3.cloneElement(child, {
                __native: true
              });
              return false;
            }
            case TITLE_NAME: {
              title = getStringChildren(child);
              return false;
            }
            case DESCRIPTION_NAME: {
              description = getStringChildren(child);
              return false;
            }
            case ACTION_NAME:
            case CANCEL_NAME: {
              const style = name === ACTION_NAME ? "default" : "cancel";
              const text = getStringChildren(child);
              const onPress = /* @__PURE__ */ __name(() => {
                var _a;
                const childProps = child.props;
                (_a = childProps == null ? void 0 : childProps.onPress) == null ? void 0 : _a.call(childProps, { native: true });
                setOpen(false);
              }, "onPress");
              buttons.push({
                style,
                text,
                onPress
              });
              return false;
            }
            default: {
              return true;
            }
          }
        });
        React3.useLayoutEffect(() => {
          if (!open || !native)
            return;
          if (title || description) {
            import_react_native3.Alert.alert(title, description, buttons);
          }
        }, [native, open]);
        if (native) {
          return React3.cloneElement(triggerElement, {
            __onPress: () => {
              setOpen(true);
            }
          });
        }
      }
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.Dialog, {
        ...dialogScope,
        ...alertDialogProps,
        modal: true
      });
    }, "AlertDialogInner");
    function forEachChildDeep(children, onChild) {
      for (const child of children) {
        if (!React3.isValidElement(child))
          continue;
        if (!onChild(child))
          continue;
        if (child.props.children) {
          forEachChildDeep(React3.Children.toArray(child.props.children), onChild);
        }
      }
    }
    __name(forEachChildDeep, "forEachChildDeep");
    function getStringChildren(child) {
      let string = "";
      forEachChildDeep(React3.Children.toArray(child), (child2) => {
        if (typeof child2.props.children === "string") {
          string = child2.props.children;
          return false;
        }
        return true;
      });
      return string;
    }
    __name(getStringChildren, "getStringChildren");
    var AlertDialog = (0, import_core2.withStaticProperties)(AlertDialogInner, {
      Trigger: AlertDialogTrigger,
      Portal: AlertDialogPortal,
      Overlay: AlertDialogOverlay,
      Content: AlertDialogContent,
      Action: AlertDialogAction,
      Cancel: AlertDialogCancel,
      Title: AlertDialogTitle,
      Description: AlertDialogDescription
    });
    AlertDialog.displayName = ROOT_NAME;
  }
});

// ../../node_modules/@tamagui/alert-dialog/dist/cjs/index.js
var require_cjs20 = __commonJS({
  "../../node_modules/@tamagui/alert-dialog/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_AlertDialog(), module2.exports);
  }
});

// ../../node_modules/@tamagui/image/dist/cjs/Image.js
var require_Image = __commonJS({
  "../../node_modules/@tamagui/image/dist/cjs/Image.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Image_exports = {};
    __export3(Image_exports, {
      Image: () => Image
    });
    module2.exports = __toCommonJS3(Image_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_core2 = require("@tamagui/core-node");
    var import_react = __toESM2(require("react"));
    var import_react_native3 = require("react-native-web-lite");
    import_react.default["createElement"];
    var StyledImage = (0, import_core2.styled)(import_react_native3.Image, {
      name: "Image",
      position: "relative",
      source: { uri: "" },
      zIndex: 1
    });
    var Image = StyledImage.extractable((inProps) => {
      const props = (0, import_core2.getExpandedShorthands)(inProps);
      const { src, ...rest } = props;
      const source = typeof src === "string" ? { uri: src, ...import_core2.isWeb && { width: props.width, height: props.height } } : src;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledImage, {
        source,
        ...rest
      });
    });
  }
});

// ../../node_modules/@tamagui/image/dist/cjs/index.js
var require_cjs21 = __commonJS({
  "../../node_modules/@tamagui/image/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_Image(), module2.exports);
  }
});

// ../../node_modules/@tamagui/shapes/dist/cjs/getShapeSize.js
var require_getShapeSize = __commonJS({
  "../../node_modules/@tamagui/shapes/dist/cjs/getShapeSize.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var getShapeSize_exports = {};
    __export3(getShapeSize_exports, {
      getShapeSize: () => getShapeSize
    });
    module2.exports = __toCommonJS3(getShapeSize_exports);
    var getShapeSize = /* @__PURE__ */ __name((size, { tokens }) => {
      const width = tokens.size[size] ?? size;
      const height = tokens.size[size] ?? size;
      return {
        width,
        height,
        minWidth: width,
        maxWidth: width,
        maxHeight: height,
        minHeight: height
      };
    }, "getShapeSize");
  }
});

// ../../node_modules/@tamagui/shapes/dist/cjs/Square.js
var require_Square = __commonJS({
  "../../node_modules/@tamagui/shapes/dist/cjs/Square.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Square_exports = {};
    __export3(Square_exports, {
      Square: () => Square
    });
    module2.exports = __toCommonJS3(Square_exports);
    var import_core2 = require("@tamagui/core-node");
    var import_stacks = require_cjs10();
    var import_getShapeSize = require_getShapeSize();
    var Square = (0, import_core2.styled)(import_stacks.ThemeableStack, {
      name: "Square",
      alignItems: "center",
      justifyContent: "center",
      backgrounded: true,
      variants: {
        circular: {
          true: {
            borderRadius: 1e5
          }
        },
        size: {
          "...size": import_getShapeSize.getShapeSize
        }
      }
    });
  }
});

// ../../node_modules/@tamagui/shapes/dist/cjs/Circle.js
var require_Circle = __commonJS({
  "../../node_modules/@tamagui/shapes/dist/cjs/Circle.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Circle_exports = {};
    __export3(Circle_exports, {
      Circle: () => Circle
    });
    module2.exports = __toCommonJS3(Circle_exports);
    var import_core2 = require("@tamagui/core-node");
    var import_Square = require_Square();
    var Circle = (0, import_core2.styled)(import_Square.Square, {
      name: "Circle",
      circular: true
    });
  }
});

// ../../node_modules/@tamagui/shapes/dist/cjs/index.js
var require_cjs22 = __commonJS({
  "../../node_modules/@tamagui/shapes/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_Square(), module2.exports);
    __reExport2(src_exports2, require_Circle(), module2.exports);
    __reExport2(src_exports2, require_getShapeSize(), module2.exports);
  }
});

// ../../node_modules/@tamagui/avatar/dist/cjs/Avatar.js
var require_Avatar = __commonJS({
  "../../node_modules/@tamagui/avatar/dist/cjs/Avatar.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Avatar_exports = {};
    __export3(Avatar_exports, {
      Avatar: () => Avatar,
      AvatarFallback: () => AvatarFallback,
      AvatarFallbackFrame: () => AvatarFallbackFrame,
      AvatarFrame: () => AvatarFrame,
      AvatarImage: () => AvatarImage,
      createAvatarScope: () => createAvatarScope
    });
    module2.exports = __toCommonJS3(Avatar_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_core2 = require("@tamagui/core-node");
    var import_create_context = require_cjs4();
    var import_image = require_cjs21();
    var import_shapes = require_cjs22();
    var import_stacks = require_cjs10();
    var React3 = __toESM2(require("react"));
    var AVATAR_NAME = "Avatar";
    var [createAvatarContext, createAvatarScope] = (0, import_create_context.createContextScope)(AVATAR_NAME);
    var [AvatarProvider, useAvatarContext] = createAvatarContext(AVATAR_NAME);
    var IMAGE_NAME = "AvatarImage";
    var AvatarImage = React3.forwardRef(
      (props, forwardedRef) => {
        var _a;
        const { __scopeAvatar, src, onLoadingStatusChange = /* @__PURE__ */ __name(() => {
        }, "onLoadingStatusChange"), ...imageProps } = props;
        const context = useAvatarContext(IMAGE_NAME, __scopeAvatar);
        const [status, setStatus] = React3.useState("idle");
        const extras = (0, import_core2.getVariantExtras)(props);
        const shapeSize = (0, import_core2.getVariableValue)((_a = (0, import_shapes.getShapeSize)(context.size, extras)) == null ? void 0 : _a.width);
        React3.useEffect(() => {
          setStatus("idle");
        }, [JSON.stringify(src)]);
        React3.useEffect(() => {
          onLoadingStatusChange(status);
          context.onImageLoadingStatusChange(status);
        }, [status]);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_stacks.YStack, {
          fullscreen: true,
          zIndex: 1,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_image.Image, {
            fullscreen: true,
            ...typeof shapeSize === "number" && !isNaN(shapeSize) && {
              width: shapeSize,
              height: shapeSize
            },
            ...imageProps,
            ref: forwardedRef,
            src,
            onError: () => {
              setStatus("error");
            },
            onLoad: () => {
              setStatus("loaded");
            }
          })
        });
      }
    );
    AvatarImage.displayName = IMAGE_NAME;
    var FALLBACK_NAME = "AvatarFallback";
    var AvatarFallbackFrame = (0, import_core2.styled)(import_stacks.YStack, {
      name: FALLBACK_NAME,
      position: "absolute",
      fullscreen: true,
      zIndex: 0
    });
    var AvatarFallback = AvatarFallbackFrame.extractable(
      React3.forwardRef(
        (props, forwardedRef) => {
          const { __scopeAvatar, delayMs, ...fallbackProps } = props;
          const context = useAvatarContext(FALLBACK_NAME, __scopeAvatar);
          const [canRender, setCanRender] = React3.useState(delayMs === void 0);
          React3.useEffect(() => {
            if (delayMs !== void 0) {
              const timerId = setTimeout(() => setCanRender(true), delayMs);
              return () => clearTimeout(timerId);
            }
          }, [delayMs]);
          return canRender && context.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallbackFrame, {
            ...fallbackProps,
            ref: forwardedRef
          }) : null;
        }
      )
    );
    AvatarFallback.displayName = FALLBACK_NAME;
    var AvatarFrame = (0, import_core2.styled)(import_shapes.Square, {
      name: AVATAR_NAME,
      position: "relative",
      overflow: "hidden"
    });
    var Avatar = (0, import_core2.withStaticProperties)(
      React3.forwardRef((props, forwardedRef) => {
        const { __scopeAvatar, size = "$4", ...avatarProps } = props;
        const [imageLoadingStatus, setImageLoadingStatus] = React3.useState("idle");
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarProvider, {
          size,
          scope: __scopeAvatar,
          imageLoadingStatus,
          onImageLoadingStatusChange: setImageLoadingStatus,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFrame, {
            size,
            ...avatarProps,
            ref: forwardedRef
          })
        });
      }),
      {
        Image: AvatarImage,
        Fallback: AvatarFallback
      }
    );
    Avatar.displayName = AVATAR_NAME;
  }
});

// ../../node_modules/@tamagui/avatar/dist/cjs/index.js
var require_cjs23 = __commonJS({
  "../../node_modules/@tamagui/avatar/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_Avatar(), module2.exports);
  }
});

// ../../node_modules/@tamagui/font-size/dist/cjs/getFontSize.js
var require_getFontSize = __commonJS({
  "../../node_modules/@tamagui/font-size/dist/cjs/getFontSize.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var getFontSize_exports = {};
    __export3(getFontSize_exports, {
      getFontSize: () => getFontSize,
      getFontSizeToken: () => getFontSizeToken,
      getFontSizeVariable: () => getFontSizeVariable
    });
    module2.exports = __toCommonJS3(getFontSize_exports);
    var import_core2 = require("@tamagui/core-node");
    var getFontSize = /* @__PURE__ */ __name((inSize, opts) => {
      const res = getFontSizeVariable(inSize, opts);
      if ((0, import_core2.isVariable)(res)) {
        return +res.val;
      }
      return res ? +res : 16;
    }, "getFontSize");
    var getFontSizeVariable = /* @__PURE__ */ __name((inSize, opts) => {
      const token = getFontSizeToken(inSize, opts);
      if (!token) {
        return inSize;
      }
      const conf = (0, import_core2.getConfig)();
      return conf.fontsParsed[(opts == null ? void 0 : opts.font) || "$body"].size[token];
    }, "getFontSizeVariable");
    var getFontSizeToken = /* @__PURE__ */ __name((inSize, opts) => {
      if (typeof inSize === "number") {
        return null;
      }
      const size = inSize || "$4";
      const relativeSize = (opts == null ? void 0 : opts.relativeSize) || 0;
      const conf = (0, import_core2.getConfig)();
      const fontSize = conf.fontsParsed[(opts == null ? void 0 : opts.font) || "$body"].size;
      const sizeTokens = Object.keys(fontSize);
      let foundIndex = sizeTokens.indexOf(size);
      if (foundIndex === -1) {
        if (size.endsWith(".5")) {
          foundIndex = sizeTokens.indexOf(size.replace(".5", ""));
        }
      }
      if (process.env.NODE_ENV === "development") {
        if (foundIndex === -1) {
          console.warn("No font size found", inSize, opts, "in size tokens", sizeTokens);
        }
      }
      const tokenIndex = Math.min(Math.max(0, foundIndex + relativeSize), sizeTokens.length - 1);
      return sizeTokens[tokenIndex] ?? size;
    }, "getFontSizeToken");
  }
});

// ../../node_modules/@tamagui/font-size/dist/cjs/index.js
var require_cjs24 = __commonJS({
  "../../node_modules/@tamagui/font-size/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_getFontSize(), module2.exports);
  }
});

// ../../node_modules/@tamagui/helpers/dist/cjs/clamp.js
var require_clamp = __commonJS({
  "../../node_modules/@tamagui/helpers/dist/cjs/clamp.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var clamp_exports = {};
    __export3(clamp_exports, {
      clamp: () => clamp
    });
    module2.exports = __toCommonJS3(clamp_exports);
    function clamp(value, [min, max]) {
      return Math.min(max, Math.max(min, value));
    }
    __name(clamp, "clamp");
  }
});

// ../../node_modules/@tamagui/helpers/dist/cjs/composeEventHandlers.js
var require_composeEventHandlers = __commonJS({
  "../../node_modules/@tamagui/helpers/dist/cjs/composeEventHandlers.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var composeEventHandlers_exports = {};
    __export3(composeEventHandlers_exports, {
      composeEventHandlers: () => composeEventHandlers
    });
    module2.exports = __toCommonJS3(composeEventHandlers_exports);
    function composeEventHandlers(og, next, { checkDefaultPrevented = true } = {}) {
      return /* @__PURE__ */ __name(function composedEventHandler(event) {
        og == null ? void 0 : og(event);
        if (!checkDefaultPrevented || !("defaultPrevented" in event) || "defaultPrevented" in event && !event.defaultPrevented) {
          return next == null ? void 0 : next(event);
        }
      }, "composedEventHandler");
    }
    __name(composeEventHandlers, "composeEventHandlers");
  }
});

// ../../node_modules/@tamagui/helpers/dist/cjs/concatClassName.js
var require_concatClassName = __commonJS({
  "../../node_modules/@tamagui/helpers/dist/cjs/concatClassName.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var concatClassName_exports = {};
    __export3(concatClassName_exports, {
      concatClassName: () => concatClassName
    });
    module2.exports = __toCommonJS3(concatClassName_exports);
    function concatClassName(_cn) {
      const args = arguments;
      const usedPrefixes = [];
      let final = "";
      const len = args.length;
      let propObjects = null;
      for (let x = len; x >= 0; x--) {
        const cns = args[x];
        if (!cns)
          continue;
        if (!Array.isArray(cns) && typeof cns !== "string") {
          propObjects = propObjects || [];
          propObjects.push(cns);
          continue;
        }
        const names = Array.isArray(cns) ? cns : cns.split(" ");
        const numNames = names.length;
        for (let i = numNames - 1; i >= 0; i--) {
          const name = names[i];
          if (!name || name === " ")
            continue;
          if (name[0] !== "_") {
            final = name + " " + final;
            continue;
          }
          const splitIndex = name.indexOf("-");
          if (splitIndex < 1) {
            final = name + " " + final;
            continue;
          }
          const nextChar = name[splitIndex + 1];
          const isMediaQuery = nextChar === "_";
          const styleKey = name.slice(1, name.lastIndexOf("-"));
          const mediaKey = isMediaQuery ? name.slice(splitIndex + 2, splitIndex + 7) : null;
          const uid = mediaKey ? styleKey + mediaKey : styleKey;
          if (usedPrefixes.indexOf(uid) > -1) {
            continue;
          }
          usedPrefixes.push(uid);
          const propName = styleKey;
          if (propName && propObjects) {
            if (propObjects.some((po) => {
              if (mediaKey) {
                const propKey = pseudoInvert[mediaKey];
                return po && po[propKey] && propName in po[propKey] && po[propKey] !== null;
              }
              const res = po && propName in po && po[propName] !== null;
              return res;
            })) {
              continue;
            }
          }
          final = name + " " + final;
        }
      }
      return final;
    }
    __name(concatClassName, "concatClassName");
    var pseudoInvert = {
      hover: "hoverStyle",
      focus: "focusStyle",
      press: "pressStyle"
    };
  }
});

// ../../node_modules/@tamagui/helpers/dist/cjs/validStyleProps.js
var require_validStyleProps = __commonJS({
  "../../node_modules/@tamagui/helpers/dist/cjs/validStyleProps.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var validStyleProps_exports = {};
    __export3(validStyleProps_exports, {
      stylePropsAll: () => stylePropsAll,
      stylePropsText: () => stylePropsText,
      stylePropsTextOnly: () => stylePropsTextOnly,
      stylePropsTransform: () => stylePropsTransform,
      stylePropsView: () => stylePropsView,
      validPseudoKeys: () => validPseudoKeys,
      validStyles: () => validStyles
    });
    module2.exports = __toCommonJS3(validStyleProps_exports);
    var stylePropsTransform = Object.freeze({
      x: true,
      y: true,
      scale: true,
      perspective: true,
      scaleX: true,
      scaleY: true,
      skewX: true,
      skewY: true,
      matrix: true,
      rotate: true,
      rotateY: true,
      rotateX: true,
      rotateZ: true
    });
    var stylePropsView = Object.freeze({
      backfaceVisibility: true,
      backgroundColor: true,
      borderBottomColor: true,
      borderBottomStyle: true,
      borderTopStyle: true,
      borderLeftStyle: true,
      borderRightStyle: true,
      borderBottomEndRadius: true,
      borderBottomLeftRadius: true,
      borderBottomRightRadius: true,
      borderBottomStartRadius: true,
      borderBottomWidth: true,
      borderColor: true,
      borderEndColor: true,
      borderLeftColor: true,
      borderLeftWidth: true,
      borderRadius: true,
      borderRightColor: true,
      borderRightWidth: true,
      borderStartColor: true,
      borderStyle: true,
      borderTopColor: true,
      borderTopEndRadius: true,
      borderTopLeftRadius: true,
      borderTopRightRadius: true,
      borderTopStartRadius: true,
      borderTopWidth: true,
      borderWidth: true,
      opacity: true,
      transform: true,
      alignContent: true,
      alignItems: true,
      alignSelf: true,
      aspectRatio: true,
      borderEndWidth: true,
      borderStartWidth: true,
      bottom: true,
      display: true,
      end: true,
      flex: true,
      flexBasis: true,
      flexDirection: true,
      flexGrow: true,
      flexShrink: true,
      flexWrap: true,
      height: true,
      justifyContent: true,
      left: true,
      margin: true,
      marginBottom: true,
      marginEnd: true,
      marginHorizontal: true,
      marginLeft: true,
      marginRight: true,
      marginStart: true,
      marginTop: true,
      marginVertical: true,
      maxHeight: true,
      maxWidth: true,
      minHeight: true,
      minWidth: true,
      overflow: true,
      padding: true,
      paddingBottom: true,
      paddingEnd: true,
      paddingHorizontal: true,
      paddingLeft: true,
      paddingRight: true,
      paddingStart: true,
      paddingTop: true,
      paddingVertical: true,
      position: true,
      right: true,
      start: true,
      top: true,
      width: true,
      zIndex: true,
      direction: true,
      shadowColor: true,
      shadowOffset: true,
      shadowOpacity: true,
      shadowRadius: true,
      ...stylePropsTransform,
      ...process.env.TAMAGUI_TARGET === "web" && {
        overflowX: true,
        overflowY: true,
        userSelect: true,
        cursor: true,
        contain: true,
        pointerEvents: true,
        boxSizing: true,
        boxShadow: true
      }
    });
    var stylePropsTextOnly = Object.freeze({
      color: true,
      fontFamily: true,
      fontSize: true,
      fontStyle: true,
      fontWeight: true,
      letterSpacing: true,
      lineHeight: true,
      textAlign: true,
      textDecorationLine: true,
      textDecorationStyle: true,
      textDecorationColor: true,
      textShadowColor: true,
      textShadowOffset: true,
      textShadowRadius: true,
      textTransform: true,
      ...process.env.TAMAGUI_TARGET === "web" && {
        whiteSpace: true,
        wordWrap: true,
        textOverflow: true,
        textDecorationDistance: true,
        userSelect: true,
        selectable: true,
        cursor: true,
        WebkitLineClamp: true,
        WebkitBoxOrient: true
      }
    });
    var stylePropsText = Object.freeze({
      ...stylePropsView,
      ...stylePropsTextOnly
    });
    var stylePropsAll = stylePropsText;
    var validPseudoKeys = Object.freeze({
      enterStyle: true,
      exitStyle: true,
      hoverStyle: true,
      pressStyle: true,
      focusStyle: true
    });
    var validStyles = Object.freeze({
      ...validPseudoKeys,
      ...stylePropsView
    });
  }
});

// ../../node_modules/@tamagui/helpers/dist/cjs/types.js
var require_types2 = __commonJS({
  "../../node_modules/@tamagui/helpers/dist/cjs/types.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var types_exports = {};
    module2.exports = __toCommonJS3(types_exports);
  }
});

// ../../node_modules/@tamagui/simple-hash/dist/cjs/index.js
var require_cjs25 = __commonJS({
  "../../node_modules/@tamagui/simple-hash/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    __export3(src_exports2, {
      isValidCSSCharCode: () => isValidCSSCharCode,
      simpleHash: () => simpleHash
    });
    module2.exports = __toCommonJS3(src_exports2);
    var simpleHash = /* @__PURE__ */ __name((str, hashMin = 10) => {
      let hash = 0;
      let valids = ``;
      const len = str.length;
      for (let i = 0; i < len; i++) {
        const char = str.charCodeAt(i);
        if (isValidCSSCharCode(char) && len <= hashMin) {
          valids += str[i];
        } else {
          hash = (hash << 5) - hash + char;
          hash &= hash;
        }
      }
      return valids + (hash ? new Uint32Array([hash])[0].toString(36) : "");
    }, "simpleHash");
    function isValidCSSCharCode(code) {
      return code >= 65 && code <= 90 || code >= 97 && code <= 122 || code == 95 || code === 45 || code >= 48 && code <= 57;
    }
    __name(isValidCSSCharCode, "isValidCSSCharCode");
  }
});

// ../../node_modules/@tamagui/helpers/dist/cjs/index.js
var require_cjs26 = __commonJS({
  "../../node_modules/@tamagui/helpers/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_clamp(), module2.exports);
    __reExport2(src_exports2, require_composeEventHandlers(), module2.exports);
    __reExport2(src_exports2, require_concatClassName(), module2.exports);
    __reExport2(src_exports2, require_validStyleProps(), module2.exports);
    __reExport2(src_exports2, require_types2(), module2.exports);
    __reExport2(src_exports2, require_cjs25(), module2.exports);
  }
});

// ../../node_modules/@tamagui/helpers-tamagui/dist/cjs/prevent.js
var require_prevent = __commonJS({
  "../../node_modules/@tamagui/helpers-tamagui/dist/cjs/prevent.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var prevent_exports = {};
    __export3(prevent_exports, {
      prevent: () => prevent
    });
    module2.exports = __toCommonJS3(prevent_exports);
    var prevent = /* @__PURE__ */ __name((e) => [e.preventDefault(), e.stopPropagation()], "prevent");
  }
});

// ../../node_modules/@tamagui/helpers-tamagui/dist/cjs/getSpace.js
var require_getSpace = __commonJS({
  "../../node_modules/@tamagui/helpers-tamagui/dist/cjs/getSpace.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var getSpace_exports = {};
    __export3(getSpace_exports, {
      getSpace: () => getSpace
    });
    module2.exports = __toCommonJS3(getSpace_exports);
    var import_core2 = require("@tamagui/core-node");
    var getSpace = /* @__PURE__ */ __name((token, sizeUpOrDownBy = 0) => {
      const spaces = (0, import_core2.getTokens)(true).space;
      const spaceNames = Object.keys(spaces);
      const key = spaceNames[Math.max(0, spaceNames.indexOf(String(token || "$4")) + sizeUpOrDownBy)];
      return spaces[key] || spaces["$4"];
    }, "getSpace");
  }
});

// ../../node_modules/@tamagui/helpers-tamagui/dist/cjs/useCurrentColor.js
var require_useCurrentColor = __commonJS({
  "../../node_modules/@tamagui/helpers-tamagui/dist/cjs/useCurrentColor.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useCurrentColor_exports = {};
    __export3(useCurrentColor_exports, {
      useCurrentColor: () => useCurrentColor
    });
    module2.exports = __toCommonJS3(useCurrentColor_exports);
    var import_core2 = require("@tamagui/core-node");
    var useCurrentColor = /* @__PURE__ */ __name((colorProp) => {
      const theme = (0, import_core2.useTheme)();
      let color;
      if (theme && colorProp && colorProp in theme) {
        color = theme[colorProp];
      } else if (colorProp) {
        color = colorProp;
      } else {
        color = theme == null ? void 0 : theme.color;
      }
      return (0, import_core2.variableToString)(color);
    }, "useCurrentColor");
  }
});

// ../../node_modules/@tamagui/helpers-tamagui/dist/cjs/useGetThemedIcon.js
var require_useGetThemedIcon = __commonJS({
  "../../node_modules/@tamagui/helpers-tamagui/dist/cjs/useGetThemedIcon.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useGetThemedIcon_exports = {};
    __export3(useGetThemedIcon_exports, {
      useGetThemedIcon: () => useGetThemedIcon
    });
    module2.exports = __toCommonJS3(useGetThemedIcon_exports);
    var import_react = __toESM2(require("react"));
    var import_useCurrentColor = require_useCurrentColor();
    var useGetThemedIcon = /* @__PURE__ */ __name((props) => {
      const color = (0, import_useCurrentColor.useCurrentColor)(props.color);
      return (el) => {
        if (el) {
          if ((0, import_react.isValidElement)(el)) {
            return import_react.default.cloneElement(el, {
              ...props,
              color,
              ...el.props
            });
          }
          return import_react.default.createElement(el, {
            ...props,
            color
          });
        }
        return el;
      };
    }, "useGetThemedIcon");
  }
});

// ../../node_modules/@tamagui/helpers-tamagui/dist/cjs/index.js
var require_cjs27 = __commonJS({
  "../../node_modules/@tamagui/helpers-tamagui/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_cjs26(), module2.exports);
    __reExport2(src_exports2, require_prevent(), module2.exports);
    __reExport2(src_exports2, require_getSpace(), module2.exports);
    __reExport2(src_exports2, require_useCurrentColor(), module2.exports);
    __reExport2(src_exports2, require_useGetThemedIcon(), module2.exports);
  }
});

// ../../node_modules/@tamagui/button/dist/cjs/Button.js
var require_Button = __commonJS({
  "../../node_modules/@tamagui/button/dist/cjs/Button.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Button_exports = {};
    __export3(Button_exports, {
      Button: () => Button2,
      ButtonFrame: () => ButtonFrame,
      ButtonText: () => ButtonText,
      buttonStaticConfig: () => buttonStaticConfig,
      useButton: () => useButton
    });
    module2.exports = __toCommonJS3(Button_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_core2 = require("@tamagui/core-node");
    var import_font_size = require_cjs24();
    var import_get_button_sized = require_cjs9();
    var import_helpers_tamagui = require_cjs27();
    var import_stacks = require_cjs10();
    var import_text = require_cjs18();
    var import_react = __toESM2(require("react"));
    import_react.default["createElement"];
    var ButtonFrame = (0, import_core2.styled)(import_stacks.ThemeableStack, {
      name: "Button",
      tag: "button",
      focusable: true,
      hoverTheme: true,
      pressTheme: true,
      backgrounded: true,
      borderWidth: 1,
      borderColor: "transparent",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexDirection: "row",
      cursor: "pointer",
      pressStyle: {
        borderColor: "transparent"
      },
      hoverStyle: {
        borderColor: "transparent"
      },
      focusStyle: {
        borderColor: "$borderColorFocus"
      },
      variants: {
        size: {
          "...size": import_get_button_sized.getButtonSized
        },
        active: {
          true: {
            hoverStyle: {
              backgroundColor: "$background"
            }
          }
        },
        disabled: {
          true: {
            opacity: 0.375,
            pointerEvents: "none"
          }
        }
      },
      defaultVariants: {
        size: "$4"
      }
    });
    var ButtonText = (0, import_core2.styled)(import_text.SizableText, {
      color: "$color",
      userSelect: "none",
      cursor: "pointer",
      flexGrow: 0,
      flexShrink: 1,
      ellipse: true
    });
    function useButton(props, { Text: Text2 = ButtonText } = { Text: ButtonText }) {
      const {
        children,
        icon,
        iconAfter,
        noTextWrap,
        theme: themeName,
        space,
        spaceFlex,
        scaleIcon = 1,
        scaleSpace = 0.66,
        separator,
        color,
        fontWeight,
        letterSpacing,
        fontSize,
        fontFamily,
        textAlign,
        textProps,
        ...rest
      } = props;
      const isInsideButton = import_core2.isRSC ? false : (0, import_react.useContext)(import_core2.ButtonInsideButtonContext);
      const mediaActiveProps = (0, import_core2.useMediaPropsActive)(props);
      const size = mediaActiveProps.size || "$4";
      const iconSize = (typeof size === "number" ? size * 0.5 : (0, import_font_size.getFontSize)(size)) * scaleIcon;
      const getThemedIcon = (0, import_helpers_tamagui.useGetThemedIcon)({ size: iconSize, color });
      const [themedIcon, themedIconAfter] = [icon, iconAfter].map(getThemedIcon);
      const spaceSize = (0, import_core2.getVariableValue)(iconSize) * scaleSpace;
      const contents = (0, import_text.wrapChildrenInText)(Text2, mediaActiveProps);
      const inner = themedIcon || themedIconAfter ? (0, import_core2.spacedChildren)({
        space: spaceSize,
        spaceFlex,
        separator,
        direction: props.flexDirection === "column" || props.flexDirection === "column-reverse" ? "vertical" : "horizontal",
        children: [themedIcon, contents, themedIconAfter]
      }) : contents;
      return {
        spaceSize,
        isInsideButton,
        props: {
          ...props.disabled && {
            focusable: void 0,
            focusStyle: {
              borderColor: "$background"
            }
          },
          ...isInsideButton && {
            tag: "span"
          },
          ...rest,
          children: import_core2.isRSC ? inner : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core2.ButtonInsideButtonContext.Provider, {
            value: true,
            children: inner
          })
        }
      };
    }
    __name(useButton, "useButton");
    var ButtonComponent = (0, import_react.forwardRef)(/* @__PURE__ */ __name(function Button3(props, ref) {
      const { props: buttonProps } = useButton(props);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonFrame, {
        ...buttonProps,
        ref
      });
    }, "Button"));
    var buttonStaticConfig = {
      inlineProps: /* @__PURE__ */ new Set([
        "color",
        "fontWeight",
        "fontSize",
        "fontFamily",
        "letterSpacing",
        "textAlign"
      ])
    };
    var Button2 = ButtonFrame.extractable((0, import_core2.themeable)(ButtonComponent), buttonStaticConfig);
  }
});

// ../../node_modules/@tamagui/button/dist/cjs/index.js
var require_cjs28 = __commonJS({
  "../../node_modules/@tamagui/button/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_Button(), module2.exports);
  }
});

// ../../node_modules/@tamagui/card/dist/cjs/Card.js
var require_Card = __commonJS({
  "../../node_modules/@tamagui/card/dist/cjs/Card.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Card_exports = {};
    __export3(Card_exports, {
      Card: () => Card,
      CardBackground: () => CardBackground,
      CardFooter: () => CardFooter,
      CardFrame: () => CardFrame,
      CardHeader: () => CardHeader
    });
    module2.exports = __toCommonJS3(Card_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_core2 = require("@tamagui/core-node");
    var import_stacks = require_cjs10();
    var import_react = __toESM2(require("react"));
    import_react.default["createElement"];
    var CardFrame = (0, import_core2.styled)(import_stacks.ThemeableStack, {
      name: "Card",
      backgroundColor: "$background",
      position: "relative",
      overflow: "hidden",
      variants: {
        size: {
          "...size": (val, { tokens }) => {
            return {
              borderRadius: tokens.radius[val] ?? val
            };
          }
        }
      },
      defaultVariants: {
        size: "$4"
      }
    });
    var CardHeader = (0, import_core2.styled)(import_stacks.ThemeableStack, {
      name: "CardHeader",
      zIndex: 10,
      backgroundColor: "transparent",
      marginBottom: "auto",
      variants: {
        size: {
          "...size": (val, { tokens }) => {
            return {
              padding: tokens.space[val] ?? val
            };
          }
        }
      }
    });
    var CardFooter = (0, import_core2.styled)(CardHeader, {
      name: "CardFooter",
      zIndex: 5,
      flexDirection: "row",
      marginTop: "auto",
      marginBottom: 0
    });
    var CardBackground = (0, import_core2.styled)(import_stacks.ThemeableStack, {
      name: "CardBackground",
      zIndex: 0,
      fullscreen: true,
      overflow: "hidden",
      pointerEvents: "none",
      padding: 0
    });
    var Card = (0, import_core2.withStaticProperties)(
      CardFrame.extractable(
        (0, import_core2.themeable)(
          (0, import_react.forwardRef)(
            ({ size, __scopeCard, children, ...props }, ref) => {
              return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardFrame, {
                ref,
                ...props,
                children: import_react.default.Children.map(children, (child) => {
                  if ((0, import_core2.isTamaguiElement)(child) && !child.props.size) {
                    return (0, import_react.cloneElement)(child, {
                      size
                    });
                  }
                  return child;
                })
              });
            }
          )
        )
      ),
      {
        Header: CardHeader,
        Footer: CardFooter,
        Background: CardBackground
      }
    );
  }
});

// ../../node_modules/@tamagui/card/dist/cjs/index.js
var require_cjs29 = __commonJS({
  "../../node_modules/@tamagui/card/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_Card(), module2.exports);
  }
});

// ../../node_modules/@tamagui/focusable/dist/cjs/registerFocusable.js
var require_registerFocusable = __commonJS({
  "../../node_modules/@tamagui/focusable/dist/cjs/registerFocusable.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var registerFocusable_exports = {};
    __export3(registerFocusable_exports, {
      focusFocusable: () => focusFocusable,
      registerFocusable: () => registerFocusable,
      unregisterFocusable: () => unregisterFocusable
    });
    module2.exports = __toCommonJS3(registerFocusable_exports);
    var registerFocusable = /* @__PURE__ */ __name((id, input) => {
    }, "registerFocusable");
    var unregisterFocusable = /* @__PURE__ */ __name((id) => {
    }, "unregisterFocusable");
    var focusFocusable = /* @__PURE__ */ __name((id) => {
    }, "focusFocusable");
  }
});

// ../../node_modules/@tamagui/focusable/dist/cjs/focusableInputHOC.js
var require_focusableInputHOC = __commonJS({
  "../../node_modules/@tamagui/focusable/dist/cjs/focusableInputHOC.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var focusableInputHOC_exports = {};
    __export3(focusableInputHOC_exports, {
      focusableInputHOC: () => focusableInputHOC
    });
    module2.exports = __toCommonJS3(focusableInputHOC_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_compose_refs = require_cjs3();
    var import_core2 = require("@tamagui/core-node");
    var import_react = require("react");
    var import_react2 = require("react");
    var import_registerFocusable = require_registerFocusable();
    function focusableInputHOC(Component2) {
      return (0, import_react2.forwardRef)(
        (props, ref) => {
          const isInput = (0, import_core2.isTamaguiComponent)(Component2) && Component2.staticConfig.isInput;
          const inputValue = (0, import_react.useRef)(props.value || props.defaultValue || "");
          const inputRef = (0, import_react2.useCallback)(
            (input) => {
              if (!props.id)
                return;
              if (!input)
                return;
              (0, import_registerFocusable.registerFocusable)(props.id, {
                focus: input.focus,
                ...isInput && {
                  focusAndSelect() {
                    input.focus();
                    if (input.setSelection && typeof inputValue.current === "string") {
                      input.setSelection(0, inputValue.current.length);
                    }
                  }
                }
              });
            },
            [isInput, props.id]
          );
          const combinedRefs = (0, import_compose_refs.composeRefs)(ref, inputRef);
          (0, import_react2.useEffect)(() => {
            if (!props.id)
              return;
            return () => {
              (0, import_registerFocusable.unregisterFocusable)(props.id);
            };
          }, [props.id]);
          const onChangeText = (0, import_core2.useEvent)((value) => {
            var _a;
            inputValue.current = value;
            (_a = props.onChangeText) == null ? void 0 : _a.call(props, value);
          });
          const finalProps = isInput ? {
            ...props,
            onChangeText
          } : props;
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component2, {
            ref: combinedRefs,
            ...finalProps
          });
        }
      );
    }
    __name(focusableInputHOC, "focusableInputHOC");
  }
});

// ../../node_modules/@tamagui/focusable/dist/cjs/focusable.js
var require_focusable = __commonJS({
  "../../node_modules/@tamagui/focusable/dist/cjs/focusable.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var focusable_exports = {};
    module2.exports = __toCommonJS3(focusable_exports);
  }
});

// ../../node_modules/@tamagui/focusable/dist/cjs/index.js
var require_cjs30 = __commonJS({
  "../../node_modules/@tamagui/focusable/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_registerFocusable(), module2.exports);
    __reExport2(src_exports2, require_focusableInputHOC(), module2.exports);
    __reExport2(src_exports2, require_focusable(), module2.exports);
  }
});

// ../../node_modules/@tamagui/label/dist/cjs/Label.js
var require_Label = __commonJS({
  "../../node_modules/@tamagui/label/dist/cjs/Label.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Label_exports = {};
    __export3(Label_exports, {
      Label: () => Label,
      LabelFrame: () => LabelFrame,
      useLabelContext: () => useLabelContext
    });
    module2.exports = __toCommonJS3(Label_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_compose_refs = require_cjs3();
    var import_core2 = require("@tamagui/core-node");
    var import_create_context = require_cjs4();
    var import_focusable = require_cjs30();
    var import_get_button_sized = require_cjs9();
    var import_get_font_sized = require_cjs17();
    var import_text = require_cjs18();
    var React3 = __toESM2(require("react"));
    var NAME = "Label";
    var [LabelProvider, useLabelContextImpl] = (0, import_create_context.createContext)(NAME, {
      id: void 0,
      controlRef: { current: null }
    });
    var LabelFrame = (0, import_core2.styled)(import_text.SizableText, {
      name: "Label",
      tag: "label",
      size: "$4",
      backgroundColor: "transparent",
      display: "flex",
      alignItems: "center",
      selectable: false,
      cursor: "default",
      pressStyle: {
        color: "$colorPress"
      },
      variants: {
        size: {
          "...size": (val, extras) => {
            const buttonStyle = (0, import_get_button_sized.getButtonSized)(val, extras);
            return {
              ...(0, import_get_font_sized.getFontSized)(val, extras),
              height: buttonStyle.height,
              lineHeight: buttonStyle.height
            };
          }
        }
      }
    });
    var LabelComponent = React3.forwardRef((props, forwardedRef) => {
      const { htmlFor, id: idProp, ...labelProps } = props;
      const controlRef = React3.useRef(null);
      const ref = React3.useRef(null);
      const composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, ref);
      const backupId = (0, import_core2.useId)();
      const id = idProp ?? backupId;
      if (import_core2.isWeb) {
        React3.useEffect(() => {
          if (htmlFor) {
            const element = document.getElementById(htmlFor);
            const label = ref.current;
            if (label && element) {
              const getAriaLabel = /* @__PURE__ */ __name(() => element.getAttribute("aria-labelledby"), "getAriaLabel");
              const ariaLabelledBy = [id, getAriaLabel()].filter(Boolean).join(" ");
              element.setAttribute("aria-labelledby", ariaLabelledBy);
              controlRef.current = element;
              return () => {
                var _a;
                if (!id)
                  return;
                const ariaLabelledBy2 = (_a = getAriaLabel()) == null ? void 0 : _a.replace(id, "");
                if (ariaLabelledBy2 === "") {
                  element.removeAttribute("aria-labelledby");
                } else if (ariaLabelledBy2) {
                  element.setAttribute("aria-labelledby", ariaLabelledBy2);
                }
              };
            }
          }
        }, [id, htmlFor]);
      }
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelProvider, {
        id,
        controlRef,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelFrame, {
          role: "label",
          id,
          ...labelProps,
          ref: composedRefs,
          onMouseDown: (event) => {
            var _a;
            (_a = props.onMouseDown) == null ? void 0 : _a.call(props, event);
            if (!event.defaultPrevented && event.detail > 1) {
              event.preventDefault();
            }
          },
          onPress: (event) => {
            var _a;
            (_a = props.onPress) == null ? void 0 : _a.call(props, event);
            if (import_core2.isWeb) {
              if (!controlRef.current || event.defaultPrevented)
                return;
              const isClickingControl = controlRef.current.contains(event.target);
              const isUserClick = event.isTrusted === true;
              if (!isClickingControl && isUserClick) {
                controlRef.current.click();
                controlRef.current.focus();
              }
            } else {
              if (props.htmlFor) {
                (0, import_focusable.focusFocusable)(props.htmlFor);
              }
            }
          }
        })
      });
    });
    LabelComponent.displayName = NAME;
    var Label = LabelFrame.extractable((0, import_core2.themeable)(LabelComponent), {
      neverFlatten: true
    });
    var useLabelContext = /* @__PURE__ */ __name((element) => {
      const context = useLabelContextImpl("LabelConsumer");
      const { controlRef } = context;
      React3.useEffect(() => {
        if (element)
          controlRef.current = element;
      }, [element, controlRef]);
      return context.id;
    }, "useLabelContext");
  }
});

// ../../node_modules/@tamagui/label/dist/cjs/index.js
var require_cjs31 = __commonJS({
  "../../node_modules/@tamagui/label/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_Label(), module2.exports);
  }
});

// ../../node_modules/@tamagui/list-item/dist/cjs/ListItem.js
var require_ListItem = __commonJS({
  "../../node_modules/@tamagui/list-item/dist/cjs/ListItem.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var ListItem_exports = {};
    __export3(ListItem_exports, {
      ListItem: () => ListItem,
      ListItemFrame: () => ListItemFrame,
      ListItemSubtitle: () => ListItemSubtitle,
      ListItemText: () => ListItemText,
      ListItemTitle: () => ListItemTitle,
      listItemStaticConfig: () => listItemStaticConfig,
      useListItem: () => useListItem
    });
    module2.exports = __toCommonJS3(ListItem_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_core2 = require("@tamagui/core-node");
    var import_font_size = require_cjs24();
    var import_helpers_tamagui = require_cjs27();
    var import_stacks = require_cjs10();
    var import_text = require_cjs18();
    var import_react = __toESM2(require("react"));
    import_react.default["createElement"];
    var ListItemFrame = (0, import_core2.styled)(import_stacks.ThemeableStack, {
      name: "ListItem",
      tag: "li",
      alignItems: "center",
      flexWrap: "nowrap",
      width: "100%",
      borderColor: "$borderColor",
      maxWidth: "100%",
      overflow: "hidden",
      flexDirection: "row",
      variants: {
        size: {
          "...size": (val, { tokens }) => {
            return {
              minHeight: tokens.size[val],
              paddingHorizontal: tokens.space[val],
              paddingVertical: (0, import_helpers_tamagui.getSpace)(val, -2)
            };
          }
        },
        active: {
          true: {
            hoverStyle: {
              backgroundColor: "$background"
            }
          }
        },
        disabled: {
          true: {
            opacity: 0.5,
            pointerEvents: "none"
          }
        }
      },
      defaultVariants: {
        size: "$4"
      }
    });
    var ListItemText = (0, import_core2.styled)(import_text.SizableText, {
      name: "ListItemText",
      color: "$color",
      userSelect: "none",
      flexGrow: 1,
      flexShrink: 1,
      ellipse: true,
      cursor: "default"
    });
    var ListItemSubtitle = (0, import_core2.styled)(ListItemText, {
      name: "ListItemSubtitle",
      color: "$colorPress",
      marginTop: "$-2",
      opacity: 0.65,
      maxWidth: "100%",
      size: "$3"
    });
    var ListItemTitle = (0, import_core2.styled)(ListItemText, {
      name: "ListItemTitle"
    });
    var useListItem = /* @__PURE__ */ __name((props, {
      Text: Text2 = ListItemText,
      Subtitle = ListItemSubtitle,
      Title = ListItemTitle
    } = { Text: ListItemText, Subtitle: ListItemSubtitle, Title: ListItemTitle }) => {
      const {
        children,
        icon,
        iconAfter,
        noTextWrap,
        theme: themeName,
        space,
        spaceFlex,
        scaleIcon = 1,
        scaleSpace = 1,
        subTitle,
        color,
        fontWeight,
        letterSpacing,
        fontSize,
        fontFamily,
        textAlign,
        textProps,
        title,
        ...rest
      } = props;
      const mediaActiveProps = (0, import_core2.useMediaPropsActive)(props);
      const size = mediaActiveProps.size || "$4";
      const subtitleSizeToken = (0, import_core2.getSize)(size, -3);
      const subtitleSize = `$${subtitleSizeToken.key}`;
      const iconSize = (0, import_font_size.getFontSize)(size) * scaleIcon;
      const getThemedIcon = (0, import_helpers_tamagui.useGetThemedIcon)({ size: iconSize, color });
      const [themedIcon, themedIconAfter] = [icon, iconAfter].map(getThemedIcon);
      const spaceSize = (0, import_core2.getVariableValue)(iconSize) * scaleSpace;
      const contents = (0, import_text.wrapChildrenInText)(Text2, mediaActiveProps);
      return {
        props: {
          fontFamily,
          ...rest,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
            children: [
              themedIcon ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
                children: [
                  themedIcon,
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core2.Spacer, {
                    size: spaceSize
                  })
                ]
              }) : null,
              Boolean(title || subTitle) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_stacks.YStack, {
                flex: 1,
                children: [
                  noTextWrap === "all" ? title : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, {
                    size,
                    children: title
                  }),
                  subTitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core2.Spacer, {
                        flex: true,
                        size: spaceSize * 0.333
                      }),
                      typeof subTitle === "string" && noTextWrap !== "all" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Subtitle, {
                        size: subtitleSize,
                        children: subTitle
                      }) : subTitle
                    ]
                  }) : null,
                  contents
                ]
              }) : contents,
              themedIconAfter ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core2.Spacer, {
                    flex: true,
                    size: spaceSize
                  }),
                  themedIconAfter
                ]
              }) : null
            ]
          })
        }
      };
    }, "useListItem");
    var ListItemComponent = (0, import_react.forwardRef)((props, ref) => {
      const { props: listItemProps } = useListItem(props);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListItemFrame, {
        ref,
        ...listItemProps
      });
    });
    var listItemStaticConfig = {
      inlineProps: /* @__PURE__ */ new Set([
        "color",
        "fontWeight",
        "fontSize",
        "fontFamily",
        "letterSpacing",
        "textAlign"
      ])
    };
    var ListItem = (0, import_core2.withStaticProperties)(
      ListItemFrame.extractable((0, import_core2.themeable)(ListItemComponent), listItemStaticConfig),
      {
        Text: ListItemText,
        Subtitle: ListItemSubtitle
      }
    );
  }
});

// ../../node_modules/@tamagui/list-item/dist/cjs/index.js
var require_cjs32 = __commonJS({
  "../../node_modules/@tamagui/list-item/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_ListItem(), module2.exports);
  }
});

// ../../node_modules/@floating-ui/core/dist/floating-ui.core.umd.js
var require_floating_ui_core_umd = __commonJS({
  "../../node_modules/@floating-ui/core/dist/floating-ui.core.umd.js"(exports2, module2) {
    (function(global2, factory) {
      typeof exports2 === "object" && typeof module2 !== "undefined" ? factory(exports2) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.FloatingUICore = {}));
    })(exports2, function(exports3) {
      "use strict";
      function getSide(placement) {
        return placement.split("-")[0];
      }
      __name(getSide, "getSide");
      function getAlignment(placement) {
        return placement.split("-")[1];
      }
      __name(getAlignment, "getAlignment");
      function getMainAxisFromPlacement(placement) {
        return ["top", "bottom"].includes(getSide(placement)) ? "x" : "y";
      }
      __name(getMainAxisFromPlacement, "getMainAxisFromPlacement");
      function getLengthFromAxis(axis) {
        return axis === "y" ? "height" : "width";
      }
      __name(getLengthFromAxis, "getLengthFromAxis");
      function computeCoordsFromPlacement(_ref, placement, rtl) {
        let {
          reference,
          floating
        } = _ref;
        const commonX = reference.x + reference.width / 2 - floating.width / 2;
        const commonY = reference.y + reference.height / 2 - floating.height / 2;
        const mainAxis = getMainAxisFromPlacement(placement);
        const length = getLengthFromAxis(mainAxis);
        const commonAlign = reference[length] / 2 - floating[length] / 2;
        const side = getSide(placement);
        const isVertical = mainAxis === "x";
        let coords;
        switch (side) {
          case "top":
            coords = {
              x: commonX,
              y: reference.y - floating.height
            };
            break;
          case "bottom":
            coords = {
              x: commonX,
              y: reference.y + reference.height
            };
            break;
          case "right":
            coords = {
              x: reference.x + reference.width,
              y: commonY
            };
            break;
          case "left":
            coords = {
              x: reference.x - floating.width,
              y: commonY
            };
            break;
          default:
            coords = {
              x: reference.x,
              y: reference.y
            };
        }
        switch (getAlignment(placement)) {
          case "start":
            coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
            break;
          case "end":
            coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
            break;
        }
        return coords;
      }
      __name(computeCoordsFromPlacement, "computeCoordsFromPlacement");
      const computePosition = /* @__PURE__ */ __name(async (reference, floating, config) => {
        const {
          placement = "bottom",
          strategy = "absolute",
          middleware = [],
          platform
        } = config;
        const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
        {
          if (platform == null) {
            console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" "));
          }
          if (middleware.filter((_ref) => {
            let {
              name
            } = _ref;
            return name === "autoPlacement" || name === "flip";
          }).length > 1) {
            throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement`", "middleware detected. This will lead to an infinite loop. Ensure only", "one of either has been passed to the `middleware` array."].join(" "));
          }
        }
        let rects = await platform.getElementRects({
          reference,
          floating,
          strategy
        });
        let {
          x,
          y
        } = computeCoordsFromPlacement(rects, placement, rtl);
        let statefulPlacement = placement;
        let middlewareData = {};
        let resetCount = 0;
        for (let i = 0; i < middleware.length; i++) {
          const {
            name,
            fn
          } = middleware[i];
          const {
            x: nextX,
            y: nextY,
            data,
            reset
          } = await fn({
            x,
            y,
            initialPlacement: placement,
            placement: statefulPlacement,
            strategy,
            middlewareData,
            rects,
            platform,
            elements: {
              reference,
              floating
            }
          });
          x = nextX != null ? nextX : x;
          y = nextY != null ? nextY : y;
          middlewareData = {
            ...middlewareData,
            [name]: {
              ...middlewareData[name],
              ...data
            }
          };
          {
            if (resetCount > 50) {
              console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" "));
            }
          }
          if (reset && resetCount <= 50) {
            resetCount++;
            if (typeof reset === "object") {
              if (reset.placement) {
                statefulPlacement = reset.placement;
              }
              if (reset.rects) {
                rects = reset.rects === true ? await platform.getElementRects({
                  reference,
                  floating,
                  strategy
                }) : reset.rects;
              }
              ({
                x,
                y
              } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
            }
            i = -1;
            continue;
          }
        }
        return {
          x,
          y,
          placement: statefulPlacement,
          strategy,
          middlewareData
        };
      }, "computePosition");
      function expandPaddingObject(padding) {
        return {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          ...padding
        };
      }
      __name(expandPaddingObject, "expandPaddingObject");
      function getSideObjectFromPadding(padding) {
        return typeof padding !== "number" ? expandPaddingObject(padding) : {
          top: padding,
          right: padding,
          bottom: padding,
          left: padding
        };
      }
      __name(getSideObjectFromPadding, "getSideObjectFromPadding");
      function rectToClientRect(rect) {
        return {
          ...rect,
          top: rect.y,
          left: rect.x,
          right: rect.x + rect.width,
          bottom: rect.y + rect.height
        };
      }
      __name(rectToClientRect, "rectToClientRect");
      async function detectOverflow(middlewareArguments, options) {
        var _await$platform$isEle;
        if (options === void 0) {
          options = {};
        }
        const {
          x,
          y,
          platform,
          rects,
          elements,
          strategy
        } = middlewareArguments;
        const {
          boundary = "clippingAncestors",
          rootBoundary = "viewport",
          elementContext = "floating",
          altBoundary = false,
          padding = 0
        } = options;
        const paddingObject = getSideObjectFromPadding(padding);
        const altContext = elementContext === "floating" ? "reference" : "floating";
        const element = elements[altBoundary ? altContext : elementContext];
        const clippingClientRect = rectToClientRect(await platform.getClippingRect({
          element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating)),
          boundary,
          rootBoundary,
          strategy
        }));
        const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
          rect: elementContext === "floating" ? {
            ...rects.floating,
            x,
            y
          } : rects.reference,
          offsetParent: await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating)),
          strategy
        }) : rects[elementContext]);
        return {
          top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
          bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
          left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
          right: elementClientRect.right - clippingClientRect.right + paddingObject.right
        };
      }
      __name(detectOverflow, "detectOverflow");
      const min = Math.min;
      const max = Math.max;
      function within(min$1, value, max$1) {
        return max(min$1, min(value, max$1));
      }
      __name(within, "within");
      const arrow = /* @__PURE__ */ __name((options) => ({
        name: "arrow",
        options,
        async fn(middlewareArguments) {
          const {
            element,
            padding = 0
          } = options != null ? options : {};
          const {
            x,
            y,
            placement,
            rects,
            platform
          } = middlewareArguments;
          if (element == null) {
            {
              console.warn("Floating UI: No `element` was passed to the `arrow` middleware.");
            }
            return {};
          }
          const paddingObject = getSideObjectFromPadding(padding);
          const coords = {
            x,
            y
          };
          const axis = getMainAxisFromPlacement(placement);
          const alignment = getAlignment(placement);
          const length = getLengthFromAxis(axis);
          const arrowDimensions = await platform.getDimensions(element);
          const minProp = axis === "y" ? "top" : "left";
          const maxProp = axis === "y" ? "bottom" : "right";
          const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
          const startDiff = coords[axis] - rects.reference[axis];
          const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
          let clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
          if (clientSize === 0) {
            clientSize = rects.floating[length];
          }
          const centerToReference = endDiff / 2 - startDiff / 2;
          const min2 = paddingObject[minProp];
          const max2 = clientSize - arrowDimensions[length] - paddingObject[maxProp];
          const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
          const offset2 = within(min2, center, max2);
          const alignmentPadding = alignment === "start" ? paddingObject[minProp] : paddingObject[maxProp];
          const shouldAddOffset = alignmentPadding > 0 && center !== offset2 && rects.reference[length] <= rects.floating[length];
          const alignmentOffset = shouldAddOffset ? center < min2 ? min2 - center : max2 - center : 0;
          return {
            [axis]: coords[axis] - alignmentOffset,
            data: {
              [axis]: offset2,
              centerOffset: center - offset2
            }
          };
        }
      }), "arrow");
      const hash$1 = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      };
      function getOppositePlacement(placement) {
        return placement.replace(/left|right|bottom|top/g, (matched) => hash$1[matched]);
      }
      __name(getOppositePlacement, "getOppositePlacement");
      function getAlignmentSides(placement, rects, rtl) {
        if (rtl === void 0) {
          rtl = false;
        }
        const alignment = getAlignment(placement);
        const mainAxis = getMainAxisFromPlacement(placement);
        const length = getLengthFromAxis(mainAxis);
        let mainAlignmentSide = mainAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
        if (rects.reference[length] > rects.floating[length]) {
          mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
        }
        return {
          main: mainAlignmentSide,
          cross: getOppositePlacement(mainAlignmentSide)
        };
      }
      __name(getAlignmentSides, "getAlignmentSides");
      const hash = {
        start: "end",
        end: "start"
      };
      function getOppositeAlignmentPlacement(placement) {
        return placement.replace(/start|end/g, (matched) => hash[matched]);
      }
      __name(getOppositeAlignmentPlacement, "getOppositeAlignmentPlacement");
      const sides = ["top", "right", "bottom", "left"];
      const allPlacements = /* @__PURE__ */ sides.reduce((acc, side) => acc.concat(side, side + "-start", side + "-end"), []);
      function getPlacementList(alignment, autoAlignment, allowedPlacements) {
        const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter((placement) => getAlignment(placement) === alignment), ...allowedPlacements.filter((placement) => getAlignment(placement) !== alignment)] : allowedPlacements.filter((placement) => getSide(placement) === placement);
        return allowedPlacementsSortedByAlignment.filter((placement) => {
          if (alignment) {
            return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
          }
          return true;
        });
      }
      __name(getPlacementList, "getPlacementList");
      const autoPlacement = /* @__PURE__ */ __name(function(options) {
        if (options === void 0) {
          options = {};
        }
        return {
          name: "autoPlacement",
          options,
          async fn(middlewareArguments) {
            var _middlewareData$autoP, _middlewareData$autoP2, _middlewareData$autoP3, _middlewareData$autoP4, _placementsSortedByLe;
            const {
              x,
              y,
              rects,
              middlewareData,
              placement,
              platform,
              elements
            } = middlewareArguments;
            const {
              alignment = null,
              allowedPlacements = allPlacements,
              autoAlignment = true,
              ...detectOverflowOptions
            } = options;
            const placements = getPlacementList(alignment, autoAlignment, allowedPlacements);
            const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
            const currentIndex = (_middlewareData$autoP = (_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.index) != null ? _middlewareData$autoP : 0;
            const currentPlacement = placements[currentIndex];
            if (currentPlacement == null) {
              return {};
            }
            const {
              main,
              cross
            } = getAlignmentSides(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));
            if (placement !== currentPlacement) {
              return {
                x,
                y,
                reset: {
                  placement: placements[0]
                }
              };
            }
            const currentOverflows = [overflow[getSide(currentPlacement)], overflow[main], overflow[cross]];
            const allOverflows = [...(_middlewareData$autoP3 = (_middlewareData$autoP4 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP4.overflows) != null ? _middlewareData$autoP3 : [], {
              placement: currentPlacement,
              overflows: currentOverflows
            }];
            const nextPlacement = placements[currentIndex + 1];
            if (nextPlacement) {
              return {
                data: {
                  index: currentIndex + 1,
                  overflows: allOverflows
                },
                reset: {
                  placement: nextPlacement
                }
              };
            }
            const placementsSortedByLeastOverflow = allOverflows.slice().sort((a, b) => a.overflows[0] - b.overflows[0]);
            const placementThatFitsOnAllSides = (_placementsSortedByLe = placementsSortedByLeastOverflow.find((_ref) => {
              let {
                overflows
              } = _ref;
              return overflows.every((overflow2) => overflow2 <= 0);
            })) == null ? void 0 : _placementsSortedByLe.placement;
            const resetPlacement = placementThatFitsOnAllSides != null ? placementThatFitsOnAllSides : placementsSortedByLeastOverflow[0].placement;
            if (resetPlacement !== placement) {
              return {
                data: {
                  index: currentIndex + 1,
                  overflows: allOverflows
                },
                reset: {
                  placement: resetPlacement
                }
              };
            }
            return {};
          }
        };
      }, "autoPlacement");
      function getExpandedPlacements(placement) {
        const oppositePlacement = getOppositePlacement(placement);
        return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
      }
      __name(getExpandedPlacements, "getExpandedPlacements");
      const flip = /* @__PURE__ */ __name(function(options) {
        if (options === void 0) {
          options = {};
        }
        return {
          name: "flip",
          options,
          async fn(middlewareArguments) {
            var _middlewareData$flip;
            const {
              placement,
              middlewareData,
              rects,
              initialPlacement,
              platform,
              elements
            } = middlewareArguments;
            const {
              mainAxis: checkMainAxis = true,
              crossAxis: checkCrossAxis = true,
              fallbackPlacements: specifiedFallbackPlacements,
              fallbackStrategy = "bestFit",
              flipAlignment = true,
              ...detectOverflowOptions
            } = options;
            const side = getSide(placement);
            const isBasePlacement = side === initialPlacement;
            const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
            const placements = [initialPlacement, ...fallbackPlacements];
            const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
            const overflows = [];
            let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
            if (checkMainAxis) {
              overflows.push(overflow[side]);
            }
            if (checkCrossAxis) {
              const {
                main,
                cross
              } = getAlignmentSides(placement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));
              overflows.push(overflow[main], overflow[cross]);
            }
            overflowsData = [...overflowsData, {
              placement,
              overflows
            }];
            if (!overflows.every((side2) => side2 <= 0)) {
              var _middlewareData$flip$, _middlewareData$flip2;
              const nextIndex = ((_middlewareData$flip$ = (_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) != null ? _middlewareData$flip$ : 0) + 1;
              const nextPlacement = placements[nextIndex];
              if (nextPlacement) {
                return {
                  data: {
                    index: nextIndex,
                    overflows: overflowsData
                  },
                  reset: {
                    placement: nextPlacement
                  }
                };
              }
              let resetPlacement = "bottom";
              switch (fallbackStrategy) {
                case "bestFit": {
                  var _overflowsData$map$so;
                  const placement2 = (_overflowsData$map$so = overflowsData.map((d) => [d, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0].placement;
                  if (placement2) {
                    resetPlacement = placement2;
                  }
                  break;
                }
                case "initialPlacement":
                  resetPlacement = initialPlacement;
                  break;
              }
              if (placement !== resetPlacement) {
                return {
                  reset: {
                    placement: resetPlacement
                  }
                };
              }
            }
            return {};
          }
        };
      }, "flip");
      function getSideOffsets(overflow, rect) {
        return {
          top: overflow.top - rect.height,
          right: overflow.right - rect.width,
          bottom: overflow.bottom - rect.height,
          left: overflow.left - rect.width
        };
      }
      __name(getSideOffsets, "getSideOffsets");
      function isAnySideFullyClipped(overflow) {
        return sides.some((side) => overflow[side] >= 0);
      }
      __name(isAnySideFullyClipped, "isAnySideFullyClipped");
      const hide = /* @__PURE__ */ __name(function(_temp) {
        let {
          strategy = "referenceHidden",
          ...detectOverflowOptions
        } = _temp === void 0 ? {} : _temp;
        return {
          name: "hide",
          async fn(middlewareArguments) {
            const {
              rects
            } = middlewareArguments;
            switch (strategy) {
              case "referenceHidden": {
                const overflow = await detectOverflow(middlewareArguments, {
                  ...detectOverflowOptions,
                  elementContext: "reference"
                });
                const offsets = getSideOffsets(overflow, rects.reference);
                return {
                  data: {
                    referenceHiddenOffsets: offsets,
                    referenceHidden: isAnySideFullyClipped(offsets)
                  }
                };
              }
              case "escaped": {
                const overflow = await detectOverflow(middlewareArguments, {
                  ...detectOverflowOptions,
                  altBoundary: true
                });
                const offsets = getSideOffsets(overflow, rects.floating);
                return {
                  data: {
                    escapedOffsets: offsets,
                    escaped: isAnySideFullyClipped(offsets)
                  }
                };
              }
              default: {
                return {};
              }
            }
          }
        };
      }, "hide");
      async function convertValueToCoords(middlewareArguments, value) {
        const {
          placement,
          platform,
          elements
        } = middlewareArguments;
        const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
        const side = getSide(placement);
        const alignment = getAlignment(placement);
        const isVertical = getMainAxisFromPlacement(placement) === "x";
        const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
        const crossAxisMulti = rtl && isVertical ? -1 : 1;
        const rawValue = typeof value === "function" ? value(middlewareArguments) : value;
        let {
          mainAxis,
          crossAxis,
          alignmentAxis
        } = typeof rawValue === "number" ? {
          mainAxis: rawValue,
          crossAxis: 0,
          alignmentAxis: null
        } : {
          mainAxis: 0,
          crossAxis: 0,
          alignmentAxis: null,
          ...rawValue
        };
        if (alignment && typeof alignmentAxis === "number") {
          crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
        }
        return isVertical ? {
          x: crossAxis * crossAxisMulti,
          y: mainAxis * mainAxisMulti
        } : {
          x: mainAxis * mainAxisMulti,
          y: crossAxis * crossAxisMulti
        };
      }
      __name(convertValueToCoords, "convertValueToCoords");
      const offset = /* @__PURE__ */ __name(function(value) {
        if (value === void 0) {
          value = 0;
        }
        return {
          name: "offset",
          options: value,
          async fn(middlewareArguments) {
            const {
              x,
              y
            } = middlewareArguments;
            const diffCoords = await convertValueToCoords(middlewareArguments, value);
            return {
              x: x + diffCoords.x,
              y: y + diffCoords.y,
              data: diffCoords
            };
          }
        };
      }, "offset");
      function getCrossAxis(axis) {
        return axis === "x" ? "y" : "x";
      }
      __name(getCrossAxis, "getCrossAxis");
      const shift = /* @__PURE__ */ __name(function(options) {
        if (options === void 0) {
          options = {};
        }
        return {
          name: "shift",
          options,
          async fn(middlewareArguments) {
            const {
              x,
              y,
              placement
            } = middlewareArguments;
            const {
              mainAxis: checkMainAxis = true,
              crossAxis: checkCrossAxis = false,
              limiter = {
                fn: (_ref) => {
                  let {
                    x: x2,
                    y: y2
                  } = _ref;
                  return {
                    x: x2,
                    y: y2
                  };
                }
              },
              ...detectOverflowOptions
            } = options;
            const coords = {
              x,
              y
            };
            const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
            const mainAxis = getMainAxisFromPlacement(getSide(placement));
            const crossAxis = getCrossAxis(mainAxis);
            let mainAxisCoord = coords[mainAxis];
            let crossAxisCoord = coords[crossAxis];
            if (checkMainAxis) {
              const minSide = mainAxis === "y" ? "top" : "left";
              const maxSide = mainAxis === "y" ? "bottom" : "right";
              const min2 = mainAxisCoord + overflow[minSide];
              const max2 = mainAxisCoord - overflow[maxSide];
              mainAxisCoord = within(min2, mainAxisCoord, max2);
            }
            if (checkCrossAxis) {
              const minSide = crossAxis === "y" ? "top" : "left";
              const maxSide = crossAxis === "y" ? "bottom" : "right";
              const min2 = crossAxisCoord + overflow[minSide];
              const max2 = crossAxisCoord - overflow[maxSide];
              crossAxisCoord = within(min2, crossAxisCoord, max2);
            }
            const limitedCoords = limiter.fn({
              ...middlewareArguments,
              [mainAxis]: mainAxisCoord,
              [crossAxis]: crossAxisCoord
            });
            return {
              ...limitedCoords,
              data: {
                x: limitedCoords.x - x,
                y: limitedCoords.y - y
              }
            };
          }
        };
      }, "shift");
      const limitShift = /* @__PURE__ */ __name(function(options) {
        if (options === void 0) {
          options = {};
        }
        return {
          options,
          fn(middlewareArguments) {
            const {
              x,
              y,
              placement,
              rects,
              middlewareData
            } = middlewareArguments;
            const {
              offset: offset2 = 0,
              mainAxis: checkMainAxis = true,
              crossAxis: checkCrossAxis = true
            } = options;
            const coords = {
              x,
              y
            };
            const mainAxis = getMainAxisFromPlacement(placement);
            const crossAxis = getCrossAxis(mainAxis);
            let mainAxisCoord = coords[mainAxis];
            let crossAxisCoord = coords[crossAxis];
            const rawOffset = typeof offset2 === "function" ? offset2(middlewareArguments) : offset2;
            const computedOffset = typeof rawOffset === "number" ? {
              mainAxis: rawOffset,
              crossAxis: 0
            } : {
              mainAxis: 0,
              crossAxis: 0,
              ...rawOffset
            };
            if (checkMainAxis) {
              const len = mainAxis === "y" ? "height" : "width";
              const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
              const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
              if (mainAxisCoord < limitMin) {
                mainAxisCoord = limitMin;
              } else if (mainAxisCoord > limitMax) {
                mainAxisCoord = limitMax;
              }
            }
            if (checkCrossAxis) {
              var _middlewareData$offse, _middlewareData$offse2, _middlewareData$offse3, _middlewareData$offse4;
              const len = mainAxis === "y" ? "width" : "height";
              const isOriginSide = ["top", "left"].includes(getSide(placement));
              const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? (_middlewareData$offse = (_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) != null ? _middlewareData$offse : 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
              const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : (_middlewareData$offse3 = (_middlewareData$offse4 = middlewareData.offset) == null ? void 0 : _middlewareData$offse4[crossAxis]) != null ? _middlewareData$offse3 : 0) - (isOriginSide ? computedOffset.crossAxis : 0);
              if (crossAxisCoord < limitMin) {
                crossAxisCoord = limitMin;
              } else if (crossAxisCoord > limitMax) {
                crossAxisCoord = limitMax;
              }
            }
            return {
              [mainAxis]: mainAxisCoord,
              [crossAxis]: crossAxisCoord
            };
          }
        };
      }, "limitShift");
      const size = /* @__PURE__ */ __name(function(options) {
        if (options === void 0) {
          options = {};
        }
        return {
          name: "size",
          options,
          async fn(middlewareArguments) {
            const {
              placement,
              rects,
              platform,
              elements
            } = middlewareArguments;
            const {
              apply = /* @__PURE__ */ __name(() => {
              }, "apply"),
              ...detectOverflowOptions
            } = options;
            const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
            const side = getSide(placement);
            const alignment = getAlignment(placement);
            let heightSide;
            let widthSide;
            if (side === "top" || side === "bottom") {
              heightSide = side;
              widthSide = alignment === (await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
            } else {
              widthSide = side;
              heightSide = alignment === "end" ? "top" : "bottom";
            }
            const xMin = max(overflow.left, 0);
            const xMax = max(overflow.right, 0);
            const yMin = max(overflow.top, 0);
            const yMax = max(overflow.bottom, 0);
            const dimensions = {
              availableHeight: rects.floating.height - (["left", "right"].includes(placement) ? 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom)) : overflow[heightSide]),
              availableWidth: rects.floating.width - (["top", "bottom"].includes(placement) ? 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right)) : overflow[widthSide])
            };
            await apply({
              ...middlewareArguments,
              ...dimensions
            });
            const nextDimensions = await platform.getDimensions(elements.floating);
            if (rects.floating.width !== nextDimensions.width || rects.floating.height !== nextDimensions.height) {
              return {
                reset: {
                  rects: true
                }
              };
            }
            return {};
          }
        };
      }, "size");
      const inline = /* @__PURE__ */ __name(function(options) {
        if (options === void 0) {
          options = {};
        }
        return {
          name: "inline",
          options,
          async fn(middlewareArguments) {
            var _await$platform$getCl;
            const {
              placement,
              elements,
              rects,
              platform,
              strategy
            } = middlewareArguments;
            const {
              padding = 2,
              x,
              y
            } = options;
            const fallback = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
              rect: rects.reference,
              offsetParent: await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating)),
              strategy
            }) : rects.reference);
            const clientRects = (_await$platform$getCl = await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference))) != null ? _await$platform$getCl : [];
            const paddingObject = getSideObjectFromPadding(padding);
            function getBoundingClientRect() {
              if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
                var _clientRects$find;
                return (_clientRects$find = clientRects.find((rect) => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom)) != null ? _clientRects$find : fallback;
              }
              if (clientRects.length >= 2) {
                if (getMainAxisFromPlacement(placement) === "x") {
                  const firstRect = clientRects[0];
                  const lastRect = clientRects[clientRects.length - 1];
                  const isTop = getSide(placement) === "top";
                  const top2 = firstRect.top;
                  const bottom2 = lastRect.bottom;
                  const left2 = isTop ? firstRect.left : lastRect.left;
                  const right2 = isTop ? firstRect.right : lastRect.right;
                  const width2 = right2 - left2;
                  const height2 = bottom2 - top2;
                  return {
                    top: top2,
                    bottom: bottom2,
                    left: left2,
                    right: right2,
                    width: width2,
                    height: height2,
                    x: left2,
                    y: top2
                  };
                }
                const isLeftSide = getSide(placement) === "left";
                const maxRight = max(...clientRects.map((rect) => rect.right));
                const minLeft = min(...clientRects.map((rect) => rect.left));
                const measureRects = clientRects.filter((rect) => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
                const top = measureRects[0].top;
                const bottom = measureRects[measureRects.length - 1].bottom;
                const left = minLeft;
                const right = maxRight;
                const width = right - left;
                const height = bottom - top;
                return {
                  top,
                  bottom,
                  left,
                  right,
                  width,
                  height,
                  x: left,
                  y: top
                };
              }
              return fallback;
            }
            __name(getBoundingClientRect, "getBoundingClientRect");
            const resetRects = await platform.getElementRects({
              reference: {
                getBoundingClientRect
              },
              floating: elements.floating,
              strategy
            });
            if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
              return {
                reset: {
                  rects: resetRects
                }
              };
            }
            return {};
          }
        };
      }, "inline");
      exports3.arrow = arrow;
      exports3.autoPlacement = autoPlacement;
      exports3.computePosition = computePosition;
      exports3.detectOverflow = detectOverflow;
      exports3.flip = flip;
      exports3.hide = hide;
      exports3.inline = inline;
      exports3.limitShift = limitShift;
      exports3.offset = offset;
      exports3.rectToClientRect = rectToClientRect;
      exports3.shift = shift;
      exports3.size = size;
      Object.defineProperty(exports3, "__esModule", { value: true });
    });
  }
});

// ../../node_modules/@floating-ui/dom/dist/floating-ui.dom.umd.js
var require_floating_ui_dom_umd = __commonJS({
  "../../node_modules/@floating-ui/dom/dist/floating-ui.dom.umd.js"(exports2, module2) {
    (function(global2, factory) {
      typeof exports2 === "object" && typeof module2 !== "undefined" ? factory(exports2, require_floating_ui_core_umd()) : typeof define === "function" && define.amd ? define(["exports", "@floating-ui/core"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.FloatingUIDOM = {}, global2.FloatingUICore));
    })(exports2, function(exports3, core) {
      "use strict";
      function isWindow(value) {
        return value && value.document && value.location && value.alert && value.setInterval;
      }
      __name(isWindow, "isWindow");
      function getWindow(node) {
        if (node == null) {
          return window;
        }
        if (!isWindow(node)) {
          const ownerDocument = node.ownerDocument;
          return ownerDocument ? ownerDocument.defaultView || window : window;
        }
        return node;
      }
      __name(getWindow, "getWindow");
      function getComputedStyle$1(element) {
        return getWindow(element).getComputedStyle(element);
      }
      __name(getComputedStyle$1, "getComputedStyle$1");
      function getNodeName(node) {
        return isWindow(node) ? "" : node ? (node.nodeName || "").toLowerCase() : "";
      }
      __name(getNodeName, "getNodeName");
      function getUAString() {
        const uaData = navigator.userAgentData;
        if (uaData != null && uaData.brands) {
          return uaData.brands.map((item) => item.brand + "/" + item.version).join(" ");
        }
        return navigator.userAgent;
      }
      __name(getUAString, "getUAString");
      function isHTMLElement(value) {
        return value instanceof getWindow(value).HTMLElement;
      }
      __name(isHTMLElement, "isHTMLElement");
      function isElement(value) {
        return value instanceof getWindow(value).Element;
      }
      __name(isElement, "isElement");
      function isNode(value) {
        return value instanceof getWindow(value).Node;
      }
      __name(isNode, "isNode");
      function isShadowRoot(node) {
        if (typeof ShadowRoot === "undefined") {
          return false;
        }
        const OwnElement = getWindow(node).ShadowRoot;
        return node instanceof OwnElement || node instanceof ShadowRoot;
      }
      __name(isShadowRoot, "isShadowRoot");
      function isOverflowElement(element) {
        const {
          overflow,
          overflowX,
          overflowY
        } = getComputedStyle$1(element);
        return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
      }
      __name(isOverflowElement, "isOverflowElement");
      function isTableElement(element) {
        return ["table", "td", "th"].includes(getNodeName(element));
      }
      __name(isTableElement, "isTableElement");
      function isContainingBlock(element) {
        const isFirefox = /firefox/i.test(getUAString());
        const css = getComputedStyle$1(element);
        return css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].includes(css.willChange) || isFirefox && css.willChange === "filter" || isFirefox && (css.filter ? css.filter !== "none" : false);
      }
      __name(isContainingBlock, "isContainingBlock");
      function isLayoutViewport() {
        return !/^((?!chrome|android).)*safari/i.test(getUAString());
      }
      __name(isLayoutViewport, "isLayoutViewport");
      const min = Math.min;
      const max = Math.max;
      const round = Math.round;
      function getBoundingClientRect(element, includeScale, isFixedStrategy) {
        var _win$visualViewport$o, _win$visualViewport, _win$visualViewport$o2, _win$visualViewport2;
        if (includeScale === void 0) {
          includeScale = false;
        }
        if (isFixedStrategy === void 0) {
          isFixedStrategy = false;
        }
        const clientRect = element.getBoundingClientRect();
        let scaleX = 1;
        let scaleY = 1;
        if (includeScale && isHTMLElement(element)) {
          scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
          scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
        }
        const win = isElement(element) ? getWindow(element) : window;
        const addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
        const x = (clientRect.left + (addVisualOffsets ? (_win$visualViewport$o = (_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) != null ? _win$visualViewport$o : 0 : 0)) / scaleX;
        const y = (clientRect.top + (addVisualOffsets ? (_win$visualViewport$o2 = (_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) != null ? _win$visualViewport$o2 : 0 : 0)) / scaleY;
        const width = clientRect.width / scaleX;
        const height = clientRect.height / scaleY;
        return {
          width,
          height,
          top: y,
          right: x + width,
          bottom: y + height,
          left: x,
          x,
          y
        };
      }
      __name(getBoundingClientRect, "getBoundingClientRect");
      function getDocumentElement(node) {
        return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
      }
      __name(getDocumentElement, "getDocumentElement");
      function getNodeScroll(element) {
        if (isElement(element)) {
          return {
            scrollLeft: element.scrollLeft,
            scrollTop: element.scrollTop
          };
        }
        return {
          scrollLeft: element.pageXOffset,
          scrollTop: element.pageYOffset
        };
      }
      __name(getNodeScroll, "getNodeScroll");
      function getWindowScrollBarX(element) {
        return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
      }
      __name(getWindowScrollBarX, "getWindowScrollBarX");
      function isScaled(element) {
        const rect = getBoundingClientRect(element);
        return round(rect.width) !== element.offsetWidth || round(rect.height) !== element.offsetHeight;
      }
      __name(isScaled, "isScaled");
      function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
        const isOffsetParentAnElement = isHTMLElement(offsetParent);
        const documentElement = getDocumentElement(offsetParent);
        const rect = getBoundingClientRect(
          element,
          isOffsetParentAnElement && isScaled(offsetParent),
          strategy === "fixed"
        );
        let scroll = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const offsets = {
          x: 0,
          y: 0
        };
        if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
          if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
            scroll = getNodeScroll(offsetParent);
          }
          if (isHTMLElement(offsetParent)) {
            const offsetRect = getBoundingClientRect(offsetParent, true);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
          } else if (documentElement) {
            offsets.x = getWindowScrollBarX(documentElement);
          }
        }
        return {
          x: rect.left + scroll.scrollLeft - offsets.x,
          y: rect.top + scroll.scrollTop - offsets.y,
          width: rect.width,
          height: rect.height
        };
      }
      __name(getRectRelativeToOffsetParent, "getRectRelativeToOffsetParent");
      function getParentNode(node) {
        if (getNodeName(node) === "html") {
          return node;
        }
        return node.assignedSlot || node.parentNode || (isShadowRoot(node) ? node.host : null) || getDocumentElement(node);
      }
      __name(getParentNode, "getParentNode");
      function getTrueOffsetParent(element) {
        if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
          return null;
        }
        return element.offsetParent;
      }
      __name(getTrueOffsetParent, "getTrueOffsetParent");
      function getContainingBlock(element) {
        let currentNode = getParentNode(element);
        if (isShadowRoot(currentNode)) {
          currentNode = currentNode.host;
        }
        while (isHTMLElement(currentNode) && !["html", "body"].includes(getNodeName(currentNode))) {
          if (isContainingBlock(currentNode)) {
            return currentNode;
          } else {
            currentNode = currentNode.parentNode;
          }
        }
        return null;
      }
      __name(getContainingBlock, "getContainingBlock");
      function getOffsetParent(element) {
        const window2 = getWindow(element);
        let offsetParent = getTrueOffsetParent(element);
        while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
          offsetParent = getTrueOffsetParent(offsetParent);
        }
        if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
          return window2;
        }
        return offsetParent || getContainingBlock(element) || window2;
      }
      __name(getOffsetParent, "getOffsetParent");
      function getDimensions(element) {
        if (isHTMLElement(element)) {
          return {
            width: element.offsetWidth,
            height: element.offsetHeight
          };
        }
        const rect = getBoundingClientRect(element);
        return {
          width: rect.width,
          height: rect.height
        };
      }
      __name(getDimensions, "getDimensions");
      function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
        let {
          rect,
          offsetParent,
          strategy
        } = _ref;
        const isOffsetParentAnElement = isHTMLElement(offsetParent);
        const documentElement = getDocumentElement(offsetParent);
        if (offsetParent === documentElement) {
          return rect;
        }
        let scroll = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const offsets = {
          x: 0,
          y: 0
        };
        if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
          if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
            scroll = getNodeScroll(offsetParent);
          }
          if (isHTMLElement(offsetParent)) {
            const offsetRect = getBoundingClientRect(offsetParent, true);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
          }
        }
        return {
          ...rect,
          x: rect.x - scroll.scrollLeft + offsets.x,
          y: rect.y - scroll.scrollTop + offsets.y
        };
      }
      __name(convertOffsetParentRelativeRectToViewportRelativeRect, "convertOffsetParentRelativeRectToViewportRelativeRect");
      function getViewportRect(element, strategy) {
        const win = getWindow(element);
        const html = getDocumentElement(element);
        const visualViewport = win.visualViewport;
        let width = html.clientWidth;
        let height = html.clientHeight;
        let x = 0;
        let y = 0;
        if (visualViewport) {
          width = visualViewport.width;
          height = visualViewport.height;
          const layoutViewport = isLayoutViewport();
          if (layoutViewport || !layoutViewport && strategy === "fixed") {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
          }
        }
        return {
          width,
          height,
          x,
          y
        };
      }
      __name(getViewportRect, "getViewportRect");
      function getDocumentRect(element) {
        var _element$ownerDocumen;
        const html = getDocumentElement(element);
        const scroll = getNodeScroll(element);
        const body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
        const width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
        const height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
        let x = -scroll.scrollLeft + getWindowScrollBarX(element);
        const y = -scroll.scrollTop;
        if (getComputedStyle$1(body || html).direction === "rtl") {
          x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
        }
        return {
          width,
          height,
          x,
          y
        };
      }
      __name(getDocumentRect, "getDocumentRect");
      function getNearestOverflowAncestor(node) {
        const parentNode = getParentNode(node);
        if (["html", "body", "#document"].includes(getNodeName(parentNode))) {
          return node.ownerDocument.body;
        }
        if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
          return parentNode;
        }
        return getNearestOverflowAncestor(parentNode);
      }
      __name(getNearestOverflowAncestor, "getNearestOverflowAncestor");
      function getOverflowAncestors(node, list) {
        var _node$ownerDocument;
        if (list === void 0) {
          list = [];
        }
        const scrollableAncestor = getNearestOverflowAncestor(node);
        const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
        const win = getWindow(scrollableAncestor);
        const target = isBody ? [win].concat(win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []) : scrollableAncestor;
        const updatedList = list.concat(target);
        return isBody ? updatedList : updatedList.concat(getOverflowAncestors(target));
      }
      __name(getOverflowAncestors, "getOverflowAncestors");
      function contains(parent, child) {
        const rootNode = child.getRootNode == null ? void 0 : child.getRootNode();
        if (parent.contains(child)) {
          return true;
        } else if (rootNode && isShadowRoot(rootNode)) {
          let next = child;
          do {
            if (next && parent === next) {
              return true;
            }
            next = next.parentNode || next.host;
          } while (next);
        }
        return false;
      }
      __name(contains, "contains");
      function getInnerBoundingClientRect(element, strategy) {
        const clientRect = getBoundingClientRect(element, false, strategy === "fixed");
        const top = clientRect.top + element.clientTop;
        const left = clientRect.left + element.clientLeft;
        return {
          top,
          left,
          x: left,
          y: top,
          right: left + element.clientWidth,
          bottom: top + element.clientHeight,
          width: element.clientWidth,
          height: element.clientHeight
        };
      }
      __name(getInnerBoundingClientRect, "getInnerBoundingClientRect");
      function getClientRectFromClippingAncestor(element, clippingParent, strategy) {
        if (clippingParent === "viewport") {
          return core.rectToClientRect(getViewportRect(element, strategy));
        }
        if (isElement(clippingParent)) {
          return getInnerBoundingClientRect(clippingParent, strategy);
        }
        return core.rectToClientRect(getDocumentRect(getDocumentElement(element)));
      }
      __name(getClientRectFromClippingAncestor, "getClientRectFromClippingAncestor");
      function getClippingAncestors(element) {
        const clippingAncestors = getOverflowAncestors(element);
        const canEscapeClipping = ["absolute", "fixed"].includes(getComputedStyle$1(element).position);
        const clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
        if (!isElement(clipperElement)) {
          return [];
        }
        return clippingAncestors.filter((clippingAncestors2) => isElement(clippingAncestors2) && contains(clippingAncestors2, clipperElement) && getNodeName(clippingAncestors2) !== "body");
      }
      __name(getClippingAncestors, "getClippingAncestors");
      function getClippingRect(_ref) {
        let {
          element,
          boundary,
          rootBoundary,
          strategy
        } = _ref;
        const mainClippingAncestors = boundary === "clippingAncestors" ? getClippingAncestors(element) : [].concat(boundary);
        const clippingAncestors = [...mainClippingAncestors, rootBoundary];
        const firstClippingAncestor = clippingAncestors[0];
        const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
          const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
          accRect.top = max(rect.top, accRect.top);
          accRect.right = min(rect.right, accRect.right);
          accRect.bottom = min(rect.bottom, accRect.bottom);
          accRect.left = max(rect.left, accRect.left);
          return accRect;
        }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
        return {
          width: clippingRect.right - clippingRect.left,
          height: clippingRect.bottom - clippingRect.top,
          x: clippingRect.left,
          y: clippingRect.top
        };
      }
      __name(getClippingRect, "getClippingRect");
      const platform = {
        getClippingRect,
        convertOffsetParentRelativeRectToViewportRelativeRect,
        isElement,
        getDimensions,
        getOffsetParent,
        getDocumentElement,
        getElementRects: (_ref) => {
          let {
            reference,
            floating,
            strategy
          } = _ref;
          return {
            reference: getRectRelativeToOffsetParent(reference, getOffsetParent(floating), strategy),
            floating: {
              ...getDimensions(floating),
              x: 0,
              y: 0
            }
          };
        },
        getClientRects: (element) => Array.from(element.getClientRects()),
        isRTL: (element) => getComputedStyle$1(element).direction === "rtl"
      };
      function autoUpdate(reference, floating, update, options) {
        if (options === void 0) {
          options = {};
        }
        const {
          ancestorScroll: _ancestorScroll = true,
          ancestorResize: _ancestorResize = true,
          elementResize = true,
          animationFrame = false
        } = options;
        const ancestorScroll = _ancestorScroll && !animationFrame;
        const ancestorResize = _ancestorResize && !animationFrame;
        const ancestors = ancestorScroll || ancestorResize ? [...isElement(reference) ? getOverflowAncestors(reference) : [], ...getOverflowAncestors(floating)] : [];
        ancestors.forEach((ancestor) => {
          ancestorScroll && ancestor.addEventListener("scroll", update, {
            passive: true
          });
          ancestorResize && ancestor.addEventListener("resize", update);
        });
        let observer = null;
        if (elementResize) {
          let initialUpdate = true;
          observer = new ResizeObserver(() => {
            if (!initialUpdate) {
              update();
            }
            initialUpdate = false;
          });
          isElement(reference) && !animationFrame && observer.observe(reference);
          observer.observe(floating);
        }
        let frameId;
        let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
        if (animationFrame) {
          frameLoop();
        }
        function frameLoop() {
          const nextRefRect = getBoundingClientRect(reference);
          if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
            update();
          }
          prevRefRect = nextRefRect;
          frameId = requestAnimationFrame(frameLoop);
        }
        __name(frameLoop, "frameLoop");
        update();
        return () => {
          var _observer;
          ancestors.forEach((ancestor) => {
            ancestorScroll && ancestor.removeEventListener("scroll", update);
            ancestorResize && ancestor.removeEventListener("resize", update);
          });
          (_observer = observer) == null ? void 0 : _observer.disconnect();
          observer = null;
          if (animationFrame) {
            cancelAnimationFrame(frameId);
          }
        };
      }
      __name(autoUpdate, "autoUpdate");
      const computePosition = /* @__PURE__ */ __name((reference, floating, options) => core.computePosition(reference, floating, {
        platform,
        ...options
      }), "computePosition");
      Object.defineProperty(exports3, "arrow", {
        enumerable: true,
        get: function() {
          return core.arrow;
        }
      });
      Object.defineProperty(exports3, "autoPlacement", {
        enumerable: true,
        get: function() {
          return core.autoPlacement;
        }
      });
      Object.defineProperty(exports3, "detectOverflow", {
        enumerable: true,
        get: function() {
          return core.detectOverflow;
        }
      });
      Object.defineProperty(exports3, "flip", {
        enumerable: true,
        get: function() {
          return core.flip;
        }
      });
      Object.defineProperty(exports3, "hide", {
        enumerable: true,
        get: function() {
          return core.hide;
        }
      });
      Object.defineProperty(exports3, "inline", {
        enumerable: true,
        get: function() {
          return core.inline;
        }
      });
      Object.defineProperty(exports3, "limitShift", {
        enumerable: true,
        get: function() {
          return core.limitShift;
        }
      });
      Object.defineProperty(exports3, "offset", {
        enumerable: true,
        get: function() {
          return core.offset;
        }
      });
      Object.defineProperty(exports3, "shift", {
        enumerable: true,
        get: function() {
          return core.shift;
        }
      });
      Object.defineProperty(exports3, "size", {
        enumerable: true,
        get: function() {
          return core.size;
        }
      });
      exports3.autoUpdate = autoUpdate;
      exports3.computePosition = computePosition;
      exports3.getOverflowAncestors = getOverflowAncestors;
      Object.defineProperty(exports3, "__esModule", { value: true });
    });
  }
});

// ../../node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.umd.js
var require_floating_ui_react_dom_umd = __commonJS({
  "../../node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.umd.js"(exports2, module2) {
    (function(global2, factory) {
      typeof exports2 === "object" && typeof module2 !== "undefined" ? factory(exports2, require_floating_ui_dom_umd(), require("react"), require("react-dom")) : typeof define === "function" && define.amd ? define(["exports", "@floating-ui/dom", "react", "react-dom"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.FloatingUIReactDOM = {}, global2.FloatingUIDOM, global2.React, global2.ReactDOM));
    })(exports2, function(exports3, dom, React3, ReactDOM) {
      "use strict";
      function _interopNamespace(e) {
        if (e && e.__esModule)
          return e;
        var n = /* @__PURE__ */ Object.create(null);
        if (e) {
          Object.keys(e).forEach(function(k) {
            if (k !== "default") {
              var d = Object.getOwnPropertyDescriptor(e, k);
              Object.defineProperty(n, k, d.get ? d : {
                enumerable: true,
                get: function() {
                  return e[k];
                }
              });
            }
          });
        }
        n["default"] = e;
        return Object.freeze(n);
      }
      __name(_interopNamespace, "_interopNamespace");
      var React__namespace = /* @__PURE__ */ _interopNamespace(React3);
      var ReactDOM__namespace = /* @__PURE__ */ _interopNamespace(ReactDOM);
      var index = typeof document !== "undefined" ? React3.useLayoutEffect : React3.useEffect;
      function deepEqual(a, b) {
        if (a === b) {
          return true;
        }
        if (typeof a !== typeof b) {
          return false;
        }
        if (typeof a === "function" && a.toString() === b.toString()) {
          return true;
        }
        let length, i, keys;
        if (a && b && typeof a == "object") {
          if (Array.isArray(a)) {
            length = a.length;
            if (length != b.length)
              return false;
            for (i = length; i-- !== 0; ) {
              if (!deepEqual(a[i], b[i])) {
                return false;
              }
            }
            return true;
          }
          keys = Object.keys(a);
          length = keys.length;
          if (length !== Object.keys(b).length) {
            return false;
          }
          for (i = length; i-- !== 0; ) {
            if (!Object.prototype.hasOwnProperty.call(b, keys[i])) {
              return false;
            }
          }
          for (i = length; i-- !== 0; ) {
            const key = keys[i];
            if (key === "_owner" && a.$$typeof) {
              continue;
            }
            if (!deepEqual(a[key], b[key])) {
              return false;
            }
          }
          return true;
        }
        return a !== a && b !== b;
      }
      __name(deepEqual, "deepEqual");
      function useLatestRef(value) {
        const ref = React__namespace.useRef(value);
        index(() => {
          ref.current = value;
        });
        return ref;
      }
      __name(useLatestRef, "useLatestRef");
      function useFloating2(_temp) {
        let {
          middleware,
          placement = "bottom",
          strategy = "absolute",
          whileElementsMounted
        } = _temp === void 0 ? {} : _temp;
        const [data, setData] = React__namespace.useState({
          x: null,
          y: null,
          strategy,
          placement,
          middlewareData: {}
        });
        const [latestMiddleware, setLatestMiddleware] = React__namespace.useState(middleware);
        if (!deepEqual(latestMiddleware == null ? void 0 : latestMiddleware.map((_ref) => {
          let {
            name,
            options
          } = _ref;
          return {
            name,
            options
          };
        }), middleware == null ? void 0 : middleware.map((_ref2) => {
          let {
            name,
            options
          } = _ref2;
          return {
            name,
            options
          };
        }))) {
          setLatestMiddleware(middleware);
        }
        const reference = React__namespace.useRef(null);
        const floating = React__namespace.useRef(null);
        const cleanupRef = React__namespace.useRef(null);
        const dataRef = React__namespace.useRef(data);
        const whileElementsMountedRef = useLatestRef(whileElementsMounted);
        const update = React__namespace.useCallback(() => {
          if (!reference.current || !floating.current) {
            return;
          }
          dom.computePosition(reference.current, floating.current, {
            middleware: latestMiddleware,
            placement,
            strategy
          }).then((data2) => {
            if (isMountedRef.current && !deepEqual(dataRef.current, data2)) {
              dataRef.current = data2;
              ReactDOM__namespace.flushSync(() => {
                setData(data2);
              });
            }
          });
        }, [latestMiddleware, placement, strategy]);
        index(() => {
          if (isMountedRef.current) {
            update();
          }
        }, [update]);
        const isMountedRef = React__namespace.useRef(false);
        index(() => {
          isMountedRef.current = true;
          return () => {
            isMountedRef.current = false;
          };
        }, []);
        const runElementMountCallback = React__namespace.useCallback(() => {
          if (typeof cleanupRef.current === "function") {
            cleanupRef.current();
            cleanupRef.current = null;
          }
          if (reference.current && floating.current) {
            if (whileElementsMountedRef.current) {
              const cleanupFn = whileElementsMountedRef.current(reference.current, floating.current, update);
              cleanupRef.current = cleanupFn;
            } else {
              update();
            }
          }
        }, [update, whileElementsMountedRef]);
        const setReference = React__namespace.useCallback((node) => {
          reference.current = node;
          runElementMountCallback();
        }, [runElementMountCallback]);
        const setFloating = React__namespace.useCallback((node) => {
          floating.current = node;
          runElementMountCallback();
        }, [runElementMountCallback]);
        const refs = React__namespace.useMemo(() => ({
          reference,
          floating
        }), []);
        return React__namespace.useMemo(() => ({
          ...data,
          update,
          refs,
          reference: setReference,
          floating: setFloating
        }), [data, update, refs, setReference, setFloating]);
      }
      __name(useFloating2, "useFloating");
      const arrow = /* @__PURE__ */ __name((options) => {
        const {
          element,
          padding
        } = options;
        function isRef(value) {
          return Object.prototype.hasOwnProperty.call(value, "current");
        }
        __name(isRef, "isRef");
        return {
          name: "arrow",
          options,
          fn(args) {
            if (isRef(element)) {
              if (element.current != null) {
                return dom.arrow({
                  element: element.current,
                  padding
                }).fn(args);
              }
              return {};
            } else if (element) {
              return dom.arrow({
                element,
                padding
              }).fn(args);
            }
            return {};
          }
        };
      }, "arrow");
      exports3.arrow = arrow;
      exports3.useFloating = useFloating2;
      Object.keys(dom).forEach(function(k) {
        if (k !== "default" && !exports3.hasOwnProperty(k))
          Object.defineProperty(exports3, k, {
            enumerable: true,
            get: function() {
              return dom[k];
            }
          });
      });
      Object.defineProperty(exports3, "__esModule", { value: true });
    });
  }
});

// ../../node_modules/@tamagui/popper/dist/cjs/floating.js
var require_floating = __commonJS({
  "../../node_modules/@tamagui/popper/dist/cjs/floating.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var floating_exports = {};
    module2.exports = __toCommonJS3(floating_exports);
    __reExport2(floating_exports, require_floating_ui_react_dom_umd(), module2.exports);
  }
});

// ../../node_modules/@tamagui/popper/dist/cjs/useFloating.js
var require_useFloating = __commonJS({
  "../../node_modules/@tamagui/popper/dist/cjs/useFloating.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useFloating_exports = {};
    __export3(useFloating_exports, {
      FloatingOverrideContext: () => FloatingOverrideContext2,
      useFloating: () => useFloating2
    });
    module2.exports = __toCommonJS3(useFloating_exports);
    var import_react = require("react");
    var Floating = __toESM2(require_floating());
    var FloatingOverrideContext2 = (0, import_react.createContext)(null);
    var useFloating2 = /* @__PURE__ */ __name((props) => {
      var _a;
      const context = (0, import_react.useContext)(FloatingOverrideContext2);
      return (_a = context || Floating.useFloating) == null ? void 0 : _a(props);
    }, "useFloating");
  }
});

// ../../node_modules/@tamagui/popper/dist/cjs/Popper.js
var require_Popper = __commonJS({
  "../../node_modules/@tamagui/popper/dist/cjs/Popper.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Popper_exports = {};
    __export3(Popper_exports, {
      Popper: () => Popper,
      PopperAnchor: () => PopperAnchor,
      PopperArrow: () => PopperArrow,
      PopperContent: () => PopperContent,
      createPopperScope: () => createPopperScope,
      usePopperContext: () => usePopperContext
    });
    module2.exports = __toCommonJS3(Popper_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_compose_refs = require_cjs3();
    var import_core2 = require("@tamagui/core-node");
    var import_create_context = require_cjs4();
    var import_stacks = require_cjs10();
    var React3 = __toESM2(require("react"));
    var import_floating = require_floating();
    var import_useFloating = require_useFloating();
    var POPPER_NAME = "Popper";
    var [createPopperContext, createScope] = (0, import_create_context.createContextScope)(POPPER_NAME);
    var createPopperScope = createScope;
    var [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME);
    var Popper = /* @__PURE__ */ __name((props) => {
      const {
        __scopePopper,
        children,
        size,
        strategy = "absolute",
        placement = "bottom",
        stayInFrame,
        allowFlip
      } = props;
      const [isMounted, setIsMounted] = React3.useState(false);
      (0, import_core2.useIsomorphicLayoutEffect)(() => {
        setIsMounted(true);
      }, []);
      const anchorRef = React3.useRef();
      const [arrowEl, setArrow] = React3.useState(null);
      const [arrowSize, setArrowSize] = React3.useState(0);
      const arrowRef = React3.useRef();
      const floating = (0, import_useFloating.useFloating)({
        strategy,
        placement,
        middleware: [
          stayInFrame ? (0, import_floating.shift)(typeof stayInFrame === "boolean" ? {} : stayInFrame) : null,
          allowFlip ? (0, import_floating.flip)(typeof allowFlip === "boolean" ? {} : allowFlip) : null,
          arrowEl ? (0, import_floating.arrow)({ element: arrowEl }) : null,
          arrowSize ? (0, import_floating.offset)(arrowSize) : null
        ].filter(Boolean)
      });
      const { refs, middlewareData } = floating;
      const composedArrowRefs = (0, import_compose_refs.useComposedRefs)(arrowRef, setArrow);
      (0, import_core2.useIsomorphicLayoutEffect)(() => {
        floating.reference(anchorRef.current);
      }, [anchorRef]);
      React3.useEffect(() => {
        if (!refs.reference.current || !refs.floating.current) {
          return;
        }
        return (0, import_floating.autoUpdate)(refs.reference.current, refs.floating.current, floating.update);
      }, [floating.update, refs.floating, refs.reference]);
      const arrowStyle = React3.useMemo(() => {
        return middlewareData.arrow;
      }, [JSON.stringify(middlewareData.arrow || {})]);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopperProvider, {
        scope: __scopePopper,
        anchorRef,
        size,
        arrowRef: composedArrowRefs,
        arrowStyle,
        onArrowSize: setArrowSize,
        isMounted,
        ...floating,
        children
      });
    }, "Popper");
    Popper.displayName = POPPER_NAME;
    var ANCHOR_NAME = "PopperAnchor";
    var PopperAnchor = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopePopper, virtualRef, ...anchorProps } = props;
        const { anchorRef, getReferenceProps } = usePopperContext(ANCHOR_NAME, __scopePopper);
        const ref = React3.useRef(null);
        const composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, ref, anchorRef);
        if (virtualRef) {
          return null;
        }
        const stackProps = {
          ref: composedRefs,
          ...anchorProps
        };
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_stacks.YStack, {
          ...getReferenceProps ? getReferenceProps(stackProps) : stackProps
        });
      }
    );
    PopperAnchor.displayName = ANCHOR_NAME;
    var CONTENT_NAME = "PopperContent";
    var PopperContentFrame = (0, import_core2.styled)(import_stacks.ThemeableStack, {
      name: "PopperContent",
      backgroundColor: "$background",
      alignItems: "center",
      radiused: true,
      variants: {
        size: {
          "...size": (val, { tokens }) => {
            return {
              padding: tokens.space[val],
              borderRadius: tokens.radius[val]
            };
          }
        }
      },
      defaultVariants: {
        size: "$4"
      }
    });
    var PopperContent = PopperContentFrame.extractable(
      React3.forwardRef(
        (props, forwardedRef) => {
          const { __scopePopper, ...contentProps } = props;
          const { strategy, placement, floating, x, y, getFloatingProps, size, isMounted } = usePopperContext(CONTENT_NAME, __scopePopper);
          const contentRefs = (0, import_compose_refs.useComposedRefs)(floating, forwardedRef);
          const contents = React3.useMemo(() => {
            return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopperContentFrame, {
              "data-placement": placement,
              "data-strategy": strategy,
              size: contentProps.size || size,
              ...contentProps
            }, "popper-content-frame");
          }, [placement, strategy, props]);
          if (!isMounted) {
            return null;
          }
          const frameProps = {
            ref: contentRefs,
            x: x || 0,
            y: y || 0,
            position: strategy
          };
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_stacks.YStack, {
            ...getFloatingProps ? getFloatingProps(frameProps) : frameProps,
            children: contents
          });
        }
      )
    );
    PopperContent.displayName = CONTENT_NAME;
    var ARROW_NAME = "PopperArrow";
    var PopperArrowFrame = (0, import_core2.styled)(import_stacks.YStack, {
      name: "PopperArrow",
      borderColor: "$borderColor",
      backgroundColor: "$background",
      position: "relative"
    });
    var PopperArrowOuterFrame = (0, import_core2.styled)(import_stacks.YStack, {
      name: "PopperArrowOuter",
      position: "absolute",
      zIndex: -1,
      pointerEvents: "none",
      overflow: "hidden",
      alignItems: "center",
      justifyContent: "center"
    });
    var opposites = {
      top: "bottom",
      right: "left",
      bottom: "top",
      left: "right"
    };
    var PopperArrow = PopperArrowFrame.extractable(
      React3.forwardRef(/* @__PURE__ */ __name(function PopperArrow2(props, forwardedRef) {
        const { __scopePopper, offset: offset2, size: sizeProp, borderWidth = 0, ...arrowProps } = props;
        const context = usePopperContext(ARROW_NAME, __scopePopper);
        const tokens = (0, import_core2.getTokens)();
        const sizeVal = sizeProp ?? context.size;
        const sizeValResolved = (0, import_core2.getVariableValue)((0, import_core2.stepTokenUpOrDown)(tokens.space, sizeVal, -2, [2]));
        const size = +sizeValResolved;
        const { placement } = context;
        const { x, y } = context.arrowStyle || { x: 0, y: 0 };
        const refs = (0, import_compose_refs.useComposedRefs)(context.arrowRef, forwardedRef);
        const primaryPlacement = placement ? placement.split("-")[0] : "top";
        const arrowStyle = { x, y, width: size, height: size };
        const innerArrowStyle = {};
        const isVertical = primaryPlacement === "bottom" || primaryPlacement === "top";
        if (primaryPlacement) {
          arrowStyle[isVertical ? "width" : "height"] = size * 2;
          const oppSide = opposites[primaryPlacement];
          if (oppSide) {
            arrowStyle[oppSide] = -size;
            innerArrowStyle[oppSide] = size / 2;
          }
          if (oppSide === "top" || oppSide === "bottom") {
            arrowStyle.left = 0;
          }
          if (oppSide === "left" || oppSide === "right") {
            arrowStyle.top = 0;
          }
        }
        (0, import_core2.useIsomorphicLayoutEffect)(() => {
          var _a;
          (_a = context.onArrowSize) == null ? void 0 : _a.call(context, size);
        }, [size, context.onArrowSize]);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopperArrowOuterFrame, {
          ref: refs,
          ...arrowStyle,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopperArrowFrame, {
            width: size,
            height: size,
            ...arrowProps,
            ...innerArrowStyle,
            rotate: "45deg",
            ...primaryPlacement === "bottom" && {
              borderBottomWidth: borderWidth,
              borderRightWidth: borderWidth
            },
            ...primaryPlacement === "top" && {
              borderTopWidth: borderWidth,
              borderLeftWidth: borderWidth
            },
            ...primaryPlacement === "right" && {
              borderTopWidth: borderWidth,
              borderRightWidth: borderWidth
            },
            ...primaryPlacement === "left" && {
              borderBottomWidth: borderWidth,
              borderLeftWidth: borderWidth
            }
          })
        });
      }, "PopperArrow2"))
    );
    PopperArrow.displayName = ARROW_NAME;
  }
});

// ../../node_modules/@tamagui/popper/dist/cjs/index.js
var require_cjs33 = __commonJS({
  "../../node_modules/@tamagui/popper/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    __export3(src_exports2, {
      FloatingOverrideContext: () => import_useFloating.FloatingOverrideContext
    });
    module2.exports = __toCommonJS3(src_exports2);
    var import_useFloating = require_useFloating();
    __reExport2(src_exports2, require_Popper(), module2.exports);
  }
});

// ../../node_modules/@floating-ui/react-dom-interactions/dist/floating-ui.react-dom-interactions.umd.js
var require_floating_ui_react_dom_interactions_umd = __commonJS({
  "../../node_modules/@floating-ui/react-dom-interactions/dist/floating-ui.react-dom-interactions.umd.js"(exports2, module2) {
    (function(global2, factory) {
      typeof exports2 === "object" && typeof module2 !== "undefined" ? factory(exports2, require_floating_ui_react_dom_umd(), require("react"), require("react-dom")) : typeof define === "function" && define.amd ? define(["exports", "@floating-ui/react-dom", "react", "react-dom"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.FloatingUIReactDOM = {}, global2.FloatingUIReactDOM, global2.React, global2.ReactDOM));
    })(exports2, function(exports3, reactDom, React3, reactDom$1) {
      "use strict";
      function _interopNamespace(e) {
        if (e && e.__esModule)
          return e;
        var n = /* @__PURE__ */ Object.create(null);
        if (e) {
          Object.keys(e).forEach(function(k) {
            if (k !== "default") {
              var d = Object.getOwnPropertyDescriptor(e, k);
              Object.defineProperty(n, k, d.get ? d : {
                enumerable: true,
                get: function() {
                  return e[k];
                }
              });
            }
          });
        }
        n["default"] = e;
        return Object.freeze(n);
      }
      __name(_interopNamespace, "_interopNamespace");
      var React__namespace = /* @__PURE__ */ _interopNamespace(React3);
      var index = typeof document !== "undefined" ? React3.useLayoutEffect : React3.useEffect;
      function createPubSub() {
        const map = /* @__PURE__ */ new Map();
        return {
          emit(event, data) {
            var _map$get;
            (_map$get = map.get(event)) == null ? void 0 : _map$get.forEach((handler) => handler(data));
          },
          on(event, listener) {
            map.set(event, [...map.get(event) || [], listener]);
          },
          off(event, listener) {
            map.set(event, (map.get(event) || []).filter((l) => l !== listener));
          }
        };
      }
      __name(createPubSub, "createPubSub");
      let serverHandoffComplete = false;
      let count = 0;
      const genId = /* @__PURE__ */ __name(() => "floating-ui-" + count++, "genId");
      function useFloatingId() {
        const [id, setId] = React__namespace.useState(() => serverHandoffComplete ? genId() : void 0);
        index(() => {
          if (id == null) {
            setId(genId());
          }
        }, []);
        React__namespace.useEffect(() => {
          if (!serverHandoffComplete) {
            serverHandoffComplete = true;
          }
        }, []);
        return id;
      }
      __name(useFloatingId, "useFloatingId");
      const useReactId = React__namespace[/* @__PURE__ */ "useId".toString()];
      const useId = useReactId != null ? useReactId : useFloatingId;
      const FloatingNodeContext = /* @__PURE__ */ React__namespace.createContext(null);
      const FloatingTreeContext = /* @__PURE__ */ React__namespace.createContext(null);
      const useFloatingParentNodeId = /* @__PURE__ */ __name(() => {
        var _React$useContext$id, _React$useContext;
        return (_React$useContext$id = (_React$useContext = React__namespace.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) != null ? _React$useContext$id : null;
      }, "useFloatingParentNodeId");
      const useFloatingTree = /* @__PURE__ */ __name(() => React__namespace.useContext(FloatingTreeContext), "useFloatingTree");
      const useFloatingNodeId = /* @__PURE__ */ __name(() => {
        const id = useId();
        const tree = useFloatingTree();
        const parentId = useFloatingParentNodeId();
        index(() => {
          const node = {
            id,
            parentId
          };
          tree == null ? void 0 : tree.addNode(node);
          return () => {
            tree == null ? void 0 : tree.removeNode(node);
          };
        }, [tree, id, parentId]);
        return id;
      }, "useFloatingNodeId");
      const FloatingNode = /* @__PURE__ */ __name((_ref) => {
        let {
          children,
          id
        } = _ref;
        const parentId = useFloatingParentNodeId();
        return /* @__PURE__ */ React__namespace.createElement(FloatingNodeContext.Provider, {
          value: React__namespace.useMemo(() => ({
            id,
            parentId
          }), [id, parentId])
        }, children);
      }, "FloatingNode");
      const FloatingTree = /* @__PURE__ */ __name((_ref2) => {
        let {
          children
        } = _ref2;
        const nodesRef = React__namespace.useRef([]);
        const addNode = React__namespace.useCallback((node) => {
          nodesRef.current = [...nodesRef.current, node];
        }, []);
        const removeNode = React__namespace.useCallback((node) => {
          nodesRef.current = nodesRef.current.filter((n) => n !== node);
        }, []);
        const events = React__namespace.useState(() => createPubSub())[0];
        return /* @__PURE__ */ React__namespace.createElement(FloatingTreeContext.Provider, {
          value: React__namespace.useMemo(() => ({
            nodesRef,
            addNode,
            removeNode,
            events
          }), [nodesRef, addNode, removeNode, events])
        }, children);
      }, "FloatingTree");
      function getDocument(floating) {
        var _floating$ownerDocume;
        return (_floating$ownerDocume = floating == null ? void 0 : floating.ownerDocument) != null ? _floating$ownerDocume : document;
      }
      __name(getDocument, "getDocument");
      function getWindow(value) {
        var _getDocument$defaultV;
        return (_getDocument$defaultV = getDocument(value).defaultView) != null ? _getDocument$defaultV : window;
      }
      __name(getWindow, "getWindow");
      function isElement(value) {
        return value ? value instanceof getWindow(value).Element : false;
      }
      __name(isElement, "isElement");
      function isHTMLElement(value) {
        return value ? value instanceof getWindow(value).HTMLElement : false;
      }
      __name(isHTMLElement, "isHTMLElement");
      function useFloating2(_temp) {
        let {
          open = false,
          onOpenChange = /* @__PURE__ */ __name(() => {
          }, "onOpenChange"),
          whileElementsMounted,
          placement,
          middleware,
          strategy,
          nodeId
        } = _temp === void 0 ? {} : _temp;
        const tree = useFloatingTree();
        const domReferenceRef = React__namespace.useRef(null);
        const dataRef = React__namespace.useRef({});
        const events = React__namespace.useState(() => createPubSub())[0];
        const floating = reactDom.useFloating({
          placement,
          middleware,
          strategy,
          whileElementsMounted
        });
        const refs = React__namespace.useMemo(() => ({
          ...floating.refs,
          domReference: domReferenceRef
        }), [floating.refs]);
        const context = React__namespace.useMemo(() => ({
          ...floating,
          refs,
          dataRef,
          nodeId,
          events,
          open,
          onOpenChange
        }), [floating, nodeId, events, open, onOpenChange, refs]);
        index(() => {
          const node = tree == null ? void 0 : tree.nodesRef.current.find((node2) => node2.id === nodeId);
          if (node) {
            node.context = context;
          }
        });
        const {
          reference
        } = floating;
        const setReference = React__namespace.useCallback((node) => {
          if (isElement(node) || node === null) {
            context.refs.domReference.current = node;
          }
          reference(node);
        }, [reference, context.refs]);
        return React__namespace.useMemo(() => ({
          ...floating,
          context,
          refs,
          reference: setReference
        }), [floating, refs, context, setReference]);
      }
      __name(useFloating2, "useFloating");
      function mergeProps(userProps, propsList, elementKey) {
        const map = /* @__PURE__ */ new Map();
        return {
          ...elementKey === "floating" && {
            tabIndex: -1
          },
          ...userProps,
          ...propsList.map((value) => value ? value[elementKey] : null).concat(userProps).reduce((acc, props) => {
            if (!props) {
              return acc;
            }
            Object.entries(props).forEach((_ref) => {
              let [key, value] = _ref;
              if (key.indexOf("on") === 0) {
                if (!map.has(key)) {
                  map.set(key, []);
                }
                if (typeof value === "function") {
                  var _map$get;
                  (_map$get = map.get(key)) == null ? void 0 : _map$get.push(value);
                }
                acc[key] = function() {
                  var _map$get2;
                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }
                  (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.forEach((fn) => fn(...args));
                };
              } else {
                acc[key] = value;
              }
            });
            return acc;
          }, {})
        };
      }
      __name(mergeProps, "mergeProps");
      const useInteractions2 = /* @__PURE__ */ __name(function(propsList) {
        if (propsList === void 0) {
          propsList = [];
        }
        return {
          getReferenceProps: (userProps) => mergeProps(userProps, propsList, "reference"),
          getFloatingProps: (userProps) => mergeProps(userProps, propsList, "floating"),
          getItemProps: (userProps) => mergeProps(userProps, propsList, "item")
        };
      }, "useInteractions");
      function getChildren(nodes, id) {
        var _nodes$filter;
        let allChildren = (_nodes$filter = nodes.filter((node) => {
          var _node$context;
          return node.parentId === id && ((_node$context = node.context) == null ? void 0 : _node$context.open);
        })) != null ? _nodes$filter : [];
        let currentChildren = allChildren;
        while (currentChildren.length) {
          var _nodes$filter2;
          currentChildren = (_nodes$filter2 = nodes.filter((node) => {
            var _currentChildren;
            return (_currentChildren = currentChildren) == null ? void 0 : _currentChildren.some((n) => {
              var _node$context2;
              return node.parentId === n.id && ((_node$context2 = node.context) == null ? void 0 : _node$context2.open);
            });
          })) != null ? _nodes$filter2 : [];
          allChildren = allChildren.concat(currentChildren);
        }
        return allChildren;
      }
      __name(getChildren, "getChildren");
      function isPointInPolygon(point, polygon) {
        const [x, y] = point;
        let isInside = false;
        const length = polygon.length;
        for (let i = 0, j = length - 1; i < length; j = i++) {
          const [xi, yi] = polygon[i] || [0, 0];
          const [xj, yj] = polygon[j] || [0, 0];
          const intersect = yi >= y !== yj >= y && x <= (xj - xi) * (y - yi) / (yj - yi) + xi;
          if (intersect) {
            isInside = !isInside;
          }
        }
        return isInside;
      }
      __name(isPointInPolygon, "isPointInPolygon");
      function safePolygon(_temp) {
        let {
          restMs = 0,
          buffer = 0.5,
          debug = null
        } = _temp === void 0 ? {} : _temp;
        let timeoutId;
        let polygonIsDestroyed = false;
        return (_ref) => {
          let {
            x,
            y,
            placement,
            refs,
            onClose,
            nodeId,
            tree,
            leave = false
          } = _ref;
          return /* @__PURE__ */ __name(function onPointerMove(event) {
            var _refs$domReference$cu, _refs$floating$curren;
            clearTimeout(timeoutId);
            function close() {
              clearTimeout(timeoutId);
              onClose();
            }
            __name(close, "close");
            if (event.pointerType && event.pointerType !== "mouse") {
              return;
            }
            const {
              clientX,
              clientY
            } = event;
            const target = "composedPath" in event ? event.composedPath()[0] : event.target;
            const targetNode = target;
            if (event.type === "pointermove" && (_refs$domReference$cu = refs.domReference.current) != null && _refs$domReference$cu.contains(targetNode)) {
              return;
            }
            if (tree && getChildren(tree.nodesRef.current, nodeId).some((_ref2) => {
              let {
                context
              } = _ref2;
              return context == null ? void 0 : context.open;
            })) {
              return;
            }
            if ((_refs$floating$curren = refs.floating.current) != null && _refs$floating$curren.contains(targetNode) && !leave) {
              polygonIsDestroyed = true;
              return;
            }
            if (!refs.domReference.current || !refs.floating.current || placement == null || x == null || y == null) {
              return;
            }
            const refRect = refs.domReference.current.getBoundingClientRect();
            const rect = refs.floating.current.getBoundingClientRect();
            const side = placement.split("-")[0];
            const cursorLeaveFromRight = x > rect.right - rect.width / 2;
            const cursorLeaveFromBottom = y > rect.bottom - rect.height / 2;
            if (side === "top" && y >= refRect.bottom - 1 || side === "bottom" && y <= refRect.top + 1 || side === "left" && x >= refRect.right - 1 || side === "right" && x <= refRect.left + 1) {
              return close();
            }
            switch (side) {
              case "top":
                if (clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= refRect.top + 1) {
                  return;
                }
                break;
              case "bottom":
                if (clientX >= rect.left && clientX <= rect.right && clientY >= refRect.bottom - 1 && clientY <= rect.bottom) {
                  return;
                }
                break;
              case "left":
                if (clientX >= rect.left && clientX <= refRect.left + 1 && clientY >= rect.top && clientY <= rect.bottom) {
                  return;
                }
                break;
              case "right":
                if (clientX >= refRect.right - 1 && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom) {
                  return;
                }
                break;
            }
            if (polygonIsDestroyed) {
              return close();
            }
            function getPolygon(_ref3) {
              let [x2, y2] = _ref3;
              const isFloatingWider = rect.width > refRect.width;
              const isFloatingTaller = rect.height > refRect.height;
              switch (side) {
                case "top": {
                  const cursorPointOne = [isFloatingWider ? x2 + buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 + buffer + 1];
                  const cursorPointTwo = [isFloatingWider ? x2 - buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 + buffer + 1];
                  const commonPoints = [[rect.left, cursorLeaveFromRight ? rect.bottom - buffer : isFloatingWider ? rect.bottom - buffer : rect.top], [rect.right, cursorLeaveFromRight ? isFloatingWider ? rect.bottom - buffer : rect.top : rect.bottom - buffer]];
                  return [cursorPointOne, cursorPointTwo, ...commonPoints];
                }
                case "bottom": {
                  const cursorPointOne = [isFloatingWider ? x2 + buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 - buffer];
                  const cursorPointTwo = [isFloatingWider ? x2 - buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 - buffer];
                  const commonPoints = [[rect.left, cursorLeaveFromRight ? rect.top + buffer : isFloatingWider ? rect.top + buffer : rect.bottom], [rect.right, cursorLeaveFromRight ? isFloatingWider ? rect.top + buffer : rect.bottom : rect.top + buffer]];
                  return [cursorPointOne, cursorPointTwo, ...commonPoints];
                }
                case "left": {
                  const cursorPointOne = [x2 + buffer + 1, isFloatingTaller ? y2 + buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4];
                  const cursorPointTwo = [x2 + buffer + 1, isFloatingTaller ? y2 - buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4];
                  const commonPoints = [[cursorLeaveFromBottom ? rect.right - buffer : isFloatingTaller ? rect.right - buffer : rect.left, rect.top], [cursorLeaveFromBottom ? isFloatingTaller ? rect.right - buffer : rect.left : rect.right - buffer, rect.bottom]];
                  return [...commonPoints, cursorPointOne, cursorPointTwo];
                }
                case "right": {
                  const cursorPointOne = [x2 - buffer, isFloatingTaller ? y2 + buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4];
                  const cursorPointTwo = [x2 - buffer, isFloatingTaller ? y2 - buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4];
                  const commonPoints = [[cursorLeaveFromBottom ? rect.left + buffer : isFloatingTaller ? rect.left + buffer : rect.right, rect.top], [cursorLeaveFromBottom ? isFloatingTaller ? rect.left + buffer : rect.right : rect.left + buffer, rect.bottom]];
                  return [cursorPointOne, cursorPointTwo, ...commonPoints];
                }
              }
            }
            __name(getPolygon, "getPolygon");
            const poly = getPolygon([x, y]);
            if (process.env.NODE_ENV !== "production") {
              debug == null ? void 0 : debug(poly.slice(0, 4).join(", "));
            }
            if (!isPointInPolygon([clientX, clientY], poly)) {
              close();
            } else if (restMs) {
              timeoutId = setTimeout(onClose, restMs);
            }
          }, "onPointerMove");
        };
      }
      __name(safePolygon, "safePolygon");
      const DEFAULT_ID = "floating-ui-root";
      const useFloatingPortalNode = /* @__PURE__ */ __name(function(_temp) {
        let {
          id = DEFAULT_ID,
          enabled = true
        } = _temp === void 0 ? {} : _temp;
        const [portalEl, setPortalEl] = React__namespace.useState(null);
        index(() => {
          if (!enabled) {
            return;
          }
          const rootNode = document.getElementById(id);
          if (rootNode) {
            setPortalEl(rootNode);
          } else {
            const newPortalEl = document.createElement("div");
            newPortalEl.id = id;
            setPortalEl(newPortalEl);
            if (!document.body.contains(newPortalEl)) {
              document.body.appendChild(newPortalEl);
            }
          }
        }, [id, enabled]);
        return portalEl;
      }, "useFloatingPortalNode");
      const FloatingPortal = /* @__PURE__ */ __name((_ref) => {
        let {
          children,
          id = DEFAULT_ID,
          root = null
        } = _ref;
        const portalNode = useFloatingPortalNode({
          id,
          enabled: !root
        });
        if (root) {
          return /* @__PURE__ */ reactDom$1.createPortal(children, root);
        }
        if (portalNode) {
          return /* @__PURE__ */ reactDom$1.createPortal(children, portalNode);
        }
        return null;
      }, "FloatingPortal");
      function _extends() {
        _extends = Object.assign || function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        return _extends.apply(this, arguments);
      }
      __name(_extends, "_extends");
      function getPlatform() {
        const uaData = navigator.userAgentData;
        if (uaData != null && uaData.platform) {
          return uaData.platform;
        }
        return navigator.platform;
      }
      __name(getPlatform, "getPlatform");
      function getUserAgent() {
        const uaData = navigator.userAgentData;
        if (uaData != null && uaData.brands) {
          return uaData.brands.map((_ref) => {
            let {
              brand,
              version
            } = _ref;
            return brand + "/" + version;
          }).join(" ");
        }
        return navigator.userAgent;
      }
      __name(getUserAgent, "getUserAgent");
      const identifier = "data-floating-ui-scroll-lock";
      const FloatingOverlay = /* @__PURE__ */ React__namespace.forwardRef(/* @__PURE__ */ __name(function FloatingOverlay2(_ref, ref) {
        let {
          lockScroll = false,
          ...rest
        } = _ref;
        index(() => {
          var _window$visualViewpor, _window$visualViewpor2, _window$visualViewpor3, _window$visualViewpor4;
          if (!lockScroll) {
            return;
          }
          const alreadyLocked = document.body.hasAttribute(identifier);
          if (alreadyLocked) {
            return;
          }
          document.body.setAttribute(identifier, "");
          const scrollbarX = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft;
          const paddingProp = scrollbarX ? "paddingLeft" : "paddingRight";
          const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
          if (!/iP(hone|ad|od)|iOS/.test(getPlatform())) {
            Object.assign(document.body.style, {
              overflow: "hidden",
              [paddingProp]: scrollbarWidth + "px"
            });
            return () => {
              document.body.removeAttribute(identifier);
              Object.assign(document.body.style, {
                overflow: "",
                [paddingProp]: ""
              });
            };
          }
          const offsetLeft = (_window$visualViewpor = (_window$visualViewpor2 = window.visualViewport) == null ? void 0 : _window$visualViewpor2.offsetLeft) != null ? _window$visualViewpor : 0;
          const offsetTop = (_window$visualViewpor3 = (_window$visualViewpor4 = window.visualViewport) == null ? void 0 : _window$visualViewpor4.offsetTop) != null ? _window$visualViewpor3 : 0;
          const scrollX = window.pageXOffset;
          const scrollY = window.pageYOffset;
          Object.assign(document.body.style, {
            position: "fixed",
            overflow: "hidden",
            top: -(scrollY - Math.floor(offsetTop)) + "px",
            left: -(scrollX - Math.floor(offsetLeft)) + "px",
            right: "0",
            [paddingProp]: scrollbarWidth + "px"
          });
          return () => {
            Object.assign(document.body.style, {
              position: "",
              overflow: "",
              top: "",
              left: "",
              right: "",
              [paddingProp]: ""
            });
            document.body.removeAttribute(identifier);
            window.scrollTo(scrollX, scrollY);
          };
        }, [lockScroll]);
        return /* @__PURE__ */ React__namespace.createElement("div", _extends({
          ref
        }, rest, {
          style: {
            position: "fixed",
            overflow: "auto",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...rest.style
          }
        }));
      }, "FloatingOverlay"));
      var getDefaultParent = /* @__PURE__ */ __name(function(originalTarget) {
        if (typeof document === "undefined") {
          return null;
        }
        var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
        return sampleTarget.ownerDocument.body;
      }, "getDefaultParent");
      var counterMap = /* @__PURE__ */ new WeakMap();
      var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
      var markerMap = {};
      var lockCount = 0;
      var hideOthers2 = /* @__PURE__ */ __name(function(originalTarget, parentNode, markerName) {
        if (parentNode === void 0) {
          parentNode = getDefaultParent(originalTarget);
        }
        if (markerName === void 0) {
          markerName = "data-aria-hidden";
        }
        var targets = Array.isArray(originalTarget) ? originalTarget : [originalTarget];
        if (!markerMap[markerName]) {
          markerMap[markerName] = /* @__PURE__ */ new WeakMap();
        }
        var markerCounter = markerMap[markerName];
        var hiddenNodes = [];
        var elementsToKeep = /* @__PURE__ */ new Set();
        var keep = /* @__PURE__ */ __name(function(el) {
          if (!el || elementsToKeep.has(el)) {
            return;
          }
          elementsToKeep.add(el);
          keep(el.parentNode);
        }, "keep");
        targets.forEach(keep);
        var deep = /* @__PURE__ */ __name(function(parent) {
          if (!parent || targets.indexOf(parent) >= 0) {
            return;
          }
          Array.prototype.forEach.call(parent.children, function(node) {
            if (elementsToKeep.has(node)) {
              deep(node);
            } else {
              var attr = node.getAttribute("aria-hidden");
              var alreadyHidden = attr !== null && attr !== "false";
              var counterValue = (counterMap.get(node) || 0) + 1;
              var markerValue = (markerCounter.get(node) || 0) + 1;
              counterMap.set(node, counterValue);
              markerCounter.set(node, markerValue);
              hiddenNodes.push(node);
              if (counterValue === 1 && alreadyHidden) {
                uncontrolledNodes.set(node, true);
              }
              if (markerValue === 1) {
                node.setAttribute(markerName, "true");
              }
              if (!alreadyHidden) {
                node.setAttribute("aria-hidden", "true");
              }
            }
          });
        }, "deep");
        deep(parentNode);
        elementsToKeep.clear();
        lockCount++;
        return function() {
          hiddenNodes.forEach(function(node) {
            var counterValue = counterMap.get(node) - 1;
            var markerValue = markerCounter.get(node) - 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            if (!counterValue) {
              if (!uncontrolledNodes.has(node)) {
                node.removeAttribute("aria-hidden");
              }
              uncontrolledNodes.delete(node);
            }
            if (!markerValue) {
              node.removeAttribute(markerName);
            }
          });
          lockCount--;
          if (!lockCount) {
            counterMap = /* @__PURE__ */ new WeakMap();
            counterMap = /* @__PURE__ */ new WeakMap();
            uncontrolledNodes = /* @__PURE__ */ new WeakMap();
            markerMap = {};
          }
        };
      }, "hideOthers");
      function activeElement(doc) {
        let activeElement2 = doc.activeElement;
        while (((_activeElement = activeElement2) == null ? void 0 : (_activeElement$shadow = _activeElement.shadowRoot) == null ? void 0 : _activeElement$shadow.activeElement) != null) {
          var _activeElement, _activeElement$shadow;
          activeElement2 = activeElement2.shadowRoot.activeElement;
        }
        return activeElement2;
      }
      __name(activeElement, "activeElement");
      function getAncestors(nodes, id) {
        var _nodes$find;
        let allAncestors = [];
        let currentParentId = (_nodes$find = nodes.find((node) => node.id === id)) == null ? void 0 : _nodes$find.parentId;
        while (currentParentId) {
          const currentNode = nodes.find((node) => node.id === currentParentId);
          currentParentId = currentNode == null ? void 0 : currentNode.parentId;
          if (currentNode) {
            allAncestors = allAncestors.concat(currentNode);
          }
        }
        return allAncestors;
      }
      __name(getAncestors, "getAncestors");
      const TYPEABLE_SELECTOR = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
      function isTypeableElement(element) {
        return isHTMLElement(element) && element.matches(TYPEABLE_SELECTOR);
      }
      __name(isTypeableElement, "isTypeableElement");
      function stopEvent(event) {
        event.preventDefault();
        event.stopPropagation();
      }
      __name(stopEvent, "stopEvent");
      function useLatestRef(value) {
        const ref = React3.useRef(value);
        index(() => {
          ref.current = value;
        });
        return ref;
      }
      __name(useLatestRef, "useLatestRef");
      function focus(el, preventScroll) {
        if (preventScroll === void 0) {
          preventScroll = false;
        }
        requestAnimationFrame(() => {
          el == null ? void 0 : el.focus({
            preventScroll
          });
        });
      }
      __name(focus, "focus");
      const SELECTOR = "select:not([disabled]),a[href],button:not([disabled]),[tabindex],iframe,object,embed,area[href],audio[controls],video[controls]," + TYPEABLE_SELECTOR;
      const FocusGuard = /* @__PURE__ */ React__namespace.forwardRef(/* @__PURE__ */ __name(function FocusGuard2(props, ref) {
        return /* @__PURE__ */ React__namespace.createElement("span", _extends({}, props, {
          ref,
          tabIndex: 0,
          style: {
            position: "fixed",
            opacity: "0",
            pointerEvents: "none",
            outline: "0"
          }
        }));
      }, "FocusGuard"));
      function FloatingFocusManager(_ref) {
        var _tree$nodesRef$curren;
        let {
          context: {
            refs,
            nodeId,
            onOpenChange,
            dataRef,
            events
          },
          children,
          order = ["content"],
          endGuard = true,
          preventTabbing = false,
          initialFocus = 0,
          returnFocus = true,
          modal = true
        } = _ref;
        const orderRef = useLatestRef(order);
        const onOpenChangeRef = useLatestRef(onOpenChange);
        const tree = useFloatingTree();
        const root = (tree == null ? void 0 : (_tree$nodesRef$curren = tree.nodesRef.current.find((node) => node.id === nodeId)) == null ? void 0 : _tree$nodesRef$curren.parentId) == null;
        const getTabbableElements = React__namespace.useCallback(() => {
          return orderRef.current.map((type) => {
            if (type === "reference") {
              return refs.domReference.current;
            }
            if (refs.floating.current && type === "floating") {
              return refs.floating.current;
            }
            if (type === "content") {
              var _refs$floating$curren, _refs$floating$curren2;
              return Array.from((_refs$floating$curren = (_refs$floating$curren2 = refs.floating.current) == null ? void 0 : _refs$floating$curren2.querySelectorAll(SELECTOR)) != null ? _refs$floating$curren : []);
            }
            return null;
          }).flat().filter((el) => {
            if (el === refs.floating.current || el === refs.domReference.current) {
              return true;
            }
            if (isHTMLElement(el)) {
              var _el$getAttribute;
              const tabIndex = (_el$getAttribute = el.getAttribute("tabindex")) != null ? _el$getAttribute : "0";
              return tabIndex[0].trim() !== "-";
            }
          });
        }, [orderRef, refs]);
        React__namespace.useEffect(() => {
          if (!modal) {
            return;
          }
          const noTabbableContentElements = getTabbableElements().filter((el) => el !== refs.floating.current && el !== refs.domReference.current).length === 0;
          function onKeyDown(event) {
            if (event.key === "Tab") {
              if (preventTabbing || noTabbableContentElements) {
                stopEvent(event);
              }
              const els = getTabbableElements();
              const target = "composedPath" in event ? event.composedPath()[0] : event.target;
              if (orderRef.current[0] === "reference" && target === refs.domReference.current) {
                stopEvent(event);
                if (event.shiftKey) {
                  focus(els[els.length - 1]);
                } else {
                  focus(els[1]);
                }
              }
              if (orderRef.current[1] === "floating" && target === refs.floating.current && event.shiftKey) {
                stopEvent(event);
                focus(els[0]);
              }
            }
          }
          __name(onKeyDown, "onKeyDown");
          const doc = getDocument(refs.floating.current);
          doc.addEventListener("keydown", onKeyDown);
          return () => {
            doc.removeEventListener("keydown", onKeyDown);
          };
        }, [preventTabbing, modal, getTabbableElements, orderRef, refs]);
        React__namespace.useEffect(() => {
          function onFocusOut(event) {
            var _refs$floating$curren3, _getAncestors;
            const relatedTarget = event.relatedTarget;
            const focusMovedOutsideFloating = !((_refs$floating$curren3 = refs.floating.current) != null && _refs$floating$curren3.contains(relatedTarget));
            const focusMovedOutsideReference = isElement(refs.domReference.current) && !refs.domReference.current.contains(relatedTarget);
            const isChildOpen = tree && getChildren(tree.nodesRef.current, nodeId).length > 0;
            const isParentRelated = tree && event.currentTarget === refs.domReference.current && ((_getAncestors = getAncestors(tree.nodesRef.current, nodeId)) == null ? void 0 : _getAncestors.some((node) => {
              var _node$context, _node$context$refs$fl;
              return (_node$context = node.context) == null ? void 0 : (_node$context$refs$fl = _node$context.refs.floating.current) == null ? void 0 : _node$context$refs$fl.contains(relatedTarget);
            }));
            if (focusMovedOutsideFloating && focusMovedOutsideReference && !isChildOpen && !isParentRelated) {
              onOpenChangeRef.current(false);
            }
          }
          __name(onFocusOut, "onFocusOut");
          const floating = refs.floating.current;
          const reference = refs.domReference.current;
          if (floating && isHTMLElement(reference)) {
            !modal && floating.addEventListener("focusout", onFocusOut);
            !modal && reference.addEventListener("focusout", onFocusOut);
            let cleanup;
            if (modal) {
              if (orderRef.current.includes("reference")) {
                cleanup = hideOthers2([reference, floating]);
              } else {
                cleanup = hideOthers2(floating);
              }
            }
            return () => {
              !modal && floating.removeEventListener("focusout", onFocusOut);
              !modal && reference.removeEventListener("focusout", onFocusOut);
              cleanup == null ? void 0 : cleanup();
            };
          }
        }, [nodeId, tree, modal, onOpenChangeRef, orderRef, dataRef, getTabbableElements, refs]);
        React__namespace.useEffect(() => {
          if (preventTabbing && !root) {
            return;
          }
          const floating = refs.floating.current;
          const doc = getDocument(floating);
          let returnFocusValue = returnFocus;
          let preventReturnFocusScroll = false;
          let previouslyFocusedElement = activeElement(doc);
          if (previouslyFocusedElement === doc.body && refs.domReference.current) {
            previouslyFocusedElement = refs.domReference.current;
          }
          if (!preventTabbing) {
            if (typeof initialFocus === "number") {
              var _getTabbableElements$;
              focus((_getTabbableElements$ = getTabbableElements()[initialFocus]) != null ? _getTabbableElements$ : floating);
            } else if (isHTMLElement(initialFocus == null ? void 0 : initialFocus.current)) {
              var _initialFocus$current;
              focus((_initialFocus$current = initialFocus.current) != null ? _initialFocus$current : floating);
            }
          }
          function onDismiss(allowReturnFocus) {
            if (allowReturnFocus === void 0) {
              allowReturnFocus = false;
            }
            if (typeof allowReturnFocus === "object") {
              returnFocusValue = true;
              preventReturnFocusScroll = allowReturnFocus.preventScroll;
            } else {
              returnFocusValue = allowReturnFocus;
            }
          }
          __name(onDismiss, "onDismiss");
          events.on("dismiss", onDismiss);
          return () => {
            events.off("dismiss", onDismiss);
            if (returnFocusValue && isHTMLElement(previouslyFocusedElement)) {
              focus(previouslyFocusedElement, preventReturnFocusScroll);
            }
          };
        }, [preventTabbing, getTabbableElements, initialFocus, returnFocus, refs, events, root]);
        const isTypeableCombobox = /* @__PURE__ */ __name(() => {
          var _refs$domReference$cu;
          return ((_refs$domReference$cu = refs.domReference.current) == null ? void 0 : _refs$domReference$cu.getAttribute("role")) === "combobox" && isTypeableElement(refs.domReference.current);
        }, "isTypeableCombobox");
        return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, modal && /* @__PURE__ */ React__namespace.createElement(FocusGuard, {
          onFocus: (event) => {
            if (isTypeableCombobox()) {
              return;
            }
            stopEvent(event);
            const els = getTabbableElements();
            if (order[0] === "reference") {
              focus(els[0]);
            } else {
              focus(els[els.length - 1]);
            }
          }
        }), /* @__PURE__ */ React__namespace.cloneElement(children, order.includes("floating") ? {
          tabIndex: 0
        } : {}), modal && endGuard && /* @__PURE__ */ React__namespace.createElement(FocusGuard, {
          onFocus: (event) => {
            if (isTypeableCombobox()) {
              return;
            }
            stopEvent(event);
            focus(getTabbableElements()[0]);
          }
        }));
      }
      __name(FloatingFocusManager, "FloatingFocusManager");
      function usePrevious(value) {
        const ref = React3.useRef();
        index(() => {
          ref.current = value;
        }, [value]);
        return ref.current;
      }
      __name(usePrevious, "usePrevious");
      function getDelay(value, prop, pointerType) {
        if (pointerType && pointerType !== "mouse") {
          return 0;
        }
        if (typeof value === "number") {
          return value;
        }
        return value == null ? void 0 : value[prop];
      }
      __name(getDelay, "getDelay");
      const useHover = /* @__PURE__ */ __name(function(context, _temp) {
        let {
          enabled = true,
          delay = 0,
          handleClose = null,
          mouseOnly = false,
          restMs = 0
        } = _temp === void 0 ? {} : _temp;
        const {
          open,
          onOpenChange,
          dataRef,
          events,
          refs
        } = context;
        const tree = useFloatingTree();
        const parentId = useFloatingParentNodeId();
        const onOpenChangeRef = useLatestRef(onOpenChange);
        const handleCloseRef = useLatestRef(handleClose);
        const previousOpen = usePrevious(open);
        const pointerTypeRef = React__namespace.useRef();
        const timeoutRef = React__namespace.useRef();
        const handlerRef = React__namespace.useRef();
        const restTimeoutRef = React__namespace.useRef();
        const blockMouseMoveRef = React__namespace.useRef(true);
        const performedPointerEventsMutationRef = React__namespace.useRef(false);
        const isHoverOpen = React__namespace.useCallback(() => {
          var _dataRef$current$open;
          const type = (_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type;
          return (type == null ? void 0 : type.includes("mouse")) && type !== "mousedown";
        }, [dataRef]);
        React__namespace.useEffect(() => {
          if (!enabled) {
            return;
          }
          function onDismiss() {
            clearTimeout(timeoutRef.current);
            clearTimeout(restTimeoutRef.current);
            blockMouseMoveRef.current = true;
          }
          __name(onDismiss, "onDismiss");
          events.on("dismiss", onDismiss);
          return () => {
            events.off("dismiss", onDismiss);
          };
        }, [enabled, events, refs]);
        React__namespace.useEffect(() => {
          if (!enabled || !handleCloseRef.current) {
            return;
          }
          function onLeave() {
            if (isHoverOpen()) {
              onOpenChangeRef.current(false);
            }
          }
          __name(onLeave, "onLeave");
          const html = getDocument(refs.floating.current).documentElement;
          html.addEventListener("mouseleave", onLeave);
          return () => {
            html.removeEventListener("mouseleave", onLeave);
          };
        }, [refs, onOpenChangeRef, enabled, handleCloseRef, dataRef, isHoverOpen]);
        const closeWithDelay = React__namespace.useCallback(function(runElseBranch) {
          if (runElseBranch === void 0) {
            runElseBranch = true;
          }
          const closeDelay = getDelay(delay, "close", pointerTypeRef.current);
          if (closeDelay && !handlerRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => onOpenChangeRef.current(false), closeDelay);
          } else if (runElseBranch) {
            clearTimeout(timeoutRef.current);
            onOpenChangeRef.current(false);
          }
        }, [delay, onOpenChangeRef]);
        const cleanupPointerMoveHandler = React__namespace.useCallback(() => {
          if (handlerRef.current) {
            getDocument(refs.floating.current).removeEventListener("pointermove", handlerRef.current);
            handlerRef.current = void 0;
          }
        }, [refs]);
        const clearPointerEvents = React__namespace.useCallback(() => {
          getDocument(refs.floating.current).body.style.pointerEvents = "";
          performedPointerEventsMutationRef.current = false;
        }, [refs]);
        React__namespace.useEffect(() => {
          if (!enabled) {
            return;
          }
          function isClickLikeOpenEvent() {
            return dataRef.current.openEvent ? ["click", "mousedown"].includes(dataRef.current.openEvent.type) : false;
          }
          __name(isClickLikeOpenEvent, "isClickLikeOpenEvent");
          function onMouseEnter(event) {
            clearTimeout(timeoutRef.current);
            blockMouseMoveRef.current = false;
            if (open || mouseOnly && pointerTypeRef.current !== "mouse" || restMs > 0 && getDelay(delay, "open") === 0) {
              return;
            }
            dataRef.current.openEvent = event;
            const openDelay = getDelay(delay, "open", pointerTypeRef.current);
            if (openDelay) {
              timeoutRef.current = setTimeout(() => {
                onOpenChangeRef.current(true);
              }, openDelay);
            } else {
              onOpenChangeRef.current(true);
            }
          }
          __name(onMouseEnter, "onMouseEnter");
          function onMouseLeave(event) {
            if (isClickLikeOpenEvent()) {
              return;
            }
            const doc = getDocument(refs.floating.current);
            clearTimeout(restTimeoutRef.current);
            if (handleCloseRef.current) {
              clearTimeout(timeoutRef.current);
              handlerRef.current && doc.removeEventListener("pointermove", handlerRef.current);
              handlerRef.current = handleCloseRef.current({
                ...context,
                tree,
                x: event.clientX,
                y: event.clientY,
                onClose() {
                  clearPointerEvents();
                  cleanupPointerMoveHandler();
                  closeWithDelay();
                }
              });
              doc.addEventListener("pointermove", handlerRef.current);
              return;
            }
            closeWithDelay();
          }
          __name(onMouseLeave, "onMouseLeave");
          function onScrollMouseLeave(event) {
            if (isClickLikeOpenEvent()) {
              return;
            }
            handleCloseRef.current == null ? void 0 : handleCloseRef.current({
              ...context,
              tree,
              x: event.clientX,
              y: event.clientY,
              leave: true,
              onClose() {
                clearPointerEvents();
                cleanupPointerMoveHandler();
                closeWithDelay();
              }
            })(event);
          }
          __name(onScrollMouseLeave, "onScrollMouseLeave");
          const floating = refs.floating.current;
          const reference = refs.domReference.current;
          if (isElement(reference)) {
            open && reference.addEventListener("mouseleave", onScrollMouseLeave);
            floating == null ? void 0 : floating.addEventListener("mouseleave", onScrollMouseLeave);
            reference.addEventListener("mousemove", onMouseEnter, {
              once: true
            });
            reference.addEventListener("mouseenter", onMouseEnter);
            reference.addEventListener("mouseleave", onMouseLeave);
            return () => {
              open && reference.removeEventListener("mouseleave", onScrollMouseLeave);
              floating == null ? void 0 : floating.removeEventListener("mouseleave", onScrollMouseLeave);
              reference.removeEventListener("mousemove", onMouseEnter);
              reference.removeEventListener("mouseenter", onMouseEnter);
              reference.removeEventListener("mouseleave", onMouseLeave);
            };
          }
        }, [enabled, closeWithDelay, context, delay, handleCloseRef, dataRef, mouseOnly, onOpenChangeRef, open, tree, restMs, cleanupPointerMoveHandler, clearPointerEvents, refs]);
        index(() => {
          if (!enabled) {
            return;
          }
          if (open && handleCloseRef.current && isHoverOpen()) {
            getDocument(refs.floating.current).body.style.pointerEvents = "none";
            performedPointerEventsMutationRef.current = true;
            const reference = refs.domReference.current;
            const floating = refs.floating.current;
            if (isElement(reference) && floating) {
              var _tree$nodesRef$curren, _tree$nodesRef$curren2;
              const parentFloating = tree == null ? void 0 : (_tree$nodesRef$curren = tree.nodesRef.current.find((node) => node.id === parentId)) == null ? void 0 : (_tree$nodesRef$curren2 = _tree$nodesRef$curren.context) == null ? void 0 : _tree$nodesRef$curren2.refs.floating.current;
              if (parentFloating) {
                parentFloating.style.pointerEvents = "";
              }
              reference.style.pointerEvents = "auto";
              floating.style.pointerEvents = "auto";
              return () => {
                reference.style.pointerEvents = "";
                floating.style.pointerEvents = "";
              };
            }
          }
        }, [enabled, open, parentId, refs, tree, handleCloseRef, dataRef, isHoverOpen]);
        index(() => {
          if (previousOpen && !open) {
            pointerTypeRef.current = void 0;
            cleanupPointerMoveHandler();
            clearPointerEvents();
          }
        });
        React__namespace.useEffect(() => {
          return () => {
            cleanupPointerMoveHandler();
            clearTimeout(timeoutRef.current);
            clearTimeout(restTimeoutRef.current);
            if (performedPointerEventsMutationRef.current) {
              clearPointerEvents();
            }
          };
        }, [enabled, cleanupPointerMoveHandler, clearPointerEvents]);
        if (!enabled) {
          return {};
        }
        function setPointerRef(event) {
          pointerTypeRef.current = event.pointerType;
        }
        __name(setPointerRef, "setPointerRef");
        return {
          reference: {
            onPointerDown: setPointerRef,
            onPointerEnter: setPointerRef,
            onMouseMove() {
              if (open || restMs === 0) {
                return;
              }
              clearTimeout(restTimeoutRef.current);
              restTimeoutRef.current = setTimeout(() => {
                if (!blockMouseMoveRef.current) {
                  onOpenChange(true);
                }
              }, restMs);
            }
          },
          floating: {
            onMouseEnter() {
              clearTimeout(timeoutRef.current);
            },
            onMouseLeave() {
              closeWithDelay(false);
            }
          }
        };
      }, "useHover");
      const FloatingDelayGroupContext = /* @__PURE__ */ React__namespace.createContext({
        delay: 1e3,
        initialDelay: 1e3,
        currentId: null,
        setCurrentId: () => {
        },
        setState: () => {
        }
      });
      const useDelayGroupContext = /* @__PURE__ */ __name(() => React__namespace.useContext(FloatingDelayGroupContext), "useDelayGroupContext");
      const FloatingDelayGroup = /* @__PURE__ */ __name((_ref) => {
        let {
          children,
          delay
        } = _ref;
        const [state, setState] = React__namespace.useState({
          delay,
          initialDelay: delay,
          currentId: null
        });
        const setCurrentId = React__namespace.useCallback((currentId) => {
          setState((state2) => ({
            ...state2,
            currentId
          }));
        }, []);
        return /* @__PURE__ */ React__namespace.createElement(FloatingDelayGroupContext.Provider, {
          value: React__namespace.useMemo(() => ({
            ...state,
            setState,
            setCurrentId
          }), [state, setState, setCurrentId])
        }, children);
      }, "FloatingDelayGroup");
      const useDelayGroup = /* @__PURE__ */ __name((_ref2, _ref3) => {
        let {
          open,
          onOpenChange
        } = _ref2;
        let {
          id
        } = _ref3;
        const {
          currentId,
          initialDelay,
          setState
        } = useDelayGroupContext();
        const onOpenChangeRef = useLatestRef(onOpenChange);
        React__namespace.useEffect(() => {
          if (currentId && onOpenChangeRef.current) {
            setState((state) => ({
              ...state,
              delay: {
                open: 1,
                close: getDelay(initialDelay, "close")
              }
            }));
            if (currentId !== id) {
              onOpenChangeRef.current(false);
            }
          }
        }, [id, onOpenChangeRef, setState, currentId, initialDelay]);
        React__namespace.useEffect(() => {
          if (!open && currentId === id && onOpenChangeRef.current) {
            onOpenChangeRef.current(false);
            setState((state) => ({
              ...state,
              delay: initialDelay,
              currentId: null
            }));
          }
        }, [open, setState, currentId, id, onOpenChangeRef, initialDelay]);
      }, "useDelayGroup");
      function getArgsWithCustomFloatingHeight(args, prop) {
        return {
          ...args,
          rects: {
            ...args.rects,
            floating: {
              ...args.rects.floating,
              height: args.elements.floating[prop]
            }
          }
        };
      }
      __name(getArgsWithCustomFloatingHeight, "getArgsWithCustomFloatingHeight");
      const inner = /* @__PURE__ */ __name((options) => ({
        name: "inner",
        options,
        async fn(middlewareArguments) {
          const {
            listRef,
            overflowRef,
            onFallbackChange,
            offset: innerOffset = 0,
            index: index2 = 0,
            minItemsVisible = 4,
            referenceOverflowThreshold = 0,
            ...detectOverflowOptions
          } = options;
          const {
            rects,
            elements: {
              floating
            }
          } = middlewareArguments;
          const item = listRef.current[index2];
          if (process.env.NODE_ENV !== "production") {
            if (!middlewareArguments.placement.startsWith("bottom")) {
              console.warn(['Floating UI: `placement` side must be "bottom" when using the', "`inner` middleware."].join(" "));
            }
          }
          if (!item) {
            return {};
          }
          const nextArgs = {
            ...middlewareArguments,
            ...await reactDom.offset(-item.offsetTop - rects.reference.height / 2 - item.offsetHeight / 2 - innerOffset).fn(middlewareArguments)
          };
          const overflow = await reactDom.detectOverflow(getArgsWithCustomFloatingHeight(nextArgs, "scrollHeight"), detectOverflowOptions);
          const refOverflow = await reactDom.detectOverflow(nextArgs, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const diffY = Math.max(0, overflow.top);
          const nextY = nextArgs.y + diffY;
          const maxHeight = Math.max(0, floating.scrollHeight - diffY - Math.max(0, overflow.bottom));
          floating.style.maxHeight = maxHeight + "px";
          floating.scrollTop = diffY;
          if (onFallbackChange) {
            if (floating.offsetHeight < item.offsetHeight * Math.min(minItemsVisible, listRef.current.length - 1) - 1 || refOverflow.top >= -referenceOverflowThreshold || refOverflow.bottom >= -referenceOverflowThreshold) {
              reactDom$1.flushSync(() => onFallbackChange(true));
            } else {
              reactDom$1.flushSync(() => onFallbackChange(false));
            }
          }
          if (overflowRef) {
            overflowRef.current = await reactDom.detectOverflow(getArgsWithCustomFloatingHeight({
              ...nextArgs,
              y: nextY
            }, "offsetHeight"), detectOverflowOptions);
          }
          return {
            y: nextY
          };
        }
      }), "inner");
      const useInnerOffset = /* @__PURE__ */ __name((_ref, _ref2) => {
        let {
          open,
          refs
        } = _ref;
        let {
          enabled = true,
          overflowRef,
          onChange
        } = _ref2;
        const onChangeRef = useLatestRef(onChange);
        const controlledScrollingRef = React__namespace.useRef(false);
        const prevScrollTopRef = React__namespace.useRef(null);
        const initialOverflowRef = React__namespace.useRef(null);
        React__namespace.useEffect(() => {
          if (!enabled) {
            return;
          }
          function onWheel(e) {
            if (e.ctrlKey || !el || overflowRef.current == null) {
              return;
            }
            const dY = e.deltaY;
            const isAtTop = overflowRef.current.top >= -0.5;
            const isAtBottom = overflowRef.current.bottom >= -0.5;
            const remainingScroll = el.scrollHeight - el.clientHeight;
            const sign = dY < 0 ? -1 : 1;
            const method = dY < 0 ? "max" : "min";
            if (el.scrollHeight <= el.clientHeight) {
              return;
            }
            if (!isAtTop && dY > 0 || !isAtBottom && dY < 0) {
              e.preventDefault();
              reactDom$1.flushSync(() => {
                onChangeRef.current((d) => d + Math[method](dY, remainingScroll * sign));
              });
            } else if (/firefox/i.test(getUserAgent())) {
              el.scrollTop += dY;
            }
          }
          __name(onWheel, "onWheel");
          const el = refs.floating.current;
          if (open && el) {
            el.addEventListener("wheel", onWheel);
            requestAnimationFrame(() => {
              prevScrollTopRef.current = el.scrollTop;
              if (overflowRef.current != null) {
                initialOverflowRef.current = {
                  ...overflowRef.current
                };
              }
            });
            return () => {
              prevScrollTopRef.current = null;
              initialOverflowRef.current = null;
              el.removeEventListener("wheel", onWheel);
            };
          }
        }, [enabled, open, refs, overflowRef, onChangeRef]);
        if (!enabled) {
          return {};
        }
        return {
          floating: {
            onKeyDown() {
              controlledScrollingRef.current = true;
            },
            onWheel() {
              controlledScrollingRef.current = false;
            },
            onPointerMove() {
              controlledScrollingRef.current = false;
            },
            onScroll() {
              const el = refs.floating.current;
              if (!overflowRef.current || !el || !controlledScrollingRef.current) {
                return;
              }
              if (prevScrollTopRef.current !== null) {
                const scrollDiff = el.scrollTop - prevScrollTopRef.current;
                if (overflowRef.current.bottom < -0.5 && scrollDiff < -1 || overflowRef.current.top < -0.5 && scrollDiff > 1) {
                  reactDom$1.flushSync(() => onChange((d) => d + scrollDiff));
                }
              }
              requestAnimationFrame(() => {
                prevScrollTopRef.current = el.scrollTop;
              });
            }
          }
        };
      }, "useInnerOffset");
      const useRole2 = /* @__PURE__ */ __name(function(_ref, _temp) {
        let {
          open
        } = _ref;
        let {
          enabled = true,
          role = "dialog"
        } = _temp === void 0 ? {} : _temp;
        const rootId = useId();
        const referenceId = useId();
        const floatingProps = {
          id: rootId,
          role
        };
        if (!enabled) {
          return {};
        }
        if (role === "tooltip") {
          return {
            reference: {
              "aria-describedby": open ? rootId : void 0
            },
            floating: floatingProps
          };
        }
        return {
          reference: {
            "aria-expanded": open ? "true" : "false",
            "aria-haspopup": role,
            "aria-controls": open ? rootId : void 0,
            ...role === "listbox" && {
              role: "combobox"
            },
            ...role === "menu" && {
              id: referenceId
            }
          },
          floating: {
            ...floatingProps,
            ...role === "menu" && {
              "aria-labelledby": referenceId
            }
          }
        };
      }, "useRole");
      const useClick = /* @__PURE__ */ __name(function(_ref, _temp) {
        let {
          open,
          onOpenChange,
          dataRef,
          refs
        } = _ref;
        let {
          enabled = true,
          pointerDown = false,
          toggle = true,
          ignoreMouse = false
        } = _temp === void 0 ? {} : _temp;
        const pointerTypeRef = React__namespace.useRef();
        function isButton() {
          var _refs$domReference$cu;
          return ((_refs$domReference$cu = refs.domReference.current) == null ? void 0 : _refs$domReference$cu.tagName) === "BUTTON";
        }
        __name(isButton, "isButton");
        function isSpaceIgnored() {
          return isTypeableElement(refs.domReference.current);
        }
        __name(isSpaceIgnored, "isSpaceIgnored");
        if (!enabled) {
          return {};
        }
        return {
          reference: {
            onPointerDown(event) {
              pointerTypeRef.current = event.pointerType;
            },
            onMouseDown(event) {
              if (event.button !== 0) {
                return;
              }
              if (pointerTypeRef.current === "mouse" && ignoreMouse) {
                return;
              }
              if (!pointerDown) {
                return;
              }
              if (open) {
                if (toggle && (dataRef.current.openEvent ? dataRef.current.openEvent.type === "mousedown" : true)) {
                  onOpenChange(false);
                }
              } else {
                onOpenChange(true);
              }
              dataRef.current.openEvent = event.nativeEvent;
            },
            onClick(event) {
              if (pointerDown && pointerTypeRef.current) {
                pointerTypeRef.current = void 0;
                return;
              }
              if (pointerTypeRef.current === "mouse" && ignoreMouse) {
                return;
              }
              if (open) {
                if (toggle && (dataRef.current.openEvent ? dataRef.current.openEvent.type === "click" : true)) {
                  onOpenChange(false);
                }
              } else {
                onOpenChange(true);
              }
              dataRef.current.openEvent = event.nativeEvent;
            },
            onKeyDown(event) {
              pointerTypeRef.current = void 0;
              if (isButton()) {
                return;
              }
              if (event.key === " " && !isSpaceIgnored()) {
                event.preventDefault();
              }
              if (event.key === "Enter") {
                if (open) {
                  if (toggle) {
                    onOpenChange(false);
                  }
                } else {
                  onOpenChange(true);
                }
              }
            },
            onKeyUp(event) {
              if (isButton() || isSpaceIgnored()) {
                return;
              }
              if (event.key === " ") {
                if (open) {
                  if (toggle) {
                    onOpenChange(false);
                  }
                } else {
                  onOpenChange(true);
                }
              }
            }
          }
        };
      }, "useClick");
      function isEventTargetWithin(event, node) {
        if (node == null) {
          return false;
        }
        if ("composedPath" in event) {
          return event.composedPath().includes(node);
        }
        const e = event;
        return e.target != null && node.contains(e.target);
      }
      __name(isEventTargetWithin, "isEventTargetWithin");
      const useDismiss2 = /* @__PURE__ */ __name(function(_ref, _temp) {
        let {
          open,
          onOpenChange,
          refs,
          events,
          nodeId
        } = _ref;
        let {
          enabled = true,
          escapeKey = true,
          outsidePointerDown = true,
          referencePointerDown = false,
          ancestorScroll = false,
          bubbles = true
        } = _temp === void 0 ? {} : _temp;
        const tree = useFloatingTree();
        const onOpenChangeRef = useLatestRef(onOpenChange);
        const nested = useFloatingParentNodeId() != null;
        React__namespace.useEffect(() => {
          if (!open || !enabled) {
            return;
          }
          function onKeyDown(event) {
            if (event.key === "Escape") {
              if (!bubbles && tree && getChildren(tree.nodesRef.current, nodeId).length > 0) {
                return;
              }
              events.emit("dismiss", {
                preventScroll: false
              });
              onOpenChangeRef.current(false);
            }
          }
          __name(onKeyDown, "onKeyDown");
          function onPointerDown(event) {
            const targetIsInsideChildren = tree && getChildren(tree.nodesRef.current, nodeId).some((node) => {
              var _node$context;
              return isEventTargetWithin(event, (_node$context = node.context) == null ? void 0 : _node$context.refs.floating.current);
            });
            if (isEventTargetWithin(event, refs.floating.current) || isEventTargetWithin(event, refs.domReference.current) || targetIsInsideChildren) {
              return;
            }
            if (!bubbles && tree && getChildren(tree.nodesRef.current, nodeId).length > 0) {
              return;
            }
            events.emit("dismiss", nested ? {
              preventScroll: true
            } : false);
            onOpenChangeRef.current(false);
          }
          __name(onPointerDown, "onPointerDown");
          function onScroll() {
            onOpenChangeRef.current(false);
          }
          __name(onScroll, "onScroll");
          const doc = getDocument(refs.floating.current);
          escapeKey && doc.addEventListener("keydown", onKeyDown);
          outsidePointerDown && doc.addEventListener("pointerdown", onPointerDown);
          const ancestors = (ancestorScroll ? [...isElement(refs.reference.current) ? reactDom.getOverflowAncestors(refs.reference.current) : [], ...isElement(refs.floating.current) ? reactDom.getOverflowAncestors(refs.floating.current) : []] : []).filter((ancestor) => {
            var _doc$defaultView;
            return ancestor !== ((_doc$defaultView = doc.defaultView) == null ? void 0 : _doc$defaultView.visualViewport);
          });
          ancestors.forEach((ancestor) => ancestor.addEventListener("scroll", onScroll, {
            passive: true
          }));
          return () => {
            escapeKey && doc.removeEventListener("keydown", onKeyDown);
            outsidePointerDown && doc.removeEventListener("pointerdown", onPointerDown);
            ancestors.forEach((ancestor) => ancestor.removeEventListener("scroll", onScroll));
          };
        }, [escapeKey, outsidePointerDown, events, tree, nodeId, open, onOpenChangeRef, ancestorScroll, enabled, bubbles, refs, nested]);
        if (!enabled) {
          return {};
        }
        return {
          reference: {
            onPointerDown() {
              if (referencePointerDown) {
                events.emit("dismiss");
                onOpenChange(false);
              }
            }
          }
        };
      }, "useDismiss");
      const useFocus2 = /* @__PURE__ */ __name(function(_ref, _temp) {
        let {
          open,
          onOpenChange,
          dataRef,
          refs,
          events
        } = _ref;
        let {
          enabled = true,
          keyboardOnly = true
        } = _temp === void 0 ? {} : _temp;
        const pointerTypeRef = React__namespace.useRef("");
        const blockFocusRef = React__namespace.useRef(false);
        React__namespace.useEffect(() => {
          var _doc$defaultView;
          if (!enabled) {
            return;
          }
          const doc = getDocument(refs.floating.current);
          const win = (_doc$defaultView = doc.defaultView) != null ? _doc$defaultView : window;
          function onBlur() {
            if (pointerTypeRef.current && refs.domReference.current === activeElement(doc)) {
              blockFocusRef.current = !open;
            }
          }
          __name(onBlur, "onBlur");
          function onFocus() {
            setTimeout(() => {
              blockFocusRef.current = false;
              pointerTypeRef.current = "";
            });
          }
          __name(onFocus, "onFocus");
          win.addEventListener("focus", onFocus);
          win.addEventListener("blur", onBlur);
          return () => {
            win.removeEventListener("focus", onFocus);
            win.removeEventListener("blur", onBlur);
          };
        }, [refs, open, enabled]);
        React__namespace.useEffect(() => {
          if (!enabled) {
            return;
          }
          function onDismiss() {
            blockFocusRef.current = true;
          }
          __name(onDismiss, "onDismiss");
          events.on("dismiss", onDismiss);
          return () => {
            events.off("dismiss", onDismiss);
          };
        }, [events, enabled]);
        if (!enabled) {
          return {};
        }
        return {
          reference: {
            onPointerDown(_ref2) {
              let {
                pointerType
              } = _ref2;
              pointerTypeRef.current = pointerType;
              blockFocusRef.current = !!(pointerType && keyboardOnly);
            },
            onFocus(event) {
              var _dataRef$current$open, _refs$domReference$cu, _dataRef$current$open2;
              if (blockFocusRef.current) {
                return;
              }
              if (event.type === "focus" && ((_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type) === "mousedown" && (_refs$domReference$cu = refs.domReference.current) != null && _refs$domReference$cu.contains((_dataRef$current$open2 = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open2.target)) {
                return;
              }
              dataRef.current.openEvent = event.nativeEvent;
              onOpenChange(true);
            },
            onBlur(event) {
              var _refs$floating$curren, _refs$domReference$cu2;
              const target = event.relatedTarget;
              if ((_refs$floating$curren = refs.floating.current) != null && _refs$floating$curren.contains(target) || (_refs$domReference$cu2 = refs.domReference.current) != null && _refs$domReference$cu2.contains(target)) {
                return;
              }
              blockFocusRef.current = false;
              onOpenChange(false);
            }
          }
        };
      }, "useFocus");
      const ARROW_UP = "ArrowUp";
      const ARROW_DOWN = "ArrowDown";
      const ARROW_LEFT = "ArrowLeft";
      const ARROW_RIGHT = "ArrowRight";
      function isIndexOutOfBounds(listRef, index2) {
        return index2 < 0 || index2 >= listRef.current.length;
      }
      __name(isIndexOutOfBounds, "isIndexOutOfBounds");
      function findNonDisabledIndex(listRef, _temp) {
        let {
          startingIndex = -1,
          decrement = false,
          disabledIndices
        } = _temp === void 0 ? {} : _temp;
        const list = listRef.current;
        let index2 = startingIndex;
        do {
          var _list$index, _list$index2;
          index2 = index2 + (decrement ? -1 : 1);
        } while (index2 >= 0 && index2 <= list.length - 1 && (disabledIndices ? disabledIndices.includes(index2) : list[index2] == null || ((_list$index = list[index2]) == null ? void 0 : _list$index.hasAttribute("disabled")) || ((_list$index2 = list[index2]) == null ? void 0 : _list$index2.getAttribute("aria-disabled")) === "true"));
        return index2;
      }
      __name(findNonDisabledIndex, "findNonDisabledIndex");
      function doSwitch(orientation, vertical, horizontal) {
        switch (orientation) {
          case "vertical":
            return vertical;
          case "horizontal":
            return horizontal;
          default:
            return vertical || horizontal;
        }
      }
      __name(doSwitch, "doSwitch");
      function isMainOrientationKey(key, orientation) {
        const vertical = key === ARROW_UP || key === ARROW_DOWN;
        const horizontal = key === ARROW_LEFT || key === ARROW_RIGHT;
        return doSwitch(orientation, vertical, horizontal);
      }
      __name(isMainOrientationKey, "isMainOrientationKey");
      function isMainOrientationToEndKey(key, orientation, rtl) {
        const vertical = key === ARROW_DOWN;
        const horizontal = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
        return doSwitch(orientation, vertical, horizontal) || key === "Enter" || key == " " || key === "";
      }
      __name(isMainOrientationToEndKey, "isMainOrientationToEndKey");
      function isCrossOrientationOpenKey(key, orientation, rtl) {
        const vertical = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
        const horizontal = key === ARROW_DOWN;
        return doSwitch(orientation, vertical, horizontal);
      }
      __name(isCrossOrientationOpenKey, "isCrossOrientationOpenKey");
      function isCrossOrientationCloseKey(key, orientation, rtl) {
        const vertical = rtl ? key === ARROW_RIGHT : key === ARROW_LEFT;
        const horizontal = key === ARROW_UP;
        return doSwitch(orientation, vertical, horizontal);
      }
      __name(isCrossOrientationCloseKey, "isCrossOrientationCloseKey");
      function getMinIndex(listRef, disabledIndices) {
        return findNonDisabledIndex(listRef, {
          disabledIndices
        });
      }
      __name(getMinIndex, "getMinIndex");
      function getMaxIndex(listRef, disabledIndices) {
        return findNonDisabledIndex(listRef, {
          decrement: true,
          startingIndex: listRef.current.length,
          disabledIndices
        });
      }
      __name(getMaxIndex, "getMaxIndex");
      const useListNavigation = /* @__PURE__ */ __name(function(_ref, _temp2) {
        let {
          open,
          onOpenChange,
          refs
        } = _ref;
        let {
          listRef,
          activeIndex,
          onNavigate,
          enabled = true,
          selectedIndex = null,
          allowEscape = false,
          loop = false,
          nested = false,
          rtl = false,
          virtual = false,
          focusItemOnOpen = "auto",
          focusItemOnHover = true,
          openOnArrowKeyDown = true,
          disabledIndices = openOnArrowKeyDown ? void 0 : [],
          orientation = "vertical"
        } = _temp2 === void 0 ? {
          listRef: {
            current: []
          },
          activeIndex: null,
          onNavigate: () => {
          }
        } : _temp2;
        if (process.env.NODE_ENV !== "production") {
          if (allowEscape) {
            if (!loop) {
              console.warn(["Floating UI: `useListNavigation` looping must be enabled to allow", "escaping."].join(" "));
            }
            if (!virtual) {
              console.warn(["Floating UI: `useListNavigation` must be virtual to allow", "escaping."].join(" "));
            }
          }
        }
        const parentId = useFloatingParentNodeId();
        const tree = useFloatingTree();
        const previousOpen = usePrevious(open);
        const focusItemOnOpenRef = React__namespace.useRef(focusItemOnOpen);
        const indexRef = React__namespace.useRef(selectedIndex != null ? selectedIndex : -1);
        const keyRef = React__namespace.useRef(null);
        const previousOnNavigateRef = useLatestRef(usePrevious(onNavigate));
        const onNavigateRef = useLatestRef(onNavigate);
        const disabledIndicesRef = useLatestRef(disabledIndices);
        const blockPointerLeaveRef = React__namespace.useRef(false);
        const frameRef = React__namespace.useRef(-1);
        const [activeId, setActiveId] = React__namespace.useState();
        const focusItem = React__namespace.useCallback((listRef2, indexRef2) => {
          frameRef.current = requestAnimationFrame(() => {
            if (virtual) {
              var _listRef$current$inde;
              setActiveId((_listRef$current$inde = listRef2.current[indexRef2.current]) == null ? void 0 : _listRef$current$inde.id);
            } else {
              var _listRef$current$inde2;
              (_listRef$current$inde2 = listRef2.current[indexRef2.current]) == null ? void 0 : _listRef$current$inde2.focus({
                preventScroll: true
              });
            }
          });
        }, [virtual]);
        index(() => {
          if (!enabled) {
            return;
          }
          if (!previousOpen && open && focusItemOnOpenRef.current && selectedIndex != null) {
            onNavigateRef.current(selectedIndex);
          }
          if (previousOpen && !open) {
            cancelAnimationFrame(frameRef.current);
            indexRef.current = -1;
            previousOnNavigateRef.current == null ? void 0 : previousOnNavigateRef.current(null);
          }
        }, [open, previousOpen, selectedIndex, listRef, onNavigateRef, previousOnNavigateRef, focusItem, enabled]);
        index(() => {
          if (!enabled) {
            return;
          }
          if (open) {
            if (activeIndex == null) {
              if (selectedIndex != null) {
                return;
              }
              if (previousOpen) {
                indexRef.current = -1;
                focusItem(listRef, indexRef);
              }
              if (!previousOpen && focusItemOnOpenRef.current && (keyRef.current != null || focusItemOnOpenRef.current === true && keyRef.current == null)) {
                indexRef.current = keyRef.current == null || isMainOrientationToEndKey(keyRef.current, orientation, rtl) || nested ? getMinIndex(listRef, disabledIndicesRef.current) : getMaxIndex(listRef, disabledIndicesRef.current);
                onNavigateRef.current(indexRef.current);
                focusItem(listRef, indexRef);
              }
            } else if (!isIndexOutOfBounds(listRef, activeIndex)) {
              indexRef.current = activeIndex;
              focusItem(listRef, indexRef);
            }
          }
        }, [open, previousOpen, activeIndex, selectedIndex, nested, listRef, onNavigateRef, focusItem, enabled, allowEscape, orientation, rtl, virtual, disabledIndicesRef]);
        index(() => {
          if (!enabled) {
            return;
          }
          if (!open && previousOpen) {
            var _tree$nodesRef$curren, _tree$nodesRef$curren2;
            const parentFloating = tree == null ? void 0 : (_tree$nodesRef$curren = tree.nodesRef.current.find((node) => node.id === parentId)) == null ? void 0 : (_tree$nodesRef$curren2 = _tree$nodesRef$curren.context) == null ? void 0 : _tree$nodesRef$curren2.refs.floating.current;
            if (parentFloating && !parentFloating.contains(activeElement(getDocument(parentFloating)))) {
              parentFloating.focus({
                preventScroll: true
              });
            }
          }
        }, [enabled, open, previousOpen, tree, parentId]);
        index(() => {
          keyRef.current = null;
        });
        function onKeyDown(event) {
          blockPointerLeaveRef.current = true;
          if (nested && isCrossOrientationCloseKey(event.key, orientation, rtl)) {
            stopEvent(event);
            onOpenChange(false);
            if (isHTMLElement(refs.domReference.current)) {
              refs.domReference.current.focus();
            }
            return;
          }
          const currentIndex = indexRef.current;
          const minIndex = getMinIndex(listRef, disabledIndices);
          const maxIndex = getMaxIndex(listRef, disabledIndices);
          if (event.key === "Home") {
            indexRef.current = minIndex;
            onNavigate(indexRef.current);
          }
          if (event.key === "End") {
            indexRef.current = maxIndex;
            onNavigate(indexRef.current);
          }
          if (isMainOrientationKey(event.key, orientation)) {
            stopEvent(event);
            if (open && !virtual && activeElement(event.currentTarget.ownerDocument) === event.currentTarget) {
              indexRef.current = isMainOrientationToEndKey(event.key, orientation, rtl) ? minIndex : maxIndex;
              onNavigate(indexRef.current);
              return;
            }
            if (isMainOrientationToEndKey(event.key, orientation, rtl)) {
              if (loop) {
                indexRef.current = currentIndex >= maxIndex ? allowEscape && currentIndex !== listRef.current.length ? -1 : minIndex : findNonDisabledIndex(listRef, {
                  startingIndex: currentIndex,
                  disabledIndices
                });
              } else {
                indexRef.current = Math.min(maxIndex, findNonDisabledIndex(listRef, {
                  startingIndex: currentIndex,
                  disabledIndices
                }));
              }
            } else {
              if (loop) {
                indexRef.current = currentIndex <= minIndex ? allowEscape && currentIndex !== -1 ? listRef.current.length : maxIndex : findNonDisabledIndex(listRef, {
                  startingIndex: currentIndex,
                  decrement: true,
                  disabledIndices
                });
              } else {
                indexRef.current = Math.max(minIndex, findNonDisabledIndex(listRef, {
                  startingIndex: currentIndex,
                  decrement: true,
                  disabledIndices
                }));
              }
            }
            if (isIndexOutOfBounds(listRef, indexRef.current)) {
              onNavigate(null);
            } else {
              onNavigate(indexRef.current);
            }
          }
        }
        __name(onKeyDown, "onKeyDown");
        if (!enabled) {
          return {};
        }
        return {
          reference: {
            ...virtual && open && activeIndex != null && {
              "aria-activedescendant": activeId
            },
            onKeyDown(event) {
              blockPointerLeaveRef.current = true;
              if (virtual && open) {
                return onKeyDown(event);
              }
              const isNavigationKey = event.key.indexOf("Arrow") === 0 || event.key === "Enter" || event.key === " " || event.key === "";
              if (isNavigationKey) {
                keyRef.current = event.key;
              }
              if (nested) {
                if (isCrossOrientationOpenKey(event.key, orientation, rtl)) {
                  stopEvent(event);
                  if (open) {
                    indexRef.current = getMinIndex(listRef, disabledIndices);
                    onNavigate(indexRef.current);
                  } else {
                    onOpenChange(true);
                  }
                }
                return;
              }
              if (isMainOrientationKey(event.key, orientation)) {
                if (selectedIndex != null) {
                  indexRef.current = selectedIndex;
                }
                stopEvent(event);
                if (!open && openOnArrowKeyDown) {
                  onOpenChange(true);
                } else {
                  onKeyDown(event);
                }
                if (open) {
                  onNavigate(indexRef.current);
                }
              }
            }
          },
          floating: {
            "aria-orientation": orientation === "both" ? void 0 : orientation,
            ...virtual && activeIndex != null && {
              "aria-activedescendant": activeId
            },
            onKeyDown,
            onPointerMove() {
              blockPointerLeaveRef.current = false;
            }
          },
          item: {
            onFocus(_ref2) {
              let {
                currentTarget
              } = _ref2;
              const index2 = listRef.current.indexOf(currentTarget);
              if (index2 !== -1) {
                onNavigate(index2);
              }
            },
            onClick: (_ref3) => {
              let {
                currentTarget
              } = _ref3;
              return currentTarget.focus({
                preventScroll: true
              });
            },
            ...focusItemOnHover && {
              onMouseMove(_ref4) {
                let {
                  currentTarget
                } = _ref4;
                const target = currentTarget;
                if (target) {
                  const index2 = listRef.current.indexOf(target);
                  if (index2 !== -1) {
                    onNavigate(index2);
                  }
                }
              },
              onPointerLeave() {
                if (!blockPointerLeaveRef.current) {
                  indexRef.current = -1;
                  focusItem(listRef, indexRef);
                  onNavigateRef.current(null);
                  if (!virtual) {
                    var _refs$floating$curren;
                    (_refs$floating$curren = refs.floating.current) == null ? void 0 : _refs$floating$curren.focus({
                      preventScroll: true
                    });
                  }
                }
              }
            }
          }
        };
      }, "useListNavigation");
      const useTypeahead = /* @__PURE__ */ __name(function(_ref, _temp) {
        var _ref2;
        let {
          open,
          dataRef
        } = _ref;
        let {
          listRef,
          activeIndex,
          onMatch = /* @__PURE__ */ __name(() => {
          }, "onMatch"),
          enabled = true,
          findMatch = null,
          resetMs = 1e3,
          ignoreKeys = [],
          selectedIndex = null
        } = _temp === void 0 ? {
          listRef: {
            current: []
          },
          activeIndex: null
        } : _temp;
        const timeoutIdRef = React__namespace.useRef();
        const stringRef = React__namespace.useRef("");
        const prevIndexRef = React__namespace.useRef((_ref2 = selectedIndex != null ? selectedIndex : activeIndex) != null ? _ref2 : -1);
        const matchIndexRef = React__namespace.useRef(null);
        index(() => {
          if (open) {
            clearTimeout(timeoutIdRef.current);
            matchIndexRef.current = null;
            stringRef.current = "";
          }
        }, [open]);
        index(() => {
          if (open && stringRef.current === "") {
            var _ref3;
            prevIndexRef.current = (_ref3 = selectedIndex != null ? selectedIndex : activeIndex) != null ? _ref3 : -1;
          }
        }, [open, selectedIndex, activeIndex]);
        function onKeyDown(event) {
          if (!event.currentTarget.contains(activeElement(getDocument(event.currentTarget)))) {
            return;
          }
          if (stringRef.current.length > 0 && stringRef.current[0] !== " ") {
            dataRef.current.typing = true;
            if (event.key === " ") {
              stopEvent(event);
            }
          }
          const listContent = listRef.current;
          if (listContent == null || ["Home", "End", "Escape", "Enter", "Tab", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", ...ignoreKeys].includes(event.key)) {
            return;
          }
          const allowRapidSuccessionOfFirstLetter = listContent.every((text) => {
            var _text$, _text$2;
            return text ? ((_text$ = text[0]) == null ? void 0 : _text$.toLocaleLowerCase()) !== ((_text$2 = text[1]) == null ? void 0 : _text$2.toLocaleLowerCase()) : true;
          });
          if (allowRapidSuccessionOfFirstLetter && stringRef.current === event.key) {
            stringRef.current = "";
            prevIndexRef.current = matchIndexRef.current;
          }
          stringRef.current += event.key;
          clearTimeout(timeoutIdRef.current);
          timeoutIdRef.current = setTimeout(() => {
            stringRef.current = "";
            prevIndexRef.current = matchIndexRef.current;
            dataRef.current.typing = false;
          }, resetMs);
          const prevIndex = prevIndexRef.current;
          const orderedList = [...listContent.slice((prevIndex != null ? prevIndex : 0) + 1), ...listContent.slice(0, (prevIndex != null ? prevIndex : 0) + 1)];
          const str = findMatch ? findMatch(orderedList, stringRef.current) : orderedList.find((text) => (text == null ? void 0 : text.toLocaleLowerCase().indexOf(stringRef.current)) === 0);
          const index2 = str ? listContent.indexOf(str) : -1;
          if (index2 !== -1) {
            onMatch(index2);
            matchIndexRef.current = index2;
          }
        }
        __name(onKeyDown, "onKeyDown");
        if (!enabled) {
          return {};
        }
        return {
          reference: {
            onKeyDown
          },
          floating: {
            onKeyDown
          }
        };
      }, "useTypeahead");
      exports3.FloatingDelayGroup = FloatingDelayGroup;
      exports3.FloatingFocusManager = FloatingFocusManager;
      exports3.FloatingNode = FloatingNode;
      exports3.FloatingOverlay = FloatingOverlay;
      exports3.FloatingPortal = FloatingPortal;
      exports3.FloatingTree = FloatingTree;
      exports3.inner = inner;
      exports3.safePolygon = safePolygon;
      exports3.useClick = useClick;
      exports3.useDelayGroup = useDelayGroup;
      exports3.useDelayGroupContext = useDelayGroupContext;
      exports3.useDismiss = useDismiss2;
      exports3.useFloating = useFloating2;
      exports3.useFloatingNodeId = useFloatingNodeId;
      exports3.useFloatingParentNodeId = useFloatingParentNodeId;
      exports3.useFloatingPortalNode = useFloatingPortalNode;
      exports3.useFloatingTree = useFloatingTree;
      exports3.useFocus = useFocus2;
      exports3.useHover = useHover;
      exports3.useId = useId;
      exports3.useInnerOffset = useInnerOffset;
      exports3.useInteractions = useInteractions2;
      exports3.useListNavigation = useListNavigation;
      exports3.useRole = useRole2;
      exports3.useTypeahead = useTypeahead;
      Object.keys(reactDom).forEach(function(k) {
        if (k !== "default" && !exports3.hasOwnProperty(k))
          Object.defineProperty(exports3, k, {
            enumerable: true,
            get: function() {
              return reactDom[k];
            }
          });
      });
      Object.defineProperty(exports3, "__esModule", { value: true });
    });
  }
});

// ../../node_modules/@tamagui/popover/dist/cjs/floating.js
var require_floating2 = __commonJS({
  "../../node_modules/@tamagui/popover/dist/cjs/floating.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var floating_exports = {};
    __export3(floating_exports, {
      useDismiss: () => import_react_dom_interactions.useDismiss,
      useFloating: () => import_react_dom_interactions.useFloating,
      useFocus: () => import_react_dom_interactions.useFocus,
      useInteractions: () => import_react_dom_interactions.useInteractions,
      useRole: () => import_react_dom_interactions.useRole
    });
    module2.exports = __toCommonJS3(floating_exports);
    var import_react_dom_interactions = require_floating_ui_react_dom_interactions_umd();
  }
});

// ../../node_modules/@tamagui/popover/dist/cjs/Popover.js
var require_Popover = __commonJS({
  "../../node_modules/@tamagui/popover/dist/cjs/Popover.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Popover_exports = {};
    __export3(Popover_exports, {
      Popover: () => Popover,
      PopoverAnchor: () => PopoverAnchor,
      PopoverArrow: () => PopoverArrow,
      PopoverClose: () => PopoverClose,
      PopoverContent: () => PopoverContent,
      PopoverSheetContents: () => PopoverSheetContents,
      PopoverTrigger: () => PopoverTrigger,
      __PopoverProviderInternal: () => __PopoverProviderInternal,
      createPopoverScope: () => createPopoverScope,
      usePopoverScope: () => usePopoverScope
    });
    module2.exports = __toCommonJS3(Popover_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_polyfill_dev = require_polyfill_dev();
    var import_animate_presence = require_cjs2();
    var import_aria_hidden = require_cjs5();
    var import_compose_refs = require_cjs3();
    var import_core2 = require("@tamagui/core-node");
    var import_create_context = require_cjs4();
    var import_focus_scope = require_cjs8();
    var import_popper = require_cjs33();
    var import_portal = require_cjs11();
    var import_remove_scroll = require_cjs12();
    var import_sheet = require_cjs16();
    var import_stacks = require_cjs10();
    var import_use_controllable_state = require_cjs14();
    var React3 = __toESM2(require("react"));
    var import_react_native3 = require("react-native-web-lite");
    var import_floating = require_floating2();
    var POPOVER_NAME = "Popover";
    var [createPopoverContext, createPopoverScopeInternal] = (0, import_create_context.createContextScope)(POPOVER_NAME, [
      import_popper.createPopperScope
    ]);
    var usePopoverScope = (0, import_popper.createPopperScope)();
    var createPopoverScope = createPopoverScopeInternal;
    var [PopoverProviderInternal, usePopoverInternalContext] = createPopoverContext(POPOVER_NAME);
    var __PopoverProviderInternal = PopoverProviderInternal;
    var ANCHOR_NAME = "PopoverAnchor";
    var PopoverAnchor = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopePopover, ...anchorProps } = props;
        const context = usePopoverInternalContext(ANCHOR_NAME, __scopePopover);
        const popperScope = usePopoverScope(__scopePopover);
        const { onCustomAnchorAdd, onCustomAnchorRemove } = context;
        React3.useEffect(() => {
          onCustomAnchorAdd();
          return () => onCustomAnchorRemove();
        }, [onCustomAnchorAdd, onCustomAnchorRemove]);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popper.PopperAnchor, {
          ...popperScope,
          ...anchorProps,
          ref: forwardedRef
        });
      }
    );
    PopoverAnchor.displayName = ANCHOR_NAME;
    var TRIGGER_NAME = "PopoverTrigger";
    var PopoverTrigger = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopePopover, ...triggerProps } = props;
        const context = usePopoverInternalContext(TRIGGER_NAME, __scopePopover);
        const popperScope = usePopoverScope(__scopePopover);
        const composedTriggerRef = (0, import_compose_refs.useComposedRefs)(forwardedRef, context.triggerRef);
        const trigger = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_stacks.YStack, {
          "aria-haspopup": "dialog",
          "aria-expanded": context.open,
          "data-state": getState(context.open),
          ...triggerProps,
          ref: composedTriggerRef,
          onPress: (0, import_core2.composeEventHandlers)(props.onPress, context.onOpenToggle)
        });
        return context.hasCustomAnchor ? trigger : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popper.PopperAnchor, {
          asChild: true,
          ...popperScope,
          children: trigger
        });
      }
    );
    PopoverTrigger.displayName = TRIGGER_NAME;
    var CONTENT_NAME = "PopoverContent";
    var PopoverContent = React3.forwardRef(
      (props, forwardedRef) => {
        const { allowPinchZoom, trapFocus, disableRemoveScroll = true, ...contentModalProps } = props;
        const context = usePopoverInternalContext(CONTENT_NAME, props.__scopePopover);
        const contentRef = React3.useRef(null);
        const composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, contentRef);
        const isRightClickOutsideRef = React3.useRef(false);
        const themeName = (0, import_core2.useThemeName)();
        React3.useEffect(() => {
          if (!context.open)
            return;
          const content = contentRef.current;
          if (content)
            return (0, import_aria_hidden.hideOthers)(content);
        }, [context.open]);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_portal.Portal, {
          zIndex: props.zIndex ?? 1e3,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core2.Theme, {
            name: themeName,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContentImpl, {
              ...contentModalProps,
              disableRemoveScroll,
              ref: composedRefs,
              trapFocus: trapFocus ?? context.open,
              disableOutsidePointerEvents: true,
              onCloseAutoFocus: (0, import_core2.composeEventHandlers)(props.onCloseAutoFocus, (event) => {
                var _a;
                event.preventDefault();
                if (!isRightClickOutsideRef.current)
                  (_a = context.triggerRef.current) == null ? void 0 : _a.focus();
              }),
              onPointerDownOutside: (0, import_core2.composeEventHandlers)(
                props.onPointerDownOutside,
                (event) => {
                  const originalEvent = event.detail.originalEvent;
                  const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
                  const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
                  isRightClickOutsideRef.current = isRightClick;
                },
                { checkDefaultPrevented: false }
              ),
              onFocusOutside: (0, import_core2.composeEventHandlers)(
                props.onFocusOutside,
                (event) => event.preventDefault(),
                { checkDefaultPrevented: false }
              )
            })
          })
        });
      }
    );
    var PopoverContentImpl = React3.forwardRef(
      (props, forwardedRef) => {
        const {
          __scopePopover,
          trapFocus,
          onOpenAutoFocus,
          onCloseAutoFocus,
          disableOutsidePointerEvents,
          onEscapeKeyDown,
          onPointerDownOutside,
          onFocusOutside,
          onInteractOutside,
          children,
          disableRemoveScroll,
          ...contentProps
        } = props;
        const popperScope = usePopoverScope(__scopePopover);
        const context = usePopoverInternalContext(CONTENT_NAME, popperScope.__scopePopover);
        const showSheet = useShowPopoverSheet(context);
        if (showSheet) {
          const childrenWithoutScrollView = React3.Children.toArray(children).map((child) => {
            if (React3.isValidElement(child)) {
              if (child.type === PopoverScrollView) {
                return child.props.children;
              }
            }
            return child;
          });
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_portal.PortalItem, {
            hostName: `${context.scopeKey}SheetContents`,
            children: childrenWithoutScrollView
          });
        }
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_animate_presence.AnimatePresence, {
          children: !!context.open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popper.PopperContent, {
            "data-state": getState(context.open),
            id: context.contentId,
            pointerEvents: "auto",
            ...popperScope,
            ...contentProps,
            ref: forwardedRef,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remove_scroll.RemoveScroll, {
              enabled: disableRemoveScroll ? false : context.open,
              allowPinchZoom: true,
              removeScrollBar: false,
              style: {
                display: "contents"
              },
              children: trapFocus === false ? children : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_focus_scope.FocusScope, {
                loop: true,
                trapped: trapFocus ?? context.open,
                onMountAutoFocus: onOpenAutoFocus,
                onUnmountAutoFocus: onCloseAutoFocus,
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  style: { display: "contents" },
                  children
                })
              })
            })
          }, "popper-content")
        });
      }
    );
    var CLOSE_NAME = "PopoverClose";
    var PopoverClose = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopePopover, ...closeProps } = props;
        const context = usePopoverInternalContext(CLOSE_NAME, __scopePopover);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_stacks.YStack, {
          ...closeProps,
          ref: forwardedRef,
          onPress: (0, import_core2.composeEventHandlers)(props.onPress, () => context.onOpenChange(false))
        });
      }
    );
    PopoverClose.displayName = CLOSE_NAME;
    var ARROW_NAME = "PopoverArrow";
    var PopoverArrow = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopePopover, ...arrowProps } = props;
        const popperScope = usePopoverScope(__scopePopover);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popper.PopperArrow, {
          ...popperScope,
          ...arrowProps,
          ref: forwardedRef
        });
      }
    );
    PopoverArrow.displayName = ARROW_NAME;
    var SHEET_CONTENTS_NAME = "PopoverSheetContents";
    var PopoverSheetContents = /* @__PURE__ */ __name(({ __scopePopover }) => {
      const context = usePopoverInternalContext(SHEET_CONTENTS_NAME, __scopePopover);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_portal.PortalHost, {
        name: `${context.scopeKey}SheetContents`
      });
    }, "PopoverSheetContents");
    PopoverSheetContents.displayName = SHEET_CONTENTS_NAME;
    var PopoverScrollView = React3.forwardRef((props, ref) => {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native3.ScrollView, {
        ref,
        ...props
      });
    });
    var Popover = (0, import_core2.withStaticProperties)(
      (props) => {
        const {
          __scopePopover,
          children,
          open: openProp,
          defaultOpen,
          onOpenChange,
          sheetBreakpoint = false,
          ...restProps
        } = props;
        const popperScope = usePopoverScope(__scopePopover);
        const triggerRef = React3.useRef(null);
        const [hasCustomAnchor, setHasCustomAnchor] = React3.useState(false);
        const [open, setOpen] = (0, import_use_controllable_state.useControllableState)({
          prop: openProp,
          defaultProp: defaultOpen || false,
          onChange: onOpenChange
        });
        const breakpointActive = useSheetBreakpointActive(sheetBreakpoint);
        const useFloatingContext = React3.useCallback(
          (props2) => {
            const floating = (0, import_floating.useFloating)({
              ...props2,
              open,
              onOpenChange: setOpen
            });
            const { getReferenceProps, getFloatingProps } = (0, import_floating.useInteractions)([
              (0, import_floating.useFocus)(floating.context, {
                enabled: !breakpointActive
              }),
              (0, import_floating.useRole)(floating.context, { role: "dialog" }),
              (0, import_floating.useDismiss)(floating.context, {
                enabled: !breakpointActive
              })
            ]);
            return {
              ...floating,
              getReferenceProps,
              getFloatingProps
            };
          },
          [breakpointActive, open, setOpen]
        );
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popper.FloatingOverrideContext.Provider, {
          value: useFloatingContext,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popper.Popper, {
            ...popperScope,
            stayInFrame: true,
            ...restProps,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverProviderInternal, {
              scope: __scopePopover,
              scopeKey: __scopePopover ? Object.keys(__scopePopover)[0] : "",
              sheetBreakpoint,
              contentId: (0, import_core2.useId)(),
              triggerRef,
              open,
              onOpenChange: setOpen,
              onOpenToggle: (0, import_core2.useEvent)(() => {
                if (open && breakpointActive) {
                  return;
                }
                setOpen(!open);
              }),
              hasCustomAnchor,
              onCustomAnchorAdd: React3.useCallback(() => setHasCustomAnchor(true), []),
              onCustomAnchorRemove: React3.useCallback(() => setHasCustomAnchor(false), []),
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverSheetController, {
                onOpenChange: setOpen,
                __scopePopover,
                children
              })
            })
          })
        });
      },
      {
        Anchor: PopoverAnchor,
        Arrow: PopoverArrow,
        Trigger: PopoverTrigger,
        Content: PopoverContent,
        Close: PopoverClose,
        SheetContents: PopoverSheetContents,
        ScrollView: PopoverScrollView,
        Sheet: import_sheet.ControlledSheet
      }
    );
    Popover.displayName = POPOVER_NAME;
    function getState(open) {
      return open ? "open" : "closed";
    }
    __name(getState, "getState");
    var PopoverSheetController = /* @__PURE__ */ __name((props) => {
      const context = usePopoverInternalContext("PopoverSheetController", props.__scopePopover);
      const showSheet = useShowPopoverSheet(context);
      const breakpointActive = useSheetBreakpointActive(context.sheetBreakpoint);
      const getShowSheet = (0, import_core2.useGet)(showSheet);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_sheet.SheetController, {
        onOpenChange: (val) => {
          if (getShowSheet()) {
            props.onOpenChange(val);
          }
        },
        open: context.open,
        hidden: breakpointActive === false,
        children: props.children
      });
    }, "PopoverSheetController");
    var useSheetBreakpointActive = /* @__PURE__ */ __name((breakpoint) => {
      const media = (0, import_core2.useMedia)();
      return breakpoint ? media[breakpoint] : false;
    }, "useSheetBreakpointActive");
    var useShowPopoverSheet = /* @__PURE__ */ __name((context) => {
      if (!import_core2.isWeb)
        return true;
      const breakpointActive = useSheetBreakpointActive(context.sheetBreakpoint);
      return context.open === false ? false : breakpointActive;
    }, "useShowPopoverSheet");
  }
});

// ../../node_modules/@tamagui/popover/dist/cjs/index.js
var require_cjs34 = __commonJS({
  "../../node_modules/@tamagui/popover/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_Popover(), module2.exports);
  }
});

// ../../node_modules/@tamagui/progress/dist/cjs/Progress.js
var require_Progress = __commonJS({
  "../../node_modules/@tamagui/progress/dist/cjs/Progress.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Progress_exports = {};
    __export3(Progress_exports, {
      Progress: () => Progress,
      ProgressFrame: () => ProgressFrame,
      ProgressIndicator: () => ProgressIndicator,
      ProgressIndicatorFrame: () => ProgressIndicatorFrame,
      createProgressScope: () => createProgressScope
    });
    module2.exports = __toCommonJS3(Progress_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_core2 = require("@tamagui/core-node");
    var import_create_context = require_cjs4();
    var import_stacks = require_cjs10();
    var React3 = __toESM2(require("react"));
    var PROGRESS_NAME = "Progress";
    var [createProgressContext, createProgressScope] = (0, import_create_context.createContextScope)(PROGRESS_NAME);
    var [ProgressProvider, useProgressContext] = createProgressContext(PROGRESS_NAME);
    var INDICATOR_NAME = "ProgressIndicator";
    var ProgressIndicatorFrame = (0, import_core2.styled)(import_stacks.ThemeableStack, {
      name: INDICATOR_NAME,
      height: "100%",
      width: "100%",
      backgrounded: true
    });
    var ProgressIndicator = ProgressIndicatorFrame.extractable(
      React3.forwardRef(
        (props, forwardedRef) => {
          const { __scopeProgress, ...indicatorProps } = props;
          const context = useProgressContext(INDICATOR_NAME, __scopeProgress);
          const pct = context.max - (context.value ?? 0);
          const x = -context.width * (pct / 100);
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressIndicatorFrame, {
            "data-state": getProgressState(context.value, context.max),
            "data-value": context.value ?? void 0,
            "data-max": context.max,
            x,
            width: context.width,
            ...indicatorProps,
            ref: forwardedRef
          });
        }
      )
    );
    ProgressIndicator.displayName = INDICATOR_NAME;
    function defaultGetValueLabel(value, max) {
      return `${Math.round(value / max * 100)}%`;
    }
    __name(defaultGetValueLabel, "defaultGetValueLabel");
    function getProgressState(value, maxValue) {
      return value == null ? "indeterminate" : value === maxValue ? "complete" : "loading";
    }
    __name(getProgressState, "getProgressState");
    function isNumber(value) {
      return typeof value === "number";
    }
    __name(isNumber, "isNumber");
    function isValidMaxNumber(max) {
      return isNumber(max) && !isNaN(max) && max > 0;
    }
    __name(isValidMaxNumber, "isValidMaxNumber");
    function isValidValueNumber(value, max) {
      return isNumber(value) && !isNaN(value) && value <= max && value >= 0;
    }
    __name(isValidValueNumber, "isValidValueNumber");
    function getInvalidMaxError(propValue, componentName) {
      return `Invalid prop \`max\` of value \`${propValue}\` supplied to \`${componentName}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${DEFAULT_MAX}\`.`;
    }
    __name(getInvalidMaxError, "getInvalidMaxError");
    function getInvalidValueError(propValue, componentName) {
      return `Invalid prop \`value\` of value \`${propValue}\` supplied to \`${componentName}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
    }
    __name(getInvalidValueError, "getInvalidValueError");
    var DEFAULT_MAX = 100;
    var ProgressFrame = (0, import_core2.styled)(import_stacks.ThemeableStack, {
      name: PROGRESS_NAME,
      borderRadius: 1e5,
      overflow: "hidden",
      backgrounded: true,
      variants: {
        size: {
          "...size": (val) => {
            const size = Math.round((0, import_core2.getVariableValue)((0, import_core2.getSize)(val)) * 0.25);
            return {
              height: size,
              minWidth: (0, import_core2.getVariableValue)(size) * 20,
              width: "100%"
            };
          }
        }
      }
    });
    var Progress = (0, import_core2.withStaticProperties)(
      ProgressFrame.extractable(
        React3.forwardRef(
          (props, forwardedRef) => {
            const {
              __scopeProgress,
              value: valueProp,
              max: maxProp,
              getValueLabel = defaultGetValueLabel,
              size = "$4",
              ...progressProps
            } = props;
            const max = isValidMaxNumber(maxProp) ? maxProp : DEFAULT_MAX;
            const value = isValidValueNumber(valueProp, max) ? valueProp : null;
            const valueLabel = isNumber(value) ? getValueLabel(value, max) : void 0;
            const [width, setWidth] = React3.useState(0);
            return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressProvider, {
              scope: __scopeProgress,
              value,
              max,
              width,
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressFrame, {
                size,
                "aria-valuemax": max,
                "aria-valuemin": 0,
                "aria-valuenow": isNumber(value) ? value : void 0,
                "aria-valuetext": valueLabel,
                role: "progressbar",
                "data-state": getProgressState(value, max),
                "data-value": value ?? void 0,
                "data-max": max,
                ...progressProps,
                onLayout: (e) => {
                  var _a;
                  setWidth(e.nativeEvent.layout.width);
                  (_a = progressProps.onLayout) == null ? void 0 : _a.call(progressProps, e);
                },
                ref: forwardedRef
              })
            });
          }
        )
      ),
      {
        Indicator: ProgressIndicator
      }
    );
    Progress.displayName = PROGRESS_NAME;
    Progress.propTypes = {
      max(props, propName, componentName) {
        const propValue = props[propName];
        const strVal = String(propValue);
        if (propValue && !isValidMaxNumber(propValue)) {
          return new Error(getInvalidMaxError(strVal, componentName));
        }
        return null;
      },
      value(props, propName, componentName) {
        const valueProp = props[propName];
        const strVal = String(valueProp);
        const max = isValidMaxNumber(props.max) ? props.max : DEFAULT_MAX;
        if (valueProp != null && !isValidValueNumber(valueProp, max)) {
          return new Error(getInvalidValueError(strVal, componentName));
        }
        return null;
      }
    };
  }
});

// ../../node_modules/@tamagui/progress/dist/cjs/index.js
var require_cjs35 = __commonJS({
  "../../node_modules/@tamagui/progress/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_Progress(), module2.exports);
  }
});

// ../../node_modules/@tamagui/separator/dist/cjs/Separator.js
var require_Separator = __commonJS({
  "../../node_modules/@tamagui/separator/dist/cjs/Separator.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Separator_exports = {};
    __export3(Separator_exports, {
      Separator: () => Separator
    });
    module2.exports = __toCommonJS3(Separator_exports);
    var import_core2 = require("@tamagui/core-node");
    var Separator = (0, import_core2.styled)(import_core2.Stack, {
      name: "Separator",
      borderColor: "$borderColor",
      flexShrink: 0,
      borderWidth: 0,
      flex: 1,
      height: 0,
      maxHeight: 0,
      borderBottomWidth: 1,
      y: -0.5,
      variants: {
        vertical: {
          true: {
            y: 0,
            x: -0.5,
            height: import_core2.isWeb ? "initial" : "auto",
            maxHeight: import_core2.isWeb ? "initial" : "auto",
            width: 0,
            maxWidth: 0,
            borderBottomWidth: 0,
            borderRightWidth: 1
          }
        }
      }
    });
  }
});

// ../../node_modules/@tamagui/separator/dist/cjs/index.js
var require_cjs36 = __commonJS({
  "../../node_modules/@tamagui/separator/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_Separator(), module2.exports);
  }
});

// ../../node_modules/@tamagui/select/dist/cjs/constants.js
var require_constants2 = __commonJS({
  "../../node_modules/@tamagui/select/dist/cjs/constants.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var constants_exports = {};
    __export3(constants_exports, {
      FALLBACK_THRESHOLD: () => FALLBACK_THRESHOLD,
      MIN_HEIGHT: () => MIN_HEIGHT,
      SCROLL_ARROW_THRESHOLD: () => SCROLL_ARROW_THRESHOLD,
      SCROLL_ARROW_VELOCITY: () => SCROLL_ARROW_VELOCITY,
      SELECT_NAME: () => SELECT_NAME,
      VIEWPORT_NAME: () => VIEWPORT_NAME,
      WINDOW_PADDING: () => WINDOW_PADDING
    });
    module2.exports = __toCommonJS3(constants_exports);
    var SELECT_NAME = "Select";
    var WINDOW_PADDING = 8;
    var SCROLL_ARROW_VELOCITY = 8;
    var SCROLL_ARROW_THRESHOLD = 8;
    var MIN_HEIGHT = 80;
    var FALLBACK_THRESHOLD = 16;
    var VIEWPORT_NAME = "SelectViewport";
  }
});

// ../../node_modules/@tamagui/select/dist/cjs/context.js
var require_context = __commonJS({
  "../../node_modules/@tamagui/select/dist/cjs/context.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var context_exports = {};
    __export3(context_exports, {
      ForwardSelectContext: () => ForwardSelectContext,
      SelectProvider: () => SelectProvider,
      createSelectContext: () => createSelectContext,
      createSelectScope: () => createSelectScope,
      useSelectContext: () => useSelectContext
    });
    module2.exports = __toCommonJS3(context_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_create_context = require_cjs4();
    var import_constants = require_constants2();
    var [createSelectContext, createSelectScope] = (0, import_create_context.createContextScope)(import_constants.SELECT_NAME);
    var [SelectProvider, useSelectContext] = createSelectContext(import_constants.SELECT_NAME);
    var ForwardSelectContext = /* @__PURE__ */ __name((props) => {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectProvider, {
        isInSheet: true,
        scope: props.__scopeSelect,
        ...props.context,
        children: props.children
      });
    }, "ForwardSelectContext");
  }
});

// ../../node_modules/@tamagui/select/dist/cjs/useSelectBreakpointActive.js
var require_useSelectBreakpointActive = __commonJS({
  "../../node_modules/@tamagui/select/dist/cjs/useSelectBreakpointActive.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useSelectBreakpointActive_exports = {};
    __export3(useSelectBreakpointActive_exports, {
      useSelectBreakpointActive: () => useSelectBreakpointActive,
      useShowSelectSheet: () => useShowSelectSheet
    });
    module2.exports = __toCommonJS3(useSelectBreakpointActive_exports);
    var import_core2 = require("@tamagui/core-node");
    var useSelectBreakpointActive = /* @__PURE__ */ __name((sheetBreakpoint) => {
      const media = (0, import_core2.useMedia)();
      return sheetBreakpoint ? media[sheetBreakpoint] : false;
    }, "useSelectBreakpointActive");
    var useShowSelectSheet = /* @__PURE__ */ __name((context) => {
      const breakpointActive = useSelectBreakpointActive(context.sheetBreakpoint);
      return context.open === false ? false : breakpointActive;
    }, "useShowSelectSheet");
  }
});

// ../../node_modules/@tamagui/select/dist/cjs/SelectContent.js
var require_SelectContent = __commonJS({
  "../../node_modules/@tamagui/select/dist/cjs/SelectContent.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SelectContent_exports = {};
    __export3(SelectContent_exports, {
      SelectContent: () => SelectContent
    });
    module2.exports = __toCommonJS3(SelectContent_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_react_dom_interactions = require_floating_ui_react_dom_interactions_umd();
    var import_core2 = require("@tamagui/core-node");
    var import_dismissable = require_cjs7();
    var import_focus_scope = require_cjs8();
    var import_context = require_context();
    var import_useSelectBreakpointActive = require_useSelectBreakpointActive();
    var CONTENT_NAME = "SelectContent";
    var SelectContent = /* @__PURE__ */ __name(({
      children,
      __scopeSelect,
      zIndex = 1e3,
      ...focusScopeProps
    }) => {
      const context = (0, import_context.useSelectContext)(CONTENT_NAME, __scopeSelect);
      const themeName = (0, import_core2.useThemeName)();
      const showSheet = (0, import_useSelectBreakpointActive.useShowSelectSheet)(context);
      const contents = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core2.Theme, {
        name: themeName,
        children
      });
      const touch = (0, import_core2.useIsTouchDevice)();
      if (showSheet && context.open) {
        return contents;
      }
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_dom_interactions.FloatingPortal, {
        children: context.open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_dom_interactions.FloatingOverlay, {
          style: { zIndex },
          lockScroll: !touch,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_focus_scope.FocusScope, {
            loop: true,
            trapped: true,
            ...focusScopeProps,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dismissable.Dismissable, {
              disableOutsidePointerEvents: true,
              children: contents
            })
          })
        }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          style: { display: "none" },
          children: contents
        })
      });
    }, "SelectContent");
  }
});

// ../../node_modules/@tamagui/select/dist/cjs/SelectImpl.js
var require_SelectImpl = __commonJS({
  "../../node_modules/@tamagui/select/dist/cjs/SelectImpl.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SelectImpl_exports = {};
    __export3(SelectImpl_exports, {
      SelectInlineImpl: () => SelectInlineImpl
    });
    module2.exports = __toCommonJS3(SelectImpl_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_react_dom_interactions = require_floating_ui_react_dom_interactions_umd();
    var import_core2 = require("@tamagui/core-node");
    var React3 = __toESM2(require("react"));
    var import_react_dom = require("react-dom");
    var import_constants = require_constants2();
    var import_context = require_context();
    var SelectInlineImpl = /* @__PURE__ */ __name((props) => {
      const { __scopeSelect, children, open = false, selectedIndexRef, listContentRef } = props;
      const selectContext = (0, import_context.useSelectContext)("SelectSheetImpl", __scopeSelect);
      const { setActiveIndex, setOpen, setSelectedIndex, selectedIndex, activeIndex, forceUpdate } = selectContext;
      const [scrollTop, setScrollTop] = React3.useState(0);
      const touch = (0, import_core2.useIsTouchDevice)();
      const listItemsRef = React3.useRef([]);
      const overflowRef = React3.useRef(null);
      const upArrowRef = React3.useRef(null);
      const downArrowRef = React3.useRef(null);
      const allowSelectRef = React3.useRef(false);
      const allowMouseUpRef = React3.useRef(true);
      const selectTimeoutRef = React3.useRef();
      const state = React3.useRef({
        isMouseOutside: false
      });
      const [controlledScrolling, setControlledScrolling] = React3.useState(false);
      const [fallback, setFallback] = React3.useState(false);
      const [innerOffset, setInnerOffset] = React3.useState(0);
      const [blockSelection, setBlockSelection] = React3.useState(false);
      const floatingStyle = React3.useRef({});
      React3.useEffect(() => {
        const frame = requestAnimationFrame(() => {
          if (!open) {
            setScrollTop(0);
            setFallback(false);
            setActiveIndex(null);
            setControlledScrolling(false);
          }
        });
        return () => {
          cancelAnimationFrame(frame);
        };
      }, [open, setActiveIndex]);
      React3.useEffect(() => {
        if (!open)
          return;
        const mouseUp = /* @__PURE__ */ __name((e) => {
          if (state.current.isMouseOutside) {
            setOpen(false);
          }
        }, "mouseUp");
        document.addEventListener("mouseup", mouseUp);
        return () => {
          document.removeEventListener("mouseup", mouseUp);
        };
      }, [open]);
      const updateFloatingSize = (0, import_react_dom_interactions.size)({
        apply({
          availableHeight,
          rects: {
            reference: { width }
          }
        }) {
          floatingStyle.current = {
            width,
            maxHeight: availableHeight
          };
        },
        padding: import_constants.WINDOW_PADDING
      });
      const { x, y, reference, floating, strategy, context, refs } = (0, import_react_dom_interactions.useFloating)({
        open,
        onOpenChange: setOpen,
        whileElementsMounted: import_react_dom_interactions.autoUpdate,
        placement: "bottom-start",
        middleware: fallback ? [
          (0, import_react_dom_interactions.offset)(5),
          ...[
            touch ? (0, import_react_dom_interactions.shift)({ crossAxis: true, padding: import_constants.WINDOW_PADDING }) : (0, import_react_dom_interactions.flip)({ padding: import_constants.WINDOW_PADDING })
          ],
          updateFloatingSize
        ] : [
          (0, import_react_dom_interactions.inner)({
            listRef: listItemsRef,
            overflowRef,
            index: selectedIndex,
            offset: innerOffset,
            onFallbackChange: setFallback,
            padding: 10,
            minItemsVisible: touch ? 10 : 4,
            referenceOverflowThreshold: 20
          }),
          updateFloatingSize
        ]
      });
      const floatingRef = refs.floating;
      const showUpArrow = open && scrollTop > import_constants.SCROLL_ARROW_THRESHOLD;
      const showDownArrow = open && floatingRef.current && scrollTop < floatingRef.current.scrollHeight - floatingRef.current.clientHeight - import_constants.SCROLL_ARROW_THRESHOLD;
      const interactions = (0, import_react_dom_interactions.useInteractions)([
        (0, import_react_dom_interactions.useClick)(context, { pointerDown: true }),
        (0, import_react_dom_interactions.useDismiss)(context, { outsidePointerDown: false }),
        (0, import_react_dom_interactions.useRole)(context, { role: "listbox" }),
        (0, import_react_dom_interactions.useInnerOffset)(context, {
          enabled: !fallback,
          onChange: setInnerOffset,
          overflowRef
        }),
        (0, import_react_dom_interactions.useListNavigation)(context, {
          listRef: listItemsRef,
          activeIndex,
          selectedIndex,
          onNavigate: setActiveIndex
        }),
        (0, import_react_dom_interactions.useTypeahead)(context, {
          listRef: listContentRef,
          onMatch: open ? setActiveIndex : setSelectedIndex,
          selectedIndex,
          activeIndex
        })
      ]);
      const interactionsContext = {
        ...interactions,
        getReferenceProps() {
          return interactions.getReferenceProps({
            ref: reference,
            className: "SelectTrigger",
            onKeyDown(event) {
              if (event.key === "Enter" || event.key === " " && !context.dataRef.current.typing) {
                event.preventDefault();
                setOpen(true);
              }
            }
          });
        },
        getFloatingProps(props2) {
          return interactions.getFloatingProps({
            ref: floating,
            className: "Select",
            ...props2,
            style: {
              position: strategy,
              top: y ?? "",
              left: x ?? "",
              outline: 0,
              listStyleType: "none",
              scrollbarWidth: "none",
              ...floatingStyle.current,
              ...props2 == null ? void 0 : props2.style
            },
            onPointerEnter() {
              setControlledScrolling(false);
              state.current.isMouseOutside = false;
            },
            onPointerLeave() {
              state.current.isMouseOutside = true;
            },
            onPointerMove() {
              state.current.isMouseOutside = false;
              setControlledScrolling(false);
            },
            onKeyDown() {
              setControlledScrolling(true);
            },
            onContextMenu(e) {
              e.preventDefault();
            },
            onScroll(event) {
              (0, import_react_dom.flushSync)(() => setScrollTop(event.currentTarget.scrollTop));
            }
          });
        }
      };
      (0, import_core2.useIsomorphicLayoutEffect)(() => {
        if (open) {
          selectTimeoutRef.current = setTimeout(() => {
            allowSelectRef.current = true;
          }, 300);
          return () => {
            clearTimeout(selectTimeoutRef.current);
          };
        } else {
          allowSelectRef.current = false;
          allowMouseUpRef.current = true;
          setInnerOffset(0);
          setFallback(false);
          setBlockSelection(false);
        }
      }, [open]);
      (0, import_core2.useIsomorphicLayoutEffect)(() => {
        function onPointerDown(e) {
          var _a, _b, _c;
          const target = e.target;
          if (!((_a = refs.floating.current) == null ? void 0 : _a.contains(target)) && !((_b = upArrowRef.current) == null ? void 0 : _b.contains(target)) && !((_c = downArrowRef.current) == null ? void 0 : _c.contains(target))) {
            setOpen(false);
            setControlledScrolling(false);
          }
        }
        __name(onPointerDown, "onPointerDown");
        if (open) {
          document.addEventListener("pointerdown", onPointerDown);
          return () => {
            document.removeEventListener("pointerdown", onPointerDown);
          };
        }
      }, [open, refs, setOpen]);
      (0, import_core2.useIsomorphicLayoutEffect)(() => {
        var _a, _b;
        if (open && controlledScrolling) {
          if (activeIndex != null) {
            (_a = listItemsRef.current[activeIndex]) == null ? void 0 : _a.scrollIntoView({ block: "nearest" });
          }
        }
        setScrollTop(((_b = refs.floating.current) == null ? void 0 : _b.scrollTop) ?? 0);
      }, [open, refs, controlledScrolling, activeIndex]);
      (0, import_core2.useIsomorphicLayoutEffect)(() => {
        var _a;
        if (open && fallback) {
          if (selectedIndex != null) {
            (_a = listItemsRef.current[selectedIndex]) == null ? void 0 : _a.scrollIntoView({ block: "nearest" });
          }
        }
      }, [open, fallback, selectedIndex]);
      (0, import_core2.useIsomorphicLayoutEffect)(() => {
        if (refs.floating.current && fallback) {
          refs.floating.current.style.maxHeight = "";
        }
      }, [refs, fallback]);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_context.SelectProvider, {
        scope: __scopeSelect,
        ...selectContext,
        setScrollTop,
        setInnerOffset,
        floatingRef,
        setValueAtIndex: (index, value) => {
          listContentRef.current[index] = value;
        },
        fallback,
        interactions: interactionsContext,
        floatingContext: context,
        activeIndex,
        canScrollDown: !!showDownArrow,
        canScrollUp: !!showUpArrow,
        controlledScrolling: true,
        dataRef: context.dataRef,
        listRef: listItemsRef,
        blockSelection,
        allowMouseUpRef,
        upArrowRef,
        downArrowRef,
        selectTimeoutRef,
        allowSelectRef,
        children
      });
    }, "SelectInlineImpl");
    var userAgent = typeof navigator !== "undefined" && navigator.userAgent || "";
  }
});

// ../../node_modules/@tamagui/select/dist/cjs/SelectScrollButton.js
var require_SelectScrollButton = __commonJS({
  "../../node_modules/@tamagui/select/dist/cjs/SelectScrollButton.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SelectScrollButton_exports = {};
    __export3(SelectScrollButton_exports, {
      SelectScrollDownButton: () => SelectScrollDownButton,
      SelectScrollUpButton: () => SelectScrollUpButton
    });
    module2.exports = __toCommonJS3(SelectScrollButton_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_react_dom_interactions = require_floating_ui_react_dom_interactions_umd();
    var import_compose_refs = require_cjs3();
    var import_core2 = require("@tamagui/core-node");
    var import_stacks = require_cjs10();
    var React3 = __toESM2(require("react"));
    var import_react_dom = require("react-dom");
    var import_context = require_context();
    var SCROLL_UP_BUTTON_NAME = "SelectScrollUpButton";
    var SelectScrollUpButton = React3.forwardRef(
      (props, forwardedRef) => {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollButtonImpl, {
          componentName: SCROLL_UP_BUTTON_NAME,
          ...props,
          dir: "up",
          ref: forwardedRef
        });
      }
    );
    SelectScrollUpButton.displayName = SCROLL_UP_BUTTON_NAME;
    var SCROLL_DOWN_BUTTON_NAME = "SelectScrollDownButton";
    var SelectScrollDownButton = React3.forwardRef(
      (props, forwardedRef) => {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollButtonImpl, {
          componentName: SCROLL_DOWN_BUTTON_NAME,
          ...props,
          dir: "down",
          ref: forwardedRef
        });
      }
    );
    SelectScrollDownButton.displayName = SCROLL_DOWN_BUTTON_NAME;
    var SelectScrollButtonImpl = React3.memo(
      React3.forwardRef(
        (props, forwardedRef) => {
          var _a;
          const { __scopeSelect, dir, componentName, ...scrollIndicatorProps } = props;
          const { floatingRef, forceUpdate, open, fallback, setScrollTop, setInnerOffset, ...context } = (0, import_context.useSelectContext)(componentName, __scopeSelect);
          const [element, setElement] = React3.useState(null);
          const statusRef = React3.useRef("idle");
          const isVisible = context[dir === "down" ? "canScrollDown" : "canScrollUp"];
          const frameRef = React3.useRef();
          const { x, y, reference, floating, strategy, update, refs } = (0, import_react_dom_interactions.useFloating)({
            strategy: "fixed",
            placement: dir === "up" ? "top" : "bottom",
            middleware: [(0, import_react_dom_interactions.offset)(({ rects }) => -rects.floating.height)],
            whileElementsMounted: (...args) => (0, import_react_dom_interactions.autoUpdate)(...args, { animationFrame: true })
          });
          const composedRef = (0, import_compose_refs.useComposedRefs)(forwardedRef, floating);
          if (floatingRef) {
            if (open) {
              if (element !== floatingRef.current) {
                setElement(floatingRef.current);
                reference(floatingRef.current);
                requestAnimationFrame(update);
              }
            } else {
              cancelAnimationFrame(frameRef.current);
            }
          }
          (0, import_core2.useIsomorphicLayoutEffect)(() => {
            return () => {
              cancelAnimationFrame(frameRef.current);
            };
          }, []);
          if (!isVisible || !floatingRef) {
            return null;
          }
          const onScroll = /* @__PURE__ */ __name((amount) => {
            if (fallback) {
              if (refs.floating.current) {
                refs.floating.current.scrollTop -= amount;
                (0, import_react_dom.flushSync)(() => {
                  var _a2;
                  return setScrollTop(((_a2 = refs.floating.current) == null ? void 0 : _a2.scrollTop) ?? 0);
                });
              }
            } else {
              (0, import_react_dom.flushSync)(() => setInnerOffset((value) => value - amount));
            }
          }, "onScroll");
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_stacks.YStack, {
            ref: composedRef,
            componentName,
            "aria-hidden": true,
            ...scrollIndicatorProps,
            zIndex: 1e3,
            position: strategy,
            left: x || 0,
            top: y || 0,
            width: `calc(${(((_a = floatingRef == null ? void 0 : floatingRef.current) == null ? void 0 : _a.offsetWidth) ?? 0) - 2}px)`,
            onPointerEnter: () => {
              statusRef.current = "active";
              let prevNow = Date.now();
              function frame() {
                if (element) {
                  const currentNow = Date.now();
                  const msElapsed = currentNow - prevNow;
                  prevNow = currentNow;
                  const pixelsToScroll = msElapsed / 2;
                  const remainingPixels = dir === "up" ? element.scrollTop : element.scrollHeight - element.clientHeight - element.scrollTop;
                  const scrollRemaining = dir === "up" ? element.scrollTop - pixelsToScroll > 0 : element.scrollTop + pixelsToScroll < element.scrollHeight - element.clientHeight;
                  onScroll(
                    dir === "up" ? Math.min(pixelsToScroll, remainingPixels) : Math.max(-pixelsToScroll, -remainingPixels)
                  );
                  if (scrollRemaining) {
                    frameRef.current = requestAnimationFrame(frame);
                  }
                }
              }
              __name(frame, "frame");
              cancelAnimationFrame(frameRef.current);
              frameRef.current = requestAnimationFrame(frame);
            },
            onPointerLeave: () => {
              statusRef.current = "idle";
              cancelAnimationFrame(frameRef.current);
            }
          });
        }
      )
    );
  }
});

// ../../node_modules/@tamagui/select/dist/cjs/SelectViewport.js
var require_SelectViewport = __commonJS({
  "../../node_modules/@tamagui/select/dist/cjs/SelectViewport.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SelectViewport_exports = {};
    __export3(SelectViewport_exports, {
      SelectViewport: () => SelectViewport,
      SelectViewportFrame: () => SelectViewportFrame
    });
    module2.exports = __toCommonJS3(SelectViewport_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_react_dom_interactions = require_floating_ui_react_dom_interactions_umd();
    var import_core2 = require("@tamagui/core-node");
    var import_core22 = require("@tamagui/core-node");
    var import_portal = require_cjs11();
    var import_stacks = require_cjs10();
    var React3 = __toESM2(require("react"));
    var import_constants = require_constants2();
    var import_context = require_context();
    var import_useSelectBreakpointActive = require_useSelectBreakpointActive();
    var SelectViewportFrame = (0, import_core22.styled)(import_stacks.ThemeableStack, {
      name: import_constants.VIEWPORT_NAME,
      backgroundColor: "$background",
      elevate: true,
      bordered: true,
      overflow: "scroll",
      userSelect: "none",
      variants: {
        size: {
          "...size": (val, { tokens }) => {
            return {
              borderRadius: tokens.radius[val] ?? val
            };
          }
        }
      },
      defaultVariants: {
        size: "$2"
      }
    });
    var SelectViewport = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeSelect, children, ...viewportProps } = props;
        const context = (0, import_context.useSelectContext)(import_constants.VIEWPORT_NAME, __scopeSelect);
        const breakpointActive = (0, import_useSelectBreakpointActive.useSelectBreakpointActive)(context.sheetBreakpoint);
        if (breakpointActive || !import_core2.isWeb) {
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_portal.PortalItem, {
            hostName: `${context.scopeKey}SheetContents`,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_context.ForwardSelectContext, {
              context,
              children
            })
          });
        }
        if (!context.floatingContext) {
          return null;
        }
        if (!context.open) {
          return children;
        }
        const {
          style: { scrollbarWidth, listStyleType, ...restStyle },
          ...floatingProps
        } = context.interactions.getFloatingProps();
        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: selectViewportCSS
              }
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_dom_interactions.FloatingFocusManager, {
              context: context.floatingContext,
              preventTabbing: true,
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewportFrame, {
                size: context.size,
                role: "presentation",
                ...viewportProps,
                ref: forwardedRef,
                ...floatingProps,
                ...restStyle,
                children
              })
            })
          ]
        });
      }
    );
    SelectViewport.displayName = import_constants.VIEWPORT_NAME;
    var selectViewportCSS = `
.is_SelectViewport {
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
}

.is_SelectViewport::-webkit-scrollbar{
  display:none
}
`;
  }
});

// ../../node_modules/@tamagui/select/dist/cjs/Select.js
var require_Select = __commonJS({
  "../../node_modules/@tamagui/select/dist/cjs/Select.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Select_exports = {};
    __export3(Select_exports, {
      Select: () => Select,
      SelectGroupFrame: () => SelectGroupFrame,
      SelectIcon: () => SelectIcon,
      SelectItem: () => SelectItem,
      SelectItemTextFrame: () => SelectItemTextFrame,
      SelectSeparator: () => SelectSeparator,
      SelectSheetContents: () => SelectSheetContents,
      SelectTrigger: () => SelectTrigger
    });
    module2.exports = __toCommonJS3(Select_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_compose_refs = require_cjs3();
    var import_core2 = require("@tamagui/core-node");
    var import_core22 = require("@tamagui/core-node");
    var import_core3 = require("@tamagui/core-node");
    var import_list_item = require_cjs32();
    var import_portal = require_cjs11();
    var import_separator = require_cjs36();
    var import_sheet = require_cjs16();
    var import_stacks = require_cjs10();
    var import_text = require_cjs18();
    var import_use_controllable_state = require_cjs14();
    var React3 = __toESM2(require("react"));
    var import_constants = require_constants2();
    var import_context = require_context();
    var import_SelectContent = require_SelectContent();
    var import_SelectImpl = require_SelectImpl();
    var import_SelectScrollButton = require_SelectScrollButton();
    var import_SelectViewport = require_SelectViewport();
    var import_useSelectBreakpointActive = require_useSelectBreakpointActive();
    var TRIGGER_NAME = "SelectTrigger";
    var SelectTrigger = React3.forwardRef(
      (props, forwardedRef) => {
        const {
          __scopeSelect,
          disabled = false,
          "aria-labelledby": ariaLabelledby,
          ...triggerProps
        } = props;
        const context = (0, import_context.useSelectContext)(TRIGGER_NAME, __scopeSelect);
        const labelledBy = ariaLabelledby;
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_list_item.ListItem, {
          componentName: TRIGGER_NAME,
          backgrounded: true,
          radiused: true,
          hoverTheme: true,
          pressTheme: true,
          focusTheme: true,
          focusable: true,
          borderWidth: 1,
          size: context.size,
          "aria-expanded": context.open,
          "aria-autocomplete": "none",
          "aria-labelledby": labelledBy,
          dir: context.dir,
          disabled,
          "data-disabled": disabled ? "" : void 0,
          ...triggerProps,
          ref: forwardedRef,
          ...process.env.TAMAGUI_TARGET === "web" && context.interactions ? context.interactions.getReferenceProps() : {
            onPress() {
              context.setOpen(!context.open);
            }
          }
        });
      }
    );
    SelectTrigger.displayName = TRIGGER_NAME;
    var VALUE_NAME = "SelectValue";
    var SelectValueFrame = (0, import_core22.styled)(import_text.Paragraph, {
      name: VALUE_NAME,
      selectable: false
    });
    var SelectValue = SelectValueFrame.extractable(
      React3.forwardRef(
        ({ __scopeSelect, children: childrenProp, placeholder }, forwardedRef) => {
          const context = (0, import_context.useSelectContext)(VALUE_NAME, __scopeSelect);
          const { onValueNodeHasChildrenChange } = context;
          const composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, context.onValueNodeChange);
          const children = childrenProp ?? context.selectedItem;
          const hasChildren = !!children;
          const selectValueChildren = context.value === void 0 && placeholder !== void 0 ? placeholder : children;
          (0, import_core22.useIsomorphicLayoutEffect)(() => {
            onValueNodeHasChildrenChange(hasChildren);
          }, [onValueNodeHasChildrenChange, hasChildren]);
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValueFrame, {
            size: context.size,
            ref: composedRefs,
            pointerEvents: "none",
            children: selectValueChildren
          });
        }
      )
    );
    SelectValue.displayName = VALUE_NAME;
    var SelectIcon = (0, import_core22.styled)(import_stacks.XStack, {
      name: "SelectIcon",
      "aria-hidden": true,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_text.Paragraph, {
        children: "\u25BC"
      })
    });
    var ITEM_NAME = "SelectItem";
    var [SelectItemContextProvider, useSelectItemContext] = (0, import_context.createSelectContext)(ITEM_NAME);
    var SelectItem = React3.forwardRef(
      (props, forwardedRef) => {
        const {
          __scopeSelect,
          value,
          disabled = false,
          textValue: textValueProp,
          index,
          ...itemProps
        } = props;
        const context = (0, import_context.useSelectContext)(ITEM_NAME, __scopeSelect);
        const isSelected = context.value === value;
        const textId = (0, import_core3.useId)();
        const {
          selectedIndex,
          setSelectedIndex,
          listRef,
          open,
          setOpen,
          onChange,
          setActiveIndex,
          allowMouseUpRef,
          allowSelectRef,
          setValueAtIndex,
          selectTimeoutRef,
          dataRef
        } = context;
        const composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, (node) => {
          if (!import_core2.isWeb)
            return;
          if (node instanceof HTMLElement) {
            if (listRef) {
              listRef.current[index] = node;
            }
          }
        });
        React3.useEffect(() => {
          setValueAtIndex(index, value);
        }, [index, setValueAtIndex, value]);
        function handleSelect() {
          setSelectedIndex(index);
          onChange(value);
          setOpen(false);
        }
        __name(handleSelect, "handleSelect");
        const selectItemProps = context.interactions ? context.interactions.getItemProps({
          onTouchStart() {
            allowSelectRef.current = true;
            allowMouseUpRef.current = false;
          },
          onKeyDown(event) {
            if (event.key === "Enter" || event.key === " " && !(dataRef == null ? void 0 : dataRef.current.typing)) {
              event.preventDefault();
              handleSelect();
            } else {
              allowSelectRef.current = true;
            }
          },
          onClick() {
            if (allowSelectRef.current) {
              setSelectedIndex(index);
              setOpen(false);
            }
          },
          onMouseUp() {
            if (!allowMouseUpRef.current) {
              return;
            }
            if (allowSelectRef.current) {
              handleSelect();
            }
            clearTimeout(selectTimeoutRef.current);
            selectTimeoutRef.current = setTimeout(() => {
              allowSelectRef.current = true;
            });
          }
        }) : {
          onPress: handleSelect
        };
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemContextProvider, {
          scope: __scopeSelect,
          value,
          textId: textId || "",
          isSelected,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_list_item.ListItem, {
            backgrounded: true,
            pressTheme: true,
            cursor: "",
            focusTheme: true,
            componentName: ITEM_NAME,
            ref: composedRefs,
            "aria-labelledby": textId,
            "aria-selected": isSelected,
            "data-state": isSelected ? "active" : "inactive",
            "aria-disabled": disabled || void 0,
            "data-disabled": disabled ? "" : void 0,
            tabIndex: disabled ? void 0 : -1,
            size: context.size,
            ...itemProps,
            ...selectItemProps
          })
        });
      }
    );
    SelectItem.displayName = ITEM_NAME;
    var ITEM_TEXT_NAME = "SelectItemText";
    var SelectItemTextFrame = (0, import_core22.styled)(import_text.Paragraph, {
      name: ITEM_TEXT_NAME,
      selectable: false
    });
    var SelectItemText = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeSelect, className, ...itemTextProps } = props;
        const context = (0, import_context.useSelectContext)(ITEM_TEXT_NAME, __scopeSelect);
        const itemContext = useSelectItemContext(ITEM_TEXT_NAME, __scopeSelect);
        const ref = React3.useRef(null);
        const composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, ref);
        const isSelected = Boolean(itemContext.isSelected && context.valueNode);
        const contents = React3.useMemo(
          () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemTextFrame, {
            className,
            size: context.size,
            id: itemContext.textId,
            ...itemTextProps,
            ref: composedRefs
          }),
          [props, context.size, className, itemContext.textId]
        );
        React3.useEffect(() => {
          if (isSelected) {
            context.setSelectedItem(contents);
          }
        }, [isSelected, contents]);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
          children: contents
        });
      }
    );
    SelectItemText.displayName = ITEM_TEXT_NAME;
    var ITEM_INDICATOR_NAME = "SelectItemIndicator";
    var SelectItemIndicatorFrame = (0, import_core22.styled)(import_stacks.XStack, {
      name: ITEM_TEXT_NAME
    });
    var SelectItemIndicator = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeSelect, ...itemIndicatorProps } = props;
        const itemContext = useSelectItemContext(ITEM_INDICATOR_NAME, __scopeSelect);
        return itemContext.isSelected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicatorFrame, {
          "aria-hidden": true,
          ...itemIndicatorProps,
          ref: forwardedRef
        }) : null;
      }
    );
    SelectItemIndicator.displayName = ITEM_INDICATOR_NAME;
    var GROUP_NAME = "SelectGroup";
    var [SelectGroupContextProvider, useSelectGroupContext] = (0, import_context.createSelectContext)(GROUP_NAME);
    var SelectGroupFrame = (0, import_core22.styled)(import_stacks.YStack, {
      name: GROUP_NAME,
      width: "100%"
    });
    var SelectGroup = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeSelect, ...groupProps } = props;
        const groupId = (0, import_core3.useId)();
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectGroupContextProvider, {
          scope: __scopeSelect,
          id: groupId || "",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectGroupFrame, {
            role: "group",
            "aria-labelledby": groupId,
            ...groupProps,
            ref: forwardedRef
          })
        });
      }
    );
    SelectGroup.displayName = GROUP_NAME;
    var LABEL_NAME = "SelectLabel";
    var SelectLabel = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeSelect, ...labelProps } = props;
        const context = (0, import_context.useSelectContext)(LABEL_NAME, __scopeSelect);
        const groupContext = useSelectGroupContext(LABEL_NAME, __scopeSelect);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_list_item.ListItem, {
          componentName: LABEL_NAME,
          fontWeight: "800",
          id: groupContext.id,
          size: context.size,
          ...labelProps,
          ref: forwardedRef
        });
      }
    );
    SelectLabel.displayName = LABEL_NAME;
    var SelectSeparator = (0, import_core22.styled)(import_separator.Separator, {
      name: "SelectSeparator"
    });
    var SelectSheetController = /* @__PURE__ */ __name((props) => {
      const context = (0, import_context.useSelectContext)("SelectSheetController", props.__scopeSelect);
      const showSheet = (0, import_useSelectBreakpointActive.useShowSelectSheet)(context);
      const breakpointActive = (0, import_useSelectBreakpointActive.useSelectBreakpointActive)(context.sheetBreakpoint);
      const getShowSheet = (0, import_core22.useGet)(showSheet);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_sheet.SheetController, {
        onOpenChange: (val) => {
          if (getShowSheet()) {
            props.onOpenChange(val);
          }
        },
        open: context.open,
        hidden: breakpointActive === false,
        children: props.children
      });
    }, "SelectSheetController");
    var SHEET_CONTENTS_NAME = "SelectSheetContents";
    var SelectSheetContents = /* @__PURE__ */ __name(({ __scopeSelect }) => {
      const context = (0, import_context.useSelectContext)(SHEET_CONTENTS_NAME, __scopeSelect);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_portal.PortalHost, {
        name: `${context.scopeKey}SheetContents`
      });
    }, "SelectSheetContents");
    SelectSheetContents.displayName = SHEET_CONTENTS_NAME;
    var SelectSheetImpl = /* @__PURE__ */ __name((props) => {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
        children: props.children
      });
    }, "SelectSheetImpl");
    var Select = (0, import_core22.withStaticProperties)(
      (props) => {
        const {
          __scopeSelect,
          children,
          open: openProp,
          defaultOpen,
          onOpenChange,
          value: valueProp,
          defaultValue,
          onValueChange,
          size: sizeProp = "$4",
          sheetBreakpoint = false,
          dir
        } = props;
        const isSheet = (0, import_useSelectBreakpointActive.useSelectBreakpointActive)(sheetBreakpoint);
        const SelectImpl = isSheet ? SelectSheetImpl : import_SelectImpl.SelectInlineImpl;
        const forceUpdate = React3.useReducer(() => ({}), {})[1];
        const [selectedItem, setSelectedItem] = React3.useState(null);
        const [open, setOpen] = (0, import_use_controllable_state.useControllableState)({
          prop: openProp,
          defaultProp: defaultOpen || false,
          onChange: onOpenChange,
          strategy: "most-recent-wins"
        });
        const [value, setValue] = (0, import_use_controllable_state.useControllableState)({
          prop: valueProp,
          defaultProp: defaultValue || "",
          onChange: onValueChange,
          strategy: "most-recent-wins"
        });
        const [activeIndex, setActiveIndex] = React3.useState(null);
        const selectedIndexRef = React3.useRef(null);
        const activeIndexRef = React3.useRef(null);
        const listContentRef = React3.useRef([]);
        const [selectedIndex, setSelectedIndex] = React3.useState(
          Math.max(0, listContentRef.current.indexOf(value))
        );
        const [valueNode, setValueNode] = React3.useState(null);
        const [valueNodeHasChildren, setValueNodeHasChildren] = React3.useState(false);
        (0, import_core22.useIsomorphicLayoutEffect)(() => {
          selectedIndexRef.current = selectedIndex;
          activeIndexRef.current = activeIndex;
        });
        const id = (0, import_core3.useId)();
        const scopeKey = __scopeSelect ? Object.keys(__scopeSelect)[0] ?? id : id;
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_context.SelectProvider, {
          dir,
          blockSelection: false,
          size: sizeProp,
          fallback: false,
          selectedItem,
          setSelectedItem,
          forceUpdate,
          valueNode,
          onValueNodeChange: setValueNode,
          onValueNodeHasChildrenChange: setValueNodeHasChildren,
          valueNodeHasChildren,
          scopeKey,
          sheetBreakpoint,
          scope: __scopeSelect,
          setValueAtIndex: (index, value2) => {
            listContentRef.current[index] = value2;
          },
          activeIndex,
          onChange: setValue,
          selectedIndex,
          setActiveIndex,
          setOpen,
          setSelectedIndex,
          value,
          open,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSheetController, {
            onOpenChange: setOpen,
            __scopeSelect,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectImpl, {
              activeIndexRef,
              listContentRef,
              selectedIndexRef,
              ...props,
              open,
              value,
              children
            })
          })
        });
      },
      {
        Content: import_SelectContent.SelectContent,
        Group: SelectGroup,
        Icon: SelectIcon,
        Item: SelectItem,
        ItemIndicator: SelectItemIndicator,
        ItemText: SelectItemText,
        Label: SelectLabel,
        ScrollDownButton: import_SelectScrollButton.SelectScrollDownButton,
        ScrollUpButton: import_SelectScrollButton.SelectScrollUpButton,
        Trigger: SelectTrigger,
        Value: SelectValue,
        Viewport: import_SelectViewport.SelectViewport,
        SheetContents: SelectSheetContents,
        Sheet: import_sheet.ControlledSheet
      }
    );
    Select.displayName = import_constants.SELECT_NAME;
  }
});

// ../../node_modules/@tamagui/select/dist/cjs/index.js
var require_cjs37 = __commonJS({
  "../../node_modules/@tamagui/select/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_Select(), module2.exports);
    __reExport2(src_exports2, require_context(), module2.exports);
  }
});

// ../../node_modules/@tamagui/use-direction/dist/cjs/useDirection.js
var require_useDirection = __commonJS({
  "../../node_modules/@tamagui/use-direction/dist/cjs/useDirection.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useDirection_exports = {};
    __export3(useDirection_exports, {
      DirectionProvider: () => DirectionProvider,
      Provider: () => Provider,
      useDirection: () => useDirection
    });
    module2.exports = __toCommonJS3(useDirection_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var React3 = __toESM2(require("react"));
    var DirectionContext = React3.createContext(void 0);
    var DirectionProvider = /* @__PURE__ */ __name((props) => {
      const { dir, children } = props;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DirectionContext.Provider, {
        value: dir,
        children
      });
    }, "DirectionProvider");
    function useDirection(localDir) {
      const globalDir = React3.useContext(DirectionContext);
      return localDir || globalDir || "ltr";
    }
    __name(useDirection, "useDirection");
    var Provider = DirectionProvider;
  }
});

// ../../node_modules/@tamagui/use-direction/dist/cjs/index.js
var require_cjs38 = __commonJS({
  "../../node_modules/@tamagui/use-direction/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_useDirection(), module2.exports);
  }
});

// ../../node_modules/@tamagui/slider/dist/cjs/constants.js
var require_constants3 = __commonJS({
  "../../node_modules/@tamagui/slider/dist/cjs/constants.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var constants_exports = {};
    __export3(constants_exports, {
      ARROW_KEYS: () => ARROW_KEYS,
      BACK_KEYS: () => BACK_KEYS,
      PAGE_KEYS: () => PAGE_KEYS,
      SLIDER_NAME: () => SLIDER_NAME,
      SliderOrientationProvider: () => SliderOrientationProvider,
      SliderProvider: () => SliderProvider,
      createSliderContext: () => createSliderContext,
      createSliderScope: () => createSliderScope,
      useSliderContext: () => useSliderContext,
      useSliderOrientationContext: () => useSliderOrientationContext
    });
    module2.exports = __toCommonJS3(constants_exports);
    var import_create_context = require_cjs4();
    var SLIDER_NAME = "Slider";
    var [createSliderContext, createSliderScope] = (0, import_create_context.createContextScope)(SLIDER_NAME);
    var [SliderProvider, useSliderContext] = createSliderContext(SLIDER_NAME);
    var [SliderOrientationProvider, useSliderOrientationContext] = createSliderContext(SLIDER_NAME, {
      startEdge: "left",
      endEdge: "right",
      sizeProp: "width",
      size: 0,
      direction: 1
    });
    var PAGE_KEYS = ["PageUp", "PageDown"];
    var ARROW_KEYS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    var BACK_KEYS = {
      ltr: ["ArrowDown", "Home", "ArrowLeft", "PageDown"],
      rtl: ["ArrowDown", "Home", "ArrowRight", "PageDown"]
    };
  }
});

// ../../node_modules/@tamagui/slider/dist/cjs/helpers.js
var require_helpers = __commonJS({
  "../../node_modules/@tamagui/slider/dist/cjs/helpers.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var helpers_exports = {};
    __export3(helpers_exports, {
      convertValueToPercentage: () => convertValueToPercentage,
      getClosestValueIndex: () => getClosestValueIndex,
      getDecimalCount: () => getDecimalCount,
      getLabel: () => getLabel,
      getNextSortedValues: () => getNextSortedValues,
      getThumbInBoundsOffset: () => getThumbInBoundsOffset,
      hasMinStepsBetweenValues: () => hasMinStepsBetweenValues,
      linearScale: () => linearScale,
      roundValue: () => roundValue
    });
    module2.exports = __toCommonJS3(helpers_exports);
    function getNextSortedValues(prevValues = [], nextValue, atIndex) {
      const nextValues = [...prevValues];
      nextValues[atIndex] = nextValue;
      return nextValues.sort((a, b) => a - b);
    }
    __name(getNextSortedValues, "getNextSortedValues");
    function convertValueToPercentage(value, min, max) {
      const maxSteps = max - min;
      const percentPerStep = 100 / maxSteps;
      return percentPerStep * (value - min);
    }
    __name(convertValueToPercentage, "convertValueToPercentage");
    function getLabel(index, totalValues) {
      if (totalValues > 2) {
        return `Value ${index + 1} of ${totalValues}`;
      } else if (totalValues === 2) {
        return ["Minimum", "Maximum"][index];
      } else {
        return void 0;
      }
    }
    __name(getLabel, "getLabel");
    function getClosestValueIndex(values, nextValue) {
      if (values.length === 1)
        return 0;
      const distances = values.map((value) => Math.abs(value - nextValue));
      const closestDistance = Math.min(...distances);
      return distances.indexOf(closestDistance);
    }
    __name(getClosestValueIndex, "getClosestValueIndex");
    function getThumbInBoundsOffset(width, left, direction) {
      const halfWidth = width / 2;
      const halfPercent = 50;
      const offset = linearScale([0, halfPercent], [0, halfWidth]);
      return (halfWidth - offset(left) * direction) * direction;
    }
    __name(getThumbInBoundsOffset, "getThumbInBoundsOffset");
    function getStepsBetweenValues(values) {
      return values.slice(0, -1).map((value, index) => values[index + 1] - value);
    }
    __name(getStepsBetweenValues, "getStepsBetweenValues");
    function hasMinStepsBetweenValues(values, minStepsBetweenValues) {
      if (minStepsBetweenValues > 0) {
        const stepsBetweenValues = getStepsBetweenValues(values);
        const actualMinStepsBetweenValues = Math.min(...stepsBetweenValues);
        return actualMinStepsBetweenValues >= minStepsBetweenValues;
      }
      return true;
    }
    __name(hasMinStepsBetweenValues, "hasMinStepsBetweenValues");
    function linearScale(input, output) {
      return (value) => {
        if (input[0] === input[1] || output[0] === output[1])
          return output[0];
        const ratio = (output[1] - output[0]) / (input[1] - input[0]);
        return output[0] + ratio * (value - input[0]);
      };
    }
    __name(linearScale, "linearScale");
    function getDecimalCount(value) {
      return (String(value).split(".")[1] || "").length;
    }
    __name(getDecimalCount, "getDecimalCount");
    function roundValue(value, decimalCount) {
      const rounder = Math.pow(10, decimalCount);
      return Math.round(value * rounder) / rounder;
    }
    __name(roundValue, "roundValue");
  }
});

// ../../node_modules/@tamagui/slider/dist/cjs/SliderImpl.js
var require_SliderImpl = __commonJS({
  "../../node_modules/@tamagui/slider/dist/cjs/SliderImpl.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SliderImpl_exports = {};
    __export3(SliderImpl_exports, {
      DirectionalYStack: () => DirectionalYStack2,
      SliderFrame: () => SliderFrame2,
      SliderImpl: () => SliderImpl
    });
    module2.exports = __toCommonJS3(SliderImpl_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_core2 = require("@tamagui/core-node");
    var import_stacks = require_cjs10();
    var React3 = __toESM2(require("react"));
    var import_constants = require_constants3();
    var DirectionalYStack2 = (0, import_core2.styled)(import_stacks.YStack, {
      variants: {
        orientation: {
          horizontal: {},
          vertical: {}
        }
      }
    });
    var SliderFrame2 = (0, import_core2.styled)(DirectionalYStack2, {
      position: "relative",
      variants: {
        size: (val, extras) => {
          const orientation = extras.props.orientation;
          const size = Math.round((0, import_core2.getVariableValue)((0, import_core2.getSize)(val)) / 6);
          if (orientation === "horizontal") {
            return {
              height: size,
              borderRadius: size,
              justifyContent: "center"
            };
          }
          return {
            width: size,
            borderRadius: size,
            alignItems: "center"
          };
        }
      }
    });
    var SliderImpl = React3.forwardRef(
      (props, forwardedRef) => {
        const {
          __scopeSlider,
          onSlideStart,
          onSlideMove,
          onSlideEnd,
          onHomeKeyDown,
          onEndKeyDown,
          onStepKeyDown,
          ...sliderProps
        } = props;
        const context = (0, import_constants.useSliderContext)(import_constants.SLIDER_NAME, __scopeSlider);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderFrame2, {
          size: "$4",
          ...sliderProps,
          "data-orientation": sliderProps.orientation,
          ref: forwardedRef,
          ...import_core2.isWeb && {
            onKeyDown: (event) => {
              if (event.key === "Home") {
                onHomeKeyDown(event);
                event.preventDefault();
              } else if (event.key === "End") {
                onEndKeyDown(event);
                event.preventDefault();
              } else if (import_constants.PAGE_KEYS.concat(import_constants.ARROW_KEYS).includes(event.key)) {
                onStepKeyDown(event);
                event.preventDefault();
              }
            }
          },
          onMoveShouldSetResponderCapture: () => true,
          onScrollShouldSetResponder: () => true,
          onScrollShouldSetResponderCapture: () => true,
          onMoveShouldSetResponder: () => true,
          onStartShouldSetResponder: () => true,
          onResponderTerminationRequest: () => {
            return false;
          },
          onResponderGrant: (0, import_core2.composeEventHandlers)(props.onResponderGrant, (event) => {
            const target = event.target;
            const isStartingOnThumb = context.thumbs.has(target);
            if (import_core2.isWeb && target instanceof HTMLElement) {
              if (context.thumbs.has(target)) {
                target.focus();
              }
            }
            onSlideStart(event, isStartingOnThumb ? "thumb" : "track");
          }),
          onResponderMove: (0, import_core2.composeEventHandlers)(props.onResponderMove, (event) => {
            event.preventDefault();
            event.stopPropagation();
            onSlideMove(event);
          }),
          onResponderRelease: (0, import_core2.composeEventHandlers)(props.onResponderRelease, (event) => {
            onSlideEnd(event);
          })
        });
      }
    );
  }
});

// ../../node_modules/@tamagui/slider/dist/cjs/Slider.js
var require_Slider = __commonJS({
  "../../node_modules/@tamagui/slider/dist/cjs/Slider.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Slider_exports = {};
    __export3(Slider_exports, {
      Range: () => Range,
      Slider: () => Slider,
      SliderThumb: () => SliderThumb,
      SliderThumbFrame: () => SliderThumbFrame,
      SliderTrack: () => SliderTrack,
      SliderTrackActive: () => SliderTrackActive,
      SliderTrackActiveFrame: () => SliderTrackActiveFrame,
      SliderTrackFrame: () => SliderTrackFrame,
      Thumb: () => Thumb,
      Track: () => Track
    });
    module2.exports = __toCommonJS3(Slider_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_compose_refs = require_cjs3();
    var import_core2 = require("@tamagui/core-node");
    var import_helpers = require_cjs26();
    var import_stacks = require_cjs10();
    var import_use_controllable_state = require_cjs14();
    var import_use_direction = require_cjs38();
    var React3 = __toESM2(require("react"));
    var import_constants = require_constants3();
    var import_helpers2 = require_helpers();
    var import_SliderImpl = require_SliderImpl();
    var SliderHorizontal = React3.forwardRef(
      (props, forwardedRef) => {
        const { min, max, dir, onSlideStart, onSlideMove, onStepKeyDown, ...sliderProps } = props;
        const direction = (0, import_use_direction.useDirection)(dir);
        const isDirectionLTR = direction === "ltr";
        const sliderRef = React3.useRef(null);
        const [state, setState] = React3.useState(() => ({ size: 0, offset: 0 }));
        function getValueFromPointer(pointerPosition) {
          const input = [0, state.size];
          const output = isDirectionLTR ? [min, max] : [max, min];
          const value = (0, import_helpers2.linearScale)(input, output);
          return value(pointerPosition);
        }
        __name(getValueFromPointer, "getValueFromPointer");
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_constants.SliderOrientationProvider, {
          scope: props.__scopeSlider,
          startEdge: isDirectionLTR ? "left" : "right",
          endEdge: isDirectionLTR ? "right" : "left",
          direction: isDirectionLTR ? 1 : -1,
          sizeProp: "width",
          size: state.size,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_SliderImpl.SliderImpl, {
            ref: (0, import_compose_refs.composeRefs)(forwardedRef, sliderRef),
            dir: direction,
            ...sliderProps,
            orientation: "horizontal",
            onLayout: () => {
              var _a;
              (_a = sliderRef.current) == null ? void 0 : _a.measure((_x, _y, width, _height, pageX, _pageY) => {
                setState({
                  size: width,
                  offset: pageX
                });
              });
            },
            onSlideStart: (event, target) => {
              const value = getValueFromPointer(event.nativeEvent.locationX);
              if (value) {
                onSlideStart == null ? void 0 : onSlideStart(value, target);
              }
            },
            onSlideMove: (event) => {
              const value = getValueFromPointer(event.nativeEvent.pageX - state.offset);
              if (value) {
                onSlideMove == null ? void 0 : onSlideMove(value);
              }
            },
            onSlideEnd: () => {
            },
            onStepKeyDown: (event) => {
              const isBackKey = import_constants.BACK_KEYS[direction].includes(event.key);
              onStepKeyDown == null ? void 0 : onStepKeyDown({ event, direction: isBackKey ? -1 : 1 });
            }
          })
        });
      }
    );
    var SliderVertical = React3.forwardRef(
      (props, forwardedRef) => {
        const { min, max, onSlideStart, onSlideMove, onStepKeyDown, ...sliderProps } = props;
        const [state, setState] = React3.useState(() => ({ size: 0, offset: 0 }));
        const sliderRef = React3.useRef(null);
        function getValueFromPointer(pointerPosition) {
          const input = [0, state.size];
          const output = [max, min];
          const value = (0, import_helpers2.linearScale)(input, output);
          return value(pointerPosition);
        }
        __name(getValueFromPointer, "getValueFromPointer");
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_constants.SliderOrientationProvider, {
          scope: props.__scopeSlider,
          startEdge: "bottom",
          endEdge: "top",
          sizeProp: "height",
          size: state.size,
          direction: 1,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_SliderImpl.SliderImpl, {
            ref: (0, import_compose_refs.composeRefs)(forwardedRef, sliderRef),
            ...sliderProps,
            orientation: "vertical",
            onLayout: ({ nativeEvent: { layout } }) => {
              var _a;
              (_a = sliderRef.current) == null ? void 0 : _a.measure((_x, _y, _width, height, _pageX, pageY) => {
                console.log("same?", layout, height, pageY);
                setState({
                  size: height,
                  offset: pageY
                });
              });
            },
            onSlideStart: (event, target) => {
              const value = getValueFromPointer(event.nativeEvent.locationY);
              if (value) {
                onSlideStart == null ? void 0 : onSlideStart(value, target);
              }
            },
            onSlideMove: (event) => {
              const value = getValueFromPointer(event.nativeEvent.pageY - state.offset);
              if (value) {
                onSlideMove == null ? void 0 : onSlideMove(value);
              }
            },
            onSlideEnd: () => {
            },
            onStepKeyDown: (event) => {
              const isBackKey = import_constants.BACK_KEYS.ltr.includes(event.key);
              onStepKeyDown == null ? void 0 : onStepKeyDown({ event, direction: isBackKey ? -1 : 1 });
            }
          })
        });
      }
    );
    var TRACK_NAME = "SliderTrack";
    var SliderTrackFrame = (0, import_core2.styled)(import_SliderImpl.SliderFrame, {
      name: "SliderTrack",
      height: "100%",
      width: "100%",
      backgroundColor: "$background",
      position: "relative",
      borderRadius: 1e5,
      overflow: "hidden"
    });
    var SliderTrack = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeSlider, ...trackProps } = props;
        const context = (0, import_constants.useSliderContext)(TRACK_NAME, __scopeSlider);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrackFrame, {
          "data-disabled": context.disabled ? "" : void 0,
          "data-orientation": context.orientation,
          orientation: context.orientation,
          size: context.size,
          ...trackProps,
          ref: forwardedRef
        });
      }
    );
    SliderTrack.displayName = TRACK_NAME;
    var RANGE_NAME = "SliderTrackActive";
    var SliderTrackActiveFrame = (0, import_core2.styled)(import_SliderImpl.SliderFrame, {
      name: "SliderTrackActive",
      backgroundColor: "$background",
      position: "absolute"
    });
    var SliderTrackActive = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeSlider, ...rangeProps } = props;
        const context = (0, import_constants.useSliderContext)(RANGE_NAME, __scopeSlider);
        const orientation = (0, import_constants.useSliderOrientationContext)(RANGE_NAME, __scopeSlider);
        const ref = React3.useRef(null);
        const composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, ref);
        const valuesCount = context.values.length;
        const percentages = context.values.map(
          (value) => (0, import_helpers2.convertValueToPercentage)(value, context.min, context.max)
        );
        const offsetStart = valuesCount > 1 ? Math.min(...percentages) : 0;
        const offsetEnd = 100 - Math.max(...percentages);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrackActiveFrame, {
          orientation: context.orientation,
          "data-orientation": context.orientation,
          "data-disabled": context.disabled ? "" : void 0,
          size: context.size,
          ...rangeProps,
          ref: composedRefs,
          ...{
            [orientation.startEdge]: offsetStart + "%",
            [orientation.endEdge]: offsetEnd + "%"
          },
          ...orientation.sizeProp === "width" ? {
            height: "100%"
          } : {
            left: 0,
            right: 0
          }
        });
      }
    );
    SliderTrackActive.displayName = RANGE_NAME;
    var THUMB_NAME = "SliderThumb";
    var getThumbSize = /* @__PURE__ */ __name((val) => {
      const size = typeof val === "number" ? val : (0, import_core2.getSize)(val, -1);
      return {
        width: size,
        height: size,
        minWidth: size,
        minHeight: size
      };
    }, "getThumbSize");
    var SliderThumbFrame = (0, import_core2.styled)(import_stacks.ThemeableStack, {
      name: "SliderThumb",
      position: "absolute",
      bordered: 2,
      borderWidth: 2,
      backgrounded: true,
      pressTheme: import_core2.isWeb,
      focusTheme: import_core2.isWeb,
      hoverTheme: import_core2.isWeb,
      variants: {
        size: {
          "...size": getThumbSize
        }
      }
    });
    var SliderThumb = React3.forwardRef(
      (props, forwardedRef) => {
        const { __scopeSlider, index, size: sizeProp, ...thumbProps } = props;
        const context = (0, import_constants.useSliderContext)(THUMB_NAME, __scopeSlider);
        const orientation = (0, import_constants.useSliderOrientationContext)(THUMB_NAME, __scopeSlider);
        const [thumb, setThumb] = React3.useState(null);
        const composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, (node) => setThumb(node));
        const value = context.values[index];
        const percent = value === void 0 ? 0 : (0, import_helpers2.convertValueToPercentage)(value, context.min, context.max);
        const label = (0, import_helpers2.getLabel)(index, context.values.length);
        const [size, setSize] = React3.useState(() => {
          const estimatedSize = (0, import_core2.getVariableValue)(getThumbSize(sizeProp).width);
          return estimatedSize;
        });
        const thumbInBoundsOffset = size ? (0, import_helpers2.getThumbInBoundsOffset)(size, percent, orientation.direction) : 0;
        React3.useEffect(() => {
          if (thumb) {
            context.thumbs.add(thumb);
            return () => {
              context.thumbs.delete(thumb);
            };
          }
        }, [thumb, context.thumbs]);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumbFrame, {
          ref: composedRefs,
          role: "slider",
          "aria-label": props["aria-label"] || label,
          "aria-valuemin": context.min,
          "aria-valuenow": value,
          "aria-valuemax": context.max,
          "aria-orientation": context.orientation,
          "data-orientation": context.orientation,
          "data-disabled": context.disabled ? "" : void 0,
          tabIndex: context.disabled ? void 0 : 0,
          ...thumbProps,
          ...context.orientation === "horizontal" ? {
            x: thumbInBoundsOffset - size / 2,
            y: -size / 2,
            top: "50%",
            ...size === 0 && {
              top: "auto",
              bottom: "auto"
            }
          } : {
            x: -size / 2,
            y: size / 2,
            left: "50%",
            ...size === 0 && {
              left: "auto",
              right: "auto"
            }
          },
          size: sizeProp ?? context.size ?? "$4",
          onLayout: (e) => {
            setSize(e.nativeEvent.layout[orientation.sizeProp]);
          },
          ...{
            [orientation.startEdge]: `${percent}%`
          },
          onFocus: (0, import_helpers.composeEventHandlers)(props.onFocus, () => {
            context.valueIndexToChangeRef.current = index;
          })
        });
      }
    );
    SliderThumb.displayName = THUMB_NAME;
    var Slider = (0, import_core2.withStaticProperties)(
      React3.forwardRef((props, forwardedRef) => {
        const {
          name,
          min = 0,
          max = 100,
          step = 1,
          orientation = "horizontal",
          disabled = false,
          minStepsBetweenThumbs = 0,
          defaultValue = [min],
          value,
          onValueChange = /* @__PURE__ */ __name(() => {
          }, "onValueChange"),
          size: sizeProp,
          ...sliderProps
        } = props;
        const sliderRef = React3.useRef(null);
        const composedRefs = (0, import_compose_refs.useComposedRefs)(sliderRef, forwardedRef);
        const thumbRefs = React3.useRef(/* @__PURE__ */ new Set());
        const valueIndexToChangeRef = React3.useRef(0);
        const isHorizontal = orientation === "horizontal";
        const [values = [], setValues] = (0, import_use_controllable_state.useControllableState)({
          prop: value,
          defaultProp: defaultValue,
          onChange: (value2) => {
            var _a;
            if (import_core2.isWeb) {
              const thumbs = [...thumbRefs.current];
              (_a = thumbs[valueIndexToChangeRef.current]) == null ? void 0 : _a.focus();
            }
            onValueChange(value2);
          }
        });
        if (import_core2.isWeb) {
          React3.useEffect(() => {
            const node = sliderRef.current;
            if (!node)
              return;
            const preventDefault = /* @__PURE__ */ __name((e) => {
              e.preventDefault();
            }, "preventDefault");
            node.addEventListener("touchstart", preventDefault);
            return () => {
              node.removeEventListener("touchstart", preventDefault);
            };
          }, []);
        }
        function handleSlideMove(value2) {
          updateValues(value2, valueIndexToChangeRef.current);
        }
        __name(handleSlideMove, "handleSlideMove");
        function updateValues(value2, atIndex) {
          const decimalCount = (0, import_helpers2.getDecimalCount)(step);
          const snapToStep = (0, import_helpers2.roundValue)(Math.round((value2 - min) / step) * step + min, decimalCount);
          const nextValue = (0, import_helpers.clamp)(snapToStep, [min, max]);
          setValues((prevValues = []) => {
            const nextValues = (0, import_helpers2.getNextSortedValues)(prevValues, nextValue, atIndex);
            if ((0, import_helpers2.hasMinStepsBetweenValues)(nextValues, minStepsBetweenThumbs * step)) {
              valueIndexToChangeRef.current = nextValues.indexOf(nextValue);
              return String(nextValues) === String(prevValues) ? prevValues : nextValues;
            } else {
              return prevValues;
            }
          });
        }
        __name(updateValues, "updateValues");
        const SliderOriented = isHorizontal ? SliderHorizontal : SliderVertical;
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_constants.SliderProvider, {
          scope: props.__scopeSlider,
          disabled,
          min,
          max,
          valueIndexToChangeRef,
          thumbs: thumbRefs.current,
          values,
          orientation,
          size: sizeProp,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderOriented, {
            "aria-disabled": disabled,
            "data-disabled": disabled ? "" : void 0,
            ...sliderProps,
            ref: composedRefs,
            min,
            max,
            onSlideStart: disabled ? void 0 : (value2, target) => {
              if (target !== "thumb") {
                const closestIndex = (0, import_helpers2.getClosestValueIndex)(values, value2);
                updateValues(value2, closestIndex);
              }
            },
            onSlideMove: disabled ? void 0 : handleSlideMove,
            onHomeKeyDown: () => !disabled && updateValues(min, 0),
            onEndKeyDown: () => !disabled && updateValues(max, values.length - 1),
            onStepKeyDown: ({ event, direction: stepDirection }) => {
              if (!disabled) {
                const isPageKey = import_constants.PAGE_KEYS.includes(event.key);
                const isSkipKey = isPageKey || event.shiftKey && import_constants.ARROW_KEYS.includes(event.key);
                const multiplier = isSkipKey ? 10 : 1;
                const atIndex = valueIndexToChangeRef.current;
                const value2 = values[atIndex];
                const stepInDirection = step * multiplier * stepDirection;
                updateValues(value2 + stepInDirection, atIndex);
              }
            }
          })
        });
      }),
      {
        Track: SliderTrack,
        TrackActive: SliderTrackActive,
        Thumb: SliderThumb
      }
    );
    Slider.displayName = import_constants.SLIDER_NAME;
    var Track = SliderTrack;
    var Range = SliderTrackActive;
    var Thumb = SliderThumb;
  }
});

// ../../node_modules/@tamagui/slider/dist/cjs/index.js
var require_cjs39 = __commonJS({
  "../../node_modules/@tamagui/slider/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    __export3(src_exports2, {
      DirectionalYStack: () => import_SliderImpl.DirectionalYStack,
      SliderFrame: () => import_SliderImpl.SliderFrame
    });
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_Slider(), module2.exports);
    var import_SliderImpl = require_SliderImpl();
  }
});

// ../../node_modules/@radix-ui/react-use-previous/dist/index.js
var require_dist3 = __commonJS({
  "../../node_modules/@radix-ui/react-use-previous/dist/index.js"(exports2) {
    var e;
    var r;
    var u = (e = {}, r = require("react"), Object.keys(r).forEach(function(u2) {
      "default" !== u2 && "__esModule" !== u2 && Object.defineProperty(e, u2, { enumerable: true, get: function() {
        return r[u2];
      } });
    }), e);
    exports2.usePrevious = function(e2) {
      const r2 = u.useRef({ value: e2, previous: e2 });
      return u.useMemo(() => (r2.current.value !== e2 && (r2.current.previous = r2.current.value, r2.current.value = e2), r2.current.previous), [e2]);
    };
  }
});

// ../../node_modules/@tamagui/switch/dist/cjs/Switch.js
var require_Switch = __commonJS({
  "../../node_modules/@tamagui/switch/dist/cjs/Switch.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Switch_exports = {};
    __export3(Switch_exports, {
      Switch: () => Switch,
      SwitchFrame: () => SwitchFrame,
      SwitchThumb: () => SwitchThumb,
      SwitchThumbFrame: () => SwitchThumbFrame,
      createSwitchScope: () => createSwitchScope
    });
    module2.exports = __toCommonJS3(Switch_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_react_use_previous = require_dist3();
    var import_compose_refs = require_cjs3();
    var import_core2 = require("@tamagui/core-node");
    var import_create_context = require_cjs4();
    var import_focusable = require_cjs30();
    var import_label = require_cjs31();
    var import_stacks = require_cjs10();
    var import_use_controllable_state = require_cjs14();
    var React3 = __toESM2(require("react"));
    var SWITCH_NAME = "Switch";
    var getSwitchHeight = /* @__PURE__ */ __name((val) => Math.round((0, import_core2.getVariableValue)((0, import_core2.getSize)(val)) * 0.65), "getSwitchHeight");
    var getSwitchWidth = /* @__PURE__ */ __name((val) => getSwitchHeight(val) * 2, "getSwitchWidth");
    var scopeContexts = (0, import_create_context.createContextScope)(SWITCH_NAME);
    var [createSwitchContext] = scopeContexts;
    var createSwitchScope = scopeContexts[1];
    var [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME);
    var THUMB_NAME = "SwitchThumb";
    var SwitchThumbFrame = (0, import_core2.styled)(import_stacks.ThemeableStack, {
      name: "SwitchThumb",
      backgroundColor: "$background",
      borderRadius: 1e3,
      variants: {
        size: {
          "...size": (val) => ({
            height: getSwitchHeight(val),
            width: getSwitchHeight(val)
          })
        }
      },
      defaultVariants: {
        size: "$4"
      }
    });
    var SwitchThumb = SwitchThumbFrame.extractable(
      React3.forwardRef(
        (props, forwardedRef) => {
          const { __scopeSwitch, ...thumbProps } = props;
          const { size, disabled, checked } = useSwitchContext(THUMB_NAME, __scopeSwitch);
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumbFrame, {
            size,
            "data-state": getState(checked),
            "data-disabled": disabled ? "" : void 0,
            ...thumbProps,
            x: checked ? (0, import_core2.getVariableValue)(getSwitchWidth(size)) - (0, import_core2.getVariableValue)(getSwitchHeight(size)) : 0,
            ref: forwardedRef
          });
        }
      )
    );
    SwitchThumb.displayName = THUMB_NAME;
    var SwitchFrame = (0, import_core2.styled)(import_stacks.XStack, {
      name: "Switch",
      tag: "button",
      borderRadius: 1e3,
      borderWidth: 2,
      borderColor: "transparent",
      backgroundColor: "$background",
      focusStyle: {
        borderColor: "$borderColorFocus"
      },
      variants: {
        size: {
          "...size": (val) => {
            const height = getSwitchHeight(val) + 4;
            const width = getSwitchWidth(val) + 4;
            return {
              height,
              minHeight: height,
              width
            };
          }
        }
      },
      defaultVariants: {
        size: "$4"
      }
    });
    var Switch = (0, import_core2.withStaticProperties)(
      SwitchFrame.extractable(
        React3.forwardRef(
          (props, forwardedRef) => {
            const {
              __scopeSwitch,
              labeledBy: ariaLabelledby,
              name,
              checked: checkedProp,
              defaultChecked,
              required,
              disabled,
              value = "on",
              onCheckedChange,
              size = "$4",
              ...switchProps
            } = props;
            const [button, setButton] = React3.useState(null);
            const composedRefs = (0, import_compose_refs.useComposedRefs)(forwardedRef, (node) => setButton(node));
            const labelId = (0, import_label.useLabelContext)(button);
            const labelledBy = ariaLabelledby || labelId;
            const hasConsumerStoppedPropagationRef = React3.useRef(false);
            const isFormControl = import_core2.isWeb ? button ? Boolean(button.closest("form")) : true : false;
            const [checked = false, setChecked] = (0, import_use_controllable_state.useControllableState)({
              prop: checkedProp,
              defaultProp: defaultChecked || false,
              onChange: onCheckedChange
            });
            if (!import_core2.isWeb) {
              React3.useEffect(() => {
                if (!props.id)
                  return;
                return (0, import_focusable.registerFocusable)(props.id, {
                  focus: () => {
                    setChecked((x) => !x);
                  }
                });
              }, [props.id, setChecked]);
            }
            return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SwitchProvider, {
              scope: __scopeSwitch,
              checked,
              disabled,
              size,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchFrame, {
                  size,
                  role: "switch",
                  "aria-checked": checked,
                  "aria-labelledby": labelledBy,
                  "aria-required": required,
                  "data-state": getState(checked),
                  "data-disabled": disabled ? "" : void 0,
                  disabled,
                  theme: checked ? "active" : null,
                  themeShallow: true,
                  tabIndex: disabled ? void 0 : 0,
                  value,
                  ...switchProps,
                  ref: composedRefs,
                  onPress: (event) => {
                    var _a;
                    (_a = props.onPress) == null ? void 0 : _a.call(props, event);
                    setChecked((prevChecked) => !prevChecked);
                    if (import_core2.isWeb && isFormControl) {
                      hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
                      if (!hasConsumerStoppedPropagationRef.current)
                        event.stopPropagation();
                    }
                  }
                }),
                import_core2.isWeb && isFormControl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BubbleInput, {
                  control: button,
                  bubbles: !hasConsumerStoppedPropagationRef.current,
                  name,
                  value,
                  checked,
                  required,
                  disabled,
                  style: { transform: "translateX(-100%)" }
                })
              ]
            });
          }
        )
      ),
      {
        Thumb: SwitchThumb
      }
    );
    var BubbleInput = /* @__PURE__ */ __name((props) => {
      const { control, checked, bubbles = true, ...inputProps } = props;
      const ref = React3.useRef(null);
      const prevChecked = (0, import_react_use_previous.usePrevious)(checked);
      React3.useEffect(() => {
        const input = ref.current;
        const inputProto = window.HTMLInputElement.prototype;
        const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
        const setChecked = descriptor.set;
        if (prevChecked !== checked && setChecked) {
          const event = new Event("click", { bubbles });
          setChecked.call(input, checked);
          input.dispatchEvent(event);
        }
      }, [prevChecked, checked, bubbles]);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: checked,
        ...inputProps,
        tabIndex: -1,
        ref,
        style: {
          ...props.style,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      });
    }, "BubbleInput");
    function getState(checked) {
      return checked ? "checked" : "unchecked";
    }
    __name(getState, "getState");
  }
});

// ../../node_modules/@tamagui/switch/dist/cjs/index.js
var require_cjs40 = __commonJS({
  "../../node_modules/@tamagui/switch/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_Switch(), module2.exports);
  }
});

// ../../node_modules/@tamagui/tooltip/dist/cjs/Tooltip.js
var require_Tooltip = __commonJS({
  "../../node_modules/@tamagui/tooltip/dist/cjs/Tooltip.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Tooltip_exports = {};
    __export3(Tooltip_exports, {
      Tooltip: () => Tooltip,
      TooltipGroup: () => TooltipGroup
    });
    module2.exports = __toCommonJS3(Tooltip_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_polyfill_dev = require_polyfill_dev();
    var import_react_dom_interactions = require_floating_ui_react_dom_interactions_umd();
    var import_core2 = require("@tamagui/core-node");
    var import_popover = require_cjs34();
    var import_popper = require_cjs33();
    var React3 = __toESM2(require("react"));
    var TooltipContent = React3.forwardRef(
      ({ __scopePopover, ...props }, ref) => {
        const popperScope = (0, import_popover.usePopoverScope)(__scopePopover);
        const popper = (0, import_popper.usePopperContext)("PopperContent", popperScope["__scopePopper"]);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popover.PopoverContent, {
          componentName: "TooltipContent",
          disableRemoveScroll: true,
          trapFocus: false,
          padding: props.size || popper.size || "$2",
          pointerEvents: "none",
          ref,
          ...props
        });
      }
    );
    var TooltipArrow = React3.forwardRef((props, ref) => {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popover.PopoverArrow, {
        componentName: "TooltipArrow",
        ref,
        ...props
      });
    });
    var TooltipGroup = import_react_dom_interactions.FloatingDelayGroup;
    var Tooltip = (0, import_core2.withStaticProperties)(
      (props) => {
        const {
          __scopePopover,
          children,
          restMs = 500,
          delay: delayProp,
          onOpenChange: onOpenChangeProp,
          ...restProps
        } = props;
        const popperScope = (0, import_popover.usePopoverScope)(__scopePopover);
        const triggerRef = React3.useRef(null);
        const [hasCustomAnchor, setHasCustomAnchor] = React3.useState(false);
        const { delay: delayGroup, setCurrentId } = (0, import_react_dom_interactions.useDelayGroupContext)();
        const delay = delayProp ?? delayGroup;
        const [open, setOpen] = React3.useState(false);
        const id = props.groupId;
        const onOpenChange = (0, import_core2.useEvent)((open2) => {
          setOpen(open2);
          if (open2) {
            setCurrentId(id);
          }
          onOpenChangeProp == null ? void 0 : onOpenChangeProp(open2);
        });
        const useFloatingFn = /* @__PURE__ */ __name((props2) => {
          const floating = (0, import_react_dom_interactions.useFloating)({
            ...props2,
            open,
            onOpenChange
          });
          const { getReferenceProps, getFloatingProps } = (0, import_react_dom_interactions.useInteractions)([
            (0, import_react_dom_interactions.useHover)(floating.context, { delay, restMs }),
            (0, import_react_dom_interactions.useFocus)(floating.context),
            (0, import_react_dom_interactions.useRole)(floating.context, { role: "tooltip" }),
            (0, import_react_dom_interactions.useDismiss)(floating.context),
            (0, import_react_dom_interactions.useDelayGroup)(floating.context, { id })
          ]);
          return {
            ...floating,
            getReferenceProps,
            getFloatingProps
          };
        }, "useFloatingFn");
        const useFloatingContext = React3.useCallback(useFloatingFn, [id, delay, open]);
        const onCustomAnchorAdd = React3.useCallback(() => setHasCustomAnchor(true), []);
        const onCustomAnchorRemove = React3.useCallback(() => setHasCustomAnchor(false), []);
        const contentId = (0, import_core2.useId)();
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popper.FloatingOverrideContext.Provider, {
          value: useFloatingContext,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popper.Popper, {
            size: "$2",
            ...popperScope,
            ...restProps,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popover.__PopoverProviderInternal, {
              scope: __scopePopover,
              contentId,
              triggerRef,
              sheetBreakpoint: false,
              scopeKey: "",
              open,
              onOpenChange: setOpen,
              onOpenToggle: voidFn,
              hasCustomAnchor,
              onCustomAnchorAdd,
              onCustomAnchorRemove,
              children
            })
          })
        });
      },
      {
        Anchor: import_popover.PopoverAnchor,
        Arrow: TooltipArrow,
        Content: TooltipContent,
        Trigger: import_popover.PopoverTrigger
      }
    );
    Tooltip.displayName = "Tooltip";
    var voidFn = /* @__PURE__ */ __name(() => {
    }, "voidFn");
  }
});

// ../../node_modules/@tamagui/tooltip/dist/cjs/TooltipSimple.js
var require_TooltipSimple = __commonJS({
  "../../node_modules/@tamagui/tooltip/dist/cjs/TooltipSimple.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var TooltipSimple_exports = {};
    __export3(TooltipSimple_exports, {
      TooltipSimple: () => TooltipSimple
    });
    module2.exports = __toCommonJS3(TooltipSimple_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_react_dom_interactions = require_floating_ui_react_dom_interactions_umd();
    var import_core2 = require("@tamagui/core-node");
    var import_text = require_cjs18();
    var import_Tooltip = require_Tooltip();
    var TooltipSimple = /* @__PURE__ */ __name(({
      label,
      children,
      contentProps,
      ...tooltipProps
    }) => {
      let context;
      try {
        context = (0, import_react_dom_interactions.useDelayGroupContext)();
      } catch {
      }
      const contents = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_Tooltip.Tooltip, {
        ...tooltipProps,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Tooltip.Tooltip.Trigger, {
            asChild: true,
            children
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core2.ThemeInverse, {
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_Tooltip.Tooltip.Content, {
              zIndex: 1e5,
              enterStyle: { x: 0, y: -8, opacity: 0, scale: 0.93 },
              exitStyle: { x: 0, y: -8, opacity: 0, scale: 0.93 },
              x: 0,
              scale: 1,
              y: 0,
              elevation: "$0.5",
              opacity: 1,
              animation: [
                "quick",
                {
                  opacity: {
                    overshootClamping: true
                  }
                }
              ],
              ...contentProps,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Tooltip.Tooltip.Arrow, {}),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_text.Paragraph, {
                  size: "$2",
                  lineHeight: "$0",
                  children: label
                })
              ]
            })
          })
        ]
      });
      if (!context) {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Tooltip.TooltipGroup, {
          delay: defaultTooltipDelay,
          children: contents
        });
      }
      return contents;
    }, "TooltipSimple");
    var defaultTooltipDelay = { open: 3e3, close: 100 };
  }
});

// ../../node_modules/@tamagui/tooltip/dist/cjs/index.js
var require_cjs41 = __commonJS({
  "../../node_modules/@tamagui/tooltip/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_Tooltip(), module2.exports);
    __reExport2(src_exports2, require_TooltipSimple(), module2.exports);
  }
});

// ../../node_modules/@tamagui/use-debounce/dist/cjs/index.js
var require_cjs42 = __commonJS({
  "../../node_modules/@tamagui/use-debounce/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    __export3(src_exports2, {
      debounce: () => debounce,
      useDebounce: () => useDebounce,
      useDebounceValue: () => useDebounceValue
    });
    module2.exports = __toCommonJS3(src_exports2);
    var import_react = require("react");
    function debounce(func, wait, leading) {
      let timeout;
      let isCancelled = false;
      function debounced() {
        isCancelled = false;
        let context = this;
        let args = arguments;
        if (leading && !timeout) {
          func.apply(context, args);
        }
        clearTimeout(timeout);
        timeout = setTimeout(function() {
          timeout = null;
          if (!leading && !isCancelled) {
            func.apply(context, args);
          }
          isCancelled = false;
        }, wait);
      }
      __name(debounced, "debounced");
      debounced.cancel = () => {
        isCancelled = true;
      };
      return debounced;
    }
    __name(debounce, "debounce");
    var defaultOpts = { leading: false };
    function useDebounce(fn, wait, options = defaultOpts, mountArgs = []) {
      const dbEffect = (0, import_react.useRef)(null);
      (0, import_react.useEffect)(() => {
        return () => {
          var _a;
          (_a = dbEffect.current) == null ? void 0 : _a.cancel();
        };
      }, []);
      return (0, import_react.useMemo)(() => {
        dbEffect.current = debounce(fn, wait, options.leading);
        return dbEffect.current;
      }, [options.leading, ...mountArgs]);
    }
    __name(useDebounce, "useDebounce");
    function useDebounceValue(val, amt = 0) {
      const [state, setState] = (0, import_react.useState)(val);
      (0, import_react.useEffect)(() => {
        let tm = setTimeout(() => {
          setState((prev) => {
            if (prev === val)
              return prev;
            return val;
          });
        }, amt);
        return () => {
          clearTimeout(tm);
        };
      }, [val]);
      return state;
    }
    __name(useDebounceValue, "useDebounceValue");
  }
});

// ../../node_modules/@tamagui/constants/dist/cjs/constants.js
var require_constants4 = __commonJS({
  "../../node_modules/@tamagui/constants/dist/cjs/constants.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var constants_exports = {};
    __export3(constants_exports, {
      isChrome: () => isChrome2,
      isClient: () => isClient2,
      isRSC: () => isRSC,
      isServer: () => isServer2,
      isTouchable: () => isTouchable2,
      isWeb: () => isWeb2,
      isWebTouchable: () => isWebTouchable2,
      isWindowDefined: () => isWindowDefined,
      useIsomorphicLayoutEffect: () => useIsomorphicLayoutEffect2
    });
    module2.exports = __toCommonJS3(constants_exports);
    var import_react = require("react");
    var import_meta = {};
    var isWeb2 = process.env.TAMAGUI_TARGET === "web";
    var isWindowDefined = typeof window !== "undefined";
    var isServer2 = isWeb2 && !isWindowDefined;
    var isClient2 = isWeb2 && isWindowDefined;
    var isRSC = process.env.ENABLE_RSC ? import_meta.env ? import_meta.env.SSR : false : false;
    var idFn = /* @__PURE__ */ __name(() => {
    }, "idFn");
    var useIsomorphicLayoutEffect2 = isRSC ? idFn : isServer2 ? import_react.useEffect : import_react.useLayoutEffect;
    var isChrome2 = typeof navigator !== "undefined" && /Chrome/.test(navigator.userAgent || "");
    var isWebTouchable2 = isClient2 && "ontouchstart" in window;
    var isTouchable2 = !isWeb2 || isWebTouchable2;
    if (process.env.NODE_ENV === "development") {
      if (!process.env.TAMAGUI_TARGET) {
        console.warn(`Must set TAMAGUI_TARGET to "web" or "native"`);
      } else if (isClient2 && process.env.TAMAGUI_TARGET !== "web" && process.env.TAMAGUI_IGNORE_TARGET !== "1") {
        console.warn(
          `Must set TAMAGUI_TARGET to "web" for web apps - if you have window defined outside of the browser, set TAMAGUI_IGNORE_TARGET=1 to hide this`
        );
      }
    }
  }
});

// ../../node_modules/@tamagui/use-window-dimensions/dist/cjs/index.js
var require_cjs43 = __commonJS({
  "../../node_modules/@tamagui/use-window-dimensions/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    __export3(src_exports2, {
      useWindowDimensions: () => useWindowDimensions
    });
    module2.exports = __toCommonJS3(src_exports2);
    var import_constants = require_constants4();
    var import_react = require("react");
    var import_react_native3 = require("react-native-web-lite");
    var initialValue = {
      fontScale: 1,
      height: 800,
      width: 600,
      scale: 1
    };
    function useWindowDimensions() {
      const [state, setState] = (0, import_react.useState)(initialValue);
      const current = (0, import_react_native3.useWindowDimensions)();
      (0, import_constants.useIsomorphicLayoutEffect)(() => {
        setState(current);
      }, [current.height, current.width, current.fontScale, current.scale]);
      return state;
    }
    __name(useWindowDimensions, "useWindowDimensions");
  }
});

// ../../node_modules/@tamagui/use-force-update/dist/cjs/index.js
var require_cjs44 = __commonJS({
  "../../node_modules/@tamagui/use-force-update/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    __export3(src_exports2, {
      isServerSide: () => isServerSide,
      useForceUpdate: () => useForceUpdate
    });
    module2.exports = __toCommonJS3(src_exports2);
    var import_react = require("react");
    var isServerSide = process.env.TAMAGUI_TARGET === "web" && typeof window === "undefined";
    var idFn = /* @__PURE__ */ __name(() => {
    }, "idFn");
    function useForceUpdate() {
      return isServerSide ? idFn : (0, import_react.useReducer)((x) => x + 1, 0)[1];
    }
    __name(useForceUpdate, "useForceUpdate");
  }
});

// ../../node_modules/@tamagui/visually-hidden/dist/cjs/VisuallyHidden.js
var require_VisuallyHidden = __commonJS({
  "../../node_modules/@tamagui/visually-hidden/dist/cjs/VisuallyHidden.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var VisuallyHidden_exports = {};
    __export3(VisuallyHidden_exports, {
      VisuallyHidden: () => VisuallyHidden
    });
    module2.exports = __toCommonJS3(VisuallyHidden_exports);
    var import_core2 = require("@tamagui/core-node");
    var VisuallyHidden = (0, import_core2.styled)(import_core2.Stack, {
      position: "absolute",
      width: 1,
      height: 1,
      margin: -1,
      zIndex: -1e4,
      overflow: "hidden",
      opacity: 1e-8,
      pointerEvents: "none",
      variants: {
        preserveDimensions: {
          true: {
            position: "relative",
            width: "auto",
            height: "auto"
          }
        },
        visible: {
          true: {
            position: "relative",
            width: "auto",
            height: "auto",
            margin: 0,
            zIndex: 1,
            overflow: "visible",
            opacity: 1,
            pointerEvents: "auto"
          }
        }
      }
    });
    VisuallyHidden["isVisuallyHidden"] = true;
  }
});

// ../../node_modules/@tamagui/visually-hidden/dist/cjs/index.js
var require_cjs45 = __commonJS({
  "../../node_modules/@tamagui/visually-hidden/dist/cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps3(target, mod, "default"), secondTarget && __copyProps3(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    module2.exports = __toCommonJS3(src_exports2);
    __reExport2(src_exports2, require_VisuallyHidden(), module2.exports);
  }
});

// ../../node_modules/tamagui/dist/cjs/createTamagui.js
var require_createTamagui = __commonJS({
  "../../node_modules/tamagui/dist/cjs/createTamagui.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var createTamagui_exports = {};
    __export3(createTamagui_exports, {
      createTamagui: () => createTamagui
    });
    module2.exports = __toCommonJS3(createTamagui_exports);
    var import_core2 = require("@tamagui/core-node");
    var createTamagui = process.env.NODE_ENV !== "development" ? import_core2.createTamagui : (conf) => {
      const sizeTokenKeys = [
        "$0",
        "$1",
        "$2",
        "$3",
        "$4",
        "$5",
        "$6",
        "$7",
        "$8",
        "$9",
        "$10",
        "$true"
      ];
      const hasKeys = /* @__PURE__ */ __name((expectedKeys, obj) => {
        return expectedKeys.every((k) => typeof obj[k] !== "undefined");
      }, "hasKeys");
      const tamaguiConfig = (0, import_core2.createTamagui)(conf);
      for (const name of ["size", "space"]) {
        const tokenSet = tamaguiConfig.tokensParsed[name];
        if (!tokenSet) {
          throw new Error(
            `Expected tokens for "${name}" in ${Object.keys(tamaguiConfig.tokensParsed).join(
              ", "
            )}`
          );
        }
        if (!hasKeys(sizeTokenKeys, tokenSet)) {
          throw new Error(`
createTamagui() missing definition for expected tokens.${name}:

Received: ${Object.keys(tokenSet).join(", ")}

Expected: ${sizeTokenKeys.join(", ")}

`);
        }
      }
      const expected = Object.keys(tamaguiConfig.tokensParsed.size);
      for (const name of ["radius", "zIndex"]) {
        const tokenSet = tamaguiConfig.tokensParsed[name];
        const received = Object.keys(tokenSet);
        const hasSomeOverlap = received.some((rk) => expected.includes(rk));
        if (!hasSomeOverlap) {
          throw new Error(`
createTamagui() invalid tokens.${name}:

Received: ${received.join(", ")}

Expected a subset of: ${expected.join(", ")}

`);
        }
      }
      return tamaguiConfig;
    };
  }
});

// ../../node_modules/tamagui/dist/cjs/views/TamaguiProvider.js
var require_TamaguiProvider = __commonJS({
  "../../node_modules/tamagui/dist/cjs/views/TamaguiProvider.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var TamaguiProvider_exports = {};
    __export3(TamaguiProvider_exports, {
      TamaguiProvider: () => TamaguiProvider
    });
    module2.exports = __toCommonJS3(TamaguiProvider_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_core2 = require("@tamagui/core-node");
    var import_portal = require_cjs11();
    var TamaguiProvider = import_core2.isRSC ? import_core2.TamaguiProvider : ({ children, ...props }) => {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core2.TamaguiProvider, {
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_portal.PortalProvider, {
          children
        })
      });
    };
  }
});

// ../../node_modules/tamagui/dist/cjs/viewTypes.js
var require_viewTypes = __commonJS({
  "../../node_modules/tamagui/dist/cjs/viewTypes.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var viewTypes_exports = {};
    module2.exports = __toCommonJS3(viewTypes_exports);
  }
});

// ../../node_modules/tamagui/dist/cjs/views/Anchor.js
var require_Anchor = __commonJS({
  "../../node_modules/tamagui/dist/cjs/views/Anchor.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Anchor_exports = {};
    __export3(Anchor_exports, {
      Anchor: () => Anchor
    });
    module2.exports = __toCommonJS3(Anchor_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_core2 = require("@tamagui/core-node");
    var import_text = require_cjs18();
    var import_react = __toESM2(require("react"));
    var import_react_native3 = require("react-native-web-lite");
    import_react.default["keep"];
    var AnchorFrame = (0, import_core2.styled)(import_text.SizableText, {
      name: "Anchor",
      tag: "a",
      accessibilityRole: "link"
    });
    var Anchor = AnchorFrame.extractable(
      (0, import_react.forwardRef)(({ href, target, ...props }, ref) => {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnchorFrame, {
          ...props,
          ...import_core2.isWeb ? {
            href,
            target
          } : {
            onPress: (event) => {
              var _a;
              (_a = props.onPress) == null ? void 0 : _a.call(props, event);
              if (href !== void 0) {
                import_react_native3.Linking.openURL(href);
              }
            }
          },
          ref
        });
      })
    );
  }
});

// ../../node_modules/tamagui/dist/cjs/views/EnsureFlexed.js
var require_EnsureFlexed = __commonJS({
  "../../node_modules/tamagui/dist/cjs/views/EnsureFlexed.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var EnsureFlexed_exports = {};
    __export3(EnsureFlexed_exports, {
      EnsureFlexed: () => EnsureFlexed
    });
    module2.exports = __toCommonJS3(EnsureFlexed_exports);
    var import_core2 = require("@tamagui/core-node");
    var EnsureFlexed = (0, import_core2.styled)(import_core2.Text, {
      opacity: 0,
      lineHeight: 0,
      height: 0,
      display: "flex",
      fontSize: 200,
      children: `wwwwwwwwwwwwwwwwwww`,
      hoverStyle: {
        backgroundColor: "red"
      },
      pointerEvents: "none"
    });
    EnsureFlexed["isVisuallyHidden"] = true;
  }
});

// ../../node_modules/tamagui/dist/cjs/views/Fieldset.js
var require_Fieldset = __commonJS({
  "../../node_modules/tamagui/dist/cjs/views/Fieldset.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Fieldset_exports = {};
    __export3(Fieldset_exports, {
      Fieldset: () => Fieldset
    });
    module2.exports = __toCommonJS3(Fieldset_exports);
    var import_core2 = require("@tamagui/core-node");
    var import_stacks = require_cjs10();
    var Fieldset = (0, import_core2.styled)(import_stacks.YStack, {
      name: "Fieldset",
      variants: {
        horizontal: {
          true: {
            flexDirection: "row",
            alignItems: "center"
          }
        }
      }
    });
  }
});

// ../../node_modules/tamagui/dist/cjs/views/Form.js
var require_Form = __commonJS({
  "../../node_modules/tamagui/dist/cjs/views/Form.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Form_exports = {};
    __export3(Form_exports, {
      Form: () => Form
    });
    module2.exports = __toCommonJS3(Form_exports);
    var import_core2 = require("@tamagui/core-node");
    var Form = (0, import_core2.styled)(import_core2.Stack, {
      name: "Form",
      tag: "form"
    });
  }
});

// ../../node_modules/tamagui/dist/cjs/views/Grid.js
var require_Grid = __commonJS({
  "../../node_modules/tamagui/dist/cjs/views/Grid.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Grid_exports = {};
    __export3(Grid_exports, {
      Grid: () => Grid
    });
    module2.exports = __toCommonJS3(Grid_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_core2 = require("@tamagui/core-node");
    var import_stacks = require_cjs10();
    var import_react = __toESM2(require("react"));
    function Grid({ children, columns, itemMinWidth = 200, gap }) {
      if (import_core2.isWeb) {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          style: {
            gap,
            display: "grid",
            justifyContent: "stretch",
            gridTemplateColumns: `repeat( auto-fit, minmax(${itemMinWidth}px, 1fr) )`
          },
          children
        });
      }
      const childrenList = import_react.default.Children.toArray(children);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_stacks.XStack, {
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        children: childrenList.map((child, i) => {
          if (!child) {
            return null;
          }
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_stacks.XStack, {
            flex: 1,
            minWidth: itemMinWidth,
            marginRight: gap,
            marginBottom: gap,
            children: child
          }, i);
        })
      });
    }
    __name(Grid, "Grid");
  }
});

// ../../node_modules/tamagui/dist/cjs/helpers/inputHelpers.js
var require_inputHelpers = __commonJS({
  "../../node_modules/tamagui/dist/cjs/helpers/inputHelpers.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var inputHelpers_exports = {};
    __export3(inputHelpers_exports, {
      inputSizeVariant: () => inputSizeVariant,
      textAreaSizeVariant: () => textAreaSizeVariant
    });
    module2.exports = __toCommonJS3(inputHelpers_exports);
    var import_core2 = require("@tamagui/core-node");
    var import_get_button_sized = require_cjs9();
    var import_get_font_sized = require_cjs17();
    var inputSizeVariant = /* @__PURE__ */ __name((val = "$4", extras) => {
      if (extras.props.multiline || extras.props.numberOfLines > 1) {
        return textAreaSizeVariant(val, extras);
      }
      const buttonStyles = (0, import_get_button_sized.getButtonSized)(val, extras);
      const paddingHorizontal = (0, import_core2.stepTokenUpOrDown)(extras.tokens.space, val, -1, [2]);
      const fontStyle = (0, import_get_font_sized.getFontSized)(val, extras);
      if (!import_core2.isWeb && fontStyle) {
        delete fontStyle["lineHeight"];
      }
      return {
        ...fontStyle,
        ...buttonStyles,
        paddingHorizontal
      };
    }, "inputSizeVariant");
    var textAreaSizeVariant = /* @__PURE__ */ __name((val = "$4", extras) => {
      const { props } = extras;
      const buttonStyles = (0, import_get_button_sized.getButtonSized)(val, extras);
      const fontStyle = (0, import_get_font_sized.getFontSized)(val, extras);
      const minHeight = (props.numberOfLines || 1) * (0, import_core2.getVariableValue)(fontStyle.lineHeight);
      const paddingVertical = (0, import_core2.stepTokenUpOrDown)(extras.tokens.space, val, -2, [2]);
      const paddingHorizontal = (0, import_core2.stepTokenUpOrDown)(extras.tokens.space, val, -1, [2]);
      return {
        ...buttonStyles,
        ...fontStyle,
        paddingVertical,
        paddingHorizontal,
        minHeight
      };
    }, "textAreaSizeVariant");
  }
});

// ../../node_modules/tamagui/dist/cjs/views/Input.js
var require_Input = __commonJS({
  "../../node_modules/tamagui/dist/cjs/views/Input.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Input_exports = {};
    __export3(Input_exports, {
      Input: () => Input,
      InputFrame: () => InputFrame
    });
    module2.exports = __toCommonJS3(Input_exports);
    var import_core2 = require("@tamagui/core-node");
    var import_focusable = require_cjs30();
    var import_react_native3 = require("react-native-web-lite");
    var import_inputHelpers = require_inputHelpers();
    var InputFrame = (0, import_core2.styled)(import_react_native3.TextInput, {
      name: "Input",
      fontFamily: "$body",
      borderWidth: 1,
      color: "$color",
      focusable: true,
      borderColor: "$borderColor",
      backgroundColor: "$background",
      minWidth: 0,
      hoverStyle: {
        borderColor: "$borderColorHover"
      },
      focusStyle: {
        borderColor: "$borderColorFocus",
        borderWidth: 2,
        marginHorizontal: -1
      },
      variants: {
        size: {
          "...size": import_inputHelpers.inputSizeVariant
        }
      },
      defaultVariants: {
        size: "$4"
      }
    });
    var Input = (0, import_focusable.focusableInputHOC)(InputFrame);
  }
});

// ../../node_modules/tamagui/dist/cjs/views/Group.js
var require_Group = __commonJS({
  "../../node_modules/tamagui/dist/cjs/views/Group.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Group_exports = {};
    __export3(Group_exports, {
      GroupFrame: () => GroupFrame,
      XGroup: () => XGroup,
      YGroup: () => YGroup
    });
    module2.exports = __toCommonJS3(Group_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_core2 = require("@tamagui/core-node");
    var import_stacks = require_cjs10();
    var import_react = __toESM2(require("react"));
    var import_react_native3 = require("react-native-web-lite");
    var GroupFrame = (0, import_core2.styled)(import_stacks.ThemeableStack, {
      name: "GroupFrame",
      backgroundColor: "$background",
      y: 0,
      overflow: "hidden",
      variants: {
        size: (val, { tokens }) => {
          const borderRadius = tokens.radius[val] ?? val ?? tokens.radius["$4"];
          return {
            borderRadius
          };
        }
      },
      defaultVariants: {
        size: "$4"
      }
    });
    function createGroup(verticalDefault) {
      return GroupFrame.extractable(
        (0, import_react.forwardRef)((props, ref) => {
          const activeProps = (0, import_core2.useMediaPropsActive)(props);
          const {
            children: childrenProp,
            space,
            size = "$4",
            spaceDirection,
            separator,
            scrollable,
            vertical = verticalDefault,
            disabled: disabledProp,
            disablePassBorderRadius: disablePassBorderRadiusProp,
            disablePassSize: disablePassSizeProp,
            borderRadius,
            ...restProps
          } = (0, import_core2.getExpandedShorthands)(activeProps);
          const radius = borderRadius ?? (size ? (0, import_core2.getVariableValue)((0, import_core2.getTokens)(true).radius[size]) - 1 : void 0);
          const hasRadius = radius !== void 0;
          const disablePassBorderRadius = disablePassBorderRadiusProp ?? !hasRadius;
          const childrens = import_react.Children.toArray(childrenProp);
          const disablePassSize = disablePassSizeProp ?? size === void 0;
          const children = childrens.map((child, i) => {
            if (!(0, import_react.isValidElement)(child))
              return child;
            const disabled = child.props.disabled ?? disabledProp;
            const isFirst = i === 0;
            const isLast = i === childrens.length - 1;
            const props2 = {
              disabled,
              ...!disablePassSize && {
                size
              },
              ...!disablePassBorderRadius && {
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                ...hasRadius && {
                  ...isFirst && !vertical && {
                    borderTopLeftRadius: radius,
                    borderBottomLeftRadius: radius
                  },
                  ...isFirst && vertical && {
                    borderTopLeftRadius: radius,
                    borderTopRightRadius: radius
                  },
                  ...isLast && !vertical && {
                    borderTopRightRadius: radius,
                    borderBottomRightRadius: radius
                  },
                  ...isLast && vertical && {
                    borderBottomLeftRadius: radius,
                    borderBottomRightRadius: radius
                  }
                }
              }
            };
            return cloneElementWithPropOrder(child, props2);
          });
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GroupFrame, {
            ref,
            size,
            flexDirection: !vertical ? "row" : "column",
            borderRadius,
            ...restProps,
            children: wrapScroll(
              activeProps,
              (0, import_core2.spacedChildren)({
                direction: spaceDirection,
                separator,
                space,
                children
              })
            )
          });
        })
      );
    }
    __name(createGroup, "createGroup");
    var YGroup = createGroup(true);
    var XGroup = createGroup(false);
    var wrapScroll = /* @__PURE__ */ __name(({ scrollable, vertical, showScrollIndicator = false }, children) => {
      if (scrollable)
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native3.ScrollView, {
          ...vertical && {
            showsVerticalScrollIndicator: showScrollIndicator
          },
          ...!vertical && {
            horizontal: true,
            showsHorizontalScrollIndicator: showScrollIndicator
          },
          children
        });
      return children;
    }, "wrapScroll");
    var cloneElementWithPropOrder = /* @__PURE__ */ __name((child, props) => {
      const next = (0, import_core2.mergeProps)(child.props, props, false, (0, import_core2.getConfig)().shorthands)[0];
      return import_react.default.cloneElement({ ...child, props: null }, next);
    }, "cloneElementWithPropOrder");
  }
});

// ../../node_modules/tamagui/dist/cjs/views/Layouts.js
var require_Layouts = __commonJS({
  "../../node_modules/tamagui/dist/cjs/views/Layouts.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Layouts_exports = {};
    __export3(Layouts_exports, {
      Article: () => Article,
      Aside: () => Aside,
      Footer: () => Footer,
      Header: () => Header,
      Main: () => Main,
      Nav: () => Nav,
      Section: () => Section
    });
    module2.exports = __toCommonJS3(Layouts_exports);
    var import_core2 = require("@tamagui/core-node");
    var Section = (0, import_core2.styled)(import_core2.Stack, {
      name: "Section",
      tag: "section",
      flexDirection: "column",
      accessibilityRole: "summary"
    });
    var Article = (0, import_core2.styled)(import_core2.Stack, {
      name: "Article",
      tag: "article",
      flexDirection: "column"
    });
    var Main = (0, import_core2.styled)(import_core2.Stack, {
      name: "Main",
      tag: "main",
      flexDirection: "column"
    });
    var Header = (0, import_core2.styled)(import_core2.Stack, {
      name: "Header",
      tag: "header",
      accessibilityRole: "header",
      flexDirection: "column"
    });
    var Aside = (0, import_core2.styled)(import_core2.Stack, {
      name: "Aside",
      tag: "aside",
      flexDirection: "column"
    });
    var Footer = (0, import_core2.styled)(import_core2.Stack, {
      name: "Footer",
      tag: "footer",
      flexDirection: "column"
    });
    var Nav = (0, import_core2.styled)(import_core2.Stack, {
      name: "Nav",
      tag: "nav",
      flexDirection: "column"
    });
  }
});

// ../../node_modules/expo-linear-gradient/build/NativeLinearGradient.js
function NativeLinearGradient(props) {
  const { colors, locations, startPoint, endPoint, ...viewProps } = props;
  console.warn("LinearGradient is not available on this platform");
  return React.createElement(import_react_native.View, { ...viewProps });
}
var React, import_react_native;
var init_NativeLinearGradient = __esm({
  "../../node_modules/expo-linear-gradient/build/NativeLinearGradient.js"() {
    React = __toESM(require("react"));
    import_react_native = require("react-native-web-lite");
    __name(NativeLinearGradient, "NativeLinearGradient");
  }
});

// ../../node_modules/expo-linear-gradient/build/LinearGradient.js
var LinearGradient_exports = {};
__export(LinearGradient_exports, {
  LinearGradient: () => LinearGradient2
});
function _normalizePoint(point) {
  if (!point) {
    return void 0;
  }
  if (Array.isArray(point) && point.length !== 2) {
    console.warn("start and end props for LinearGradient must be of the format [x,y] or {x, y}");
    return void 0;
  }
  return Array.isArray(point) ? point : [point.x, point.y];
}
var React2, import_react_native2, LinearGradient2;
var init_LinearGradient = __esm({
  "../../node_modules/expo-linear-gradient/build/LinearGradient.js"() {
    React2 = __toESM(require("react"));
    import_react_native2 = require("react-native-web-lite");
    init_NativeLinearGradient();
    LinearGradient2 = class extends React2.Component {
      render() {
        const { colors, locations, start, end, ...props } = this.props;
        let resolvedLocations = locations;
        if (locations && colors.length !== locations.length) {
          console.warn("LinearGradient colors and locations props should be arrays of the same length");
          resolvedLocations = locations.slice(0, colors.length);
        }
        return React2.createElement(NativeLinearGradient, { ...props, colors: import_react_native2.Platform.select({
          web: colors,
          default: colors.map(import_react_native2.processColor)
        }), locations: resolvedLocations, startPoint: _normalizePoint(start), endPoint: _normalizePoint(end) });
      }
    };
    __name(LinearGradient2, "LinearGradient");
    __name(_normalizePoint, "_normalizePoint");
  }
});

// ../../node_modules/tamagui/dist/cjs/lib/linear-gradient.js
var require_linear_gradient = __commonJS({
  "../../node_modules/tamagui/dist/cjs/lib/linear-gradient.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var linear_gradient_exports = {};
    __export3(linear_gradient_exports, {
      LinearGradient: () => import_expo_linear_gradient.LinearGradient
    });
    module2.exports = __toCommonJS3(linear_gradient_exports);
    var import_expo_linear_gradient = (init_LinearGradient(), __toCommonJS(LinearGradient_exports));
  }
});

// ../../node_modules/tamagui/dist/cjs/views/LinearGradient.js
var require_LinearGradient = __commonJS({
  "../../node_modules/tamagui/dist/cjs/views/LinearGradient.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var LinearGradient_exports2 = {};
    __export3(LinearGradient_exports2, {
      LinearGradient: () => LinearGradient3
    });
    module2.exports = __toCommonJS3(LinearGradient_exports2);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_core2 = require("@tamagui/core-node");
    var import_stacks = require_cjs10();
    var React3 = __toESM2(require("react"));
    var import_react_native3 = require("react-native-web-lite");
    var import_linear_gradient = require_linear_gradient();
    React3["createElement"];
    var LinearGradient3 = import_stacks.YStack.extractable(
      (0, import_core2.themeable)(
        React3.forwardRef((props, ref) => {
          const { start, end, colors: colorsProp, locations, children, ...stackProps } = props;
          const colors = useThemeColors(colorsProp || []);
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinearGradientFrame, {
            ref,
            ...stackProps,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_linear_gradient.LinearGradient, {
              start,
              end,
              colors,
              locations,
              style: [import_react_native3.StyleSheet.absoluteFill],
              children
            })
          });
        })
      )
    );
    var LinearGradientFrame = (0, import_core2.styled)(import_stacks.YStack, {
      name: "LinearGradient",
      overflow: "hidden",
      position: "relative"
    });
    var useThemeColors = /* @__PURE__ */ __name((colors) => {
      const theme = (0, import_core2.useTheme)();
      return colors.map((color) => {
        if (color[0] === "$") {
          return (0, import_core2.getVariable)(theme[color] || color);
        }
        return color;
      });
    }, "useThemeColors");
  }
});

// ../../node_modules/tamagui/dist/cjs/views/Spinner.js
var require_Spinner = __commonJS({
  "../../node_modules/tamagui/dist/cjs/views/Spinner.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps3(
      isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Spinner_exports = {};
    __export3(Spinner_exports, {
      Spinner: () => Spinner
    });
    module2.exports = __toCommonJS3(Spinner_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_core2 = require("@tamagui/core-node");
    var import_stacks = require_cjs10();
    var React3 = __toESM2(require("react"));
    var import_react_native3 = require("react-native-web-lite");
    React3["createElement"];
    var Spinner = import_stacks.YStack.extractable(
      (0, import_core2.themeable)(
        React3.forwardRef((props, ref) => {
          const { size, color: colorProp, ...stackProps } = props;
          const theme = (0, import_core2.useTheme)();
          let color = colorProp;
          if (color && color[0] === "$") {
            color = (0, import_core2.variableToString)(theme[color]);
          }
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_stacks.YStack, {
            ref,
            ...stackProps,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native3.ActivityIndicator, {
              size,
              color
            })
          });
        })
      )
    );
  }
});

// ../../node_modules/tamagui/dist/cjs/views/TextArea.js
var require_TextArea = __commonJS({
  "../../node_modules/tamagui/dist/cjs/views/TextArea.js"(exports2, module2) {
    "use strict";
    var __defProp3 = Object.defineProperty;
    var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames3 = Object.getOwnPropertyNames;
    var __hasOwnProp3 = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp3(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps3 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS3 = /* @__PURE__ */ __name((mod) => __copyProps3(__defProp3({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var TextArea_exports = {};
    __export3(TextArea_exports, {
      TextArea: () => TextArea,
      TextAreaFrame: () => TextAreaFrame
    });
    module2.exports = __toCommonJS3(TextArea_exports);
    var import_core2 = require("@tamagui/core-node");
    var import_focusable = require_cjs30();
    var import_inputHelpers = require_inputHelpers();
    var import_Input = require_Input();
    var TextAreaFrame = (0, import_core2.styled)(import_Input.InputFrame, {
      name: "TextArea",
      multiline: true,
      numberOfLines: 4,
      height: "auto",
      focusStyle: {
        marginHorizontal: -1,
        borderColor: "$borderColorFocus",
        borderWidth: 2
      },
      variants: {
        size: {
          "...size": import_inputHelpers.textAreaSizeVariant
        }
      }
    });
    var TextArea = import_Input.InputFrame.extractable((0, import_focusable.focusableInputHOC)(TextAreaFrame));
  }
});

// ../../node_modules/tamagui/dist/cjs/index.js
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __export2 = /* @__PURE__ */ __name((target, all) => {
  for (var name in all)
    __defProp2(target, name, { get: all[name], enumerable: true });
}, "__export");
var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames2(from))
      if (!__hasOwnProp2.call(to, key) && key !== except)
        __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
  }
  return to;
}, "__copyProps");
var __reExport = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
var src_exports = {};
__export2(src_exports, {
  FontLanguage: () => import_core.FontLanguage,
  Spacer: () => import_core.Spacer,
  Stack: () => import_core.Stack,
  Text: () => import_core.Text,
  TextAncestorContext: () => import_core.TextAncestorContext,
  Theme: () => import_core.Theme,
  ThemeInverse: () => import_core.ThemeInverse,
  ThemeReset: () => import_core.ThemeReset,
  Unspaced: () => import_core.Unspaced,
  addMediaQueryListener: () => import_core.addMediaQueryListener,
  addTheme: () => import_core.addTheme,
  createComponent: () => import_core.createComponent,
  createFont: () => import_core.createFont,
  createShorthands: () => import_core.createShorthands,
  createTheme: () => import_core.createTheme,
  createTokens: () => import_core.createTokens,
  createVariable: () => import_core.createVariable,
  getAnimationDriver: () => import_core.getAnimationDriver,
  getConfig: () => import_core.getConfig,
  getHasConfigured: () => import_core.getHasConfigured,
  getMedia: () => import_core.getMedia,
  getStylesAtomic: () => import_core.getStylesAtomic,
  getThemes: () => import_core.getThemes,
  getTokens: () => import_core.getTokens,
  getVariable: () => import_core.getVariable,
  getVariableName: () => import_core.getVariableName,
  getVariableValue: () => import_core.getVariableValue,
  insertFont: () => import_core.insertFont,
  isChrome: () => import_core.isChrome,
  isClient: () => import_core.isClient,
  isServer: () => import_core.isServer,
  isTamaguiComponent: () => import_core.isTamaguiComponent,
  isTamaguiElement: () => import_core.isTamaguiElement,
  isTouchable: () => import_core.isTouchable,
  isVariable: () => import_core.isVariable,
  isWeb: () => import_core.isWeb,
  isWebTouchable: () => import_core.isWebTouchable,
  matchMedia: () => import_core.matchMedia,
  mediaObjectToString: () => import_core.mediaObjectToString,
  mediaQueryConfig: () => import_core.mediaQueryConfig,
  mediaState: () => import_core.mediaState,
  removeMediaQueryListener: () => import_core.removeMediaQueryListener,
  spacedChildren: () => import_core.spacedChildren,
  styled: () => import_core.styled,
  themeable: () => import_core.themeable,
  updateTheme: () => import_core.updateTheme,
  useDefaultThemeName: () => import_core.useDefaultThemeName,
  useDidFinishSSR: () => import_core.useDidFinishSSR,
  useEvent: () => import_core.useEvent,
  useGet: () => import_core.useGet,
  useIsTouchDevice: () => import_core.useIsTouchDevice,
  useIsomorphicLayoutEffect: () => import_core.useIsomorphicLayoutEffect,
  useMedia: () => import_core.useMedia,
  useSafeRef: () => import_core.useSafeRef,
  useTheme: () => import_core.useTheme,
  useThemeName: () => import_core.useThemeName,
  variableToString: () => import_core.variableToString,
  withStaticProperties: () => import_core.withStaticProperties
});
module.exports = __toCommonJS2(src_exports);
__reExport(src_exports, require_setup(), module.exports);
__reExport(src_exports, require_cjs2(), module.exports);
__reExport(src_exports, require_cjs20(), module.exports);
__reExport(src_exports, require_cjs23(), module.exports);
__reExport(src_exports, require_cjs28(), module.exports);
__reExport(src_exports, require_cjs29(), module.exports);
__reExport(src_exports, require_cjs3(), module.exports);
__reExport(src_exports, require_cjs4(), module.exports);
__reExport(src_exports, require_cjs19(), module.exports);
__reExport(src_exports, require_cjs24(), module.exports);
__reExport(src_exports, require_cjs27(), module.exports);
__reExport(src_exports, require_cjs21(), module.exports);
__reExport(src_exports, require_cjs31(), module.exports);
__reExport(src_exports, require_cjs32(), module.exports);
__reExport(src_exports, require_cjs34(), module.exports);
__reExport(src_exports, require_cjs33(), module.exports);
__reExport(src_exports, require_cjs11(), module.exports);
__reExport(src_exports, require_cjs35(), module.exports);
__reExport(src_exports, require_cjs15(), module.exports);
__reExport(src_exports, require_cjs37(), module.exports);
__reExport(src_exports, require_cjs36(), module.exports);
__reExport(src_exports, require_cjs22(), module.exports);
__reExport(src_exports, require_cjs16(), module.exports);
__reExport(src_exports, require_cjs39(), module.exports);
__reExport(src_exports, require_cjs10(), module.exports);
__reExport(src_exports, require_cjs40(), module.exports);
__reExport(src_exports, require_cjs18(), module.exports);
__reExport(src_exports, require_cjs41(), module.exports);
__reExport(src_exports, require_cjs14(), module.exports);
__reExport(src_exports, require_cjs42(), module.exports);
__reExport(src_exports, require_cjs43(), module.exports);
__reExport(src_exports, require_cjs44(), module.exports);
__reExport(src_exports, require_cjs45(), module.exports);
__reExport(src_exports, require_createTamagui(), module.exports);
__reExport(src_exports, require_TamaguiProvider(), module.exports);
__reExport(src_exports, require_viewTypes(), module.exports);
__reExport(src_exports, require_Anchor(), module.exports);
__reExport(src_exports, require_EnsureFlexed(), module.exports);
__reExport(src_exports, require_Fieldset(), module.exports);
__reExport(src_exports, require_Form(), module.exports);
__reExport(src_exports, require_Grid(), module.exports);
__reExport(src_exports, require_Input(), module.exports);
__reExport(src_exports, require_Group(), module.exports);
__reExport(src_exports, require_Layouts(), module.exports);
__reExport(src_exports, require_LinearGradient(), module.exports);
__reExport(src_exports, require_Spinner(), module.exports);
__reExport(src_exports, require_TextArea(), module.exports);
var import_core = require("@tamagui/core-node");
