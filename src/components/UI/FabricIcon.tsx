import React from 'react';

interface IFabricIcon {
	iconName: string;
}
const FabricIcon = ({ iconName }: IFabricIcon) => {
	const iconClass = `ms-Icon ms-Icon--${iconName}`;
	return <i className={iconClass} aria-hidden="true" />;
};

export default FabricIcon;
