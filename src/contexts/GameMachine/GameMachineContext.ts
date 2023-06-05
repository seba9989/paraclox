import { createContext } from 'react'

import { createMachine, ActorRefFrom } from 'xstate'

export const gameMachine = createMachine({
	id: 'GameState',
	initial: 'ChooseCharacter',
	states: {
		ChooseCharacter: {
			on: {
				GAME_START: {
					target: 'Battle',
				},
			},
		},
		Battle: {},
	},
	schema: { events: {} as { type: 'GAME_START' } },
	predictableActionArguments: true,
	preserveActionOrder: true,
})

interface GameMachineContextType {
	gameService: ActorRefFrom<typeof gameMachine>
}

export const GameMachineContext = createContext({} as GameMachineContextType)
