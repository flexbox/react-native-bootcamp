import type { LayoutChangeEvent } from 'react-native';
export default function useLayout(): readonly [{
    height: number;
    width: number;
    measured: boolean;
}, (e: LayoutChangeEvent) => void];
