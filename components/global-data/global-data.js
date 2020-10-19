import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Moment from 'react-moment';

import { getGlobalData } from '../../redux/covids/covid-actions';

import { DataContainer, Title, LastUpdated } from './global-data.styles';
import CardBig from '../card-big/card-big';
import ConfirmedLogo from '../confirmed-logo/confirmed-logo';
import RecoveredLogo from '../recovered-logo/recovered-logo';
import DeathLogo from '../death-logo/death-logo';

const GlobalData = () => {
  const dispatch = useDispatch();
  const globalDataSummary = useSelector((state) => state.covids.globalSummary);
  const { totalConfirmed, totalRecovered, totalDeaths, lastUpdate } = globalDataSummary;
  
  useEffect(() => {
    dispatch(getGlobalData());
  }, [dispatch]);

  return (
    <DataContainer>
      <Title>Global</Title>
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
};

export default GlobalData;
