import styled from 'styled-components';

export const CardContainer = styled.article`
  width: 100%;
  height: 12rem;
  background-color: ${props => props.theme.bg2};
  border: ${props => props.theme.border};
  border-radius: 0.75rem;
  margin: 0.3rem 0;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;

  @media screen and (min-width: 768px) {
    width: 16rem;
    margin: 0.6rem;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  margin-bottom: 1rem;
  padding: 5px;
  border-radius: 100%;
  background-color: ${props => props.logoBgColor};

  svg {
    height: 1.8rem;
    width: 1.8rem;
    fill: ${props => props.logoColor}
  }
`;

export const Label = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
`;

export const CaseNumber = styled.span`
  font-size: 2.3rem;
  font-weight: 700;
  color: ${props => props.color};
`;