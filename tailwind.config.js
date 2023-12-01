/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		minHeight: {
			12: '12px',
			11: '11px',
		},
		colors: {
			primaryBg: '#fff',
			secondaryBg: '#f5f6f5',
			borderColor: '#d9d7d6',
			toolbarIconColor: '#333333',
		},
		fontSize: {
			8: '8px',
			toolbarIconFull: '24px',
			toolbarIconSmall: '14px',
		},
		extend: {
			spacing: {
				2: '2px',
				3: '3px',
				4: '4px',
				8: '8px',
				11: '11px',
				12: '12px',
				16: '16px',
			},
			gap: {
				4: '4px',
			},
		},
	},
	plugins: [],
};
