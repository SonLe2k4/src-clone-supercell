import classNames from 'classnames/bind';
import React from 'react'
import SocialMediaMenu from './components';
import FooterEnd from './components/FooterEnd';
import SecondSocial from './components/SecondSocial';
import style from './style.module.scss';

type Props = {}
const cx = classNames.bind(style);
const Footer = (props: Props) => {
  return (
    <div className={cx('wrapper-footer')}>
        <div className={cx('footer', 'shrink_web', 'shrink_mobile')}>
            <SocialMediaMenu />
            <SecondSocial />
            <FooterEnd />
        </div>
    </div>
  )
}

export default Footer