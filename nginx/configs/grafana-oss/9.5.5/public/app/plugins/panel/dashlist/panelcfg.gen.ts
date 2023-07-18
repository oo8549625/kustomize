// Code generated - EDITING IS FUTILE. DO NOT EDIT.
//
// Generated by:
//     public/app/plugins/gen.go
// Using jennies:
//     TSTypesJenny
//     PluginTSTypesJenny
//
// Run 'make gen-cue' from repository root to regenerate.

export const PanelCfgModelVersion = Object.freeze([0, 0]);

export enum PanelLayout {
  List = 'list',
  Previews = 'previews',
}

export interface PanelOptions {
  folderId?: number;
  layout?: PanelLayout;
  maxItems: number;
  query: string;
  showHeadings: boolean;
  showRecentlyViewed: boolean;
  showSearch: boolean;
  showStarred: boolean;
  tags: Array<string>;
}

export const defaultPanelOptions: Partial<PanelOptions> = {
  layout: PanelLayout.List,
  maxItems: 10,
  query: '',
  showHeadings: true,
  showRecentlyViewed: false,
  showSearch: false,
  showStarred: true,
  tags: [],
};
