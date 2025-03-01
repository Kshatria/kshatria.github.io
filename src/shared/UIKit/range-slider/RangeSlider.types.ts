export type RangeSliderProps = {
	/* Минимальное значение */
	min: number
	/* Максимальное значение */
	max: number
	/* Шаг слайдера */
	step: number
	/* Функция изменения значений */
	onChange: (values: { min: number; max: number }) => void
	/* Вертикальный слайдер */
	vertical?: boolean
	/* Подсказки */
	tooltips?: boolean
	/* Цвет диапазона */
	rangeColor?: string
	/* Цвет ползунков */
	sliderColor?: string
}
