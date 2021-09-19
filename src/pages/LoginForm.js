import React from 'react';
import { Button, Typography, Form, Input, Alert } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { authenticateUser } from '../store/features/users';

function LoginForm() {
  const formError = useSelector(state => state.users.loginFormError);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (values) => {
    dispatch(authenticateUser(values)).then(() => history.push('/library'));
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <div>
        <Typography.Title level={2} style={{textAlign: 'center', padding: '30px'}}>Login</Typography.Title>
        <Form 
          labelCol={{span: 8}}
          wrapperCol={{span: 16}}
          onFinish={handleSubmit}
        >
          <Form.Item
            label="E-mail"
            name="email"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
            <Button type="primary" htmlType="submit">Login</Button>
          </Form.Item>
          {formError && <Alert message={formError} />}
        </Form>
      </div>
    </div>
  );
}

export default LoginForm;