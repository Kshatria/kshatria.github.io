import React from 'react';
import { Header, ThemeSwitcher, LanguageSwitcher, Logo } from '@/shared/UIKit'
import { useTheme, useLanguage } from "@/providers";
import type { MainLayoutProps } from './MainLayout.types'
import classNames from 'classnames/bind';
import css from './MainLayout.scss';

const cn = classNames.bind(css);

const MainLayout = ({ children }: MainLayoutProps) => {
	const { theme } = useTheme()
	const { language } = useLanguage()

	return (
		<section
			className={cn('main')}
			data-theme={theme}
			data-language={language}>
			<Header>
				<Logo />
				<div className={cn('header__wrapper')}>
					<div className={cn('header__switcher')}>
						<ThemeSwitcher />
					</div>
					<div className={cn('header__switcher')}>
						<LanguageSwitcher />
					</div>
				</div>
			</Header>
			{ children }
		</section>
	)
};

export { MainLayout };
