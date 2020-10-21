import { useEffect, useState } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

import { getProvinces } from '../../api/api';

import { DataContainer, Title } from '../global-data/global-data.styles';
import { ChartContainer } from '../indo-daily-trend/indo-daily-styles';
import { CustomButton, ButtonContainer } from './indo-province-styles';

const IndoProvince = () => {
  const [provinceArray, setProvinceArray] = useState([]);
  const [displayChart, setDisplayChart] = useState({ key: 'Positives', fill: '#ff9a3c' });

  const fetchData = async () => {
    const provinces = await getProvinces();
    setProvinceArray(provinces);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const data = provinceArray.map(({
    provinsi,
    kasusPosi,
    kasusSemb,
    kasusMeni,
  }) => ({
    name: provinsi,
    Positives: kasusPosi,
    Recovered: kasusSemb,
    Deaths: kasusMeni,
  }));

  return (
    <DataContainer>
      <Title>Per Province Data</Title>
      <ButtonContainer>
        <CustomButton 
          id='province-positive-btn' 
          background='#ff9a3c'
          title='Positives'
          onClick={() => setDisplayChart({ key: 'Positives', fill: '#ff9a3c' })}
        >
          Positives
        </CustomButton>
        <CustomButton 
          id='province-recovered-btn' 
          background='#4ecca3'
          title='Recovered'
          onClick={() => setDisplayChart({ key: 'Recovered', fill: '#4ecca3' })}
        >
          Recovered
        </CustomButton>
        <CustomButton 
          id='province-death-btn' 
          background='#ea5455'
          title='Deaths'
          onClick={() => setDisplayChart({ key: 'Deaths', fill: '#ea5455' })}
        >
          Deaths
        </CustomButton>
      </ButtonContainer>
      <ChartContainer id='province-chart' style={{ height: '1000px' }}>
        <ResponsiveContainer height='100%' width='100%'>
          <BarChart
            layout='vertical'
            data={data}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type='number'  />
            <YAxis dataKey="name" type='category' />
            <Tooltip />
            <Legend />
            <Bar dataKey={displayChart.key} fill={displayChart.fill} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </DataContainer>
  );
};

export default IndoProvince;
