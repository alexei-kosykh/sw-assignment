import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import App from './App';
import Global from './GlobalStyles';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});



ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <Global />
      <App />
    </ApolloProvider>
  </Router>,
  document.getElementById('root')
);
