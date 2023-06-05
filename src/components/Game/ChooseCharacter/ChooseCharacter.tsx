import styled from '@emotion/styled'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useQuery, gql } from '@apollo/client'

import BorderStyle from '../../../styles/Border'

import usePlayerStore from '../../../hooks/usePlayerStore'
import { GameMachineContext } from '../../../contexts/GameMachine/GameMachineContext'
import { useContext } from 'react'

//Style
const Background = styled.div`
	width: 100%;
	height: 100%;

	background-image: url('https://github.com/seba9989/paraclox/blob/main/src/assets/battle-screen/backgrounds/postapo-green-day.png?raw=true');
	background-position: center 100%;
	background-color: #212121;
	background-repeat: repeat no-repeat;
	background-size: 90%;
`

const Form = styled.form`
	height: 100%;
	display: flex;

	backdrop-filter: blur(5px);
	background: #0009;
`

const CharacterList = styled.ul`
	height: 100%;
	width: 125px;

	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	list-style: none;
	padding: 0;
	margin: 0;

	${BorderStyle('right')}
	background: #212121;
`
const RadioCharacter = styled.li`
	width: 85%;
	height: 120px;

	input {
		display: none;
	}
	img {
		width: 100%;
	}
`

const Character = styled.div`
	height: 75%;
	margin: auto -5%;
`

const CharacterDescription = styled.div`
	max-width: 30%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 0 auto;

	div {
		margin-top: 50px;
	}
`

const Button = styled.button`
	margin: 50px auto;
	padding: 10px 20px;

	background: #212121;
	color: #888;
	transition: 250ms;

	font-family: 'Press Start 2P', sans-serif;

	${BorderStyle('full')}

	&:hover {
		color: #fff;
	}
`

export default function ChooseCharacter() {
	//GameMachine
	const { gameService } = useContext(GameMachineContext)

	//SetPlayer
	const setPlayer = usePlayerStore(store => store.setPlayer)

	//GraphQL
	const PlayerList = gql`
		query {
			players {
				name
			}
		}
	`
	const { loading, data } = useQuery(PlayerList)

	//FormsHandler
	type inputs = { selectCharacter: string }

	const { register, handleSubmit, watch } = useForm<inputs>({
		defaultValues: {
			selectCharacter: 'mage',
		},
	})

	const formWatch = watch('selectCharacter')

	const onSubmit: SubmitHandler<inputs> = data => {
		console.log(data)
		setPlayer(formWatch)
		gameService.send('GAME_START')
	}

	//Render
	return (
		<Background>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<CharacterList>
					{!loading &&
						data.players.map(({ name }: { name: string }) => (
							<RadioCharacter key={name}>
								<input {...register('selectCharacter')} type='radio' id={`${name}`} value={name} />
								<label htmlFor={`${name}`}>
									<img
										src={`https://github.com/seba9989/paraclox/blob/main/src/assets/UI/character-icons/${
											formWatch === name ? 'active' : 'not-active'
										}/${name}.png?raw=true`}
										alt={name}
									/>
								</label>
							</RadioCharacter>
						))}
				</CharacterList>
				<Character>
					<img
						src={`https://github.com/seba9989/paraclox/blob/main/src/assets/characters/${formWatch}/idle.gif?raw=true`}
						alt=''
					/>
				</Character>
				<CharacterDescription>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nostrum perspiciatis possimus cum velit
						quisquam eius, soluta, ipsa eligendi ipsam, accusantium deleniti ad in. Mollitia quidem expedita aliquam
						eaque sed?
					</div>
					<Button type='submit'>Submit</Button>
				</CharacterDescription>
			</Form>
		</Background>
	)
}
