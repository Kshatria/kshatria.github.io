import React, { useState, createContext, useContext, FC } from 'react'
import type { ThemesVariants } from '@/shared/UIKit'
import type {
	ThemeProviderProps,
	ThemeContextType,
} from './ThemeProvider.types'

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState<ThemesVariants>('light-theme')
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

const useTheme = () => {
	const context = useContext(ThemeContext)
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider')
	}
	return context
}

export { ThemeProvider, useTheme }
