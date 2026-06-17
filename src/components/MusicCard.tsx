import { Play } from "lucide-react";
import { useState } from "react";


interface MusicCardProps {
    className?: string;
    title: string,
    artist: string,
    coverUrl: string,
    onClick?: () => void
}

interface ArtistCardProps {
    className?: string;
    artistName?: string,
    artistImageUrl?: string,
    onClick?: () => void
}

export const MusicCard = ({ className, title, artist, coverUrl, onClick }: MusicCardProps) => {
    const [isHover, setIsHover] = useState(false)

    return (
        <div onClick={onClick} onMouseEnter={(e) => { e.preventDefault(); setIsHover(true) }} onMouseLeave={(e) => { e.preventDefault(); setIsHover(false) }} className={`relative w-[190px] h-[232px] p-4 ${className}`}>
            <div className={`${isHover ? "opacity-100 -translate-y-2" : "opacity-0"} z-10 hover:scale-110 transition-all ease-in-out duration-500  absolute right-7 bottom-1/3 flex justify-center items-center rounded-full bg-primary w-14 h-14 pointer-events-none `}>
                <Play fill="black" className="text-black  outline-0" />
            </div>
            <div className={`${isHover ? "opacity-100" : "opacity-0"} transition-all ease-in-out duration-500 absolute pointer-events-none rounded-lg inset-0 bg-linear-to-t from-gray-500/20 to-transparent`}></div>
            <div className={` w-full h-full flex flex-col gap-2 justify-center shrink-0`}>
                <div className={`w-40 h-40 rounded-xl bg-blue-700 overflow-hidden `}>
                    <img src={coverUrl} alt={title} className="w-full h-full object-cover" />
                </div>
                <div className='w-full h-[20%] p-1 rounded-xl flex justify-center flex-col text-white'>
                    <p className='text-sm text-white/90'>{title}</p>
                    <p className='text-xs text-white/70'>{artist}</p>
                </div>
            </div>
        </div>
    )
}


export const ArtistCard = ({ className, artistName, artistImageUrl, onClick }: ArtistCardProps) => {
    const [isHover, setIsHover] = useState(false)

    return (
        <div onClick={onClick} onMouseEnter={(e) => { e.preventDefault(); setIsHover(true) }} onMouseLeave={(e) => { e.preventDefault(); setIsHover(false) }} className={`relative p-4 w-[190px] h-[232px] ${className}`}>
            <div className={`${isHover ? "opacity-100 -translate-y-2" : "opacity-0"} z-10 hover:scale-110 transition-all ease-in-out duration-500  absolute right-7 bottom-1/3 flex justify-center items-center rounded-full bg-primary w-12 h-12 pointer-events-none `}>
                <Play fill="black" className="text-black  outline-0" />
            </div>
            <div className={`${isHover ? "opacity-100" : "opacity-0"} transition-all ease-in-out duration-500 absolute pointer-events-none rounded-lg inset-0 bg-linear-to-t from-gray-500/20 to-transparent`}></div>
            <div className={` w-full h-full flex flex-col gap-2 justify-center shrink-0`}>
                <div className={`w-40 h-40 rounded-full bg-blue-700 overflow-hidden `}>
                    <img src={artistImageUrl} alt={artistName} className="w-full h-full object-cover" />
                </div>
                <div className='w-full h-[20%] p-1 rounded-xl flex justify-center flex-col text-white'>
                    <p className='text-sm text-white/90'>{artistName}</p>
                </div>
            </div>
        </div>
    )
}





