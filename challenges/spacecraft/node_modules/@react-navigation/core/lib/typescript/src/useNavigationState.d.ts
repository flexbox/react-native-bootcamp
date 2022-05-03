import type { NavigationState, ParamListBase } from '@react-navigation/routers';
declare type Selector<ParamList extends ParamListBase, T> = (state: NavigationState<ParamList>) => T;
/**
 * Hook to get a value from the current navigation state using a selector.
 *
 * @param selector Selector function to get a value from the state.
 */
export default function useNavigationState<ParamList extends ParamListBase, T>(selector: Selector<ParamList, T>): T;
export {};
