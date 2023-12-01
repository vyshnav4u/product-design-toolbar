import React from 'react';
import classNames from 'classnames';
import { EToolbarView, IToolbarCommon } from '../../utils/toolbar.types';

interface IToolbarSection extends IToolbarCommon {
	children: React.ReactNode;
	sectionTitle?: string;
	direction: 'row' | 'col';
}

const SECTION_TITLE_HEIGHT = 24;
const PADDING = 4;

const ToolbarSection = (props: IToolbarSection) => {
	const { view, children, sectionTitle, direction } = props;
	const isFullView = view === EToolbarView.FULL_VIEW;
	const height = isFullView ? 80 : 40;
	// const containerStyle: React.CSSProperties = { height };
	const childWrapperHeight = isFullView
		? height - (SECTION_TITLE_HEIGHT + PADDING)
		: height;

	const flexDirection = `flex-${direction}`;
	const toolbarChildWrapClass = classNames(
		'ToolbarItemsWrap flex gap-4 flex-wrap',
		flexDirection
	);
	return (
		<div className="ToolbarSection leading-none w-fit">
			<div style={{ maxHeight: 74 }} className={toolbarChildWrapClass}>
				{children}
			</div>
			{isFullView && sectionTitle && (
				<div className="sectionTitleWrap flex justify-center text">
					<span className="sectionTitle text-center leading-none">
						{sectionTitle}
					</span>
				</div>
			)}
		</div>
	);
};

export default ToolbarSection;
