import Tilt from 'react-parallax-tilt';
import Moment from 'react-moment';

import { SummaryContainer, Data, Label, Value, LastUpdated, SummaryWrap } from './summary-styles';
import { SectionTitle } from '../template-styles/template-styles';
import SummaryValue from '../summary-value/summary-value';
import IndoDailyChart from '../indo-daily-charts/indo-daily-charts';
import IndoPieChart from '../indo-pie-chart/indo-pie-chart';

const Summary = ({ summary, dailyCase }) => {
  const { jumlahKasus, meninggal, perawatan, sembuh, lastUpdate } = summary;
  const { 
    jumlahSpesimenDiperiksa, 
    jumlahKasusDiperiksa, 
    jumlahNegatif, 
    persentasePasienSembuh,
    persentasePasienMeninggal,
    persentasePasiendalamPerawat 
  } = dailyCase[dailyCase.length - 2];

  return (
    <SummaryContainer>
      <SectionTitle>Indonesia COVID-19 Summary</SectionTitle>
      <SummaryWrap>
        <Tilt 
          className='card-tilt'
          glarePosition='all'
          tiltMaxAngleX='8'
          tiltMaxAngleY='8'
          tiltReverse={true}
        >
          <Data>
            <ul className='labels'>
              <li><Label>Total confirmed</Label></li>
              <li><Label>Active</Label></li>
              <li> <Label>Recovered</Label></li>
              <li><Label>Deaths</Label></li> 
              <li><Label>Tested specimen</Label></li> 
              <li><Label>Tested cases</Label></li> 
              <li><Label>Negative cases</Label></li> 
            </ul>
            <ul className='values'>
              <li><Value fontColor='darkviolet'><SummaryValue cases={jumlahKasus} /></Value></li>
              <li><Value fontColor='orange'><SummaryValue cases={perawatan} /></Value></li>
              <li><Value fontColor='green'><SummaryValue cases={sembuh} /></Value></li>
              <li><Value fontColor='red'><SummaryValue cases={meninggal} /></Value></li>
              <li><Value fontColor='coral'><SummaryValue cases={jumlahSpesimenDiperiksa} /></Value></li>
              <li><Value fontColor='brown'><SummaryValue cases={jumlahKasusDiperiksa} /></Value></li>
              <li><Value fontColor='cornflowerblue'><SummaryValue cases={jumlahNegatif} /></Value></li>
            </ul>
            {
              lastUpdate 
                ? <LastUpdated>Updated about <Moment fromNow>{lastUpdate}</Moment></LastUpdated> 
                : null
            }
          </Data>
        </Tilt>
        <Tilt 
          className='pie-tilt'
          glarePosition='all'
          tiltMaxAngleX='8'
          tiltMaxAngleY='8'
          tiltReverse={true}
        >
          <IndoPieChart 
            active={persentasePasiendalamPerawat} 
            recovered={persentasePasienSembuh} 
            deaths={persentasePasienMeninggal} 
          />
        </Tilt>
      </SummaryWrap>
      <SectionTitle>Indonesia COVID-19 last 30 day cases</SectionTitle>
      <IndoDailyChart dailyCase={dailyCase} />
    </SummaryContainer>
  );
};

export default Summary;
