import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getCountryList, getGlobalDaily } from '../api/api';
import { getCountryListSuccess } from '../redux/covids/covid-actions';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../components/template-styles/template-styles';
import Layout from '../components/layout/layout';
import GlobalData from '../components/global-data/global-data';
import GlobalDaily from '../components/global-daily/global-daily';
import CountryData from '../components/country-data/country-data';

import { useSelector } from 'react-redux';

const Home = ({ countries, dailyCases }) => {
  const themes = useSelector((state) => state.theme.themes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryListSuccess(countries));
  }, []);

  return (
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      <Head>
        <title>Summary | Corona Today</title>
      </Head>
      <Layout>
        <main id='content'>
          <GlobalData />
          <GlobalDaily dailyCases={dailyCases} />
          <CountryData />
        </main>
      </Layout>   
    </ThemeProvider>
  );
};

export const getStaticProps = async () => {
  const countries = await getCountryList();
  const dailyCases = await getGlobalDaily();
  
  return {
    props: {
      countries,
      dailyCases,
    }
  };
};

export default Home;
