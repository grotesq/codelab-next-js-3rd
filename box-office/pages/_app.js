import Router from 'next/router';
import 'nprogress/nprogress.css';
import Nprogress from 'nprogress';
import 'antd/dist/antd.css'

Router.events.on( 'routeChangeStart', () => Nprogress.start() );
Router.events.on( 'routeChangeComplete', () => Nprogress.done() );

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
