import { Provider } from 'react-redux';
import { store } from '../redux/store';

import { GlobalStyles } from '../components/global-styles/global-styles';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store} >
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
