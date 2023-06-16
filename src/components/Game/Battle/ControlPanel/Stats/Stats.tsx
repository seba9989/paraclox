import styled from '@emotion/styled'
import usePlayerStore from '../../../../../hooks/usePlayerStore'
import BorderStyle from '../../../../../styles/Border'
import { animate } from 'motion'
import { useEffect } from 'react'

const Main = styled.div`
	display: grid;
	grid-template-columns: 50% 50%;
	grid-template-rows: 50% 50%;

	${BorderStyle('left')}
`
const Bar = styled.div`
	height: 50%;
	width: 80%;

	margin: auto;
	padding: 5px;

	${BorderStyle('full')}
	display: grid;
	grid-column: 1;

	div {
		height: 100%;
		width: 100%;

		grid-column: 1;
		grid-row: 1;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.playerHp {
		width: 0;
		background: #771820;
	}

	.playerEnergy {
		width: 0;
		background: #b47304;
	}
`

const Description = styled.div`
	grid-column: 2;
	grid-row: 1 / 3;

	padding: 0.5rem 1.5rem;

	overflow: auto;

	${BorderStyle('left')}
`

export const Stats = () => {
	const playerHp = usePlayerStore(store => store.player.hp)
	const playerEnergy = usePlayerStore(store => store.player.energy)

	const percentHp = (playerHp.current / playerHp.max) * 100
	const percentEnergy = (playerEnergy.current / playerEnergy.max) * 100

	useEffect(() => {
		const HpText = document.querySelector('.playerHpValue')

		const oldHp = HpText ? Number(HpText.innerHTML.split('/')[0]) : 0

		animate(
			progress => {
				if (HpText) {
					HpText.innerHTML = `${oldHp + Math.round(progress * (playerHp.current - oldHp))}/${playerHp.max}`
				}
			},
			{
				duration: 2,
				easing: 'ease-out',
			}
		)
		animate('.playerHp', { width: `${percentHp}%` }, { duration: 2 })
	}, [percentHp, playerHp])

	useEffect(() => {
		const EnergyText = document.querySelector('.playerEnergyValue')
		const oldEnergy = EnergyText ? Number(EnergyText.innerHTML.split('/')[0]) : 0

		animate(
			progress => {
				if (EnergyText) {
					EnergyText.innerHTML = `${oldEnergy + Math.round(progress * (playerEnergy.current - oldEnergy))}/${
						playerEnergy.max
					}`
				}
			},
			{
				duration: 2,
				easing: 'ease-out',
			}
		)
		animate('.playerEnergy', { width: `${percentEnergy}%` }, { duration: 2 })
	}, [percentEnergy, playerEnergy])

	return (
		<Main>
			<Bar>
				<div className='playerHp' />
				<div className='playerHpValue'>0/0</div>
			</Bar>

			<Bar>
				<div className='playerEnergy' />
				<div className='playerEnergyValue'>0/0</div>
			</Bar>

			<Description>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima ipsam vel soluta quod at libero eaque atque
				incidunt, non sunt hic! Dicta, assumenda excepturi. Tenetur, repellendus. Illo eos quibusdam qui.
			</Description>
		</Main>
	)
}
