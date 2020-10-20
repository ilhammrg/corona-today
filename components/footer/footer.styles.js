import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  p {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: #858585;
    margin-bottom: 0.4rem;

    svg {
      margin: 0 3px;
      fill: #d7385e;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;

    p {
      margin-bottom: 0;
    }
  }
`;