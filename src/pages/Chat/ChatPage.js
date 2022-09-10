import React from 'react';
import classNames from 'classnames/bind';

import styles from './ChatPage.module.scss';
import ChatNav from '../ChatNav';

const cx = classNames.bind(styles);

const ChatPage = () => {
  return (
    <div className={cx('wrapper')}>
      <ChatNav />
    </div>
  );
};

export default ChatPage;
