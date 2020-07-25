import React from 'react';
import axios from 'axios';
import './login.css';
import {Typography, Form, Input, Button, notification} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import logoHead from '../../../images/downloaded2.png';

const NormalLoginForm = props => {
  const onFinish = values => {
    // console.log('Received values of form: ', values);
    axios
      .post('/api/student/login/', {email: values.username, password: values.password})
      .then(res => {
        // console.log(res.data)
        if (res.data.token) {
          props.history.replace(`/result/2/${res.data.student.roll}`);
          localStorage.setItem('auth-token', res.data.token);
          localStorage.setItem('student', JSON.stringify(res.data.student));
        }
      })
      .catch(err => {
        notification['error']({
          message: 'Authentication Failed',
          description: 'INVALID CREDENTIALS',
        });
      });
  };

  const {Title} = Typography;
  return (
    <React.Fragment>
      <div className="login">
        <div className="header">
          <img src={logoHead} className="logoHead" alt="IIIT UNA" />
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
          <Form.Item>
            <Button type="danger" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
          <Form.Item>
            {/* <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item> */}

            <a style={{color: 'white', float: 'left'}} className="login-form-forgot" href="/forgot">
              Forgot password?
            </a>
          </Form.Item>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default NormalLoginForm;
