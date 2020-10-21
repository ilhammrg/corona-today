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

  .MuiIconButton-root {
    color: ${props => props.theme.font1} !important;

    &.Mui-disabled {
      color: ${props => props.theme.font3} !important;
    }
  }

  .MuiTableContainer-root {
    height: 30rem !important;
    overflow-y: scroll;
    border: ${props => props.theme.border} !important;
    border-radius: 0.75rem !important;
    background-color: ${props => props.theme.bg2} !important;
  }

  .MuiTableCell-root {
    border-bottom: ${props => props.theme.border2} !important;
    font-family: 'Inter', sans-serif !important;
  }

  .MuiTableCell-body, .MuiTableCell-head {
    color: ${props => props.theme.font1} !important;
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