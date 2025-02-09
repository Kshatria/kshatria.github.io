export type ThemesVariants = 'light-theme' | 'dark-theme'
export type ThemesIcons = 'sun' | 'moon'

export type ThemeSwitcherItem = {
	/** Имя темы */
	name: ThemesVariants,
	/** Название иконки */
	icon?: ThemesIcons,
	/** Текст темы */
	text: string
}