import { useEffect, useRef, } from 'react'
import { useCarousel } from '../hooks/useCarousel'
import { ArtistCard } from './MusicCard'

const ArtistCarousel = () => {
    const ref = useRef(null)
    const { setWrapperRef, scrollLeft, scrollRight, isClick } = useCarousel()

    useEffect(() => {
        setWrapperRef(ref)
    }, [])

    return (
        <div className="relative">
            <div ref={ref} className='w-full mx-auto space-x-7 h-[50%] mt-4 hide-scrollbar flex items-center overflow-x-auto '>
                <button className={` ${isClick ? "opacity-100" : "opacity-0"} absolute left-0 top-[40%] cursor-pointer -translate-y-1/2 bg-black/50 p-2 w-12 h-12 rounded-full z-10 text-white`} onClick={scrollLeft}>{'<'}</button>
                <button className={`  absolute -right-7 top-[40%] cursor-pointer -translate-y-1/2 bg-black/50 p-2 w-12 h-12 rounded-full z-10 text-white`} onClick={scrollRight}>{'>'}</button>
                <ArtistCard className='ml-7' />
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
                <ArtistCard className='mr-7' />

            </div>
        </div>
    )
}

export default ArtistCarousel