import React from 'react';
import classNames from 'classnames';

type TDropdownIcon = {
	isInlineTitle?: boolean;
};
const DropdownIcon = ({ isInlineTitle }: TDropdownIcon) => {
	const iconName = classNames(
		'dropdownIcon ms-Icon ms-Icon--CaretSolidDown text-8 text-center pt-3',
		{ 'pl-3': isInlineTitle }
	);
	return <i className={iconName} aria-hidden="true" />;
};

export default DropdownIcon;
