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
          <Route path="/" element={<Category />} exact />
          <Route path="/cart" element={<Cart />} exact />
          <Route path="/pdp" element={<PDP />} exact />
        </Routes>
      </AppWrapper>
    );
  }
}

export default App;

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0 7% 2%;

  color: #1d1f22;
  background-color: #ffffff;
`;
