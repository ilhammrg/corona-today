import styled from 'styled-components';

export const ChartContainer = styled.div`
  background-color: ${props => props.theme.bg2};
  padding: 1.5rem 1rem 0.7rem 0;
  border: ${props => props.theme.border};
  border-radius: 0.75rem;
  width: 95%;
  height: 350px;

  .recharts-default-tooltip {
    background-color: ${props => props.theme.bg2} !important;
  }

  tspan {
    fill: ${props => props.theme.font1} !important;
  }

  @media screen and (min-width: 700px) {
    width: 700px;
  }

  @media screen and (min-width: 1024px) {
    width: 900px;
    height: 400px;
  }

  @media screen and (min-width: 1280px) {
    width: 1024px;
  }
`;