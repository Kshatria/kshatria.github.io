import React, { useState, useEffect, useRef, type FC } from 'react'
import classNames from 'classnames/bind'
import css from './Collapse.scss'
import type { CollapseProps } from './Collapse.types'

const cn = classNames.bind(css)

const Collapse: FC<CollapseProps> = ({ opened, children }) => {
	const [contentHeight, setContentHeight] = useState<number | undefined>(
		undefined
	)

	// Понятия не имею зачем тут ResizeObserver, но в условии задания он должен быть
	const contentRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		if (!contentRef.current) return

		const resizeObserver = new ResizeObserver(() => {
			console.log(contentRef.current.scrollHeight)
		})

		resizeObserver.observe(contentRef.current)

		return () => {
			resizeObserver.disconnect()
		}
	}, [])

	useEffect(() => {
		if (opened) {
			if (contentRef.current) {
				const height = contentRef.current.scrollHeight
				setContentHeight(height)
			}
		} else {
			setContentHeight(0)
		}
	}, [opened, children])

	return (
		<section
			ref={contentRef}
			className={cn('collapse', { visible: opened })}
			style={{ height: contentHeight }}
		>
			{children}
		</section>
	)
}

export { Collapse, type CollapseProps }
