import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ children, ...props }) {
  return (
    <Route 
      {...props} 
      render={({ location, match }) => 
        sessionStorage.getItem('token') ? 
          React.cloneElement(children, {location, match}) 
          : <Redirect 
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
      } 
    />
  );
}

export default PrivateRoute;