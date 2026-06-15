import { useState } from "react";

export const MusicCard = ({ className, mode }: { className?: string; mode?: "songs" | "artist" }) => {
    const [isHover, setIsHover] = useState(false)

    return (
        <div onMouseEnter={(e) => { e.preventDefault(); setIsHover(true) }} onMouseLeave={(e) => { e.preventDefault(); setIsHover(false) }} className={`relative p-4 ${className}`}>
            <div className={`${isHover ? "opacity-100" : "opacity-0"} transition-all ease-in-out duration-500 absolute pointer-events-none rounded-lg inset-0 bg-linear-to-t from-gray-500/20 to-transparent`}></div>
            <div className={` w-full h-full flex flex-col gap-2 justify-center shrink-0`}>
                <div className={`w-48 h-48 ${mode === "songs" ? "rounded-xl" : "rounded-full"} bg-blue-700 `}></div>
                <div className='w-full h-[20%] p-1 rounded-xl flex justify-center flex-col text-white'>
                    <p className='text-sm text-white/90'>Dunia Yang Dinanti</p>
                    <p className='text-xs text-white/70'>Raim Laode</p>
                </div>
            </div>
        </div>
    )
}



export const ArtistCard = ({ className }: { className?: string; }) => {

    return (
        <div className={`${className} w-52 h-full flex flex-col gap-2 justify-center shrink-0`}>
            <div className={`w-48 h-48  bg-blue-700 rounded-full `}></div>
            <div className='w-full h-[20%] p-1 rounded-xl flex justify-center flex-col text-white'>
                <p className='text-sm text-white/90'>Dunia Yang Dinanti</p>
                <p className='text-xs text-white/70'>Raim Laode</p>
            </div>
        </div>
    )
}

