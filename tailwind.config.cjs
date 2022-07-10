module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			basement: 'BasementGrotesque-Black, cursive',
			space: 'SpaceMono-Regular, cursive'
		},
		extend: {
			animation: {
				'spin-slow': 'spin 5s linear infinite'
			}
		}
	},
	plugins: []
};
