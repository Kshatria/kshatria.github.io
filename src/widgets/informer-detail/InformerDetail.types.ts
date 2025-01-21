export type InformerDetailProps = {
  /* Название категории  */
  category: string;
  /* Дата операции  */
  date: string;
  /* Описание  */
  description: string;
  /* Недоступно редактирование  */
  disabled: boolean;
  /* Название */
  name: string;
  /* Сумма операции  */
  sum: number;
  /* Событие редактирования операции */
  onClick: () => void;
};
