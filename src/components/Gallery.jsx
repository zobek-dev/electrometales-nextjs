import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import Image from 'next/image'
import { ElectroUno, ElectroDos, ElectroTres, ElectroCuatro, ElectroCinco, ElectroSeis } from '@/images'
import { useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from '@/icons'
import FsLightbox from 'fslightbox-react'


import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

SwiperCore.use([Navigation])

const images = [ElectroUno, ElectroDos, ElectroTres, ElectroCuatro, ElectroCinco, ElectroSeis]
const imagesSrc = [ElectroUno.src, ElectroDos.src, ElectroTres.src, ElectroCuatro.src, ElectroCinco.src, ElectroSeis.src]

export const Gallery = () => {
  const prev = useRef(null)
  const next = useRef(null)
  const [toggler, setToggler] = useState({
    open:false,
    slide: 1
  })

  const openLightbox = (number) => {
    setToggler({
      open: !toggler.open,
      slide: number
    })
  }

  return(
    <div className="wrapper overflow-hidden pb-12">
      <div className="flex justify-end gap-x-4 lg:py-4 lg:mb-2">
        <button ref={prev} className="hidden lg:block">
          <ArrowLeft/>
        </button>
        <button ref={next} className="hidden lg:block">
          <ArrowRight/>
        </button>
      </div>
      <Swiper
        spaceBetween={16}
        slidesPerView={1.2}
        modules={[ Navigation, Pagination ]}
        breakpoints={{
          450: {
            slidesPerView: 1.2
          },
          640: {
            slidesPerView: 2.5
          }
        }}
        pagination = {{
          clickable: true
        }}
        onInit={
          (swiper)=>{
            swiper.params.navigation.prevEl = prev.current
            swiper.params.navigation.nextEl = next.current
            swiper.navigation.init()
            swiper.navigation.update()
          }        
        }
      >
        {
          images.map((image, index) => (
            <SwiperSlide key={index}>
              <button onClick={()=>openLightbox(index + 1)} className="transition-opacity duration-200 ease-in-out hover:opacity-70">
                <Image 
                  src={image}
                  alt="Electrometales"
                />
              </button>
            </SwiperSlide>
          ))
        }
      </Swiper>
      <FsLightbox
				toggler={toggler.open}
				sources={imagesSrc}
				slide={toggler.slide}
			/>
    </div> 
  )
}