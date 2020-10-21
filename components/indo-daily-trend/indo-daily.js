import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import moment from 'moment';

import { DataContainer, Title } from '../global-data/global-data.styles';
import { ChartContainer } from './indo-daily-styles';

const IndoDaily = ({ dailyCase }) => {
  const data = dailyCase.map(({
    tanggal,
    jumlahKasusKumulatif,
    jumlahPasienSembuh,
    jumlahPasienMeninggal,
  }) => ({
    name: moment(tanggal).format('DD/MM'),
    Positive: jumlahKasusKumulatif,
    Recovered: jumlahPasienSembuh,
    Deaths: jumlahPasienMeninggal,
  }));

  return(
    <DataContainer>
      <Title>Daily Trends</Title>
      <ChartContainer>
        <ResponsiveContainer height='100%' width='100%'>
          <AreaChart
            data={data}
            margin={{
              top: 10, right: 30, left: 0, bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="Positive" stackId="1" stroke="#ff9a3c" fill="#ff9a3c" />
            <Area type="monotone" dataKey="Recovered" stackId="2" stroke="#4ecca3" fill="#4ecca3" />
            <Area type="monotone" dataKey="Deaths" stackId="3" stroke="#ea5455" fill="#ea5455" />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>
    </DataContainer>
  );
};

export default IndoDaily;
