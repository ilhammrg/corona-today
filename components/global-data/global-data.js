import { GlobalDataContainer, Title } from './global-data.styles';
import CardBig from '../card-big/card-big';
import ConfirmedLogo from '../confirmed-logo/confirmed-logo';
import RecoveredLogo from '../recovered-logo/recovered-logo';
import DeathLogo from '../death-logo/death-logo';

import { useSelector } from 'react-redux';

const GlobalData = () => {
  const covidsData = useSelector((state) => state.covids);
  const { globalConfirmed, globalRecovered, globalDeaths } = covidsData;
  return (
    <GlobalDataContainer>
      <Title>Global Summary</Title>
      <CardBig label='Confirmed Cases' cases={globalConfirmed} logoBgColor='rgb(50, 130, 184, 0.2)' logoColor='blue' logo={<ConfirmedLogo />} />
      <CardBig label='Recovered Cases' cases={globalRecovered} logoBgColor='rgb(98, 210, 162, 0.2)' logoColor='green' logo={<RecoveredLogo />} />
      <CardBig label='Death Cases' cases={globalDeaths} logoBgColor='rgba(234, 84, 85, 0.2)' logoColor='red' logo={<DeathLogo />} />
    </GlobalDataContainer>
  );
};

export default GlobalData;
