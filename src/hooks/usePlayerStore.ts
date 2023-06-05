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
			case 'hp':
				get().player.hp.current = value
				break
		}
		set({ ...get() })
		console.log(get())
	},
	setPlayer(name) {
		request<{ player: Player }>(url, getPlayer, { name }).then(player => {
			const data: Player = player.player
			get().player = data
			set({ ...get() })
			console.log(get())
		})
	},
}))

export default usePlayerStore
