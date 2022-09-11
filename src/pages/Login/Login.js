import React from 'react';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { Button, Checkbox, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import zlogo from '~/assets/img/zlogo.png';
import MetaData from '~/components/layout/MetaData/MetaData';

const cx = classNames.bind(styles);
const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={cx('wrapper')}>
      <MetaData title={'Đăng nhập tài khoản Zalo'} />;
      <div className={cx('layout-login')}>
        <header className={cx('header')}>
          <img src={zlogo} alt="logo" className={cx('logo')} />
          <h2 className={cx('desc')}>
            Đăng nhập tài khoản Zalo
            <br />
            để kết nối với ứng dụng Zalo Web
          </h2>
        </header>

        <div className={cx('body')}>
          <h3 className={cx('login-title')}>Đăng nhập tài khoản zalo</h3>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item name="username" style={{ background: '#000' }}>
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                className={cx('login-input')}
                allowClear
              />
            </Form.Item>
            <Form.Item name="password">
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                className={cx('login-input')}
                allowClear
              />
            </Form.Item>
            <Form.Item>
              <Button block type="primary" htmlType="submit" className={cx('login-form-button')}>
                Đăng nhập với mật khẩu
              </Button>
            </Form.Item>

            <Form.Item>
              <a href="#" className={cx('forgot-password')}>
                Quên mật khẩu?
              </a>
            </Form.Item>
          </Form>
        </div>

        <div>
          <p className={cx('more-action')}>
            Bạn chưa có tài khoản?
            <Button type="link" className={cx('register-button')} href="/register">
              Đăng kí ngay
            </Button>
          </p>
        </div>

        <div className={cx('footer')}>
          <p className={cx('select-lang')}>
            <a className={cx('lang', 'selected')}>Tiếng Việt</a>
            <a className={cx('lang')}>English</a>
          </p>
          <p>Dùng tài khoản Zalo để truy cập các ứng dụng của ZA</p>

          <div className={cx('logos')}>
            <ul>
              <li>
                <a href="" className={cx('logo-zalo')}>
                  <i className={cx('logo-zalo')}></i>
                </a>
              </li>

              <li>
                <a href="" className={cx('logo-zingmp3')}>
                  <i className={cx('logo-zingmp3')}></i>
                </a>
              </li>

              <li>
                <a href="" className={cx('logo-zingtv')}>
                  <i className={cx('logo-zingtv')}></i>
                </a>
              </li>

              <li>
                <a href="" className={cx('logo-zing')}>
                  <i className={cx('logo-zing')}></i>
                </a>
              </li>

              <li>
                <a href="" className={cx('logo-baomoi')}>
                  <i className={cx('logo-baomoi')}></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
