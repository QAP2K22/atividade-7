import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (<>
    <Head>
      <link rel="icon" type="image/x-icon" href="https://www.camara.leg.br/tema/favicon-16x16.png"></link>
      <title>Câmara dos Deputados - Atividade 7</title>z
    </Head>
    <Component {...pageProps} />
  </>)

}
