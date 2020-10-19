import { useSelector, useDispatch } from 'react-redux';
import { getCountryData } from '../../redux/covids/covid-actions';

import { FormControlStyled, InputLabelStyled, SelectStyled, MenuItemStyled } from './country-dropdown-styles';

const CountryDropdown = () => {
  const countryList = useSelector((state) => state.covids.countryList);
  const dispatch = useDispatch();

  const [country, setCountry] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setCountry(event.target.value);
    dispatch(getCountryData(event.target.value));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <FormControlStyled>
      <InputLabelStyled id="demo-controlled-open-select-label">Select Country</InputLabelStyled>
      <SelectStyled
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={country}
        onChange={handleChange}
      >
        {
          countryList
            ? countryList.map((country, index) => <MenuItemStyled value={country.name} key={index}>{country.name}</MenuItemStyled>)
            : <MenuItemStyled value='Country'>Loading...</MenuItemStyled>
        }
      </SelectStyled>
    </FormControlStyled>
  );
};

export default CountryDropdown;
