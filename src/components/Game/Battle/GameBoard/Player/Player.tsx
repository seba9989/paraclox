import styled from '@emotion/styled'
import usePlayerStore from '../../../../../hooks/usePlayerStore'

const Main = styled.div`
	height: 60%;

	display: flex;

	margin-bottom: ${Math.round(Math.random() * 75)}px;
`

const PlayerImg = styled.div`
	aspect-ratio: 64 / 64;
	background-size: cover;

	background-image: url(${(props: { name: string }) => `/src/assets/characters/${props.name}/idle.gif`});
`

export const Player = () => {
	const playerName = usePlayerStore(store => store.player.name)

	return (
		<Main>
			<PlayerImg name={playerName} />
		</Main>
	)
}
