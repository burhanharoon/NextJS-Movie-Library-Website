import 'tailwindcss/tailwind.css'
import { Header } from "./Components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
