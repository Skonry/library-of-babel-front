import React from 'react';
import { BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import { Layout } from 'antd';

import Login from './pages/LoginForm';
import Registration from './pages/RegistrationForm';
import AddBook from './pages/AddBook';
import AddReview from './pages/AddReview';
import AddShelf from './pages/AddShelf';
import Books from './pages/Books';
import BookDetails from './pages/BookDetails';
import EditReview from './pages/EditReview';
import Library from './pages/Library';
import Shelf from './pages/Shelf';
import PrivateRoute from './hocs/PrivateRoute';
import Navigation from './components/Navigation';

function App() {
  const userIsAuthenticated = sessionStorage.getItem('token') ? true : false;

  return (
    <BrowserRouter>
      <Layout className="layout" style={{minHeight: '100%'}}>
        <Layout.Header style={{backgroundColor: 'white'}}>
          <Navigation />
        </Layout.Header>
        <Layout.Content style={{padding: '40px', width: '1280px', margin: '0 auto'}}>
          <Switch>
            <Route 
              exact 
              path="/" 
              render={({ location }) => 
                userIsAuthenticated ?
                  <Redirect 
                    to={{
                      pathname: "/library",
                      state: { from: location }
                    }}
                  />
                  :
                  <Redirect 
                    to={{
                      pathname: "/books",
                      state: { from: location }
                    }}
                  />
              }
            >
            </Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/registration" component={Registration}></Route>
            <Route exact path="/books" component={Books}></Route>
            <PrivateRoute exact path="/library" >
              <Library />
            </PrivateRoute>
            <PrivateRoute path="/library/shelves/add-shelf" >
              <AddShelf />
            </PrivateRoute>
            <PrivateRoute path="/library/shelves/:name" >
              <Shelf />
            </PrivateRoute>
            <PrivateRoute exact path="/books/add-book" >
              <AddBook />
            </PrivateRoute>
            <Route exact path="/books/:bookId" component={BookDetails}></Route>
            <PrivateRoute exact path="/books/:bookId/add-review" >
              <AddReview />
            </PrivateRoute>
            <PrivateRoute exact path="/books/:bookId/edit-review/:reviewId" >
              <EditReview />
            </PrivateRoute>
          </Switch>
        </Layout.Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App;