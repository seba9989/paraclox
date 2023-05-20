import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import style from './App.module.scss'

function App() {
	return (
		<div className={style.main}>
			<Header />
			<Outlet />
		</div>
	)
}

export default App
