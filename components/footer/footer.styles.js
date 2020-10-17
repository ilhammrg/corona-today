import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: #858585;

    svg {
      margin: 0 3px;
      fill: #d7385e;
    }
  }
`;

export const FlagImage = styled.img`
  margin: 0 3px;
  width: 1.3rem;
`;