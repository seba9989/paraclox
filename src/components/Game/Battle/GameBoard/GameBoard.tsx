import styled from '@emotion/styled'
import { Player } from './Player/Player'
import { EnemiesContainer } from './EnemiesContainer/EnemiesContainer'
import { useEnemiesStore } from '../../../../hooks/useEnemiesStore'

const Main = styled.div`
	height: 100%;

	background-image: url('https://github.com/seba9989/paraclox/blob/main/src/assets/battle-screen/backgrounds/postapo.png?raw=true');
	background-position: center bottom;
	background-color: #212121;
	background-repeat: repeat no-repeat;
	background-size: 90%;

	display: grid;
	grid-template-columns: 50% 50%;
	grid-template-rows: 100%;

	align-items: end;
`

export const GameBoard = () => {
	const enemy = useEnemiesStore(store => store.enemies[0])

	return (
		<Main>
			<Player height='60%' />
			{enemy && <EnemiesContainer />}
		</Main>
	)
}
