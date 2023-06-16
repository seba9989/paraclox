import styled from '@emotion/styled'
import { ControlPanel } from './ControlPanel/ControlPanel'
import {useEnemysStore} from '../../../hooks/useEnemysStore'
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
	const setEnemys = useEnemysStore(store => store.setEnemy)

	setEnemys(['Zombi', 'Zombi', 'Zombi'])

	return (
		<Main>
			<GameBoard />

			<ControlPanelWrapper>
				<ControlPanel />
			</ControlPanelWrapper>
		</Main>
	)
}
