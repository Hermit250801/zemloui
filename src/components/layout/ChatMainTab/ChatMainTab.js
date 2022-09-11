import { useState } from 'react';
import classNames from 'classnames/bind';
import { Menu, Tooltip } from 'antd';
import { MessageTwoTone, ContactsTwoTone, CloudTwoTone, SettingTwoTone } from '@ant-design/icons';
import styled from 'styled-components';

import styles from './ChatMainTab.module.scss';

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
    left: 59px !important;
    top: 47px !important;
  }

  .ant-tooltip-arrow {
    display: none;
  }
`;

const ChatSidebar = () => {
  const [navActive, setNavActive] = useState('message');

  const menuTopItems = [
    {
      label: <MessageTwoTone className={cx('tab-menu-icon')} />,
      className: cx('tab-menu-item', {
        selected: navActive === 'message',
      }),
      onClick: () => setNavActive('message'),
      key: 'item-1',
    },
    {
      label: <ContactsTwoTone className={cx('tab-menu-icon')} />,
      className: cx('tab-menu-item', {
        selected: navActive === 'contact',
      }),
      onClick: () => setNavActive('contact'),
      key: 'item-2',
    },
  ];

  const menuBottomItems = [
    {
      label: <CloudTwoTone className={cx('tab-menu-icon')} />,
      key: 'item-3',
      onClick: () => setNavActive('cloud'),
      className: cx('tab-menu-item', {
        selected: navActive === 'cloud',
      }),
    },
    {
      label: <SettingTwoTone className={cx('tab-menu-icon')} />,
      key: 'item-4',
      onClick: () => setNavActive('setting'),
      className: cx('tab-menu-item', {
        selected: navActive === 'setting',
      }),
    },
  ];

  return (
    <div className={cx('wrapper')}>
      <nav>
        <div className={cx('side-bar')}>
          <Styled>
            <Tooltip
              title="Kabuto Raiger"
              getPopupContainer={(trigger) => {
                return trigger;
              }}
            >
              <div className={cx('avatar')}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7X0HC1bSv445x0SoTdeqf69gnG3TADkkHAg&usqp=CAU"
                  alt=""
                />
              </div>
            </Tooltip>
          </Styled>
          <div className={cx('main-tab')}>
            <Menu className={cx('tab-menu')} items={menuTopItems} />
            <Menu className={cx('tab-menu', 'tab-menu-bottom')} items={menuBottomItems} />
          </div>
        </div>

        <div className={cx('conversation-list')}>
          <div className={cx('contact-search')}></div>
        </div>
      </nav>
    </div>
  );
};

export default ChatSidebar;
