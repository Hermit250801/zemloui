import React from 'react';
import classNames from 'classnames/bind';

import styles from './ChatNav.module.scss';
import ChatMainTab from '../ChatMainTab';
import Conversation from '../Conversation';

const cx = classNames.bind(styles);

const ChatNav = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('nav')}>
        <ChatMainTab />
        <Conversation />
      </div>
    </div>
  );
};

export default ChatNav;
