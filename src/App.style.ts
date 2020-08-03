import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --falu-red: hsla(5, 53%, 32%, 1);
    --bdazzled-blue: hsla(218, 42%, 41%, 1);
    --hookers-green: hsla(163, 18%, 37%, 1);
    --silver-pink: hsla(10, 21%, 68%, 1);
    --raisin-black: hsla(280, 12%, 15%, 1);
  }

  body {
    background-color: var(--raisin-black);
    color: var(--silver-pink);
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
  }
`;
