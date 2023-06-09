import styled from '@emotion/styled'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'

const Flex = styled.main`
	display: flex;
	flex-direction: column;
`

export default function Layout() {
	return (
		<Flex>
			<Header />
			<Outlet />
		</Flex>
	)
}
