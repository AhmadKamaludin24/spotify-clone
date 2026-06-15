import api from '../lib/api'
import MusicCarousel from '../components/MusicCarousel'



const HomePage = () => {
    const data = api.playlist("3cEYpjA9oz9GiPac4AsH4n")
    console.log(data)




    return (
        <div className='w-full rounded-xl py-7 relative overflow-hidden overflow-y-auto hide-scrollbar h-full max-h-full bg-linear-to-b bg-background from-5% from-gray-500/30 to-50% to-black/10'>
            <h1 className='font-semibold text-white text-2xl px-7'>Trending Songs</h1>



            <MusicCarousel mode="songs" />



            <h1 className='font-semibold text-white text-2xl px-7 mt-7'>Popular Artist</h1>

            <MusicCarousel mode="artist" />




        </div>
    )
}

export default HomePage