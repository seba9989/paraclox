import { shallow } from 'zustand/shallow'
import usePlayerStore from '../../hooks/usePlayerStore.ts'

export default function Test() {
	const hp = usePlayerStore(state => ({ hp: state.player.hp.current }), shallow)
	const setHP = usePlayerStore(store => store.dispatch)

	return (
		<>
			<button onClick={() => setHP('Hp', 1)}>HP: {`${hp.hp}`}</button>
		</>
	)
}
