import React from 'react';
import '../login/login.css';
import {Typography, Form, Input, Button} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import logo from '../../../images/downloaded2.png';

const NormalLoginForm = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  const {Title} = Typography;
  return (
    <React.Fragment>
      <div className="login">
        <div className="header">
          <img src={logo} className="logoHead" alt="IIIT UNA" />
          <Title level={3} className="heading">
            An Institute Of National Importance Under MHRD
          </Title>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Institute Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="confirmpassword"
            rules={[
              {
                required: true,
                message: 'Confirm your password',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Item>
          <Form.Item>
            <Button type="danger" href="/login" htmlType="submit" className="login-form-button">
              Reset
            </Button>
          </Form.Item>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default NormalLoginForm;
