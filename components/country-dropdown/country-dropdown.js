import { FormControlStyled, InputLabelStyled, SelectStyled, MenuItemStyled } from './country-dropdown-styles';

const CountryDropdown = () => {
  const [country, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <FormControlStyled>
      <InputLabelStyled id="demo-controlled-open-select-label">Country</InputLabelStyled>
      <SelectStyled
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={country}
        onChange={handleChange}
      >
        <MenuItemStyled value='Indonesia'>Indonesia</MenuItemStyled>
        <MenuItemStyled value='Malaysia'>Malaysia</MenuItemStyled>
        <MenuItemStyled value='Singapore'>Singapore</MenuItemStyled>
      </SelectStyled>
    </FormControlStyled>
  );
};

export default CountryDropdown;
