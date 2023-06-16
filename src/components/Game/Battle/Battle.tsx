import styled from '@emotion/styled'
import { ControlPanel } from './ControlPanel/ControlPanel'
import { useEnemiesStore } from '../../../hooks/useEnemiesStore'
import { GameBoard } from './GameBoard/GameBoard'

const Main = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

const ControlPanelWrapper = styled.div`
	height: 200px;
`

export const Battle = () => {
	const setEnemies = useEnemiesStore(store => store.setEnemies)

	setEnemies(['Zombi', 'Zombi', 'Zombi'])

	return (
		<Main>
			<GameBoard />

			<ControlPanelWrapper>
				<ControlPanel />
			</ControlPanelWrapper>
		</Main>
	)
}
