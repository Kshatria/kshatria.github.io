import React, {
	useState,
	createContext,
	useContext,
	useEffect,
	useCallback,
	useMemo,
	type FC,
} from 'react'
import type { LanguageVariants } from '@/shared/UIKit'
import type {
	LanguageContextType,
	LanguageProviderProps,
} from './LanguageProvider.types'
import { useTranslation } from 'react-i18next'

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined
)

const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
	const [language, setLanguage] = useState<LanguageVariants>('ru')
	const { i18n } = useTranslation()

	const handleSetLanguage = useCallback(
		(newLanguage: LanguageVariants) => {
			setLanguage(newLanguage)
		},
		[setLanguage]
	)

	const contextValue = useMemo(
		() => ({
			language,
			setLanguage: handleSetLanguage,
		}),
		[language, handleSetLanguage]
	)

	useEffect(() => {
		i18n.changeLanguage(language)
	}, [language, i18n])

	return (
		<LanguageContext.Provider value={contextValue}>
			{children}
		</LanguageContext.Provider>
	)
}

const useLanguage = () => {
	const context = useContext(LanguageContext)
	if (!context) {
		throw new Error('useLangugae must be used within a LangugaeProvider')
	}
	return context
}

export { LanguageProvider, useLanguage }
