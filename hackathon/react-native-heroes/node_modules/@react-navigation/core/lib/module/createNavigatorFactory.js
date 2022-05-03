import Group from './Group';
import Screen from './Screen';

/**
 * Higher order component to create a `Navigator` and `Screen` pair.
 * Custom navigators should wrap the navigator component in `createNavigator` before exporting.
 *
 * @param Navigator The navigtor component to wrap.
 * @returns Factory method to create a `Navigator` and `Screen` pair.
 */
export default function createNavigatorFactory(Navigator) {
  return function () {
    if (arguments[0] !== undefined) {
      throw new Error("Creating a navigator doesn't take an argument. Maybe you are trying to use React Navigation 4 API? See https://reactnavigation.org/docs/hello-react-navigation for the latest API and guides.");
    }

    return {
      Navigator,
      Group,
      Screen
    };
  };
}
//# sourceMappingURL=createNavigatorFactory.js.map