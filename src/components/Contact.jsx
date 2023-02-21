import Link from 'next/link'

export const Contact = () => {
  return(
    <section>
      <div className="wrapper">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col col-span-1 my-8">
            <h2 className="font-extrabold text-[70px] lg:text-[120px] leading-[1.1] tracking-[20px] uppercase text-left">Con-<br/>tácta<br/>nos.</h2>
            <Link href="mailto:hola@electrometales.cl" className="block tracking-[1px] hover:underline hover:underline-offset-2">hola@electrometales.cl</Link>
            <Link href="tel:56966096638" className="block tracking-[1px] hover:underline hover:underline-offset-2">+56966096638</Link>
          </div>
          <div className="bg-[#999999] w-full flex lg:items-center col-span-1 px-4 py-8 lg:px-8">
            <form name="contact" method="POST" data-netlify="true" className="w-full">
              <input type="hidden" name="form-name" value="contact" />
              <p className="mb-8">
                <input type="text" name="firstname" id="firstname" placeholder="Nombre" className="w-full px-2 py-2 lg:py-4 lg:px-4 placeholder:uppercase placeholder:tracking-[2.5px] placeholder:text-black placeholder:text-sm lg:placeholder:text-base"/>
              </p>
              <p className="mb-8">
                <input type="email" name="email" id="youremail" placeholder="Email" className="w-full px-2 py-2 lg:py-4 lg:px-4 placeholder:uppercase placeholder:tracking-[2.5px] placeholder:text-black placeholder:text-sm lg:placeholder:text-base"/>
              </p>
              <p className="mb-8">
                <input type="text" name="phone" id="phone" placeholder="Teléfono" className="w-full px-2 py-2 lg:py-4 lg:px-4 placeholder:uppercase placeholder:tracking-[2.5px] placeholder:text-black placeholder:text-sm lg:placeholder:text-base"/>
              </p>
              <p className="mb-8">
                <textarea name="message" id="yourmessage" placeholder="Mensaje" className="w-full px-2 py-2 lg:py-4 lg:px-4 placeholder:uppercase placeholder:tracking-[2.5px] placeholder:text-black placeholder:text-sm lg:placeholder:text-base"></textarea>
              </p>
              <p className="mb-8">
                <button type="submit" className="bg-black block float-right text-white uppercase font-semibold py-2 px-10 w-max tracking-[2.5px] transition-opacity duration-200 ease-in-out hover:opacity-70">
                  Enviar
                </button>
              </p>
            </form>
          </div>
          {/* */}
        </div>
      </div>
    </section>
  )
}