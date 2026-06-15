import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import { CarouselProvider } from '../context/carousel-context'

const Layout = () => {
    const [sidebarWidth, setSidebarWidth] = useState(450)
    const [isResizing, setIsResizing] = useState(false)
    const [music, setMusic] = useState(false)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isResizing) return;
            let newWidth = e.clientX  // 8px for p-2 padding
            if (newWidth < 150) newWidth = 50; // Snap to compact mode
            else if (newWidth > 450) newWidth = 450; // Max width
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
        setSidebarWidth(sidebarWidth === 450 ? 50 : 450)
    }
    return (
        <div className='w-full min-h-screen bg-black relative overflow-hidden '>

            <div
                className={`h-svh p-2 gap-2 grid grid-rows-[7%_80%_10%] ${isResizing ? 'select-none' : 'transition-[grid-template-columns] duration-300 ease-in-out'}`}
                style={{ gridTemplateColumns: `${sidebarWidth}px 1fr ${music ? '300px' : '0'}` }}
            >

                <Navbar className='row-span-1 col-span-3 relative' />
                {/* Sidebar */}
                <div className='w-full rounded-xl h-full bg-background relative'>
                    <button onClick={() => toggleResize()} className='w-full bg-white text-black rounded-full'> resize sidebar </button>

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
                    <CarouselProvider>
                        <Outlet />
                    </CarouselProvider>
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