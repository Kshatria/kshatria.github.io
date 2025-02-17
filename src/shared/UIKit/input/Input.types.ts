export type InputProps<T = string> = {
	/** Значение поля ввода */
	value: string | ''
	/** Наименование поля ввода */
	name: string
	/** Функция обработки изменения состояния поля ввода */
	onChange: (value: T) => void
	/** Функция обработки нажатия по иконке поля ввода */
	onIconClick: () => void
	/** Визуальное отображение наименования поля */
	label?: string
	/** Плейсхолдер поля */
	placeholder?: string
}
