/// <reference types="react" />
import type { ParamListBase, StackNavigationState } from '@react-navigation/native';
import type { NativeStackDescriptorMap, NativeStackNavigationHelpers } from '../types';
declare type Props = {
    state: StackNavigationState<ParamListBase>;
    navigation: NativeStackNavigationHelpers;
    descriptors: NativeStackDescriptorMap;
};
export default function NativeStackView({ state, descriptors }: Props): JSX.Element;
export {};
