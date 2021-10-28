import React from 'react';
import { Button, Typography, Form, Input, Alert } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { registerUser } from '../store/features/users';

function RegistrationForm() {
  const formError = useSelector(state => state.users.registrationFormError);
  const dispatch = useDispatch();
  const history = useHistory();
  
  const handleSubmit = (values) => {
    dispatch(registerUser(values)).then(() => history.push('/library'));
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <div>
        <Typography.Title level={2} style={{textAlign: 'center', padding: '30px'}}>Create new account</Typography.Title>
        <Form 
          labelCol={{span: 8}}
          wrapperCol={{span: 16}}
          onFinish={handleSubmit}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {required: true, message: 'Name is required'},
              {min: 3, message: 'Name must be 3 characters or more'},
              {max: 32, message: 'Name must be 32 characters or less'}
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="E-mail"
            name="email"
            rules={[
              {required: true, message: 'E-mail is required'},
              {pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Invalid e-mail'}
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {required: true, message: 'Password is required'},
              {min: 6, message: 'Password must be 6 characters or more'},
              {max: 32, message: 'Password must be 128 characters or less'}
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
            <Button type="primary" htmlType="submit">Sign up</Button>
          </Form.Item>
          {formError && <Alert message={formError} />}
        </Form>
      </div>
    </div>
  );
}

export default RegistrationForm;