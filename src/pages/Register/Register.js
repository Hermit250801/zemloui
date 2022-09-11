import React from 'react';
import classNames from 'classnames/bind';
import { Button, Form, Input, Select } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

import styles from './Register.module.scss';
import zlogo from '~/assets/img/zlogo.png';
import MetaData from '~/components/layout/MetaData/MetaData';

const cx = classNames.bind(styles);
const { Option } = Select;
const Register = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
        defaultValue="+84"
      >
        <Option value="84">+84</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className={cx('wrapper')}>
      <MetaData title={'Đăng kí tài khoản Zalo'} />;
      <div className={cx('layout-register')}>
        <header className={cx('header')}>
          <img src={zlogo} alt="logo" className={cx('logo')} />
          <h2 className={cx('desc')}>
            Đăng kí tài khoản Zalo
            <br />
            để kết nối với ứng dụng Zalo Web
          </h2>
        </header>

        <div className={cx('body')}>
          <h3 className={cx('register-title')}>Đăng kí tài khoản zalo</h3>
          <Form
            name="normal_register"
            className="register-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập username',
                },
              ]}
              name="username"
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                className={cx('register-input')}
                allowClear
              />
            </Form.Item>

            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập email',
                },
              ]}
              name="Email"
            >
              <Input
                type="email"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
                className={cx('register-input')}
                allowClear
              />
            </Form.Item>

            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập số điện thoại!',
                },
              ]}
            >
              <Input
                addonBefore={prefixSelector}
                style={{
                  width: '100%',
                }}
                placeholder="Number Phone"
                allowClear
              />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập mật khẩu',
                },
                {
                  min: 8,
                  message: 'Mật khẩu ít nhất 8 kí tự',
                },
              ]}
              name="password"
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                className={cx('register-input')}
                allowClear
              />
            </Form.Item>

            <Form.Item
              dependencies={['password']}
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập nhập lại mật khẩu',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(new Error('Mật khẩu và nhập lại mật khẩu không khớp!'));
                  },
                }),
              ]}
              name="confirmPassword"
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Confirm Password"
                className={cx('register-input')}
                allowClear
              />
            </Form.Item>
            <Form.Item>
              <Button block type="primary" htmlType="submit" className={cx('register-form-button')}>
                Đăng kí tài khoản
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div>
          <p className={cx('more-action')}>
            Bạn đã có tài khoản?
            <Button type="link" className={cx('register-button')} href="/login">
              Đăng nhập
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

export default Register;
