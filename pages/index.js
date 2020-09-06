import Head from 'next/head'
import Header from 'components/Header'
import Navbar from 'components/Navbar'
import  Feed from 'components/Feed'
import { colors } from 'style/theme'
export default function Home() {
  return (
    <>
      <Header />
      <section>
        <Feed />
      </section>
      <Navbar />
      <style jsx > { `
        section {
          flex: 1;
          }
            ` }
      </style> 
    </>
  )
}
