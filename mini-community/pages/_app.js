import 'antd/dist/antd.css';
import Cookies from 'universal-cookie';
import axios from 'axios';
import AuthContext from '../contexts/AuthContext';

function App({ Component, pageProps }) {
  return (
    <AuthContext.Provider value={{ auth: pageProps.auth }}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  )
}

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  const cookies = ctx.req ? new Cookies( ctx.req.headers.cookie ) : new Cookies();
  const token = cookies.get( 'mini-community-token' );
  if( token ) {
    try {
      const response = await axios.get( 'http://127.0.0.1:3333/api/me', {
        headers: {
          token,
        }
      } );
      ctx.auth = pageProps.auth = response.data;
    }
    catch( error ) {
      console.warn(error);
    }
  }

  if( Component.getInitialProps ) {
    pageProps = {
      ...pageProps,
      ...(await Component.getInitialProps( ctx ))
    }
  }

  return {
    pageProps,
  }
}

export default App
