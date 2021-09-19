import React from 'react';
import { Typography, List, Avatar } from 'antd';

function BookReviews({reviews}) {
  return (
    <>
      <Typography.Title level={2}>Reviews</Typography.Title>
      <List
        dataSource={reviews}
        renderItem={review => (
          <List.Item>
            <List.Item.Meta 
              title={review.user.data.name}
              description={review.content}
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            />
          </List.Item>
        )}
      />
    </>
  );
}

export default BookReviews;