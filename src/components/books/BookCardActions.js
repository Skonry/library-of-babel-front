import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Menu, Dropdown } from 'antd';

import { getCurrentUserShelves, hasBookSelector } from '../../store/selectors';
import { addUserBook } from '../../store/features/userBooks';

function BookCardActions({ book }) {
  const dispatch = useDispatch();
  const shelves = useSelector(getCurrentUserShelves);
  const hasBook = useSelector(state => hasBookSelector(state, book.id));

  const handleAddUserBook = (shelfId, event) => {
    event.domEvent.stopPropagation();
    
    dispatch(addUserBook({shelfId, bookId: book.id}));
  }

  return (
    <div>
      {hasBook ? (<p>Already in library</p>) : (
        <>
          <p>Add book to your library</p>
          <Dropdown
            overlay={(
              <Menu>
                {shelves.map(shelf => (
                  <Menu.Item key={shelf.name} onClick={(e) => handleAddUserBook(shelf.id, e)}>
                    {shelf.name}
                  </Menu.Item>
                ))}
              </Menu>
            )}
          >
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Select shelf 
          </a>
          </Dropdown>
        </>
        )
      }
    </div>
  );
}

export default BookCardActions;