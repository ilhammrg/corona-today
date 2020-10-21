import Moment from 'react-moment';
import { useSelector } from 'react-redux';

import { DataContainer, LastUpdated, Title } from '../global-data/global-data.styles';
import CardBig from '../card-big/card-big';
import ConfirmedLogo from '../confirmed-logo/confirmed-logo';
import RecoveredLogo from '../recovered-logo/recovered-logo';
import DeathLogo from '../death-logo/death-logo';
import Dropdown from '../custom-dropdown/dropdown';

const CountryData = () => {
  const countryDataSummary = useSelector((state) => state.covids.countrySummary);
  const { totalConfirmed, totalRecovered, totalDeaths, lastUpdate } = countryDataSummary;

  return (
    <DataContainer>
      <Title>Per Country Data</Title>
      <Dropdown />
      {
        lastUpdate 
          ? <LastUpdated>Updated about <Moment fromNow>{lastUpdate}</Moment></LastUpdated> 
          : null
      }
      <CardBig label='Total Confirmed' cases={totalConfirmed} logoBgColor='rgb(255, 165, 0, 0.2)' logoColor='#ff9a3c' logo={<ConfirmedLogo />} />
      <CardBig label='Recovered' cases={totalRecovered} logoBgColor='rgb(98, 210, 162, 0.2)' logoColor='#4ecca3' logo={<RecoveredLogo  />} />
      <CardBig label='Deaths' cases={totalDeaths} logoBgColor='rgba(234, 84, 85, 0.2)' logoColor='#ea5455' logo={<DeathLogo />} />
    </DataContainer>
  );
}

export default CountryData;
