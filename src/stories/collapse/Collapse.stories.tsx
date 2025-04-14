import React, { useState } from 'react'
import { Button, Collapse } from '@/shared/UIKit'

const Presentation = () => {
	const [isOpened, setIsOpened] = useState(false)
	const [content, setContent] = useState('Короткий текст')

	return (
		<>
			<div style={{ marginRight: 16 + 'px', display: 'inline-block' }}>
				<Button
					color={'Secondary'}
					text={isOpened ? 'Скрыть' : 'Показать'}
					onClick={() => setIsOpened(!isOpened)}
				/>
			</div>
			<Button
				color={'Primary'}
				text="Добавить текст"
				onClick={() => setContent((prev) => prev + '\nНовая строка')}
			/>
			<Collapse opened={isOpened}>
				<div style={{ whiteSpace: 'pre-line' }}>{content}</div>
			</Collapse>
		</>
	)
}

const Docs = {
	title: 'Collapse',
	component: Collapse,
}

const Story = {
	render: Presentation,
}

export { Docs as default, Story as Component }
