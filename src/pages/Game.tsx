import { useInterpret, useActor } from '@xstate/react'
import { gameMachine, GameMachineContext } from '../contexts/GameMachine/GameMachineContext'

import { Battle } from '../components/Game/Battle/Battle'
import { ChooseCharacter } from '../components/Game/ChooseCharacter/ChooseCharacter'
import usePlayerStore from '../hooks/usePlayerStore'

export const Game = () => {
	const gameService = useInterpret(gameMachine)
	const [state] = useActor(gameService)

	const player = usePlayerStore(state => state.player.energy)

	return (
		<GameMachineContext.Provider value={{ gameService }}>
			{state.value === 'ChooseCharacter' && <ChooseCharacter />}
			{player && <>{state.value === 'Battle' && <Battle />}</>}
		</GameMachineContext.Provider>
	)
}
