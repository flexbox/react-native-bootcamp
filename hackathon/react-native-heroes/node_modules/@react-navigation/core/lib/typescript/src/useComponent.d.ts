import * as React from 'react';
export default function useComponent<T extends React.ComponentType<any>, P extends {}>(Component: T, props: P): (rest: Omit<React.ComponentProps<T>, keyof P>) => JSX.Element;
