export enum EToolbarView {
	FULL_VIEW = 'fullView',
	MINIMAL = 'minimal',
	ICONS = 'icons',
}

export interface IToolbarCommon {
	view: EToolbarView;
}
