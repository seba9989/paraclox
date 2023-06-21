import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Global, css } from '@emotion/react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { Layout } from './layout'
import { NotReady } from './components/Not_Ready_Yet_Page/Not_Ready_Yet_Page'
import { Game } from './pages/Game'

const client = new ApolloClient({
	uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cli6deigp38in01uoapzzbpzu/master',
	cache: new InMemoryCache(),
})

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
				element: <Game />,
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
					image-rendering: pixelated;
				}

				body {
					background-color: #212121;
					margin: 0;
					/* overflow-x: hidden; */
					font-family: 'Press Start 2P', sans-serif;
				}

				button {
					font-family: 'Press Start 2P', sans-serif;
				}

				img {
					height: 100%;
				}
			`}
		/>
		<ApolloProvider client={client}>
			<RouterProvider router={router} />
		</ApolloProvider>
	</React.StrictMode>
)
