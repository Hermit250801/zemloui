import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './MsgItem.module.scss';

const cx = classNames.bind(styles);

const MsgItem = () => {
  return (
    <div className={cx('msg-item')}>
      <div className={cx('msg-item-wrapper')}>
        <div className={cx('conv-item')}>
          <img src="https://i.ytimg.com/vi/dGolhb0r6qI/hqdefault.jpg" alt={'conv alt'} className={cx('user-avatar')} />
        </div>

        <div className={cx('conv-item-content')}>
          <div className={cx('conv-item-content-title')}>
            <div className={cx('conv-item-name')}>Kuwaga Raiger</div>

            <div className={cx('conv-item-more')}>3 giờ</div>
          </div>
          <div className={cx('conv-body')}>
            <span className={cx('msg-latest')}>Bạn: abc 12312asd 123123...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MsgItem;
