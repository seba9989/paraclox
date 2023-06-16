import styled from '@emotion/styled'
import { Enemy } from './Enemy/Enemy'
import { useEnemysStore } from '../../../../../hooks/useEnemysStore'
import { shallow } from 'zustand/shallow'

const Main = styled.div`
	height: 100%;
	display: flex;

	align-items: end;
	justify-content: end;
`

export const EnemysContainer = () => {
	const enemys = useEnemysStore(
		store => ({
			list: store.enemys,
		}),
		shallow
	)

	return (
		<Main>
			{enemys.list.map((_enemy, index) => (
				<Enemy index={index} key={index} />
			))}
		</Main>
	)
}
