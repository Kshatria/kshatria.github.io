import { Button, Modal, type ModalProps } from '@/shared/UIKit';
import { useModal } from '@/hooks';

const Presentation = (props: ModalProps) => {
  const modal = useModal();

  return (
    <>
      <Button color={'Secondary'} text="Нажми меня" onClick={modal.show} />
      <Modal {...props} visible={modal.visible} onClose={modal.hide}>
        <h2>Привет Мир!</h2>
        <Button color={'Primary'} text="Продолжить" onClick={modal.hide} />
      </Modal>
    </>
  );
};

const HIDDEN = { table: { disable: true } };

const Docs = {
  title: 'Modal',
  component: Modal,
};

const Story = {
  argTypes: {
    children: HIDDEN,
    visible: HIDDEN,
    onClose: HIDDEN,
  },
  render: Presentation,
  args: {
    visible: false,
  },
};

export { Docs as default, Story as Component };
