import React from 'react'
import classNames from 'classnames/bind'
import { Button } from '@/shared/UIKit'
import type { InformerDetailProps } from './InformerDetail.types'
import css from './InformerDetail.scss'

const cn = classNames.bind(css)

const InformerDetail = ({
	id,
	category,
	createdAt,
	desc,
	disabled = false,
	name,
	amount,
	onClick,
}: InformerDetailProps) => {
	return (
		<article className={cn('informer-detail')} id={id}>
			<div className={cn('informer-detail__wrapper')}>
				<div className={cn('informer-detail__category')}>
					{category.name}
				</div>
				<div className={cn('informer-detail__date')}>{createdAt}</div>
			</div>
			<div className={cn('informer-detail__name')}>{name}</div>
			<div className={cn('informer-detail__desc')}>{desc}</div>
			<div className={cn('informer-detail__sum')}>{amount + '$'}</div>
			<Button
				disabled={disabled}
				text="Редактировать"
				onClick={onClick}
			/>
		</article>
	)
}

export { InformerDetail, type InformerDetailProps }
