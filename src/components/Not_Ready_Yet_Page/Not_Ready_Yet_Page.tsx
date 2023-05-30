import styled from '@emotion/styled'

const Main = styled.div`
	font-family: sans-serif;
	margin: auto;

	a {
		color: #888;
		transition: 500ms;

		&:hover {
			color: #fff;
		}
	}
`

export default function NotReady() {
	const pathname = window.location.pathname

	console.log(pathname)

	return (
		<Main>
			<h1>I'm sorry {pathname === '/' ? 'home' : pathname} page is not ready yet.</h1>
			<p>
				If you want to help let me know on <a href=''>discord</a>.
			</p>
		</Main>
	)
}
