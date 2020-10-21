import Head from 'next/head';
import { useSelector } from 'react-redux';

import { getDailyCase } from '../api/api';

import Layout from '../components/layout/layout';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../components/template-styles/template-styles';
import IndoGlobal from '../components/indo-global-data/indo-global';
import IndoDaily from '../components/indo-daily-trend/indo-daily';
import IndoProvince from '../components/indo-province/indo-province';

const Indonesia = ({ dailyCase }) => {
  const themes = useSelector((state) => state.theme.themes);

  return (
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      <Head>
        <title>Indonesia | Corona Today</title>
      </Head>
      <Layout>
        <main id='content'>
          <IndoGlobal dailyCase={dailyCase} />
          <IndoDaily dailyCase={dailyCase} />
          <IndoProvince />
        </main>
      </Layout>
    </ThemeProvider>
  );
};

export const getStaticProps = async () => {
  const dailyCase = await getDailyCase();

  return {
    props: {
      dailyCase,
    }
  };
};

export default Indonesia;
