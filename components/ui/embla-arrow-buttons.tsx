"use client"
import React, {
    PropsWithChildren,
    useCallback,
    useEffect,
    useState
  } from 'react'
  import { EmblaCarouselType } from 'embla-carousel'
import { MoveLeft, MoveRight } from 'lucide-react'
import { motion } from "framer-motion"
  
  type UsePrevNextButtonsType = {
    prevBtnDisabled: boolean
    nextBtnDisabled: boolean
    onPrevButtonClick: () => void
    onNextButtonClick: () => void
  }
  
  export const usePrevNextButtons = (
    emblaApi: EmblaCarouselType | undefined,
    onButtonClick?: (emblaApi: EmblaCarouselType) => void
  ): UsePrevNextButtonsType => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  
    const onPrevButtonClick = useCallback(() => {
      if (!emblaApi) return
      emblaApi.scrollPrev()
      if (onButtonClick) onButtonClick(emblaApi)
    }, [emblaApi, onButtonClick])
  
    const onNextButtonClick = useCallback(() => {
      if (!emblaApi) return
      emblaApi.scrollNext()
      if (onButtonClick) onButtonClick(emblaApi)
    }, [emblaApi, onButtonClick])
  
    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev())
      setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])
  
    useEffect(() => {
      if (!emblaApi) return
  
      onSelect(emblaApi)
      emblaApi.on('reInit', onSelect)
      emblaApi.on('select', onSelect)
    }, [emblaApi, onSelect])
  
    return {
      prevBtnDisabled,
      nextBtnDisabled,
      onPrevButtonClick,
      onNextButtonClick
    }
  }
  
  type PropType = PropsWithChildren<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  >
  
  export const PrevButton: React.FC<PropType> = (props) => {
    const { children, ...restProps } = props
  
    return (
      <button
        className="mix-blend-difference absolute top-1/2 left-2 hover:scale-[1.15] hover:translate-x-2 transition-all duration-200"
        type="button"
        {...restProps}
      >
        <MoveLeft />
        {children}
      </button>
    )
  }
  
  export const NextButton: React.FC<PropType> = (props) => {
    const { children, ...restProps } = props
  
    return (
      <button
        className="mix-blend-difference absolute top-1/2 right-2 hover:scale-[1.15] hover:-translate-x-2 transition-all duration-200"
        type="button"
        {...restProps}
      >
        <MoveRight />
        {children}
      </button>
    )
  }

  