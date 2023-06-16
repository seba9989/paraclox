import styled from '@emotion/styled'
import usePlayerStore from '../../../../../hooks/usePlayerStore'
import BorderStyle from '../../../../../styles/Border'
import { createMachine } from 'xstate'
import { useMachine } from '@xstate/react'
import { useAttackStore } from '../../../../../hooks/useAttackStore'
import { useAttack } from '../../../../../hooks/useAttack'
import { useEffect } from 'react'

const ButtonsGrid = styled.div`
	min-width: max-content;

	background: #000;
	display: grid;
	grid-template-columns: 50% 50%;
	grid-template-rows: 50% 50%;
`

const Button = styled.button`
	height: fit-content;
	min-width: fit-content;
	width: 80%;

	margin: auto;
	padding: 10px;
	text-align: center;

	background: none;

	${BorderStyle('full')}

	grid-row: ${(props: { default?: boolean }) => (props.default ? '2' : '1')};
`

const buttonsMachine = createMachine({
	id: 'Button Machine',
	initial: 'selectAction',
	states: {
		selectAction: {
			on: {
				OPEN_ATTACK_LIST: {
					target: 'selectAttack',
				},
				OPEN_INVENTORY: {
					target: 'selectItem',
				},
			},
		},
		selectAttack: {
			on: {
				ATTACK_BACK: {
					target: 'selectAction',
				},
			},
		},
		selectItem: {
			on: {
				ITEM_BACK: {
					target: 'selectAction',
				},
			},
		},
	},
	schema: {
		events: {} as
			| { type: 'OPEN_ATTACK_LIST' }
			| { type: 'ATTACK_BACK' }
			| { type: 'OPEN_INVENTORY' }
			| { type: 'ITEM_BACK' },
	},
	predictableActionArguments: true,
	preserveActionOrder: true,
})

export const Buttons = () => {
	const [state, send] = useMachine(buttonsMachine)

	let weaponIndex = 0

	const weapons = usePlayerStore(state => state.player.weapons)

	const AttackStore = useAttackStore(store => store)

	useAttack()

	useEffect(() => {
		if (!AttackStore.currentWeaponName && !AttackStore.currentAttackName && !AttackStore.currentTarget) {
			send('ATTACK_BACK')
		}
	}, [AttackStore, send])

	return (
		<ButtonsGrid>
			{/* choice of weapons */}
			{state.value === 'selectAction' &&
				weapons.map(({ name }, index) => (
					<Button
						key={name}
						onClick={() => {
							weaponIndex = index
							AttackStore.setCurrentWeaponName(name)
							send('OPEN_ATTACK_LIST')
						}}>
						{name}
					</Button>
				))}

			{/* choose the character */}
			{state.value === 'selectAttack' &&
				weapons[weaponIndex].attacks.map(({ name }) => (
					<Button
						key={name}
						onClick={() => {
							AttackStore.setCurrentAttackName(name)
						}}>
						{name}
					</Button>
				))}

			<Button default>Inventory</Button>

			{state.value === 'selectAction' ? (
				<Button default>Pass</Button>
			) : (
				<Button
					default
					onClick={() => {
						AttackStore.reset()
						send('ATTACK_BACK')
					}}>
					Back
				</Button>
			)}
		</ButtonsGrid>
	)
}
