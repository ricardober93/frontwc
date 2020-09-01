import { globalStyle } from '../style/theme';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component  {...pageProps} />
      <style jsx global > {globalStyle} </style>
    </>
  )
}

export default MyApp
