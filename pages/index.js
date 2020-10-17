import Head from 'next/head';
import { useEffect } from 'react';

import { Dark, Light } from '../components/global-styles/global-styles';
import Layout from '../components/layout/layout';
import GlobalData from '../components/global-data/global-data';

import { useSelector, useDispatch } from 'react-redux';
import { getGlobalData } from '../redux/covids/covid-actions';

const Home = () => {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGlobalData());
  }, [dispatch]);

  return (
    <>
      {darkTheme ? <Dark /> : <Light />}
      <Head>
        <title>Corona Today</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
        <main>
          <GlobalData />
        </main>
      </Layout>
    </>
  );
};

export default Home;
