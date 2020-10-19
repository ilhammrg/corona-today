import Head from 'next/head';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../components/template-styles/template-styles';
import Layout from '../components/layout/layout';
import GlobalData from '../components/global-data/global-data';
import CountryData from '../components/country-data/country-data';

import { useSelector } from 'react-redux';

const Home = () => {
  const themes = useSelector((state) => state.theme.themes);

  return (
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      <Head>
        <title>Corona Today</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
        <main>
          <GlobalData />
          <CountryData />
        </main>
      </Layout>   
    </ThemeProvider>
  );
};

export default Home;
