import classNames from 'classnames/bind';
import css from './Logo.scss';

const cn = classNames.bind(css);

const Logo = () => {
  return <div className={cn('logo')}></div>;
};

export { Logo };
