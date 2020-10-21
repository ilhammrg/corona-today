import styled from 'styled-components';
import Select from 'react-select';

export const SelectStyled = styled(Select)`
  width: 250px;
  margin: 1rem auto 0.5rem auto;

  @media screen and (min-width: 768px) {
    grid-row: 2 / 3;
    grid-column: 1 / 4;
  }
`;