import React from 'react';
import classNames from 'classnames/bind';

import styles from './ChatPage.module.scss';
import ChatNav from '../../components/layout/ChatNav';
import MetaData from '~/components/layout/MetaData/MetaData';

const cx = classNames.bind(styles);

const ChatPage = () => {
  return (
    <div className={cx('wrapper')}>
      <MetaData title={'Zemlo Web'} />
      <ChatNav />
    </div>
  );
};

export default ChatPage;
