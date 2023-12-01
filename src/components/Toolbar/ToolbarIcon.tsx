import React from 'react';

type TToolbarIcon = {
	iconName: string;
	direction: 'row' | 'col';
};

const ToolbarIcon = ({ iconName, direction }: TToolbarIcon) => {
	const isRow = direction === 'row';
	const iconSize = isRow ? 'text-toolbarIconSmall' : 'text-toolbarIconFull';
	const iconClass = `ms-Icon ms-Icon--${iconName} ${iconSize} text-toolbarIconColor text-center`;
	return <i className={iconClass} aria-hidden="true" />;
};

export default ToolbarIcon;
