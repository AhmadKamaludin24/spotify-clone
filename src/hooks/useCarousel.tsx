import { useState } from "react"



export const useCarousel = () => {
    const [wrapperRef, setWrapperRef] = useState(null)



    const [isClick, setIsclick] = useState(false)

    const card_width = 208 + 28

    const scrollLeft = () => {
        setIsclick(true)
        wrapperRef.current.scrollBy({ left: -card_width * 2, behavior: 'smooth' })

    }
    const scrollRight = () => {
        setIsclick(true)
        wrapperRef.current.scrollBy({ left: card_width * 2, behavior: 'smooth' })

    }

    return {
        setWrapperRef,
        isClick,
        scrollLeft,
        scrollRight,

    }
}

