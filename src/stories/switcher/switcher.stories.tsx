import React from 'react'
import { Switcher, type SwitcherProps } from '@/shared/UIKit'

type PresentationProps = SwitcherProps

const Presentation = (props: PresentationProps) => {
	return <Switcher {...props} />
}

const HIDDEN = { table: { disable: true } }

const Docs = {
	title: 'Switcher',
	component: Switcher,
}

const Story = {
	render: Presentation,
	args: {
		items: [
			{
				name: '1',
				text: '1',
			},
			{
				name: '2',
				text: '2',
			},
		],
		defaultValue: '1',
		name: 'switcher',
		onChange: HIDDEN,
	},
}

export { Docs as default, Story as Component }
