import styled, { createGlobalStyle }  from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::selection {
    background: #c3aed6;
    color: white;
  }
  ::-moz-selection {
    background: #c3aed6;
    color: white;
  }

  body {
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-y: scroll;
    overflow-x: auto;
    -webkit-transition: background-color 250ms linear;
    -moz-transition: background-color 250ms linear;
    -o-transition: background-color 250ms linear;
    -ms-transition: background-color 250ms linear;
    transition: background-color 250ms linear;
  }

  #__next {
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;

    @media screen and (min-width: 1024px) {
      width: 1200px;
      margin: auto;
    }
  }
`;

export const Light = createGlobalStyle`
  body {
    background-color: #f5f8ff;
    color: #2a2344;
  }
`;

export const Dark = createGlobalStyle`
  body {
    background-color: #201f21;
    color: #dfdce4;
  }
`;

export const TextNormal = styled.p`
  font-size: 1rem;
`;

export const LinkOutside = styled.a`
  text-decoration: none;
  color: #7a88d2;
  font-weight: 500;
`;