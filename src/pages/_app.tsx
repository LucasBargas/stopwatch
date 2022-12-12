import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Lucas Bargas - Cronômetro</title>
        <meta name="description" content="Cronômetro desenvolvido por Lucas Bargas com o Framework NextJS e estilizado com SCSS." />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lucas Bargas - Cronômetro" />
        <meta property="og:site_name" content="Lucas Bargas - Cronômetro" />
        <meta property="og:description" content="Cronômetro desenvolvido por Lucas Bargas com o Framework NextJS e estilizado com SCSS. " />
        <meta property="og:url" content="https://simple-calculator-lucasbargas.vercel.app/" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
