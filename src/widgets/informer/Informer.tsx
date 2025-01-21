import classNames from 'classnames/bind';
import type { InformerProps } from './Informer.types';
import ClampLines from 'react-clamp-lines';
import css from './Informer.scss';

const cn = classNames.bind(css);

const informerId = 'informer';

const Informer = ({ category, description, name, sum }: InformerProps) => {
  return (
    <article className={cn('informer')}>
      <div className={cn('informer__wrapper')}>
        <div className={cn('informer__category')}>{category}</div>
        <div className={cn('informer__sum')}>{sum + '$'}</div>
      </div>
      <div className={cn('informer__name')}>{name}</div>
      <ClampLines className={cn('informer__desc')} text={description} lines={3} innerElement="div" id={informerId} />
    </article>
  );
};

export { Informer, type InformerProps };
