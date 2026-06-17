import { Clock, EllipsisIcon, List, Play, PlayIcon, PlusCircle } from "lucide-react"
import { PlayButton } from "../components/Buttons"
import { useParams } from "react-router-dom"
import songs from "../data/songs.json"
import artists from "../data/artists.json"
import MusicCarousel from "../components/MusicCarousel"
import { useState } from "react"

const ArtistPage = () => {
    const params = useParams()
    const [isHover, setIsHover] = useState(0)

    const id = params.id

    const artist = artists.find((artist) => artist.id === id)
    const song = songs.filter((song) => song.artist.includes(artist?.name ?? ""))

    console.log(song)

    if (!artist) return <div></div>
    return (
        <div className='w-full rounded-xl  relative  overflow-y-auto hide-scrollbar h-full max-h-full  bg-background '>


            <header className="w-full sticky top-0 h-[270px] z-0">
                {/* Gradient overlay agar text/button di header lebih terbaca kalau ada */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>

                <img src={artist.images[0].url} alt="" className="h-full w-full object-cover" />
            </header>
            <div className="absolute z-10 top-1/8 left-2 p-7">
                <h1 className="text-white text-[6rem] font-bold">{artist.name}</h1>
                <p className="text-white/60 text-sm">100,000 monthly listeners</p>
            </div>

            {/* relative dan z-10 membuat konten ini scroll menutupi header yang sticky z-0 */}
            <div className="relative z-10 w-full bg-linear-to-b from-black to-background">
                <div className="px-7">
                    <div className="w-full  flex items-center h-[97px] justify-between">
                        <div className="flex gap-5 items-center">
                            <PlayButton className="w-18 h-18" />
                            <div className="px-4 cursor-pointer py-1  border border-white/60 rounded-full text-white/60" >Follow</div>
                            <EllipsisIcon className="w-8 h-8 hover:scale-110 transition-all duration-500 text-white/60" />
                        </div>


                    </div>
                    <div className="mt-5 flex items-center justify-between">
                        <span className="text-white font-semibold text-2xl">Popular</span>

                    </div>



                    {song.map((song) => (
                        <div key={song.id} onMouseEnter={() => { setIsHover(Number(song.id)) }} onMouseLeave={() => { setIsHover(0) }} className="mt-4 py-2 px-7 hover:bg-secondary transition-colors duration-300 ease-in-out rounded-lg cursor-pointer flex items-center justify-between">
                            <div className="text-white/60 gap-3 flex items-center">
                                <span className="text-xl w-12">{isHover === Number(song.id) ? <PlayIcon fill="white" className="w-5 h-5" /> : song.id}</span>
                                <div className="w-12 h-12 bg-amber-200 rounded-md overflow-hidden ">
                                    <img src={song.coverUrl} alt="" />
                                </div>
                                <h2 className="text-white">{song.title}</h2>

                            </div>
                            <div className="w-1/3 flex justify-between">
                                <p className="text-white/60">{song.totalListeners.toLocaleString()}</p>

                                <p className="text-white/60">{song.songDuration}</p>
                            </div>
                        </div>
                    ))}

                </div>


                <h1 className="pl-7 font-bold text-white text-2xl mt-10">More Artist</h1>
                <MusicCarousel mode="artist" data={artists} />


            </div>
        </div>
    )
}

export default ArtistPage
