import React, { useCallback } from 'react';

import classNames from 'classnames/bind';
import type { SwitcherProps } from './Switcher.types';
import css from './Switcher.scss';
import FeatherIcon from 'feather-icons-react';

const cn = classNames.bind(css);

const Switcher = ({ items, defaultValue, name, onChange }: SwitcherProps) => {

	const handler = useCallback((val: string) => {
		onChange(val)
	}, [onChange])

	return (
		<div className={cn('switcher')}>
			{
				items.map(el => (
					<div className={cn('switcher__wrapper')} key={el.name}>
						<input
							className={cn('switcher__field')}
							type="radio"
							id={el.name}
							name={name}
							value={el.name}
							checked={defaultValue === el.name}
							onChange={() => handler(el.name)} />
						<label className={cn('switcher__label')} htmlFor={el.name}>
							<span>
								{el.icon && <FeatherIcon icon={el.icon} />}
								{el.text}
							</span>
						</label>
					</div>
				))
			}
			<span className={cn('switcher__slider')}></span>
		</div>
	)
};

export { Switcher, type SwitcherProps };
