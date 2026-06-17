

const Banner = () => {
    return (
        <div className="rounded-xl px-7 w-full h-full bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-between">
            <span className=' text-xl font-semibold text-white'>This Is Spotify Design Clone</span>

            <a href='https://github.com/AhmadKamaludin24/spotify-clone' className='py-2 px-5 h-10 rounded-full bg-white font-semibold text-sm cursor-pointer flex justify-center items-center'>
                <span>Give Star For Github</span>
            </a>
        </div>
    )
}

export default Banner