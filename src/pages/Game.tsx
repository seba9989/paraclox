import { useInterpret, useActor } from '@xstate/react'
import { gameMachine, GameMachineContext } from '../contexts/GameMachine/GameMachineContext'

import Battle from '../components/Game/Battle/Battle'
import ChooseCharacter from '../components/Game/ChooseCharacter/ChooseCharacter'

export default function Game() {
	const gameService = useInterpret(gameMachine)
	const [state] = useActor(gameService)

	return (
		<GameMachineContext.Provider value={{ gameService }}>
			{state.value === 'ChooseCharacter' ? <ChooseCharacter /> : ''}
			{state.value === 'Battle' ? <Battle /> : ''}
		</GameMachineContext.Provider>
	)
}
