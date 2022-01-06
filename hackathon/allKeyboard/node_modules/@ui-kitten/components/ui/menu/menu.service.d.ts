import React from 'react';
import { IndexPath } from '../../devsupport';
export interface MenuItemDescriptor {
    index: IndexPath;
    groupIndices?: IndexPath[];
}
export declare class MenuService {
    createDescriptorForElement: (element: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>, index: number) => MenuItemDescriptor;
    createDescriptorForNestedElement: (groupDescriptor: MenuItemDescriptor, index: number) => MenuItemDescriptor;
}
