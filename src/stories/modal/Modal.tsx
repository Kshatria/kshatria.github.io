import React, { useCallback, useEffect } from 'react';

import { createPortal } from 'react-dom';
import classNames from 'classnames/bind';
import type { ModalProps } from './Modal.types';
import css from './Modal.scss';

const cn = classNames.bind(css);

const KEY_CODE_ESCAPE = 'Escape';

const Modal = ({ children, onClose, visible }: ModalProps) => {
	if (!visible) return null

  const handleKeyDown = useCallback(
    ({ code }: KeyboardEvent) => {
      if (code === KEY_CODE_ESCAPE) onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return createPortal(
			<div className={cn('modal')}>
				<div className={cn('modal__overlay')} onClick={onClose}></div>
				<div className={cn('modal__content')}>
					<button className={cn('modal__close')} type="button" onClick={onClose}>
						&times;
					</button>
					<div className={cn('modal__wrapper')}>{children}</div>
				</div>
			</div>,
			document.body
		)
};

export { Modal, type ModalProps };
