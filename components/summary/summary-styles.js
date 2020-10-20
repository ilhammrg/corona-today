import styled from 'styled-components';

export const SummaryContainer = styled.section`
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 0.7rem 0;
  }

  .card-tilt {
    width: 95%;
    margin-bottom: 1.5rem;
  }

  .pie-tilt {
    width: fit-content;
  }

  @media screen and (min-width: 768px) {
    width: fit-content;

    .card-tilt {
      width: fit-content;
    }
  }
`;

export const SummaryWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  width: 100%;

  @media screen and (min-width: 768px) {
    grid-gap: 1rem;
    flex-direction: row;
  }
`;

export const Data = styled.section`
  background-color: ${props => props.theme.bg2};
  border-radius: 0.75rem;
  border: ${props => props.theme.border};
  padding: 1rem;
  width: 100%;
  display: grid;
  user-select: none;

  ul {
    list-style-type: none;
  }

  ul.labels {
    grid-column: 1 / 2;
  }

  ul.values {
    grid-column: 2 / 3;
  }

  li {
    width: fit-content;
  }

  @media screen and (min-width: 768px) {
    width: 24rem;
    margin: auto;
  }
`;

export const Label = styled.span`
  font-weight: 500;
  color: ${props => props.theme.font1};
`;

export const Value = styled.span`
  font-weight: 500;
  color: ${props => props.fontColor};
`;

export const LastUpdated = styled.span`
  color: #858585;
  font-size: 0.8rem;
  margin-top: 1rem;
  margin-left: auto;
  grid-column: 1 / 3;
  grid-row: 2;
`;