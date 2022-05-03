import type { NavigationContainerRefWithCurrent } from './types';
export default function useNavigationContainerRef<ParamList extends {} = ReactNavigation.RootParamList>(): NavigationContainerRefWithCurrent<ParamList>;
