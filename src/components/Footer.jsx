import LogoWhite from '../../public/logo-white.svg'
import Link from 'next/link'

export const Footer = () => {

  const footerLinks = [
    {
      title: "Contáctanos",
      links: [
        {
          title: "hola@electrometales.cl",
          url: "mailto: hola@electrometales.cl"
        },
        {
          title: "+569 6609 6638",
          url: "tel:+569 6609 6638"
        }
      ]
    },
    {
      title: "Estamos en",
      links: [
        {
          title: "Providencia, Chile.",
          url: null
        },
        {
          title: "Lunes a Viernes: 09:00 a 17:00 hrs.",
          url: null        
        }
      ]
    }

  ]
  return (
  <footer className="bg-black text-white py-20">
    <div className="wrapper">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <LogoWhite/>
        </div>
        <div>
          <h3 className="uppercase font-semibold text-xl mb-4 tracking-[1px]">{footerLinks[0].title}</h3>
          <ul>
            <li>
              <Link href={footerLinks[0].links[0].url} className="leading-[2] text-[18px] tracking-[1px] hover:underline hover:underline-offset-2">
                {footerLinks[0].links[0].title}
              </Link>
            </li>
            <li>
              <Link href={footerLinks[0].links[1].url} className="leading-[2] text-[18px] tracking-[1px] hover:underline hover:underline-offset-2">
                {footerLinks[0].links[1].title}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="uppercase font-semibold text-xl mb-4 tracking-[1px]">{footerLinks[1].title}</h3>
          <ul>
            <li className="leading-[2] text-[18px] tracking-[1px] hover:underline hover:underline-offset-2">
              {footerLinks[1].links[0].title}
            </li>
            <li className="leading-[2] text-[18px] tracking-[1px] hover:underline hover:underline-offset-2">
              {footerLinks[1].links[1].title}
            </li>
          </ul>
        </div>
      </div>
      <span className="text-center block mt-20 lg:mt-28 text-sm">
        &copy; Electrometales {new Date().getFullYear()}  
      </span>
      <span className="block text-center text-sm">
        Diseño y desarrollo por <Link href="https://mediahuella.com" className="font-semibold hover:underline hover:underline-offset-2" target="_blank" rel="noopener noreferrer" >Mediahuella.</Link>
      </span>
    </div>
  </footer>
  )
}