import {
  PieChart, Pie, Legend, Tooltip, Cell, ResponsiveContainer
} from 'recharts';
import { useSelector } from 'react-redux';

import { PieContainer } from './inde-pie-styles';

const IndoPieChart = ({ active, recovered, deaths }) => {
  const fontColor = useSelector((state) => state.theme.themes.font1);
  const data = [
    { name: 'Recovered (%)', value: recovered }, 
    { name: 'Deaths (%)', value: deaths },
    { name: 'Active Cases (%)', value: active },
  ];

  return (
    <PieContainer>
      <ResponsiveContainer width='100%' height='100%'>
        <PieChart>
          <Pie dataKey="value" isAnimationActive={true} data={data} >
            <Cell key={data[0].name} fill='seagreen' />
            <Cell key={data[1].name} fill='red' />
            <Cell key={data[2].name} fill='orange' />
          </Pie>
          <Legend />
          <Tooltip itemStyle={{ color: fontColor }} />
        </PieChart>
      </ResponsiveContainer>
    </PieContainer>
  );
};

export default IndoPieChart;
