import '../styles/globals.css';
import Navigation from "../src/common/Navigation"

function MyApp({ Component, pageProps }) {
  return (
    <div>
    <Navigation />
    <Component {...pageProps} />
    </div>
  )
  
}

export default MyApp
