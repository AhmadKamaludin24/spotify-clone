import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import { PanelLeftOpen, PanelRightClose, Plus } from 'lucide-react'
const Layout = () => {
    const [sidebarWidth, setSidebarWidth] = useState(420)
    const [isResizing, setIsResizing] = useState(false)
    const [isHover, setIsHover] = useState(false)
    const [music, setMusic] = useState(false)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isResizing) return;
            let newWidth = e.clientX  // 8px for p-2 padding
            if (newWidth < 150) newWidth = 50; // Snap to compact mode
            else if (newWidth > 420) newWidth = 420; // Max width
            setSidebarWidth(newWidth);
        };

        const handleMouseUp = () => {
            setIsResizing(false);
        };

        if (isResizing) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isResizing]);

    const toggleResize = () => {
        setSidebarWidth(sidebarWidth === 420 ? 50 : 420)
    }
    return (
        <div className='w-full min-h-screen bg-black relative overflow-hidden '>

            <div
                className={`h-svh p-2 gap-2 grid max-sm:grid-cols-1 grid-rows-[7%_80%_10%] ${isResizing ? 'select-none' : 'transition-[grid-template-columns] duration-300 ease-in-out'}`}
                style={{ gridTemplateColumns: `${sidebarWidth}px 1fr ${music ? '300px' : '0'}` }}
            >

                <Navbar className='row-span-1 col-span-3 relative' />
                {/* Sidebar */}
                <div className='w-full py-4 px-3 flex flex-col rounded-xl h-full bg-background relative'>


                    {sidebarWidth > 200 ?
                        <div>
                            <div className="flex text-white  items-center justify-between">
                                <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className="flex cursor-pointer transition-all ease-in-out duration-500 items-center gap-1.5">

                                    <PanelRightClose onClick={() => toggleResize()} className={`${isHover ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'} cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out`} />

                                    <h1 className={`${isHover ? 'opacity-100 translate-x-0' : ' -translate-x-4'} trasition-all duration-300 ease-in-out font-semibold`}>Your Liblary</h1>
                                </div>

                                <div className="py-2 px-4 rounded-full bg-secondary text-sm flex items-center gap-2">
                                    <Plus /> <span>Create</span>
                                </div>


                            </div>
                            <div className='mt-10 w-full h-[20vh] rounded-xl py-4 px-7 text-white flex flex-col justify-between  bg-secondary'>
                                <div>
                                    <h2 className='font-semibold text-white'>Create Your Own Playlist</h2>
                                    <p className='font-medium text-white/60'>It's easy, we'll help you</p>
                                </div>

                                <button className='p-2 px-4 rounded-full w-fit text-sm bg-white text-black font-semibold cursor-pointer'>Create Playlist</button>

                            </div>

                            <div className='mt-7 w-full h-[20vh] rounded-xl py-4 px-7 text-white flex flex-col justify-between  bg-secondary'>
                                <div>
                                    <h2 className='font-semibold text-white'>Lets Find Some Podcast To Follow</h2>
                                    <p className='font-medium text-white/60'>We'll keep you updated on new episodes</p>
                                </div>

                                <button className='p-2 px-4 rounded-full w-fit text-sm bg-white text-black font-semibold cursor-pointer'>Browse Podcasts</button>

                            </div>

                        </div>
                        :
                        <div className='flex flex-col w-full items-center text-white gap-5 h-full'>
                            <PanelLeftOpen onClick={() => toggleResize()} className='cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out' />
                            <div className="w-9 h-9 rounded-full bg-secondary text-white flex items-center justify-center"><Plus /></div>
                        </div>
                    }


                    {/* <button onClick={() => toggleResize()} className='w-full bg-white text-black rounded-full'> resize sidebar </button> */}

                    {/* Drag Handle */}
                    <div
                        className='absolute top-0 -right-2 w-4 h-full cursor-col-resize z-10 group flex justify-center'
                        onMouseDown={(e) => { e.preventDefault(); setIsResizing(true); }}
                        onDoubleClick={() => toggleResize()}
                    >
                        <div className={`w-[2px] h-full bg-transparent group-hover:bg-white/30 transition-colors ${isResizing ? '!bg-white/60' : ''}`} />
                    </div>
                </div>

                {/* Main */}
                <main className='rounded-2xl min-w-0'>

                    <Outlet />

                </main>

                {/* RightSide */}
                <div className='h-full w-full bg-background rounded-xl'></div>


                {/* Player */}
                <div className='w-full p-px px-px col-span-3 h-full bg-black'>
                    <Banner />
                </div>
            </div>


        </div>
    )
}

export default Layout