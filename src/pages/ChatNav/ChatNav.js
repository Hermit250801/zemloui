import { useState } from 'react';
import classNames from 'classnames/bind';
import { Menu } from 'antd';
import { MessageTwoTone, ContactsTwoTone, CloudTwoTone, SettingTwoTone } from '@ant-design/icons';

import styles from './ChatNav.module.scss';
import MetaData from '~/components/layout/MetaData';

const cx = classNames.bind(styles);

const ChatNav = () => {
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

  const handleChangeNav = (e) => {
    console.log(e.target.name);
  };

  return (
    <div className={cx('wrapper')}>
      <MetaData title={'Zalo Web'} />
      <nav>
        <div className={cx('side-bar')}>
          <div className={cx('avatar')}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7X0HC1bSv445x0SoTdeqf69gnG3TADkkHAg&usqp=CAU"
              alt=""
            />
          </div>
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

export default ChatNav;
