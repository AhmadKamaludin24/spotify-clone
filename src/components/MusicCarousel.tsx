import { useEffect, useRef, useState, } from 'react'
import { useCarousel } from '../hooks/useCarousel'
import { MusicCard } from './MusicCard'

const MusicCarousel = () => {
    const wrapperRef = useRef(null)
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

    return (
        <div className="relative">
            <div className={`${isClick ? "opacity-100" : "opacity-0"} absolute transition-opacity ease-in-out duration-700 pointer-events-none w-full inset-0 bg-linear-to-r from-background/70 via-transparent right-0 left-0 top-0 bottom-0 to-background/70`}></div>

            <div ref={wrapperRef} className='w-full space-x-7 h-[50%] mt-4 hide-scrollbar flex items-center overflow-x-auto '>
                <button className={` ${isClick ? "opacity-100" : "opacity-0"} absolute left-0 top-[40%] cursor-pointer -translate-y-1/2 bg-black/50 p-2 w-12 h-12 rounded-full z-10 text-white`} onClick={scrollLeft}>{'<'}</button>
                <button className={`  absolute -right-7 top-[40%] cursor-pointer -translate-y-1/2 bg-black/50 p-2 w-12 h-12 rounded-full z-10 text-white`} onClick={scrollRight}>{'>'}</button>
                <MusicCard className='ml-7' />
                <MusicCard />
                <MusicCard />
                <MusicCard />
                <MusicCard />
                <MusicCard />
                <MusicCard className='mr-7' />

            </div>
        </div>
    )
}

export default MusicCarousel