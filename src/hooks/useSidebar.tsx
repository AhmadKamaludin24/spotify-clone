import { useState } from "react";




export const useResizeSidebar = () => {
    const [sidebarWidth, setSidebarWidth] = useState(300)

    const toggleResize = () => {
        setSidebarWidth(sidebarWidth === 300 ? 50 : 300)
    }


    return {
        sidebarWidth,
        setSidebarWidth,
        toggleResize
    }
} 