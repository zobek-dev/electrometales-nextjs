import '@/styles/globals.css'
import { Raleway } from '@next/font/google'

const raleway = Raleway({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {
          `
            :root{
              --raleway-font: ${raleway.style.fontFamily};
            }
          `
        }
      </style>
      <Component {...pageProps} />
    </>
  )
}
