import { DocumentNode, FragmentDefinitionNode, InlineFragmentNode, SelectionNode } from 'graphql';
export declare function getFragmentQueryDocument(document: DocumentNode, fragmentName?: string): DocumentNode;
export interface FragmentMap {
    [fragmentName: string]: FragmentDefinitionNode;
}
export declare function createFragmentMap(fragments?: FragmentDefinitionNode[]): FragmentMap;
export declare function getFragmentFromSelection(selection: SelectionNode, fragmentMap?: FragmentMap): InlineFragmentNode | FragmentDefinitionNode | null;
//# sourceMappingURL=fragments.d.ts.map