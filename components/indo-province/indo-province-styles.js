import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const CustomButton = styled.button`
  width: 120px;
  height: 44px;
  background-color: ${props => props.background};
  border: none;
  border-radius: 999px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  margin: 10px;
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.95);
  }
`;