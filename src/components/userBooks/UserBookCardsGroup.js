import React from 'react';
import { List } from 'antd';
import UserBookCard from './UserBookCard';

function UserBookCardsGroup({ userBooks }) {
  return (  
    <List
      grid={{
        xs: 1,
        sm: 1,
        md: 1,
        lg: 2,
        xl: 3,
        xxl: 4
      }}
      style={{textAlign: 'center'}}
      dataSource={userBooks}
      renderItem={item => (
        <UserBookCard userBook={item} />
      )}
    /> 
  );
}

export default UserBookCardsGroup;