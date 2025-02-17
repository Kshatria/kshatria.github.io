import React, { useCallback } from 'react'

import type { LanguageSwitcherItem } from './LanguageSwitcher.types'
import { Switcher } from '../Switcher'
import { useLanguage } from '@/providers'

const LanguageSwitcher = () => {
	const { language, setLanguage } = useLanguage()

	const languages: LanguageSwitcherItem[] = [
		{
			name: 'ru',
			text: 'Ру',
		},
		{
			name: 'en',
			text: 'En',
		},
	]

	const handler = useCallback(() => {
		setLanguage(language === 'ru' ? 'en' : 'ru')
	}, [language, setLanguage])

	return (
		<Switcher
			items={languages}
			defaultValue={language}
			name="languages"
			onChange={handler}
		/>
	)
}

export { LanguageSwitcher }
