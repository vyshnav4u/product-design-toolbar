import React from 'react';
import ToolbarIcon from './ToolbarIcon';
import DropdownIcon from '../UI/DropdownIcon';

type TToolbarItem = {
	direction: 'row' | 'col';
	iconName: string;
	title: string;
	subtitle?: string;
	hideTitle?: boolean;
	showExpandIcon?: boolean;
};

const ToolbarItem = ({
	direction,
	iconName,
	title,
	hideTitle,
	showExpandIcon,
	subtitle,
}: TToolbarItem) => {
	const isRow = direction === 'row';
	const flexDirection = isRow ? 'flex-row' : 'flex-col';
	const containerClassName = `toolbarItem flex ${flexDirection} gap-4 p-4`;
	const containerStyle: React.CSSProperties = {};
	return (
		<div className={containerClassName} style={containerStyle}>
			<ToolbarIcon iconName={iconName} direction={direction} />
			{!hideTitle && <span className="titleWrapper">{title}</span>}
			{!hideTitle && subtitle && (
				<span className="subtitleWrapper flex flex-row justify-center">
					<span> {subtitle}</span>
					{showExpandIcon && <DropdownIcon isInlineTitle />}
				</span>
			)}
			{!hideTitle && showExpandIcon && !subtitle && (
				<div className="expandIconWrap flex justify-center">
					<DropdownIcon />
				</div>
			)}
		</div>
	);
};

export default ToolbarItem;
