import React from 'react'

import type { ThemeSwitcherItem } from './ThemeSwitcher.types'
import { useTheme } from '@/providers'
import { Switcher } from '../Switcher'
import { useTranslation } from 'react-i18next'

const ThemeSwitcher = () => {
	const { t } = useTranslation()
	const { theme, setTheme } = useTheme()

	const themes: ThemeSwitcherItem[] = [
		{
			name: 'light-theme',
			icon: 'sun',
			text: t('themeLight'),
		},
		{
			name: 'dark-theme',
			icon: 'moon',
			text: t('themeDark'),
		},
	]

	return (
		<Switcher
			items={themes}
			defaultValue={theme}
			name="theme"
			onChange={() =>
				setTheme(theme === 'light-theme' ? 'dark-theme' : 'light-theme')
			}
		/>
	)
}

export { ThemeSwitcher }
