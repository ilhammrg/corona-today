import Head from 'next/head';
import { useSelector } from 'react-redux';

import { getIndonesiaSummary, getProvinces, getDailyCase } from '../api/api';

import Layout from '../components/layout/layout';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../components/template-styles/template-styles';
import Summary from '../components/summary/summary';
import Province from '../components/province/province';

const Indonesia = ({ summary, provinces, dailyCase }) => {
  const themes = useSelector((state) => state.theme.themes);
  const last30DaysCase = dailyCase.slice(Math.max(dailyCase.length - 30, 0));

  return (
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      <Head>
        <title>Indonesia | Corona Today</title>
      </Head>
      <Layout>
        <main>
          <Summary summary={summary} dailyCase={last30DaysCase} />
          <Province provinces={provinces} />
        </main>
      </Layout>
    </ThemeProvider>
  );
};

export const getStaticProps = async () => {
  const provinces = await getProvinces();
  const summary = await getIndonesiaSummary();
  const dailyCase = await getDailyCase();

  return {
    props: {
      summary,
      provinces,
      dailyCase,
    }
  };
};

export default Indonesia;
