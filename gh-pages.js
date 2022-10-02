import { publish } from 'gh-pages';

publish(
	'build',
	{
		branch: 'gh-pages',
		repo: 'https://github.com/ontheboxtf2/ontheboxtf2.github.io.git',
		user: {
		name: 'ontheboxtf2',
			email: 'nablamario@proton.me'
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!')
	}
)