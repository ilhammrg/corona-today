import styled from 'styled-components';

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

export const MenuList = styled.ul`
  position: fixed;
  top: 0.7rem;
  right: 0.7rem;
  z-index: 99 !important;
  background-color: transparent;
  width: fit-content;

  li {
    list-style-type: none;
    margin-bottom: 0.7rem;
  }
`;

export const CircleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: #7a88d2;
  border-radius: 100%;
  padding: 0;
  overflow: hidden;
  border: none;
  outline: none;
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    height: 1.8rem;
    width: 1.8rem;
    fill: #e7e4f5;
  }

  img {
    height: 80px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${props => props.theme.font1};
`;