import { create } from 'zustand'
import { Enemy, EnemiesStore } from '../types/interface'
import { request, gql } from 'graphql-request'

const url = 'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/cli6deigp38in01uoapzzbpzu/master'

const getEnemy = gql`
	query getEnemy($name: String!) {
		enemy(where: { name: $name }) {
			name
			hp {
				current
				max
			}
			attacks {
				name
				dmg
				effect
				type
			}
		}
	}
`

export const useEnemiesStore = create<EnemiesStore>()((set, get) => ({
	enemies: [] as Enemy[],
	dispatch: (enemy, action, value) => {
		switch (action) {
			case 'Hp':
				get().enemies[enemy].hp.current -= value
				break
		}
		set({ ...get() })
		console.log(get())
	},
	setEnemies: async enemiesNames => {
		const enemyList = [] as Enemy[]

		for (let i = 0; i < enemiesNames.length; i++) {
			const name = enemiesNames[i]

			const enemy = (await request<{ enemy: Pick<Enemy, 'name' | 'hp' | 'attacks'> }>(url, getEnemy, { name })).enemy

			enemyList.push({ id: i, ...enemy })
		}

		set({ ...get(), enemies: enemyList })

		console.log(get().enemies)
	},
}))
