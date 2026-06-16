import api from '../lib/api'
import MusicCarousel from '../components/MusicCarousel'
import { useEffect } from 'react'
import songs from "../data/songs.json"
import artists from "../data/artists.json"

const HomePage = () => {

    useEffect(() => {
        const fetchPlaylists = async () => {
            const data = await api.playlist("3cEYpjA9oz9GiPac4AsH4n")
            console.log(data)
        }
        fetchPlaylists()
    }, [])






    return (
        <div className='w-full rounded-xl py-7 relative overflow-hidden overflow-y-auto hide-scrollbar h-full max-h-full bg-background '>
            <div className="absolute inset-0 bg-linear-to-br from-gray-500/60 to-[50vh] to-transparent pointer-events-none" />

            <h1 className='font-semibold text-white text-2xl px-7'>Trending Songs</h1>



            <MusicCarousel data={songs} mode="songs" />



            <h1 className='font-semibold text-white text-2xl px-7 mt-7'>Popular Artist</h1>

            <MusicCarousel data={artists} mode="artist" />




        </div>
    )
}

export default HomePage