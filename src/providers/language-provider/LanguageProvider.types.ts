import { ReactNode, Dispatch, SetStateAction } from 'react'
import type { LanguageVariants } from '@/shared/UIKit'

export type LanguageProviderProps = {
	children?: ReactNode
}

export type LanguageContextType = {
	language: LanguageVariants
	setLanguage: Dispatch<SetStateAction<string>>
}
