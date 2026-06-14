

const menus = [
    {
        label: 'Home',
        icon: '/icons/home-icon.svg',
        path: "/"
    },
    {
        label: 'Search',
        icon: '/icons/search-icon.svg',
        path: "/search"
    },
    {
        label: 'Your Library',
        icon: '/icons/library-icon.svg',
        path: "/library"
    }
]

const shortcutMenu = [
    {
        icon: "/icons/plus-icon.svg",
        label: "Create Playlist",
    },
    {
        icon: "/icons/heart-icon.svg",
        label: "Liked Songs",
    },
    {
        label: "Your Episode",
        icon: "/icons/episode-icon.svg",
        path: "/episode"
    },
]

const Sidebar = () => {
    const pathName = window.location.pathname
    const activeMenu = menus.find((menu) => menu.path === pathName)
    console.log(activeMenu)
    return (
        <aside className='bg-black cursor-pointer flex flex-col h-screen sticky top-0'>
            {/* effect */}
            <div className="absolute pointer-events-none inset-0 bg-linear-to-t from-black via-transparent to-transparent bottom-0"></div>

            <div className="p-7">
                <div className='flex items-center'>
                    <img src="/logo.svg" alt="logo" className='object-cover' width={200} height={200} />
                </div>
                <div className="flex flex-col p-3 text-white mt-10">
                    <ul className='text-lg font-semibold space-y-4.5'>
                        {menus.map((menu) => (
                            <li key={menu.label} className={`flex items-center gap-7 opacity-50 hover:opacity-100 ${menu.path === pathName ? 'opacity-100' : ''}`}>
                                <img src={menu.icon} alt={menu.label} className=' w-8 h-8' />
                                <span className='text-center'>{menu.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col font-semibold p-3 text-white mt-10">
                    <ul className='text-lg space-y-2.5'>
                        {shortcutMenu.map((menu) => (
                            <li key={menu.label} className={`flex items-center gap-7 opacity-50 hover:opacity-100 ${menu.path === pathName ? 'opacity-100' : ''}`}>
                                <img src={menu.icon} alt={menu.label} className=' w-8 h-8' />
                                <span className='text-center'>{menu.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-full h-px bg-white/30 my-5"></div>

                <div className=" text-white/30   relative text-xl flex flex-col">

                    <div className="max-h-[250px] space-y-2.5  flex flex-col overflow-y-auto hide-scrollbar">
                        <span>Jazz</span>
                        <span>Hangover Cure</span>
                        <span>Your Top Songs 2026</span>
                        <span>Chill Hits</span>
                        <span>Indie Pop</span>
                        <span>Jazz</span>
                        <span>Hangover Cure</span>
                        <span>Your Top Songs 2026</span>
                        <span>Chill Hits</span>
                        <span>Indie Pop</span>
                        <span>Jazz</span>
                        <span>Hangover Cure</span>
                        <span>Your Top Songs 2026</span>
                        <span>Chill Hits</span>
                        <span>Indie Pop</span>
                        <span>Jazz</span>
                        <span>Hangover Cure</span>
                        <span>Your Top Songs 2026</span>
                        <span>Chill Hits</span>
                        <span>Indie Pop</span>
                        <span>Jazz</span>
                        <span>Hangover Cure</span>
                        <span>Your Top Songs 2026</span>
                        <span>Chill Hits</span>
                        <span>Indie Pop</span>
                    </div>
                </div>




            </div>



            <div className="absolute left-0 right-0 z-10 bottom-0 h-[62px] w-full ">
                <div className="flex text-xl h-full w-full  bg-black items-center gap-5 font-semibold px-7 text-white/70">
                    <div className="flex gap-2.5 w-full opacity-50 hover:opacity-100 transition-opacity duration-300 ">
                        <img src="/icons/install-icon.svg" alt="install-app" className="w-7" />
                        <p>Install App</p>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar