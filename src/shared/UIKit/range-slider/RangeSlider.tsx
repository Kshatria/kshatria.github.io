import React, { useState, useRef, useEffect, type FC } from 'react'
import type { RangeSliderProps } from './RangeSlider.types'
import classNames from 'classnames/bind'
import css from './RangeSlider.scss'

const cn = classNames.bind(css)

const RangeSlider: FC<RangeSliderProps> = ({
	min,
	max,
	step,
	onChange,
	vertical = false,
	tooltips = true,
	rangeColor = '#4a90e2',
	sliderColor = '#4a90e2',
}) => {
	const [minValue, setMinValue] = useState<number>(min)
	const [maxValue, setMaxValue] = useState<number>(max)
	const [dragging, setDragging] = useState<'min' | 'max' | null>(null)
	const containerRef = useRef<HTMLDivElement>(null)

	const getPosition = (value: number) => ((value - min) / (max - min)) * 100

	const getValue = (position: number) => {
		const value = (position / 100) * (max - min) + min
		return Math.round(value / step) * step
	}

	const clamp = (value: number) => Math.min(Math.max(value, min), max)

	const handleStart = (type: 'min' | 'max') => {
		setDragging(type)
	}

	const handleMove = (clientX: number, clientY: number) => {
		if (!dragging || !containerRef.current) return

		const rect = containerRef.current.getBoundingClientRect()
		const position = vertical
			? ((rect.bottom - clientY) / rect.height) * 100
			: ((clientX - rect.left) / rect.width) * 100

		const newValue = clamp(getValue(position))

		if (dragging === 'min') {
			const clampedValue = Math.min(newValue, maxValue - step)
			setMinValue(clampedValue)
			onChange({ min: clampedValue, max: maxValue })
		} else {
			const clampedValue = Math.max(newValue, minValue + step)
			setMaxValue(clampedValue)
			onChange({ min: minValue, max: clampedValue })
		}
	}

	const handleEnd = () => {
		setDragging(null)
	}

	const handleMouseMove = (e: MouseEvent) => {
		handleMove(e.clientX, e.clientY)
	}

	const handleTouchMove = (e: TouchEvent) => {
		if (e.touches.length > 0) {
			handleMove(e.touches[0].clientX, e.touches[0].clientY)
		}
	}

	useEffect(() => {
		const handleGlobalMouseUp = () => handleEnd()
		const handleGlobalTouchEnd = () => handleEnd()

		if (dragging) {
			window.addEventListener('mousemove', handleMouseMove)
			window.addEventListener('mouseup', handleGlobalMouseUp)
			window.addEventListener('touchmove', handleTouchMove)
			window.addEventListener('touchend', handleGlobalTouchEnd)
		}

		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
			window.removeEventListener('mouseup', handleGlobalMouseUp)
			window.removeEventListener('touchmove', handleTouchMove)
			window.removeEventListener('touchend', handleGlobalTouchEnd)
		}
	}, [dragging]) // eslint-disable-line

	const minPosition = getPosition(minValue)
	const maxPosition = getPosition(maxValue)

	return (
		<div
			className={cn('range-slider', vertical ? 'vertical' : '')}
			ref={containerRef}
		>
			<div className={cn('range-slider__background')} />

			<div
				className={cn('range-slider__track')}
				style={{
					backgroundColor: rangeColor,
					[vertical ? 'height' : 'width']: `${
						maxPosition - minPosition
					}%`,
					[vertical ? 'bottom' : 'left']: `${minPosition}%`,
				}}
			/>

			<div
				className={cn('range-slider__handle')}
				style={{
					[vertical ? 'bottom' : 'left']: `${minPosition}%`,
					backgroundColor: sliderColor,
				}}
				onMouseDown={() => handleStart('min')}
				onTouchStart={() => handleStart('min')}
			>
				{tooltips && (
					<div className={cn('range-slider__tooltip')}>
						{minValue}
					</div>
				)}
			</div>
			<div
				className={cn('range-slider__handle')}
				style={{
					[vertical ? 'bottom' : 'left']: `${maxPosition}%`,
					backgroundColor: sliderColor,
				}}
				onMouseDown={() => handleStart('max')}
				onTouchStart={() => handleStart('max')}
			>
				{tooltips && (
					<div className={cn('range-slider__tooltip')}>
						{maxValue}
					</div>
				)}
			</div>
		</div>
	)
}

export { RangeSlider, type RangeSliderProps }
