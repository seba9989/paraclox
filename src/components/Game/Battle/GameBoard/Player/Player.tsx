import styled from '@emotion/styled'
import usePlayerStore from '../../../../../hooks/usePlayerStore'

const padding = Math.round(Math.random() * 75)

const Main = styled.div`
	height: ${(props: { height: string }) => props.height};

	display: flex;

	padding-bottom: ${padding}px;
`

export const Player = ({ height }: { height: string }) => {
	const playerName = usePlayerStore(store => store.player.name)

	return (
		<Main height={height}>
			<img
				src={`https://github.com/seba9989/paraclox/blob/main/src/assets/characters/${playerName.toLowerCase()}/idle.gif?raw=true`}
				alt=''
			/>
		</Main>
	)
}
