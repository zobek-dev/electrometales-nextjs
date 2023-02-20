import bgDesktop from 'public/hero-desktop.jpg'
import bgMobile from 'public/hero-mobile.jpg'
import bgTablet from 'public/hero-tablet.jpg'
import Image from 'next/image'
import Link from 'next/link'

export const Hero = () => {
  return(
    <section className="relative">
      <Image
        className="object-cover object-center sm:hidden"
        src={bgTablet}
        alt={`electrometales`}
        priority
      />
        <Image
        className="object-cover object-center hidden sm:inline-flex"
        src={bgDesktop}
        alt={`electrometales`}
        priority
      />
      <div className="z-9 absolute top-0 left-0 w-full h-full text-white">
        <div className="wrapper h-full py-12 lg:pb-28">
          <div className="flex flex-col justify-end items-start h-full">
            <h1 className="font-extrabold uppercase text-2xl leading-[1.5] lg:text-5xl lg:leading-[1.5] tracking-[2.5px] mb-8 max-w-[700px]">Electropintado de estructuras metálicas.</h1>
            <Link href="#Contacto" className="block text-center w-max tracking-[2.5px] border border-white py-2 px-10 lg:px-20 uppercase font-extrabold transition-opacity duration-200 ease-in-out hover:opacity-70 text-base lg:text-xl">
              Cotiza Aquí
            </Link>
          </div>
        </div>
      </div>
    </section>
  ) 
}