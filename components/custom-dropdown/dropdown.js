import { useSelector, useDispatch } from 'react-redux';
import { getCountryData } from '../../redux/covids/covid-actions';

import { SelectStyled } from './dropdown-styles';

const Dropdown = () => {
  const countryList = useSelector((state) => state.covids.countryList);
  const { bg2, border, font1 } = useSelector((state) => state.theme.themes);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(getCountryData(event.value));
  };

  const options = countryList.map(({ name }) => ({
    value: name,
    label: name,
  }));

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: bg2,
      border: border
    }),
    menu: (provided, state) => ({
      ...provided,
      backgroundColor: bg2,
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'white' : font1,
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: font1
    }),
    input: (provided, state) => ({
      ...provided,
      color: font1
    }),
  }

  return (
      <SelectStyled
        theme={theme => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: '#7a88d2',
            primary: '#7a88d2',
          },
        })}
        styles={customStyles}
        instanceId
        options={options}
        placeholder='Select country...'
        onChange={handleChange} 
      />
  );
};

export default Dropdown;
