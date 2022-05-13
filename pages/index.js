import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
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
            <div className="text-amber-300 opacity-90 flex flex-col flex-wrap text-center max-w-sm">
              <div className="p-10 bg-black w-screen md:max-w-md">
                <h1 className="font-imfell-sc text-xl md:text-4xl lg:text-6xl p-5">Constance Ingram</h1>
                <h2 className="font-imfell text-xl md:text-2xl lg:text-4xl p-2">Austin, TX</h2>
              </div>
              <div className="p-10 font-imfell text-xl md:text-2xl bg-black w-screen md:h-screen md:max-w-md">
                <h2 className="p-5 m-5">Resume</h2>
                <h2 className="p-5 m-5">Portfolio</h2>
                <h2 className="p-5 m-5">About</h2>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
