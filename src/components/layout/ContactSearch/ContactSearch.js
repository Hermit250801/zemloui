import { useState } from 'react';
import classNames from 'classnames/bind';
import { Input, Tooltip, Button } from 'antd';
import { SearchOutlined, UserAddOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import styles from './ContactSearch.module.scss';

const cx = classNames.bind(styles);

const Styled = styled.div`
  .ant-tooltip-inner {
    display: inline-block;
    background-color: #fff;
    color: #333;
    font-weight: 400;
    border: 1px solid #333;
    font-size: 1.2rem;
    padding: 2px;
    min-height: 18px;
  }

  .ant-tooltip {
    left: 360px !important;
    top: 36px !important;
    transform-origin: 50% -4px !important;
  }

  .ant-tooltip-arrow {
    display: none;
  }
`;

const ContactSearch = () => {
  const [isSearch, setIsSearch] = useState(false);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('contact-search')}>
        <Input
          prefix={<SearchOutlined />}
          placeholder="Tìm Kiếm"
          className={cx('search-input')}
          onFocus={() => setIsSearch(true)}
          allowClear
        />
        {isSearch === false ? (
          <Styled>
            <Tooltip
              getPopupContainer={(trigger) => {
                return trigger;
              }}
              title="Thêm bạn"
              className={cx('add-user')}
            >
              <UserAddOutlined className={cx('add-user-icon')} />
            </Tooltip>
            <Tooltip
              title="Tạo nhóm chat"
              getPopupContainer={(trigger) => {
                return trigger;
              }}
            >
              <UsergroupAddOutlined className={cx('add-user-icon')} />
            </Tooltip>
          </Styled>
        ) : (
          <Button className={cx('btn-close')} onClick={() => setIsSearch(false)}>
            Đóng
          </Button>
        )}
      </div>
    </div>
  );
};

export default ContactSearch;
