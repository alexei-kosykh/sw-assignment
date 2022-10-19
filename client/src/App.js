import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import { Header } from './components';
import { CategoryContainer, CartContainer, PDP } from './pages';

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header />
        <Routes>
          <Route path="/" element={<CategoryContainer />} exact />
          <Route path="/cart" element={<CartContainer />} exact />
          <Route path="/pdp" element={<PDP />} exact />
        </Routes>
      </AppWrapper>
    );
  }
}

export default App;

const AppWrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 0 7% 2%;

  color: #1d1f22;
  background-color: #ffffff;
`;
