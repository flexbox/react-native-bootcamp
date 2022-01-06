import * as React from 'react';
export default function useLazyRef<T>(callback: () => T): React.MutableRefObject<T>;
