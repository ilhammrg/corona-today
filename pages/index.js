import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getCountryList } from '../api/api';
import { getCountryListSuccess } from '../redux/covids/covid-actions';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../components/template-styles/template-styles';
import Layout from '../components/layout/layout';
import GlobalData from '../components/global-data/global-data';
import CountryData from '../components/country-data/country-data';

import { useSelector } from 'react-redux';

const Home = ({ countries }) => {
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
        <main>
          <GlobalData />
          <CountryData />
        </main>
      </Layout>   
    </ThemeProvider>
  );
};

export const getStaticProps = async () => {
  const countries = await getCountryList();
  
  return {
    props: {
      countries,
    }
  };
};

export default Home;
