import React from 'react';
import './services/i18next';
import { MainLayout } from './layouts/main';
import { ThemeProvider, LanguageProvider } from "@/providers";



const App = () => {
  return (
		<LanguageProvider>
			<ThemeProvider>
				<MainLayout>
					Привет Мир!
				</MainLayout>
			</ThemeProvider>
		</LanguageProvider>
  );
}

export { App }
