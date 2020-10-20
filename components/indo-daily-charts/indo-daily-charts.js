import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import moment from 'moment';

import { ChartContainer } from './indo-daily-styles';

const IndoDailyChart = ({ dailyCase }) => {
  const dailyCaseData = (data) => {
    return data
      .map(({ 
        tanggal, 
        jumlahKasusBaruperHari, 
        jumlahKasusSembuhperHari, 
        jumlahKasusMeninggalperHari 
      }) => ({ 
        date: moment(tanggal).format('LL'), 
        Positives: jumlahKasusBaruperHari,
        Recovered: jumlahKasusSembuhperHari,
        Deaths: jumlahKasusMeninggalperHari, 
      }));
  };

  const dailyData = dailyCaseData(dailyCase);

  return (
    <ChartContainer>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          data={dailyData}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="0 0" />
          <XAxis dataKey='date'/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Positives" stroke="orange" />
          <Line type="monotone" dataKey="Recovered" stroke="green" />
          <Line type="monotone" dataKey="Deaths" stroke="red" />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

export default IndoDailyChart;

// export default class IndoDailyChart extends PureComponent {
//   constructor({ dailyCase }) {
//     super();
//     this.dailyData = this.dailyCaseData(dailyCase);
//   }

//   dailyCaseData (data) {
//     return data
//       .map(({ 
//         tanggal, 
//         jumlahKasusBaruperHari, 
//         jumlahKasusSembuhperHari, 
//         jumlahKasusMeninggalperHari 
//       }) => ({ 
//         date: moment(tanggal).format('LL'), 
//         Positives: jumlahKasusBaruperHari,
//         Recovered: jumlahKasusSembuhperHari,
//         Deaths: jumlahKasusMeninggalperHari, 
//       }));
//   };

//   render() {
//     return (
//       <ChartContainer>
//         <ResponsiveContainer width='100%' height='100%'>
//           <LineChart
//             data={this.dailyData}
//             margin={{
//               top: 5, right: 30, left: 20, bottom: 5,
//             }}
//           >
//             <CartesianGrid strokeDasharray="0 0" />
//             <XAxis dataKey='date'/>
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="Positives" stroke="orange" />
//             <Line type="monotone" dataKey="Recovered" stroke="green" />
//             <Line type="monotone" dataKey="Deaths" stroke="red" />
//           </LineChart>
//         </ResponsiveContainer>
//       </ChartContainer>
//     );
//   }
// }