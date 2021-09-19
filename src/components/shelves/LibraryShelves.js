import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Row, Col, Select} from 'antd';

import { selectShelf } from '../../store/features/shelves';

function LibraryShelves({ shelves }) {
  const history = useHistory();

  const selectedShelf = useSelector(state => state.shelves.selectedShelf);

  const dispatch = useDispatch();

  const handleSelectShelf = (shelfName) => {
    dispatch(selectShelf(shelfName));
  }

  return (
    <Row gutter={64}>
      <Col span={4}>
        Selected shelf: {selectedShelf}
      </Col>
      <Col span={4}>
        <Select onChange={handleSelectShelf} style={{width: '200px'}}>
          {shelves.map(shelf => (
            <Select.Option key={shelf.name} value={shelf.name}>
              {shelf.name}
            </Select.Option>
          ))}
        </Select>
      </Col>
      <Col span={4}>
        <Button onClick={() => history.push('/library/shelves/add-shelf')}>
          Create new shelf
        </Button>
      </Col>
      
    </Row>
  );
}

export default LibraryShelves;