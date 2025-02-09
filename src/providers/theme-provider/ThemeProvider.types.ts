import { ReactNode, Dispatch, SetStateAction } from "react";
import type { ThemesVariants } from '@/shared/UIKit'

export type ThemeProviderProps = {
	children?: ReactNode;
}

export type ThemeContextType =  {
	theme: ThemesVariants;
	setTheme: Dispatch<SetStateAction<string>>;
}