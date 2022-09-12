import styled, { css } from 'styled-components';

export const StyledTitle = styled.h1`
  font-size: 42px;
  margin-bottom: 100px;

  @media (max-width: 850px) {
    margin-bottom: 50px;
  }
`;
export const StyledTextItem = styled.div`
  h4 {
    font-family: 'Roboto Condensed', sans-serif;
  }
  h4 + p {
    text-transform: uppercase;
  }

  h4 + div {
    display: flex;
    & button:not(:last-child) {
      margin-right: 7px;
    }
    &:last-child {
      margin-bottom: 7px;
    }
  }

  ${(props) => {
    switch (props.elemSize) {
      case 'Small':
        return css`
          h2 {
            margin-bottom: 5px;
          }
          p {
            font-weight: 500;
          }
        `;

      case 'Default':
        return css`
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

          div {
            margin-bottom: 10px;
          }

          h4,
          h4 + p {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 10px;
          }

          h4 + p {
            font-size: 24px;
          }
        `;
      default:
        return css``;
    }
  }}
`;
