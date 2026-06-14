

const Navbar = ({ className }: { className: string }) => {
    return (
        <div className={`${className} w-full z-20 bg-black h-full px-5 flex justify-between items-center`}>

            <div className=' h-full flex items-center gap-2'>
                <img src="/logo.png" alt="spotify" className='w-9 ' />
                <div className='ml-7 rounded-full w-12 h-12 bg-background flex justify-center items-center'>
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
                <div className="flex text-white/60 font-semibold items-center gap-1.5">
                    <p className="hover:text-white hover:text-lg cursor-pointer transition-all duration-300">Premium</p>
                    <p className="hover:text-white hover:text-lg cursor-pointer transition-all duration-300">Support</p>
                    <p className="hover:text-white hover:text-lg cursor-pointer transition-all duration-300">Download</p>
                </div>

                <div className="w-[2px] h-[25px] bg-white"></div>

                <div className='py-2 px-5 h-10 rounded-full text-white gap-2 font-semibold text-sm cursor-pointer flex justify-center items-center'>
                    <img src="/icons/install-icon.svg" alt="install-app" />
                    <span>Install App</span>
                </div>

                <div className="flex justify-center items-center h-12 rounded-full bg-black w-[100px] text-white font-semibold cursor-pointer ">Sign Up</div>

                <div className="flex justify-center items-center h-12 rounded-full bg-white w-[100px] font-semibold cursor-pointer">Login</div>
            </div>
        </div >
    )
}

export default Navbar