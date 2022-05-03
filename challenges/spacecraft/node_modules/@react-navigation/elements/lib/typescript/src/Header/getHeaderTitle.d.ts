import type { HeaderOptions } from '../types';
export default function getHeaderTitle(options: {
    title?: string;
    headerTitle?: HeaderOptions['headerTitle'];
}, fallback: string): string;
