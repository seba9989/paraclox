import styled from '@emotion/styled'
import { Enemy } from './Enemy/Enemy'
import { useEnemiesStore } from '../../../../../hooks/useEnemiesStore'
import { shallow } from 'zustand/shallow'

const Main = styled.div`
	height: 100%;
	display: flex;

	align-items: end;
	justify-content: center;
`

export const EnemiesContainer = () => {
	const enemies = useEnemiesStore(
		store => ({
			list: store.enemies,
		}),
		shallow
	)

	return (
		<Main>
			{enemies.list.map((_enemy, index) => (
				<Enemy index={index} key={index} />
			))}
		</Main>
	)
}
