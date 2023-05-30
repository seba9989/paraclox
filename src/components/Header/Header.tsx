import styled from '@emotion/styled'
import BorderStyle from '../../styles/Border'
import { Link, NavLink } from 'react-router-dom'

const Main = styled.div`
	height: 100px;
	display: flex;
	justify-content: space-between;

	${BorderStyle('bottom')}

	a {
		margin: 10px;
	}
`

const Nav = styled.nav`
	display: flex;
	gap: 10px;
	padding: 10px;

	a {
		margin: 0;
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
			<Link to='/test'>
				<img
					src='https://github.com/seba9989/paraclox/blob/main/src/assets/UI/logos/full.png?raw=true'
					alt='Paraclox'
				/>
			</Link>
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
