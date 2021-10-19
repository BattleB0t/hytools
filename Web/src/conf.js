export const server = () => {
	if (process.env.NODE_ENV === 'production') {
		return 'https://hytools.ewsgit.repl.co'
	} else {
		return 'http://localhost:3001';
	}
}
	