import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import 'moment-timezone';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store} >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
