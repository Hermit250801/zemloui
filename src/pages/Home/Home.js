import React from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Button, Menu, BackTop } from 'antd';
import { DownloadOutlined, GlobalOutlined } from '@ant-design/icons';

import styles from './Home.module.scss';
import MetaData from '~/components/layout/MetaData';

const cx = classNames.bind(styles);

const Home = () => {
  const navigate = useNavigate();
  const items = [
    {
      label: 'Zalo PC',
      key: 'item-1',
      className: cx('menu-item', 'menu-active'),
    },
    {
      label: 'Tính năng',
      key: 'item-2',
      className: cx('menu-item'),
    },
    {
      label: 'Official Account',
      key: 'item-3',
      className: cx('menu-item'),
    },
    {
      label: 'Nhà Phát Triển',
      key: 'item-4',
      className: cx('menu-item'),
    },
    {
      label: 'Bảo Mật',
      key: 'item-5',
      className: cx('menu-item'),
    },
    {
      label: 'Trợ Giúp',
      key: 'item-6',
      className: cx('menu-item'),
    },
    {
      label: 'Liên Hệ',
      key: 'item-7',
      className: cx('menu-item'),
    },
    {
      label: 'Báo Cáo Vi Phạm',
      key: 'item-8',
      className: cx('menu-item'),
    },
    {
      label: 'Đăng Nhập',
      onClick: () => navigate('/login'),
      key: 'item-9',
      className: cx('menu-item', 'menu-active'),
    },
  ];

  return (
    <>
      <BackTop className={cx('back-top')}>
        <img src="https://stc-zaloprofile.zdn.vn/pc/v1/images/img_btn_top.png" alt="back top icon" />
      </BackTop>
      <div className={cx('wrapper')}>
        <MetaData title={'Zemlo PC - Tải Zemlo PC để làm việc nhóm hiệu quả và gửi file nhanh'} />
        <div className={cx('zalo-layout')}>
          <header className={cx('header')}>
            <div className={cx('header-container')}>
              <Button type="link" href="/" className={cx('header-logo')}>
                Zemlo
              </Button>
              <Menu items={items} className={cx('header-menu')} />
            </div>
          </header>
          <div className={cx('body')}>
            <div className={cx('body-container')}>
              <div className={cx('module-page')}>
                <h1 className={cx('body-title')}>Tải Zemlo PC cho máy tính</h1>
                <h2 className={cx('body-desc')}>Ứng dụng Zemlo PC đã có mặt trên Windows, Mac OS, Web</h2>

                <div className={cx('block-pc')}>
                  <div className={cx('info-pc')}>
                    <ul>
                      <li>Gửi file, ảnh, video cực nhanh lên đến 1GB</li>
                      <li>Đồng bộ tin nhắn với điện thoại</li>
                      <li>Tối ưu cho chat nhóm và trao đổi công việc</li>
                    </ul>

                    <Button
                      type="primary"
                      icon={<DownloadOutlined />}
                      size={'large'}
                      className={cx('btn', 'btn-download')}
                    >
                      Tải ngay
                    </Button>
                    <Button icon={<GlobalOutlined />} size={'large'} className={cx('btn', 'btn-web')}>
                      Dùng bản web
                    </Button>
                    <div></div>
                  </div>
                  <div className={cx('share-pc')}>
                    <img src="https://stc-zaloprofile.zdn.vn/pc/v1/images/img_pc.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className={cx('footer')}>
            <p>@2022 Một sản phẩm đến từ nhóm 6</p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home;
