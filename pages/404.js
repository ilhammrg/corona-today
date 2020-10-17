import Head from 'next/head';
import Layout from '../components/layout/layout';

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Oops :(</title>
      </Head>
      <Layout>
        <main>
          <h1>404 Not Found</h1>
          <p>What are you looking for?</p>
        </main>
      </Layout>
    </>
  );
};

export default Custom404;