import { useState } from 'react';
import classNames from 'classnames/bind';
import { Tabs } from 'antd';
import { DownOutlined, MoreOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import styles from './Conversation.module.scss';
import ContactSearch from '../ContactSearch';
import MsgItem from '../MsgItem';

const cx = classNames.bind(styles);
const Styled = styled.div`
  .ant-tabs-tab {
    font-size: 1.3rem;
  }

  ant-tabs-bottom > .ant-tabs-nav:before,
  .ant-tabs-bottom > div > .ant-tabs-nav:before,
  .ant-tabs-top > .ant-tabs-nav:before,
  .ant-tabs-top > div > .ant-tabs-nav:before {
    border: none;
  }

  .ant-tabs > .ant-tabs-nav,
  .ant-tabs > div > .ant-tabs-nav {
    margin: 0;
  }
`;

const Conversation = () => {
  const items = [
    {
      label: 'Tất cả',
      key: 'item-1',
      className: cx('tab-item'),
    },
    {
      label: 'Chưa đọc',
      key: 'item-2',
      className: cx('tab-item'),
    },
  ];

  return (
    <div className={cx('wrapper')}>
      <ContactSearch />

      <div className={cx('filter-bar')}>
        <Styled>
          <Tabs items={items} className={cx('filter-tab')} />
        </Styled>

        <div className={cx('filter-category-wrapper')}>
          <div className={cx('filter-category')}>
            <span>Phân loại</span>
            <DownOutlined className={cx('arr-down-icon')} />
          </div>

          <div className={cx('filter-more')}>
            <MoreOutlined className={cx('more-icon')} />
          </div>
        </div>
      </div>

      <div className={cx('msg-list')}>
        <MsgItem />
        <MsgItem />
        <MsgItem />
        <MsgItem />
        <MsgItem />
        <MsgItem />
        <MsgItem />
        <MsgItem />
        <MsgItem />
        <MsgItem />
        <MsgItem />
      </div>
    </div>
  );
};

export default Conversation;
