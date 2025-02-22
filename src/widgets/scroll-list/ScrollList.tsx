import React, { useState, useRef, useCallback, useEffect } from 'react'
import { InformerDetail, type InformerDetailProps } from '@/widgets'
import { createRandomOperation } from '@/homeworks/ts1/3_write'

import classNames from 'classnames/bind'
import css from './ScrollList.scss'

const cn = classNames.bind(css)

type Item = InformerDetailProps

const defaultDate = new Date().toLocaleString('ru-RU')

const defaultItems = [
	createRandomOperation(defaultDate),
	createRandomOperation(defaultDate),
	createRandomOperation(defaultDate),
] as Item[]

const ScrollList = () => {
	const [items, setItems] = useState(defaultItems)
	const observerRef = useRef<IntersectionObserver | null>(null)
	const loadMoreRef = useRef<HTMLDivElement | null>(null)

	const fetchMoreItems = useCallback(() => {
		const currentDate = new Date().toLocaleString('ru-RU')
		setItems(
			(prev) => [...prev, createRandomOperation(currentDate)] as Item[]
		)
	}, [])

	useEffect(() => {
		fetchMoreItems()
	}, [fetchMoreItems])

	useEffect(() => {
		if (!loadMoreRef.current) return

		observerRef.current = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					fetchMoreItems()
				}
			},
			{ threshold: 1.0 }
		)

		observerRef.current.observe(loadMoreRef.current)

		return () => observerRef.current?.disconnect()
	}, [fetchMoreItems])

	return (
		<article className={cn('scroll-list')}>
			<div className={cn('scroll-list__wrapper')}>
				{items.map((item) => (
					<div className={cn('scroll-list__item')} key={item.id}>
						<InformerDetail {...item} disabled={true} />
					</div>
				))}
			</div>
			<div ref={loadMoreRef} style={{ height: '20px' }} />
		</article>
	)
}

export { ScrollList }
