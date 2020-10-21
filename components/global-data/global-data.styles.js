import styled from 'styled-components';

export const DataContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  .card-tilt {
    width: 95%;
  }

  @media screen and (min-width: 768px) {
    display: grid;
    width: fit-content;
    margin: 0.5rem auto;

    .card-tilt {
      width: 100%;
    }

    #province-chart {
      grid-row: 3;
    }
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;

  @media screen and (min-width: 768px) {
    grid-row: 1 / 2;
    grid-column: 1 / 4;
    margin: auto;
  }
`;

export const LastUpdated = styled.span`
  margin: auto;
  grid-column: 1 / 4;
  font-size: 0.8rem; 
  color: #858585;
`;