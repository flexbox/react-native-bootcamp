function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { createNavigatorFactory, TabRouter, useNavigationBuilder } from '@react-navigation/native';
import * as React from 'react';
import MaterialBottomTabView from '../views/MaterialBottomTabView';

function MaterialBottomTabNavigator(_ref) {
  let {
    id,
    initialRouteName,
    backBehavior,
    children,
    screenListeners,
    screenOptions,
    ...rest
  } = _ref;
  const {
    state,
    descriptors,
    navigation,
    NavigationContent
  } = useNavigationBuilder(TabRouter, {
    id,
    initialRouteName,
    backBehavior,
    children,
    screenListeners,
    screenOptions
  });
  return /*#__PURE__*/React.createElement(NavigationContent, null, /*#__PURE__*/React.createElement(MaterialBottomTabView, _extends({}, rest, {
    state: state,
    navigation: navigation,
    descriptors: descriptors
  })));
}

export default createNavigatorFactory(MaterialBottomTabNavigator);
//# sourceMappingURL=createMaterialBottomTabNavigator.js.map