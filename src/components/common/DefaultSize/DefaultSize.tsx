import classNames from 'classnames/bind';
import React from 'react'
import style from './style.module.scss';
type Props = {
  className?: string
}
const cx = classNames.bind(style);

const DefaultSize = (props: React.PropsWithChildren<Props>) => {
  return (
    <div className={cx(props.className, 'shrink_web', 'shrink_mobile', 'wrapper-size')}>{props.children}</div>
  )
}

export default DefaultSize