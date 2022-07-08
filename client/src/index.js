import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import App from './App';
import Global from './GlobalStyles';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ApolloProvider client={client}>
        <Global />
        <App />
      </ApolloProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);
