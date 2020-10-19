import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 7.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;

  p {
    text-align: center;
  }

  a {
    text-decoration: none;
  }

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

export const ToggleThemeButton = styled(Button)`
  min-width: unset !important;
  width: 3rem !important;
  height: 3rem !important;
  position: fixed !important;
  top: 0.7rem !important;
  right: 0.7rem !important;
  z-index: 99 !important;
  background-color: #7a88d2 !important;
  padding: 0 !important;
  border-radius: 100% !important;

  svg {
    height: 1.8rem;
    width: 1.8rem;
    fill: #ffe05d;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${props => props.theme.font1};
`;