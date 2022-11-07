import '../styles/globals.css'
import Router from 'next/router'
import {useState} from 'react'
import Loader from '../components/loader/Loader';
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on('routeChangeStart', (url) => {
      <Loader/>
      setLoading(true);
  });
  Router.events.on('routeChangeComplete', (url) => {
    console.log('loading end . . . ');
      setLoading(false);
  });
  
  return (
    <>
      {loading?<Loader/>:
      <Component {...pageProps} />
      }
    </>
  )
}

export default MyApp
