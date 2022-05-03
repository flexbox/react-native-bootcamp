import type { ParamListBase } from '@react-navigation/core';
import * as React from 'react';
import type { LinkingOptions } from './types';
declare const LinkingContext: React.Context<{
    options: LinkingOptions<ParamListBase> | undefined;
}>;
export default LinkingContext;
