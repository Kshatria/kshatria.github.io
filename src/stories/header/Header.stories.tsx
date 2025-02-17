import React from 'react'
import { Header, Logo, type HeaderProps } from '@/shared/UIKit'

type PresentationProps = HeaderProps

const Presentation = (props: PresentationProps) => {
	return (
		<Header {...props}>
			<Logo />
		</Header>
	)
}

const HIDDEN = { table: { disable: true } }

const Docs = {
	title: 'Header',
	component: Header,
}

const Story = {
	argTypes: {
		children: HIDDEN,
	},
	render: Presentation,
}

export { Docs as default, Story as Component }
