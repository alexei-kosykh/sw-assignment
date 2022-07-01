import styled from 'styled-components';

export const StyledTitle = styled.h1`
  font-size: 42px;
  margin-bottom: 100px;
`;
export const StyledTextItem = styled.div`
  h2,
  h3 {
    font-size: 30px;
  }
  h3 {
    margin-bottom: 40px;
  }
  h2 {
    font-weight: 600;
  }

  h4 {
    font-family: 'Roboto Condensed', sans-serif;
  }

  h4,
  h4 + p {
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  h4 + p {
    font-size: 24px;
  }
  h4 + div {
    display: flex;
    margin-bottom: 30px;
    & button:not(:last-child) {
      margin-right: 10px;
    }
  }
`;
