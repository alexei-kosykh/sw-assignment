import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import App from './App';

import { createGlobalStyle } from 'styled-components';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&family=Roboto&family=Source+Sans+Pro&display=swap');
  font-family: "Raleway", sans-serif;
  font-size: 16px;

}
`;

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <Global />
      <App />
    </ApolloProvider>
  </Router>,
  document.getElementById('root')
);
