import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// O servidor esta fazendo a renderização da função App //

ReactDOM.hydrate(
  
    <App />,
  
  document.getElementById('root')
);


