import { useEffect, useRef, useState, } from 'react'

import { ArtistCard, MusicCard } from './MusicCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const MusicCarousel = ({ mode, data }: { mode: "songs" | "artist", data: any[] }) => {
    const wrapperRef = useRef(null)



    const [showCarouselButton, setShowCarouselButton] = useState(false)
    const [isScroling, setIsScroling] = useState(false)

    const card_width = 177 + 16

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
        wrapperRef.current.scrollBy({ left: -card_width, behavior: 'smooth' })

    }
    const scrollRight = () => {
        wrapperRef.current.scrollBy({ left: card_width, behavior: 'smooth' })

    }

    return (
        <div className="relative">
            <div className={`${isScroling ? "opacity-100" : "opacity-0"} z-20 absolute transition-opacity ease-in-out duration-700 pointer-events-none w-full inset-0 bg-linear-to-r from-background/70 via-transparent right-0 left-0 top-0 bottom-0 to-background/70`}></div>

            <div onMouseEnter={(e) => { e.preventDefault(); setShowCarouselButton(true) }} onMouseLeave={(e) => { e.preventDefault(); setShowCarouselButton(false) }} ref={wrapperRef} className='w-full hide-scrollbar flex items-center overflow-x-auto '>
                <button className={` ${showCarouselButton ? isScroling ? "opacity-100 translate-x-4 " : "opacity-0" : "opacity-0"} transition-all ease-in-out duration-500 absolute left-0 top-[40%] cursor-pointer -translate-y-1/2 bg-background p-2 w-12 h-12 rounded-full z-10 text-white flex justify-center items-center`} onClick={scrollLeft}><ChevronLeft /></button>
                <button className={` ${showCarouselButton ? "opacity-100 -translate-x-4" : "opacity-0"}  transition-all ease-in-out duration-500 absolute right-0 top-[40%] cursor-pointer -translate-y-1/2 bg-background p-2 w-12 h-12 rounded-full z-10 text-white flex justify-center items-center`} onClick={scrollRight}><ChevronRight /></button>
                {mode === "songs" ? data.map((song) => (
                    <MusicCard onClick={() => { window.location.href = `/playlist/${song.id}` }} key={song.id} className={`${song.id === "1" ? "ml-7" : ""}`} title={song.title} artist={song.artist} coverUrl={song.coverUrl} />
                )) : data.map((artist) => (
                    <ArtistCard onClick={() => { window.location.href = `/artist/${artist.id}` }} key={artist.id} className={`${artist.id === "1" ? "ml-7" : ""}`} artistName={artist.name} artistImageUrl={artist.images[0].url} />
                ))}
            </div>
        </div >
    )
}

export default MusicCarousel