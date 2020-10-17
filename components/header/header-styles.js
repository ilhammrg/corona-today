import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
`;

export const ToggleThemeButton = styled(Button)`
  min-width: unset !important;
  width: 3rem !important;
  height: 3rem !important;
  position: fixed !important;
  top: 0.7rem !important;
  right: 0.7rem !important;
  /* background-color: #838383 !important; */
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
`;

export const AppName = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 2.5rem;
`;