import { useEffect, useState } from 'react';
import Moment from 'react-moment';

import { getIndonesiaSummary } from '../../api/api';

import { DataContainer, Title, LastUpdated } from '../global-data/global-data.styles';
import CardBig from '../card-big/card-big';
import ConfirmedLogo from '../confirmed-logo/confirmed-logo';
import RecoveredLogo from '../recovered-logo/recovered-logo';
import DeathLogo from '../death-logo/death-logo';
import BedLogo from '../bed-logo/bed-logo';
import CheckLogo from '../check-logo/check-logo';
import SecureLogo from '../secure-logo/secure-logo';

const IndoGlobal = ({ dailyCase }) => {
  const [indoGlobal, setIndoGlobal] = useState({ 
    perawatan: 0, 
    sembuh: 0, 
    meninggal: 0, 
    jumlahKasus: 0,
    jumlahKasusDiperiksa: 0,
    jumlahNegatif: 0,
    lastUpdate:'' 
  });
  const { perawatan, sembuh, meninggal, jumlahKasus, lastUpdate, jumlahKasusDiperiksa, jumlahNegatif } = indoGlobal;

  const fetchData = async () => {
    const indoGlobalData = await getIndonesiaSummary();
    const { jumlahKasusDiperiksa , jumlahNegatif } = dailyCase[dailyCase.length - 2];
    setIndoGlobal({ ...indoGlobalData, jumlahKasusDiperiksa, jumlahNegatif });
  };
  
  useEffect( () => {
    fetchData();
  }, []);

  return (
    <DataContainer>
      <Title>Indonesia COVID-19 Overviews</Title>
      {
        lastUpdate 
          ? <LastUpdated>Updated about <Moment fromNow>{lastUpdate}</Moment></LastUpdated> 
          : null
      }
      <CardBig label='Total Confirmed' cases={jumlahKasus} logoBgColor='rgb(255, 165, 0, 0.2)' logoColor='#ff9a3c' logo={<ConfirmedLogo />} />
      <CardBig label='Recovered' cases={sembuh} logoBgColor='rgb(98, 210, 162, 0.2)' logoColor='#4ecca3' logo={<RecoveredLogo  />} />
      <CardBig label='Deaths' cases={meninggal} logoBgColor='rgba(234, 84, 85, 0.2)' logoColor='#ea5455' logo={<DeathLogo />} />
      <CardBig label='Under Treatment' cases={perawatan} logoBgColor='rgba(118, 159, 205, 0.2)' logoColor='#769fcd' logo={<BedLogo />} />
      <CardBig label='Tested Cases' cases={jumlahKasusDiperiksa} logoBgColor='rgba(240, 138, 93, 0.2)' logoColor='#f08a5d' logo={<CheckLogo />} />
      <CardBig label='Negative Cases' cases={jumlahNegatif} logoBgColor='rgba(52, 152, 219, 0.2)' logoColor='#3498db' logo={<SecureLogo />} />
    </DataContainer>
  );
};

export default IndoGlobal;
