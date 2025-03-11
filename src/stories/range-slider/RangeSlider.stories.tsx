import React from 'react'
import { RangeSlider } from '@/shared/UIKit'

const Presentation = () => {
	const handleRangeChange = ({ min, max }: { min: number; max: number }) => {
		console.log(`Min: ${min}, Max: ${max}`)
	}

	return (
		<RangeSlider
			min={0}
			max={100}
			step={1}
			onChange={handleRangeChange}
			tooltips
			rangeColor="#ff7f50"
			sliderColor="#ff7f50"
		/>
	)
}

const Docs = {
	title: 'RangeSlider',
	component: RangeSlider,
}

const Story = {
	render: Presentation,
}

export { Docs as default, Story as Component }
