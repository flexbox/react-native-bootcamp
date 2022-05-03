"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useFocusEffect;

var React = _interopRequireWildcard(require("react"));

var _useNavigation = _interopRequireDefault(require("./useNavigation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Hook to run an effect in a focused screen, similar to `React.useEffect`.
 * This can be used to perform side-effects such as fetching data or subscribing to events.
 * The passed callback should be wrapped in `React.useCallback` to avoid running the effect too often.
 *
 * @param callback Memoized callback containing the effect, should optionally return a cleanup function.
 */
function useFocusEffect(effect) {
  const navigation = (0, _useNavigation.default)();

  if (arguments[1] !== undefined) {
    const message = "You passed a second argument to 'useFocusEffect', but it only accepts one argument. " + "If you want to pass a dependency array, you can use 'React.useCallback':\n\n" + 'useFocusEffect(\n' + '  React.useCallback(() => {\n' + '    // Your code here\n' + '  }, [depA, depB])\n' + ');\n\n' + 'See usage guide: https://reactnavigation.org/docs/use-focus-effect';
    console.error(message);
  }

  React.useEffect(() => {
    let isFocused = false;
    let cleanup;

    const callback = () => {
      const destroy = effect();

      if (destroy === undefined || typeof destroy === 'function') {
        return destroy;
      }

      if (process.env.NODE_ENV !== 'production') {
        let message = 'An effect function must not return anything besides a function, which is used for clean-up.';

        if (destroy === null) {
          message += " You returned 'null'. If your effect does not require clean-up, return 'undefined' (or nothing).";
        } else if (typeof destroy.then === 'function') {
          message += "\n\nIt looks like you wrote 'useFocusEffect(async () => ...)' or returned a Promise. " + 'Instead, write the async function inside your effect ' + 'and call it immediately:\n\n' + 'useFocusEffect(\n' + '  React.useCallback() => {\n' + '    async function fetchData() {\n' + '      // You can await here\n' + '      const response = await MyAPI.getData(someId);\n' + '      // ...\n' + '    }\n\n' + '    fetchData();\n' + '  }, [someId])\n' + ');\n\n' + 'See usage guide: https://reactnavigation.org/docs/use-focus-effect';
        } else {
          message += ` You returned '${JSON.stringify(destroy)}'.`;
        }

        console.error(message);
      }
    }; // We need to run the effect on intial render/dep changes if the screen is focused


    if (navigation.isFocused()) {
      cleanup = callback();
      isFocused = true;
    }

    const unsubscribeFocus = navigation.addListener('focus', () => {
      // If callback was already called for focus, avoid calling it again
      // The focus event may also fire on intial render, so we guard against runing the effect twice
      if (isFocused) {
        return;
      }

      if (cleanup !== undefined) {
        cleanup();
      }

      cleanup = callback();
      isFocused = true;
    });
    const unsubscribeBlur = navigation.addListener('blur', () => {
      if (cleanup !== undefined) {
        cleanup();
      }

      cleanup = undefined;
      isFocused = false;
    });
    return () => {
      if (cleanup !== undefined) {
        cleanup();
      }

      unsubscribeFocus();
      unsubscribeBlur();
    };
  }, [effect, navigation]);
}
//# sourceMappingURL=useFocusEffect.js.map