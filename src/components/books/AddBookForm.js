import React, { useState } from 'react';
import { Form, Button, Input, Upload } from 'antd';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { addNewBook } from '../../store/features/books';
import { toBase64 } from '../../helpers';

function AddBookForm() {
  const [coverImage, setCoverImage] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    const result = await toBase64(coverImage);
    dispatch(addNewBook({...values, cover: result})).then(() => history.push('/books'));
  }

  const handleUploadImage = (file) => {
    setCoverImage(file);
    return false;
  }

  return (
    <Form 
      onFinish={handleSubmit}
      labelCol={{span: 8}}
      wrapperCol={{span:16}}
    >
      <Form.Item
        label="Title"
        name="title"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Author"
        name="author"
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Upload beforeUpload={handleUploadImage}>
          <Button>Select cover image</Button>
        </Upload>
      </Form.Item>
      <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
        <Button type="primary" htmlType="submit">Add book</Button>
      </Form.Item> 
    </Form>
  );
}

export default AddBookForm;