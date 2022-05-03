import type { NavigationProp } from './types';
/**
 * Hook to access the navigation prop of the parent screen anywhere.
 *
 * @returns Navigation prop of the parent screen.
 */
export default function useNavigation<T = NavigationProp<ReactNavigation.RootParamList>>(): T;
