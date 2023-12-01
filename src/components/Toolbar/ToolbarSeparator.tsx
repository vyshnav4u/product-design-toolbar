import React from 'react';

interface IToolbarSeparator {
	width?: number;
	color?: React.CSSProperties['backgroundColor'];
}

const ToolbarSeparator = ({ color, width = 1 }: IToolbarSeparator) => {
	const style: React.CSSProperties = { background: color, width: width };
	return <div className="toolbarSeparator m-4 bg-borderColor" style={style} />;
};

export default ToolbarSeparator;
