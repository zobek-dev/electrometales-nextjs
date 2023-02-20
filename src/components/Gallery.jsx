import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import Image from 'next/image'
import { ElectroUno, ElectroDos, ElectroTres, ElectroCuatro, ElectroCinco, ElectroSeis } from '@/images'
import { useRef } from 'react'
import { ArrowLeft, ArrowRight } from '@/icons'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

SwiperCore.use([Navigation])

export const Gallery = () => {
  const buttonPrev = useRef(null)
  const buttonNext = useRef(null)
  return(
    <div className="wrapper overflow-hidden pb-12">
      <div className="flex justify-end gap-x-4 lg:py-4 lg:mb-2">
        <button ref={buttonPrev} className="hidden lg:block">
          <ArrowLeft/>
        </button>
        <button ref={buttonNext} className="hidden lg:block">
          <ArrowRight/>
        </button>
      </div>
      <Swiper
        spaceBetween={16}
        slidesPerView={1.2}
        modules={[ Navigation, Pagination ]}
        breakpoints={{
          450: {
            slidesPerView: 1.5
          },
          640: {
            slidesPerView: 2.5
          }
        }}
        navigation={{ 
          prevEl: buttonPrev.current,
          nextEl: buttonNext.current,
        }}
        pagination = {{
          clickable: true
        }}
      >
        <SwiperSlide>
          <Image 
            src={ElectroUno}
            alt="Electrometales"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src={ElectroDos}
            alt="Electrometales"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src={ElectroTres}
            alt="Electrometales"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src={ElectroCuatro}
            alt="Electrometales"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src={ElectroCinco}
            alt="Electrometales"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src={ElectroSeis}
            alt="Electrometales"
          />
        </SwiperSlide>
      </Swiper>
       {/*}
      <Swiper 
        modules={[Navigation, Pagination]} 
        spaceBetween={16}
        slidesPerView={1.5}
       
        navigation={{ 
          prevEl: buttonPrev.current,
          nextEl: buttonNext.current,
        }}
        onBeforeInit={(swiper)=>{
          swiper.params.navigation.prevEl = buttonPrev
          swiper.params.navigation.nextEl = buttonNext
        }}
      >

       onBeforeInit={(swiper)=>{
          swiper.params.navigation.prevEl = buttonPrev
          swiper.params.navigation.nextEl = buttonNext
        }}
        
      </Swiper> 
      
        breakpoints={{
          640: {
            slidesPerView: 2.5
          },
          1040: {
            slidesPerView: 3.5
          }
        }} */} 
    </div> 
  )
}