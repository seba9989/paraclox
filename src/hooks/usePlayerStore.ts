import { create } from 'zustand'
import { Player, PlayerStore } from '../types/interface'
import { request, gql } from 'graphql-request'

const url = 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cli6deigp38in01uoapzzbpzu/master'

const getPlayer = gql`
	query getPlayer($name: String!) {
		player(where: { name: $name }) {
			name
			hp {
				current
				max
			}
			energy {
				current
				max
			}
			weapons {
				name
				attacks {
					name
					dmg
					energy
					effect
					type
				}
			}
		}
	}
`

const usePlayerStore = create<PlayerStore>()((set, get) => ({
	player: {} as Player,
	dispatch: (action, value) => {
		switch (action) {
			case 'Hp':
				get().player.hp.current = value
				break
		}
		set({ ...get() })
		console.log(get())
	},
	setPlayer: async name => {
		const player = (await request<{ player: Player }>(url, getPlayer, { name })).player

		set({ ...get(), player })

		console.log(get().player)
	},
}))

export default usePlayerStore
