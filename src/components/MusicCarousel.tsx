import { useEffect, useRef, useState, } from 'react'

import { ArtistCard, MusicCard } from './MusicCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const MusicCarousel = ({ mode }: { mode: "songs" | "artist" }) => {
    const wrapperRef = useRef(null)

    const [showCarouselButton, setShowCarouselButton] = useState(false)
    const [isScroling, setIsScroling] = useState(false)

    const card_width = 192 + 28

    useEffect(() => {
        const el = wrapperRef.current
        if (!el) return;
        const handleScroll = () => {
            setIsScroling(el.scrollLeft > 0)
        }
        el.addEventListener('scroll', handleScroll)

        return () => {
            el.removeEventListener('scroll', handleScroll)
        }

    }, [])


    const scrollLeft = () => {
        wrapperRef.current.scrollBy({ left: -card_width * 2, behavior: 'smooth' })

    }
    const scrollRight = () => {
        wrapperRef.current.scrollBy({ left: card_width * 2, behavior: 'smooth' })

    }

    return (
        <div className="relative">
            <div className={`${isScroling ? "opacity-100" : "opacity-0"} absolute transition-opacity ease-in-out duration-700 pointer-events-none w-full inset-0 bg-linear-to-r from-background/70 via-transparent right-0 left-0 top-0 bottom-0 to-background/70`}></div>

            <div onMouseEnter={(e) => { e.preventDefault(); setShowCarouselButton(true) }} onMouseLeave={(e) => { e.preventDefault(); setShowCarouselButton(false) }} ref={wrapperRef} className='w-full space-x-2 h-[50%] mt-4 hide-scrollbar flex items-center overflow-x-auto '>
                <button className={` ${showCarouselButton ? isScroling ? "opacity-100" : "opacity-0" : "opacity-0"} transition-all ease-in-out duration-500 absolute left-0 top-[40%] cursor-pointer -translate-y-1/2 bg-background p-2 w-8 h-8 rounded-full z-10 text-white flex justify-center items-center`} onClick={scrollLeft}><ChevronLeft /></button>
                <button className={` ${showCarouselButton ? "opacity-100" : "opacity-0"} transition-all ease-in-out duration-500 absolute right-0 top-[40%] cursor-pointer -translate-y-1/2 bg-background p-2 w-8 h-8 rounded-full z-10 text-white flex justify-center items-center`} onClick={scrollRight}><ChevronRight /></button>
                <MusicCard className='ml-7' mode={mode} />
                <MusicCard mode={mode} />
                <MusicCard mode={mode} />
                <MusicCard mode={mode} />
                <MusicCard mode={mode} />
                <MusicCard mode={mode} />
                <MusicCard mode={mode} className='mr-7' />


            </div>
        </div >
    )
}

export default MusicCarousel