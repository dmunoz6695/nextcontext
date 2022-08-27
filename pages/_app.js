import CountState from '../context/count/count.state'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <CountState>
      <Component {...pageProps} />
    </CountState>
  )
}

export default MyApp
