import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/layout/layout';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../components/template-styles/template-styles';
import { ButtonContainer, CustomButton } from '../components/indo-province/indo-province-styles';

import { useSelector } from 'react-redux';

const Custom404 = () => {
  const themes = useSelector((state) => state.theme.themes);

  return (
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      <Head>
        <title>Oops | Corona Today</title>
      </Head>
      <Layout>
        <main>
          <h2 style={{ textAlign: 'center', fontSize: '1.5rem', marginTop: '1rem' }} >404 Not Found</h2>
          <p style={{ textAlign: 'center', fontSize: '1rem', marginTop: '0.2rem' }}>What are you looking for?</p>
          <ButtonContainer style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Link href='/'>
              <CustomButton style={{ width: '200px' }} background='#7a88d2' title='Global COVID-19'>Global COVID-19</CustomButton>
            </Link>
            <Link href='/indonesia'>
              <CustomButton style={{ width: '200px' }} background='#7a88d2' title='Indonesia COVID-19' >Indonesia COVID-19</CustomButton>
            </Link>
          </ButtonContainer>
        </main>
      </Layout>
    </ThemeProvider>
  );
};

export default Custom404;