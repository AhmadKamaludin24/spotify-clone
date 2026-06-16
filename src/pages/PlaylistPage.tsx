import { Clock, EllipsisIcon, List, PlusCircle, Timeline } from "lucide-react"
import { PlayButton } from "../components/Buttons"
import { useParams, useSearchParams } from "react-router-dom"
import songs from "../data/songs.json"
import MusicCarousel from "../components/MusicCarousel"

const PlaylistPage = () => {
    const params = useParams()

    const id = params.id

    console.log(id)

    const song = songs.find((song) => song.id === id)

    if (!song) return <div></div>
    return (
        <div className='w-full rounded-xl  relative overflow-hidden overflow-y-auto hide-scrollbar h-full max-h-full  bg-background '>
            <div className="absolute inset-0 bg-linear-to-br from-gray-500/60 to-[50vh] to-transparent pointer-events-none" />
            <div style={{
                background: `linear-gradient(to bottom, ${song.color} 0%, transparent 70%)`
            }} className={`absolute inset-0 bg-linear-to-b  to-80% to-transparent pointer-events-none`} />

            <header className="w-full relative h-[263px] grid grid-cols-[23%_77%] items-center ">
                <div className="h-64 w-64 p-7 rounded-xl">
                    <img src={song.coverUrl} alt="" className='w-full h-full rounded-xl shadow-2xl' />
                </div>


                <div className=" -space-y-2.5 flex  flex-col text-white h-full justify-center">

                    <span className=" text-white/60">Single</span>
                    <h1 className={` [word-spacing:2px] font-extrabold tracking-tighter ${song.title.length > 11 ? "text-7xl pt-5" : "text-[6rem]"}`}>{song.title}</h1>

                    <span className="text-white/70 absolute bottom-7">{song.artist} • {song.songCount} Songs • 32 min 32 s</span>


                </div>


            </header>

            <div className="z-100 w-full bg-linear-to-b from-black to-background">
                <div className="px-7">
                    <div className="w-full sticky flex items-center h-[97px] justify-between">
                        <div className="flex gap-5 items-center">
                            <PlayButton className="w-18 h-18" />
                            <PlusCircle className="w-10 h-10 hover:scale-110 transition-all duration-500 text-white/60" />
                            <EllipsisIcon className="w-8 h-8 hover:scale-110 transition-all duration-500 text-white/60" />
                        </div>

                        <div className="flex gap-2 items-center">
                            <span className="text-white/60">List</span>
                            <List className="text-white/60" />
                        </div>
                    </div>
                    <div className="p-7 flex items-center justify-between">
                        <div className="text-white/60">
                            <span>#</span>
                            <span className="pl-7">Title</span>
                        </div>
                        <Clock className="text-white/60 w-5 h-5" />
                    </div>

                    <div className="w-full h-[0.5px] bg-white/20"></div>

                    <div className="p-4 px-7 hover:bg-secondary transition-colors duration-300 ease-in-out rounded-lg cursor-pointer flex items-center justify-between">
                        <div className="text-white/60 flex items-center">
                            <span className="text-xl">1</span>
                            <div className="flex flex-col">
                                <span className="pl-7 text-white">{song.title}</span>
                                <span className="pl-7 text-white/60">{song.artist}</span>
                            </div>
                        </div>
                        <p className="text-white/60">3:20</p>
                    </div>

                </div>


                <h1 className="pl-7 font-bold text-white text-2xl mt-10">More Songs</h1>
                <MusicCarousel mode="songs" data={songs} />


            </div>


        </div>
    )
}

export default PlaylistPage