import * as React from 'react';
declare global {
    var __react_navigation__elements_contexts: Map<string, React.Context<any>>;
}
export default function getNamedContext<T>(name: string, initialValue: T): React.Context<T>;
