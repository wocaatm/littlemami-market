import '../styles/globals.css'
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Navbar } from "../components/Navbar/Navbar";
import { AppProps } from 'next/app';
import { NETWORK } from '@/const/contractAddresses';

export default function Home({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-hero-pattern min-h-screen'>
      <ThirdwebProvider activeChain={NETWORK}>
        <Navbar/>
        <Component {...pageProps} />
      </ThirdwebProvider>
    </div>
  )
}
