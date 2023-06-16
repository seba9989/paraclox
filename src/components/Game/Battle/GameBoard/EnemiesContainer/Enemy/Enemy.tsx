import styled from '@emotion/styled'
import BorderStyle from '../../../../../../styles/Border'
import { useEnemiesStore } from '../../../../../../hooks/useEnemiesStore'
import { useEffect } from 'react'
import { animate, timeline } from 'motion'
import { shallow } from 'zustand/shallow'
import { useAttackStore } from '../../../../../../hooks/useAttackStore'

const Main = styled.div`
	height: 60%;

	display: grid;

	justify-content: center;

	overflow: hidden;
`

const EnemyImg = styled.img`
	scale: -1 1;
	grid-row: 1;
	grid-column: 1;
`

const Hp = styled.div`
	height: fit-content;
	width: 50%;

	margin: 0 auto;

	grid-row: 1;
	grid-column: 1;

	${BorderStyle('full')}
	padding: 5px;

	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: 100%;

	background: #121212dd;
	background-clip: padding-box;

	div {
		height: 100%;
		grid-column: 1;
		grid-row: 1;

		text-align: center;
	}

	.enemyHp {
		width: 0;
		background: #771820;
	}
`

const padding = { paddingBottom: `${Math.round(Math.random() * 75)}px` }

export const Enemy = ({ index }: { index: number }) => {
	const enemyHp = useEnemiesStore(
		store => ({
			current: store.enemies[index].hp.current,
			max: store.enemies[index].hp.max,
		}),
		shallow
	)

	useEffect(() => {
		const percentHp = (enemyHp.current / enemyHp.max) * 100

		const HpText = document.querySelector(`.enemyHpValue${index}`)

		const oldHp = HpText ? Number(HpText.innerHTML.split('/')[0]) : 0

		animate(
			progress => {
				if (HpText) {
					HpText.innerHTML = `${oldHp + Math.round(progress * (enemyHp.current - oldHp))}/${enemyHp.max}`
				}
			},
			{
				duration: 2,
				easing: 'ease-out',
			}
		)

		if (enemyHp.current > 0) {
			animate(`.enemyHp${index}`, { width: `${percentHp}%` }, { duration: 2 })
		} else {
			timeline([
				[`.enemyHp${index}`, { width: `${percentHp}%` }, { duration: 2 }],
				[`.Enemy${index}`, { opacity: [1, 0] }, { duration: 0.5 }],
				[`.Enemy${index}`, { display: 'none' }],
			])
		}
	}, [enemyHp, index])

	const setAttackTarget = useAttackStore(store => store.setCurrentTarget)

	return (
		<Main onClick={() => setAttackTarget(index)} className={`Enemy${index}`} style={padding}>
			<Hp>
				<div className={`enemyHp${index} enemyHp`} />
				<div className={`enemyHpValue${index}`}>0/0</div>
			</Hp>
			<EnemyImg
				src='https://github.com/seba9989/paraclox/blob/main/src/assets/enemys/BetaEnemy/idle.gif?raw=true'
				alt=''
			/>
		</Main>
	)
}
