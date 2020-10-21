import styled from 'styled-components';

export const ChartContainer = styled.div`
  width: 95%;
  height: 300px;
  margin-top: 1rem;
  background-color: ${props => props.theme.bg2};
  border: ${props => props.theme.border};
  border-radius: 0.75rem;
  padding: 1.5rem 1rem;

  .recharts-default-tooltip {
    background-color: ${props => props.theme.bg2} !important;
    border: ${props => props.theme.border} !important;
    border-radius: 0.75rem !important;
  }

  .recharts-text {
    fill: ${props => props.theme.font1};
    font-size: 0.5rem;
  }

  .recharts-dot {
    stroke: ${props => props.theme.bg1} !important;
  }

  @media screen and (min-width: 768px) {
    width: 810px;
    height: 400px;
  }

  @media screen and (min-width: 1024px) {
    width: 810px;
    height: 450px;
  }
`;