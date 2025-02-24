import React from 'react'
import classNames from 'classnames/bind'
import css from './Loader.scss'

const cn = classNames.bind(css)

const Loader = () => {
	return <article className={cn('loader')}></article>
}

export { Loader }
