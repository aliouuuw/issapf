"use client"
import React, { useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './embla-arrow-buttons'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { SelectedSnapDisplay, useSelectedSnapDisplay } from './embla-selected-snap'

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

//   const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
//     const autoplay = emblaApi?.plugins()?.autoplay
//     if (!autoplay) return

//     autoplay.stop
//   }, [])


  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi)

  return (
    <section className="relative w-full h-full flex flex-col justify-center mx-auto rounded-xl">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="embla__container h-full">
          {slides.map((slide, key) => (
            <div className="w-full flex flex-none items-center justify-center" key={key}>
              <iframe
              src={`https://drive.google.com/file/d/${slide}/preview`}
              frameBorder={0}
              allowFullScreen
              className="w-full h-full rounded-xl"
            />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center pt-2">
        <SelectedSnapDisplay
          selectedSnap={selectedSnap}
          snapCount={snapCount}
        />
      </div>
      <PrevButton onClick={onPrevButtonClick} />
      <NextButton onClick={onNextButtonClick}/>
    </section>
  )
}

export default EmblaCarousel
