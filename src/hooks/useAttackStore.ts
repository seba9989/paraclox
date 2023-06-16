import { create } from 'zustand'

type currentWeaponName = null | string
type currentAttackName = null | string
type currentAttackTarget = null | number

interface AttackStore {
	currentWeaponName: currentWeaponName
	setCurrentWeaponName: (value: currentWeaponName) => void
	currentAttackName: currentAttackName
	setCurrentAttackName: (value: currentAttackName) => void
	currentTarget: currentAttackTarget
	setCurrentTarget: (value: currentAttackTarget) => void
	reset: () => void
}

export const useAttackStore = create<AttackStore>()((set, get) => ({
	currentWeaponName: null,
	setCurrentWeaponName: value => {
		set({ ...get(), currentWeaponName: value })
		console.log(get())
	},
	currentAttackName: null,
	setCurrentAttackName: value => {
		{
			get().currentWeaponName && set({ ...get(), currentAttackName: value })
			console.log(get())
		}
	},
	currentTarget: null,
	setCurrentTarget: value => {
		{
			get().currentAttackName && set({ ...get(), currentTarget: value })
			console.log(get())
		}
	},

	reset: () => {
		set({
			...get(),
			currentWeaponName: null,
			currentAttackName: null,
			currentTarget: null,
		})
		console.log(get())
	},
}))
