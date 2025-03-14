// eslint-disable-next-line
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		fallbackLng: 'ru',
		interpolation: {
			escapeValue: false,
		},
		resources: {
			en: {
				translation: {
					themeLight: 'Light',
					themeDark: 'Dark',
				},
			},
			ru: {
				translation: {
					themeLight: 'Светло',
					themeDark: 'Темно',
				},
			},
		},
	})

export default i18next
