import styled from '@emotion/styled'
import BorderStyle from '../../../../styles/Border'
import { Buttons } from './Buttons/Buttons'
import { Stats } from './Stats/Stats'
import { Options } from './Options/Options'

const Main = styled.div`
	height: 200px;

	display: grid;
	grid-template-columns: 30% 60% 10%;
	grid-template-rows: 100%;

	background: #121212;

	${BorderStyle('top')}
`

export const ControlPanel = () => (
	<Main>
		<Buttons />
		<Stats />
		<Options />
	</Main>
)
