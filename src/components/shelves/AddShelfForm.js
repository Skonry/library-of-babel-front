import React, { useState } from 'react';
import { Form, Button, Alert, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { addShelf } from '../../store/features/shelves';
import { getCurrentUserShelves } from '../../store/selectors';

function AddShelfForm() {
  const shelves = useSelector(getCurrentUserShelves);
  const history = useHistory();
  const dispatch = useDispatch();
  const [formError, setFormError] = useState(null);

  const handleSubmit = (values) => {
    const shelfNameAlreadyExists = !!shelves.find(shelf => shelf.name === values.name);
    if (shelfNameAlreadyExists) {
      setFormError('Shelf with such name already exists');
      return;
    }
    dispatch(addShelf(values)).then(() => history.push('/library'));
  }

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        label="Name"
        name="name"
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Add shelf</Button>
      </Form.Item>
      {formError && <Alert message={formError} />}
    </Form>
  );
}

export default AddShelfForm;