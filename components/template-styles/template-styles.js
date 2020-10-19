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
    background-color: ${props => props.theme.bg1};
    color: ${props => props.theme.font1};
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-y: scroll;
    overflow-x: auto;
    -webkit-transition: background-color 150ms linear;
    -moz-transition: background-color 150ms linear;
    -o-transition: background-color 150ms linear;
    -ms-transition: background-color 150ms linear;
    transition: background-color 150ms linear;
  }

  #__next {
    min-height: 100vh;
    width: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  .MuiPaper-root {
    background-color: ${props => props.theme.bg2} !important;
  }

  .MuiMenu-list {
    background-color: ${props => props.theme.bg2};
    color: ${props => props.theme.font1};
    overflow-y: auto;
    overflow-x: hidden;
    height: 24rem !important;

    .MuiListItem-root {
      font-family: 'Inter', sans-serif !important;
    }
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