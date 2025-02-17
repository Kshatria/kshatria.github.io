import { ReactNode } from 'react'

export type ModalProps = {
	/** Содержание всплывающего окна */
	children: ReactNode
	/** Функция обработки закрытия всплывающего окна */
	onClose: () => void
	/** Признак видимости всплывающего окна */
	visible: boolean
}
