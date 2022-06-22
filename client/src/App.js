import React from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { Category, Cart, PDP } from './pages';

class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <Header />
        <Routes>
          <Route path="/" component={Category} exact />
          <Route path="/cart" component={Cart} exact />
          <Route path="/pdp" component={PDP} exact />
        </Routes>
      </AppWrapper>
    );
  }
}

export default App;

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
`;

