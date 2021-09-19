import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Menu, Button } from 'antd';

const authenticatedMenu = [
  {
    name: 'My Library',
    to: '/library'
  },
  {
    name: 'Browse Books',
    to: '/books'
  }
];
const notAuthenticatedMenu = [
  {
    name: 'Browse Books',
    to: '/books'
  }
];

export default function Navigation() {
  const userIsAuthenticated = sessionStorage.getItem('token') ? true : false;
  const history = useHistory();
  const location = useLocation();

  const logOutUser = () => {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    history.push('/');
  }
  const getCurrentMenuKey = () => {
    const rootPath = '/' + location.pathname.split('/')[1];
    if (userIsAuthenticated) {
      const item = authenticatedMenu.find(item => item.to === rootPath);
      return item && item.name;
    }
    else {
      const item = notAuthenticatedMenu.find(item => item.to === rootPath);
      return item && item.name;
    }
  }

  return (
    <>
      <Menu 
        mode="horizontal"
        selectedKeys={getCurrentMenuKey()}
      >
        {userIsAuthenticated ? 
          <>
            {authenticatedMenu.map(item => (
              <Menu.Item key={item.name}>
                <Link to={item.to}>
                  {item.name}
                </Link>
              </Menu.Item>
            ))}
            <Menu.Item key="logout" style={{marginLeft: 'auto'}}>
              <Button onClick={logOutUser}>Log out</Button>
            </Menu.Item>
            
          </>
          :
          <>
            {notAuthenticatedMenu.map(item => (
              <Menu.Item key={item.name}>
                <Link to={item.to}>
                  {item.name}
                </Link>
              </Menu.Item>
            ))}
            <Menu.Item key="login" style={{marginLeft: 'auto'}}>
              <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item key="registration">
              <Link to="/registration">Registration</Link>
            </Menu.Item>
          </>
        }
      </Menu>
    </>
  );
}