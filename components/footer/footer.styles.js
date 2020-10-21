import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  p {
    color: ${props => props.theme.font2};
  }

  #footer-source {
    display: flex;
    align-items: center;

    a {
      margin-left: 5px;
    }
  }

  #footer-accent {
    margin-bottom: 0.4rem;
    display: flex;
    align-items: center;

    svg {
      margin: 0 3px;
      fill: #d7385e;
    }
  }

  #footer-about {
    margin-bottom: 0.4rem;
  }

  @media screen and (min-width: 768px) {
    display: grid;

    #footer-accent {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      margin-bottom: 0;
    }

    #footer-about {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
      margin-bottom: 0;
    }

    #footer-source {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
    }

  }
`;