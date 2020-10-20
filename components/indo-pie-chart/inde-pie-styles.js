import styled from 'styled-components';

export const PieContainer = styled.div`
  background-color: ${props => props.theme.bg2};
  border: ${props => props.theme.border};
  border-radius: 0.75rem;
  padding-bottom: 1rem;
  width: 250px;
  height: 250px;

  path {
    stroke: transparent !important;
  }

  .recharts-default-tooltip {
    background-color: ${props => props.theme.bg2} !important;
  }
`;