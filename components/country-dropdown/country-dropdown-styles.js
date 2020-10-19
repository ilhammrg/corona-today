import styled from 'styled-components';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export const FormControlStyled = styled(FormControl)`
  width: 200px;
  margin: 1rem 0 !important;

  label, .MuiSelect-select, .MuiSelect-icon, .MuiFormLabel-root.Mui-focused {
    color: ${props => props.theme.font1};
    font-family: 'Inter', sans-serif !important;
  }

  .MuiInput-underline {
    border-bottom: 1px solid ${props => props.theme.font1};
  }

  @media screen and (min-width: 768px) {
    grid-row: 1 / 2;
    grid-column: 1 / 4;
    margin: 0.6rem auto !important;
  }
`;

export const InputLabelStyled = styled(InputLabel)`
  font-size: 1rem;
`;

export const SelectStyled = styled(Select)`

`;

export const MenuItemStyled = styled(MenuItem)`

`;