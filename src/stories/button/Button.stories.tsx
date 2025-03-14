import React from 'react'
import { Button, type ButtonProps } from '@/shared/UIKit'

type PresentationProps = ButtonProps

const Presentation = (props: PresentationProps) => {
	return <Button {...props} />
}

const HIDDEN = { table: { disable: true } }

const Docs = {
	title: 'Button',
	component: Button,
}

const Story = {
	argTypes: {
		onClick: HIDDEN,
	},
	render: Presentation,
	args: {
		text: 'Кнопка',
		type: 'Primary',
		disabled: false,
	},
}

export { Docs as default, Story as Component }
