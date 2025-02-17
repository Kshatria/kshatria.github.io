export type ButtonProps = {
	/* Внешний вид кнопки */
	color?: 'Primary' | 'Secondary'
	/* Недоступное состояние кнопки  */
	disabled?: boolean
	/* Текст кнопки */
	text: string
	/* Событие нажатия */
	onClick: () => void
}
