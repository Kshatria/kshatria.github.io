import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import { ThemeProvider, LanguageProvider } from '@/providers'

import 'app.css'

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement)
root.render(
	<React.StrictMode>
		<LanguageProvider>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</LanguageProvider>
	</React.StrictMode>
)
