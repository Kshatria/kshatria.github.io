import React from 'react';
import classNames from 'classnames/bind';
import { Modal, type ModalProps } from './Modal';
import { Button } from '../button';
import { useModal } from '../../hooks';

import css from './Modal.scss';

const cn = classNames.bind(css);

const Presentation = (props: ModalProps) => {
  const modal = useModal();

  return (
    <>
      <Button color={'Secondary'} text="Нажми меня" onClick={modal.show} />
      <Modal {...props} visible={modal.visible} onClose={modal.hide}>
        <h2 className={cn('modal__title')}>Привет Мир!</h2>
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
