import styled, { css } from 'styled-components';

export const StyledTitle = styled.h1`
  font-size: 42px;
  margin-bottom: 100px;

  @media (max-width: 850px) {
    margin-bottom: 50px;
  }
`;

export const StyledCounterCart = styled.div`
  .counter {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9;

    cursor: pointer;
    background-color: #1d1f22;
    border-radius: 50%;

    font-size: 14px;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 200;
    color: white;

    ${(props) => {
      switch (props.type) {
        case 'cart':
          return css`
            top: 21px;
            right: -13px;
            width: 20px;
            height: 20px;
          `;

        case 'card':
          return css`
            top: -7px;
            right: -7px;
            width: 25px;
            height: 25px;
          `;
        default:
          return css``;
      }
    }}
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
    button:not(:last-child) {
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

      case 'SmallInCard':
        return css`
          border-radius: 5px;
          background-color: #ffffff;
          border: 1px solid #000000;
          padding: 10px;

          &::before,
          &::after {
           
            content: '';
            position: absolute;
            right: 50px;
            bottom: 15px;
            border: 10px solid transparent;
            border-top: 10px solid #000000;
          }
          &::after {
            border-top: 10px solid white;
            bottom: 16px;
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
