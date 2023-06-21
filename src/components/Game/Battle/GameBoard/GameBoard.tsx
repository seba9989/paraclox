import styled from '@emotion/styled'
import { Player } from './Player/Player'
import { EnemiesContainer } from './EnemiesContainer/EnemiesContainer'
import { useEnemiesStore } from '../../../../hooks/useEnemiesStore'

const Background = styled.div`
	height: 100%;

	background-image: url(${(props: { bg: string }) => `/src/assets/battle-screen/backgrounds/${props.bg}.png`});
	background-position: center bottom;
	background-color: #212121;
	background-repeat: repeat no-repeat;
	background-size: 90%;
`

const Main = styled.div`
	height: 100%;

	backdrop-filter: blur(2.5px);
	background: #0052;

	display: grid;
	grid-template-columns: 50% 50%;
	grid-template-rows: 100%;

	align-items: end;
`

export const GameBoard = () => {
	const enemy = useEnemiesStore(store => store.enemies[0])

	return (
		<Background bg='postapo-green-day'>
			<Main>
				<Player />
				{enemy && <EnemiesContainer />}
			</Main>
		</Background>
	)
}
