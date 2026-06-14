

const Navbar = ({ className }: { className: string }) => {
    return (
        <div className={`${className} w-full z-20 bg-black h-full px-5 flex justify-between items-center`}>
            <img src="/logo.png" alt="spotify" className='w-9 ' />
            <div className=' h-full flex items-center gap-2'>
                <div className='rounded-full w-12 h-12 bg-background flex justify-center items-center'>
                    <img src="/icons/home-icon.svg" alt="search" className='w-6 h-6' />
                </div>

                <div className='w-[450px]  relative p-2 rounded-full flex items-center justify-between bg-background h-12'>
                    <div className='flex'>
                        <img src="/icons/search-icon.svg" alt="" className='w-7' />
                        <input type="text" placeholder='Search' className='text-white w-full absolute rounded-full inset-0 pl-12' />
                    </div>


                </div>
            </div>

            <div className='flex gap-4 items-center'>
                <div className='py-2 px-5 h-10 rounded-full bg-white font-semibold text-sm cursor-pointer flex justify-center items-center'>
                    <span>Explore Premium</span>
                </div>

                <div className='py-2 px-5 h-10 rounded-full text-white gap-2 font-semibold text-sm cursor-pointer flex justify-center items-center'>
                    <img src="/icons/install-icon.svg" alt="install-app" />
                    <span>Install App</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar