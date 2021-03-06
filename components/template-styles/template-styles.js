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

    @media screen and (min-width: 1024px) {
      #content {
        width: 900px;
        margin: 0 auto;
      }
    }
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
`;

export const TextNormal = styled.p`
  font-size: 1rem;
`;

export const LinkOutside = styled.a`
  text-decoration: none;
  color: #7a88d2;
  font-weight: 500;
`;