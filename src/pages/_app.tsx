import '@/styles/globals.css'
import '@/styles/hero-section.css'
import '@/styles/card.css'
import '@/styles/explore.css'
import type { AppProps } from 'next/app'
import RootLayout from '../layout';


export default function App({ Component, pageProps }: AppProps) {
  return(
    <RootLayout >
    <Component {...pageProps} />
    </RootLayout>
    )
}
