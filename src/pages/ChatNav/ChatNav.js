import { useState } from 'react';
import classNames from 'classnames/bind';
import { Menu } from 'antd';
import { MessageTwoTone, ContactsTwoTone, CloudTwoTone, SettingTwoTone } from '@ant-design/icons';

import styles from './ChatNav.module.scss';
import MetaData from '~/components/layout/MetaData';

const cx = classNames.bind(styles);

const ChatNav = () => {
  const [navActive, setNavActive] = useState('message');

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
            <Menu className={cx('tab-menu')}>
              <Menu.Item
                onClick={() => setNavActive('message')}
                className={cx('tab-menu-item', {
                  selected: navActive === 'message',
                })}
              >
                <MessageTwoTone className={cx('tab-menu-icon')} />
              </Menu.Item>
              <Menu.Item
                onClick={() => setNavActive('contact')}
                className={cx('tab-menu-item', {
                  selected: navActive === 'contact',
                })}
              >
                <ContactsTwoTone className={cx('tab-menu-icon')} />
              </Menu.Item>
            </Menu>

            <Menu className={cx('tab-menu', 'tab-menu-bottom')}>
              <Menu.Item
                onClick={() => setNavActive('cloud')}
                className={cx('tab-menu-item', {
                  selected: navActive === 'cloud',
                })}
              >
                <CloudTwoTone className={cx('tab-menu-icon')} />
              </Menu.Item>
              <Menu.Item
                onClick={() => setNavActive('setting')}
                className={cx('tab-menu-item', {
                  selected: navActive === 'setting',
                })}
              >
                <SettingTwoTone className={cx('tab-menu-icon')} />
              </Menu.Item>
            </Menu>
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
