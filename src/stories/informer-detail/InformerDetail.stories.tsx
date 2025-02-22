import React from 'react'
import { InformerDetail, type InformerDetailProps } from '@/widgets'

type PresentationProps = InformerDetailProps

const Presentation = (props: PresentationProps) => {
	return <InformerDetail {...props} />
}

const Docs = {
	title: 'InformerDetail',
	component: InformerDetail,
}

const Story = {
	render: Presentation,
	args: {
		category: 'Social Mediat',
		date: '31.12.2024',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		disabled: true,
		name: 'Total profit',
		sum: 500,
	},
}

export { Docs as default, Story as Component }
