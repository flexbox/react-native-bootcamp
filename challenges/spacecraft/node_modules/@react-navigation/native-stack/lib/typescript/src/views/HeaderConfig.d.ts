/// <reference types="react" />
import { Route } from '@react-navigation/native';
import type { NativeStackNavigationOptions } from '../types';
declare type Props = NativeStackNavigationOptions & {
    headerHeight: number;
    route: Route<string>;
    canGoBack: boolean;
};
export default function HeaderConfig({ headerHeight, headerBackImageSource, headerBackButtonMenuEnabled, headerBackTitle, headerBackTitleStyle, headerBackTitleVisible, headerBackVisible, headerShadowVisible, headerLargeStyle, headerLargeTitle, headerLargeTitleShadowVisible, headerLargeTitleStyle, headerBackground, headerLeft, headerRight, headerShown, headerStyle, headerBlurEffect, headerTintColor, headerTitle, headerTitleAlign, headerTitleStyle, headerTransparent, headerSearchBarOptions, route, title, canGoBack, }: Props): JSX.Element;
export {};
