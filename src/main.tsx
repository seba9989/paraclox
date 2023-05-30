import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Global, css } from '@emotion/react'
import Layout from './layout'
import NotReady from './components/Not_Ready_Yet_Page/Not_Ready_Yet_Page'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <NotReady />,
			},
			{
				path: '/game',
				element: <NotReady />,
			},
			{
				path: '/help',
				element: <NotReady />,
			},
			{
				path: '/logIn',
				element: <NotReady />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Global
			styles={css`
				@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;600;800;900&family=Press+Start+2P&display=swap');

				*,
				*::after,
				*::before {
					box-sizing: border-box;
					text-decoration: none;
					color: #fff;
				}

				body {
					background-color: #212121;
					margin: 0;
					font-family: 'Press Start 2P', sans-serif;
				}

				img {
					height: 100%;
				}
			`}
		/>

		<RouterProvider router={router} />
	</React.StrictMode>
)
