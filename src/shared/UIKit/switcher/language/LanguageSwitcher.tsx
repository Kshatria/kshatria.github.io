import React from 'react';

import type { LanguageSwitcherItem } from './LanguageSwitcher.types';
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
			text: 'En'
		},
	]

	return (
		<Switcher
			items={languages}
			defaultValue={language}
			name="languages"
			onChange={() => setLanguage(language => language === 'ru' ? 'en' : 'ru')} />
	)
};

export { LanguageSwitcher };
