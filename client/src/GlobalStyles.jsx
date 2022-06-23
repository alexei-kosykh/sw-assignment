import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: 400;
}
ul[class],
ol[class] {
  padding: 0;
  list-style: none;
}

body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

input,
button,
textarea,
select {
  font: inherit;
  border: 0;
  outline: none;
}

a:active,
a:hover,
a {
  text-decoration: none;
  color: black;
}
`;
