import styled from 'styled-components';

export const CardContainer = styled.article`
  width: 16rem;
  height: 16rem;
  background-color: ${props => props.background};
  border: ${props => props.border};
  border-radius: 0.75rem;
  margin: 0.8rem 0;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  margin: 1.7rem 0;
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
  font-weight: 400;
  color: #858585;
`;

export const CaseNumber = styled.span`
  font-size: 2.3rem;
  font-weight: 700;
  color: ${props => props.color};
`;