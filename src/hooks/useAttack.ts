import { shallow } from 'zustand/shallow'
import { useEnemysStore } from './useEnemysStore'
import { useAttackStore } from './useAttackStore'
import usePlayerStore from './usePlayerStore'
import { useEffect } from 'react'

export const useAttack = () => {
	const enemys = useEnemysStore(
		store => ({
			dispatch: store.dispatch,
		}),
		shallow
	)

	const attackStore = useAttackStore(
		store => ({
			currentWeaponName: store.currentWeaponName,
			currentAttackName: store.currentAttackName,
			currentAttackTarget: store.currentTarget,
			reset: store.reset,
		}),
		shallow
	)

	const allWeapons = usePlayerStore(store => store.player.weapons)

	useEffect(() => {
		if (
			attackStore.currentWeaponName !== null &&
			attackStore.currentAttackName !== null &&
			attackStore.currentAttackTarget !== null
		) {
			const weapon = allWeapons.find(i => i.name === attackStore.currentWeaponName)

			const attack = weapon?.attacks.find(i => i.name === attackStore.currentAttackName)

			{
				attack && enemys.dispatch(attackStore.currentAttackTarget, 'Hp', attack.dmg)
			}

			attackStore.reset()
		}
	}, [allWeapons, attackStore, enemys])
}
