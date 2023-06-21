import styled from '@emotion/styled'
import BorderStyle from '../../styles/Border'
import { Link, NavLink } from 'react-router-dom'

const Main = styled.div`
	height: 100px;
	display: flex;
	justify-content: space-between;

	${BorderStyle('bottom')}

	.logo {
		aspect-ratio: 620 / 160;

		margin: 10px;
		background-image: url('/src/assets/UI/logos/full.png');
		background-size: cover;
	}
`

const Nav = styled.nav`
	display: flex;
	gap: 10px;
	padding: 10px;

	a {
		padding: 10px;
		margin: auto;
		color: #888;
		transition: 500ms;

		&:hover,
		&.active {
			color: #fff;
		}
	}
`

export default function Header() {
	return (
		<Main>
			<Link to='/' className='logo' />
			<Nav>
				<NavLink to='/game' className={({ isActive }) => (isActive ? 'active' : '')}>
					Game
				</NavLink>
				<Link to='https://github.com/seba9989/paraclox'>GitHub</Link>
				<NavLink to='/help'>Help</NavLink>
				<NavLink to='/logIn'>LogIn</NavLink>
			</Nav>
		</Main>
	)
}
