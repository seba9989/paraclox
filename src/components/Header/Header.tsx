import style from './Header.module.scss'
import { NavLink } from 'react-router-dom'

export default function Header() {
	return (
		<div className={style.main}>
			<NavLink to='/' className={style.logo}>
                <img src="" alt="Paraclox" />
            </NavLink>
		</div>
	)
}
