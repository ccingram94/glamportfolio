import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import ChevronDown from '@heroicons/react/solid/ChevronDownIcon'
import Footer from '../components/footer'

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Head>
        <title>Constance Ingram</title>
        <meta name="description" content="Austin, TX (and remote)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-hero h-screen w-screen bg-cover bg-center">
        <div className="bg-black bg-opacity-40 h-screen w-screen">
          <div className="bg-gradient-to-r from-black to-transparent h-screen w-screen">
              <div className="bg-orange-900 bg-opacity-20 w-screen h-screen">
              <div className="text-orange-200 opacity-90 flex flex-col flex-wrap text-center max-w-sm">
                <div className="flex flex-col p-5 bg-black w-screen xl:max-w-md text-center items-center">
                  <h1 className="font-imfell-sc text-3xl md:text-4xl lg:text-6xl p-5 pt-20 text-transparent bg-clip-text bg-gold bg-cover opacity-80 text-amber-300 text-opacity-20">Constance Ingram</h1>
                  <h2 className="font-imfell text-xl md:text-2xl lg:text-4xl p-2 text-transparent bg-clip-text bg-gold bg-cover opacity-80 text-amber-400 text-opacity-30 ">Austin, TX</h2>
                  <h2 className="font-imfell text-xl md:text-2xl lg:text-4xl p-2 text-transparent bg-clip-text bg-gold bg-cover opacity-80 text-amber-400 text-opacity-30">❦</h2>
                  <ChevronDown onClick={(e) => setOpen(!open)} className="h-10 w-10 p-2 justify-center items-center text-amber-300 text-opacity-40" />
                </div>
                <div className="p-5 font-imfell text-xl md:text-2xl bg-black w-screen xl:h-full xl:max-w-md">
                  {open && 
                    <div className="flex flex-row flex-wrap xl:flex-col text-center justify-center text-transparent bg-clip-text bg-gold bg-cover opacity-80 text-amber-500 text-opacity-30">
                      <h2 className="p-2 xl:p-5 xl:m-5">Resume</h2>
                      <h2 className="p-2 xl:p-5 xl:m-5">Portfolio</h2>
                      <h2 className="p-2 xl:p-5 xl:m-5">About</h2>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
