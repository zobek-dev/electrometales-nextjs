import Link from "next/link"
import Logo from "public/logo.svg"
import LogoMobile from "public/logo-mobile.svg"
import BurgerIcon from "public/burger.svg"
import Close from "public/close.svg"
import { useState, useEffect } from "react"
// import { DrawerMenu } from "./DrawerMenu"

export const Header = () => {
  const [open, setOpen] = useState(false)
  // const [clientWindowHeight, setClientWindowHeight] = useState('')

  // const handleScroll = () => {
  //   setClientWindowHeight(window.scrollY)
  // }

  // useEffect(()=> {
  //   window.addEventListener("scroll", handleScroll)
  //   return () => window.removeEventListener("scroll", handleScroll);
  // })
  const headerLinks = [ 
    {
      title: "Inicio",
      url: "/"
    },
    {
      title: "Electropintado",
      url: "#Electropintado"
    },
    {
      title: "Contacto",
      url: "#Contacto"
    }
  ]
  // ${clientWindowHeight > 50 ? "sticky w-full z-[99] top-0 left-0" : ""}
  return (
    <header className={`shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-white`}>
      <div className="wrapper">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <Logo className="hidden lg:block"/>
            <LogoMobile className="block lg:hidden"/>
          </Link>
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-[32px]">
              { headerLinks.map((el,key) => (
                <li key={key}>
                  <Link href={el.url} className="leading-[2] uppercase tracking-[1px] font-semibold hover:underline hover:underline-offset-2">
                    {el.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav> 
          <button className="block lg:hidden" onClick={() => setOpen(true)}>
            <BurgerIcon/>
          </button>
          <div className={`drawer-menu ${ open ? "active" : ""} fixed z-[9999] w-[100vw] h-full top-0 left-0 flex justify-start bg-[rgba(10,10,10,.5)]`}>
            <div className="block">
              <div className="fixed top-0 left-0 right-0 bottom-0" onClick={()=> setOpen(false)}></div>
              <div className="menu-inner bg-white h-full w-[420px] px-4 flex flex-col z-[9999]" style={{ maxWidth: 'calc(100vw - 3rem)'}}>
                <div className="flex justify-between items-center my-4">
                  <LogoMobile/>
                  <button onClick={()=> setOpen(false)}>
                    <Close/>
                  </button>
                </div>
                <nav className="flex-1 mt-12">
                  <ul>
                    { headerLinks.map((el,index) => (
                      <li key={index} className="my-2">
                        <Link href={el.url} className="leading-[2] uppercase tracking-[1px] font-semibold" onClick={()=> setOpen(false)}>
                          {el.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="border-t border-black py-4">
                  <Link href="mailto:hola@electrometales.cl" className="leading-[2] tracking-[1px] hover:underline hover:underline-offset-2 block">
                    hola@electrometales.cl
                  </Link>
                  <Link href="tel:+56966096638" className="leading-[2] tracking-[1px] hover:underline hover:underline-offset-2 block">
                    +56966096638
                  </Link>
                </div>
              </div>
            </div>  
          </div>
        </div> 
      </div>
    </header>
  )
}