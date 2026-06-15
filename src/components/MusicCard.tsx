
export const MusicCard = ({ className }: { className?: string; }) => {

    return (
        <div className={`${className} w-52 h-60 flex flex-col gap-2 justify-center shrink-0`}>
            <div className={`w-full h-[80%] bg-blue-700 rounded-xl `}></div>
            <div className='w-full h-[20%] p-1 rounded-xl flex justify-center flex-col text-white'>
                <p className='text-sm text-white/90'>Dunia Yang Dinanti</p>
                <p className='text-xs text-white/70'>Raim Laode</p>
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

