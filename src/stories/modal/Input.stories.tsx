import React, { useState } from 'react'
import { Button, Modal, Input, type ModalProps } from '@/shared/UIKit'
import { useModal } from '@/hooks'

type PresentationProps = ModalProps

const Presentation = (props: PresentationProps) => {
	const modal = useModal()
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')

	return (
		<>
			<style>{` .wrapper { margin-bottom: 16px; max-width: 300px; } `}</style>
			<div className="wrapper">
				<Input
					name="title"
					value={title}
					onChange={(val) => setTitle(val)}
					onIconClick={() => setTitle('')}
					label="Заголовок для модального окна"
				/>
			</div>
			<div className="wrapper">
				<Input
					name="description"
					value={description}
					onChange={(val) => setDescription(val)}
					onIconClick={() => setDescription('')}
					label="Описание для модального окна"
				/>
			</div>
			<Button
				color={'Secondary'}
				text="Нажми меня"
				onClick={modal.show}
				disabled={!title && !description}
			/>
			<Modal {...props} visible={modal.visible} onClose={modal.hide}>
				<h2>{title}</h2>
				<p>{description}</p>
				<Button
					color={'Primary'}
					text="Продолжить"
					onClick={modal.hide}
				/>
			</Modal>
		</>
	)
}

const HIDDEN = { table: { disable: true } }

const Docs = {
	title: 'Input',
	component: Input,
}

const Story = {
	argTypes: {
		children: HIDDEN,
		visible: HIDDEN,
		onClose: HIDDEN,
	},
	render: Presentation,
	args: {
		visible: false,
	},
}

export { Docs as default, Story as Component }
