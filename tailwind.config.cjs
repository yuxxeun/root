module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
colors: {
      orange: '#ff5722',
    },
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
