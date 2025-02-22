import { type Operation } from '@/homeworks/ts1/3_write'

export type InformerDetailProps = Operation & {
	/* Недоступно редактирование  */
	disabled?: boolean
	/* Событие редактирования операции */
	onClick: () => void
}
