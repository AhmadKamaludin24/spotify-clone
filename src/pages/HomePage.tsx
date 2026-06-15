import { useEffect, useRef, useState } from 'react'
import api from '../lib/api'
import MusicCarousel from '../components/MusicCarousel'
import { useCarousel } from '../hooks/useCarousel'
import { useCarouselContext } from '../context/carousel-context'
import ArtistCarousel from '../components/ArtistCarousel'

const HomePage = () => {
    const data = api.playlist("3cEYpjA9oz9GiPac4AsH4n")
    console.log(data)
    const { isClick } = useCarouselContext()

    console.log(isClick)



    return (
        <div className='w-full rounded-xl py-7 relative overflow-hidden overflow-y-auto hide-scrollbar h-full max-h-full bg-linear-to-b bg-background from-5% from-gray-500/30 to-50% to-black/10'>
            <h1 className='font-semibold text-white text-2xl px-7'>Trending Songs</h1>



            <MusicCarousel />

            <h1 className='font-semibold text-white text-2xl px-7 mt-7'>Popular Artist</h1>

            <div className={`${isClick ? "opacity-100" : "opacity-0"} absolute transition-opacity ease-in-out duration-700 pointer-events-none w-full inset-0 bg-linear-to-r from-background via-transparent right-0 left-0 top-0 bottom-0 to-background`}></div>
            <ArtistCarousel />




        </div>
    )
}

export default HomePage