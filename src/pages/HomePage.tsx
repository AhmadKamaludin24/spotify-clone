import { useRef, useState } from 'react'
import MusicCard from '../components/MusicCard'
import api from '../lib/api'

const HomePage = () => {
    const data = api.playlist("3cEYpjA9oz9GiPac4AsH4n")
    console.log(data)

    const wrapperRef = useRef(null)
    const [isClick, setIsclick] = useState(false)

    const card_width = 208 + 28

    const scrollLeft = () => {
        setIsclick(true)
        wrapperRef.current.scrollBy({ left: -card_width * 3, behavior: 'smooth' })

    }
    const scrollRight = () => {
        setIsclick(true)
        wrapperRef.current.scrollBy({ left: card_width * 3, behavior: 'smooth' })

    }
    return (
        <div className='w-full rounded-xl py-7 relative overflow-hidden overflow-y-auto hide-scrollbar h-full max-h-full bg-linear-to-b bg-background from-gray-500/30 to-black/10'>
            <h1 className='font-semibold text-white text-2xl px-7'>Trending Songs</h1>


            <div className={`${isClick ? "opacity-100" : "opacity-0"} absolute transition-opacity ease-in-out duration-700 pointer-events-none w-full inset-0 bg-linear-to-r from-background via-transparent right-0 left-0 top-0 bottom-0 to-background`}></div>

            <div ref={wrapperRef} className='w-full space-x-7 h-[50%] mt-4 hide-scrollbar flex items-center overflow-x-auto '>
                <button className={` ${isClick ? "opacity-100" : "opacity-0"} absolute left-0 top-1/3 -translate-y-1/2 bg-black/50 p-2 w-12 h-12 rounded-full z-10 text-white`} onClick={scrollLeft}>{'<'}</button>
                <button className={`  absolute right-0 top-1/3 -translate-y-1/2 bg-black/50 p-2 w-12 h-12 rounded-full z-10 text-white`} onClick={scrollRight}>{'>'}</button>
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

export default HomePage