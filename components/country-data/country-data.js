import Moment from 'react-moment';
import { useSelector } from 'react-redux';

import { DataContainer, LastUpdated } from '../global-data/global-data.styles';
import CardBig from '../card-big/card-big';
import CountryDropdown from '../country-dropdown/country-dropdown';
import ConfirmedLogo from '../confirmed-logo/confirmed-logo';
import RecoveredLogo from '../recovered-logo/recovered-logo';
import DeathLogo from '../death-logo/death-logo';

const CountryData = () => {
  const countryDataSummary = useSelector((state) => state.covids.countrySummary);
  const { totalConfirmed, totalRecovered, totalDeaths, lastUpdate } = countryDataSummary;

  return (
    <DataContainer>
      <CountryDropdown />
      {
        lastUpdate 
          ? <LastUpdated>Updated about <Moment fromNow>{lastUpdate}</Moment></LastUpdated> 
          : null
      }
      <CardBig label='Total Confirmed' cases={totalConfirmed} logoBgColor='rgb(255, 165, 0, 0.2)' logoColor='orange' logo={<ConfirmedLogo />} />
      <CardBig label='Total Recovered' cases={totalRecovered} logoBgColor='rgb(98, 210, 162, 0.2)' logoColor='green' logo={<RecoveredLogo  />} />
      <CardBig label='Total Deaths' cases={totalDeaths} logoBgColor='rgba(234, 84, 85, 0.2)' logoColor='red' logo={<DeathLogo />} />
    </DataContainer>
  );
}

export default CountryData;
