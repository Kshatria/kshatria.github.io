import React from 'react';
import classNames from 'classnames/bind';
import { Button } from '@/shared/UIKit';
import type { InformerDetailProps } from './InformerDetail.types';
import css from './InformerDetail.scss';

const cn = classNames.bind(css);

const InformerDetail = ({ category, date, description, disabled, name, sum, onClick }: InformerDetailProps) => {
  return (
    <article className={cn('informer-detail')}>
      <div className={cn('informer-detail__wrapper')}>
        <div className={cn('informer-detail__category')}>{category}</div>
        <div className={cn('informer-detail__date')}>{date}</div>
      </div>
      <div className={cn('informer-detail__name')}>{name}</div>
      <div className={cn('informer-detail__desc')}>{description}</div>
      <div className={cn('informer-detail__sum')}>{sum + '$'}</div>
      <Button disabled={disabled} text="Редактировать" onClick={onClick} />
    </article>
  );
};

export { InformerDetail, type InformerDetailProps };
