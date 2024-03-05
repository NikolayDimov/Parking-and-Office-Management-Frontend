import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --grey: #3c4245;
  --grey-light: #8a8e8f;
  --grey-dark: #242829;
  --blue-green: #729292;
  --blue-green-light: #aabebe;
  --blue-green-dark: #394949;
  --pink: #dfcdc1;
  --pink-light: #f9f5f3;
  --pink-dark: #867b74;
  --beige: #e7dfd6;
  --beige-light: #f5f2ef;
  --beige-dark: #8b8680;
  --brown: #d0bba2;
  --brown-light: #7d7061;
  --brown-dark: #3e3831;
  --spot-green: #00FF40;

  --font-family: 'Noto Sans', sans-serif;
}

body {
  font-family: var(--font-family);
}

`;

export { GlobalStyle };
