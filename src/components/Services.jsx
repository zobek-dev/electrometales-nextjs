import Image from 'next/image'
import RayosUv from 'public/rayos-uv.png'
import Amigable from 'public/amigable-ma.png'
import Durabilidad from 'public/durabilidad.png'
import Polvo from 'public/polvo.png'

export const Services = () => {
  return(
    <section className="py-8" id="Electropintado">
      <div className="wrapper">
        <h2 className="uppercase text-black text-center mb-12 font-bold text-2xl lg:text-4xl">Nuestros <strong className="text-[#999999]">Servicios</strong></h2>
        <div className="grid lg:grid-cols-2">
          <div className="row-start-2 row-end-3 lg:row-start-auto lg:row-end-auto">
            <Image
              src={Polvo}
              alt="Polvo de electropintado"
            />
          </div>
          <div>
            <h3 className="text-black text-xl lg:text-[32px] uppercase font-bold tracking-[2px] text-center my-8">Electropintado</h3>
            <p className="tracking-[1.5px] text-center mb-8">La pintura electroestática, es un recubrimiento que se aplica como polvo seco generalmente sobre estructura metálicas. Logra un acabado uniforme y resistente.</p>
            <ul className="flex flex-col lg:flex-row items-center gap-4 mb-12">
              <li className="max-w-[250px]">
                <Image
                  src={RayosUv}
                  alt="Resistente a rayos uv y cambios ambientales"
                  className="mx-auto mb-4"
                />
                <p className="text-center tracking-[1.5px]">Resistente a rayos uv y cambios ambientales.</p>
              </li>
              <li className="max-w-[250px]">
                <Image
                  src={Amigable}
                  alt="Amigable con el medio ambiente"
                  className="mx-auto mb-4"
                />
                <p className="text-center tracking-[1.5px]">Es amigable con el medio ambiente</p>
              </li>
              <li className="max-w-[250px]">
                <Image
                  src={Durabilidad}
                  alt="Larga durabilidad"
                  className="mx-auto mb-4"
                />
                <p className="text-center tracking-[1.5px]">
                  Larga durabilidad y resistencia
                </p>
              </li>
            </ul>
            <a href="#Contacto" className="block mx-auto py-2 px-10 uppercase border border-black tracking-[2px] text-center w-max transition-opacity duration-200 ease-in-out hover:opacity-70">
              Cotizar Servicio
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}