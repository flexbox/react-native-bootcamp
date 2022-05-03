import type { NavigationContainerRef, ParamListBase } from '@react-navigation/core';
import * as React from 'react';
import type { DocumentTitleOptions } from './types';
/**
 * Set the document title for the active screen
 */
export default function useDocumentTitle(ref: React.RefObject<NavigationContainerRef<ParamListBase>>, { enabled, formatter, }?: DocumentTitleOptions): void;
