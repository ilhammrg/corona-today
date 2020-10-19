import Head from 'next/head';

import Layout from '../components/layout/layout';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../components/template-styles/template-styles';

import { useSelector } from 'react-redux';

const Custom404 = () => {
  const themes = useSelector((state) => state.theme.themes);

  return (
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      <Head>
        <title>Oops :(</title>
      </Head>
      <Layout>
        <main>
          <h2 style={{ textAlign: 'center', fontSize: '1.5rem', marginTop: '1rem' }} >404 Not Found</h2>
          <p style={{ textAlign: 'center', fontSize: '1rem', marginTop: '0.2rem' }}>What are you looking for?</p>
        </main>
      </Layout>
    </ThemeProvider>
  );
};

export default Custom404;