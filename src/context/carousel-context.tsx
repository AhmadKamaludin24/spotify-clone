import { createContext, useContext } from "react";
import { useCarousel } from "../hooks/useCarousel";



type CarouselContextType = ReturnType<typeof useCarousel>

const CarouselContext = createContext<CarouselContextType | null>(null)


export const CarouselProvider = ({ children }: { children: React.ReactNode }) => {
    const value = useCarousel()
    return <CarouselContext.Provider value={value}>{children}</CarouselContext.Provider>
}


export const useCarouselContext = () => {
    const context = useContext(CarouselContext)
    if (!context) {
        throw new Error("useCarouselContext must be used within a CarouselProvider")
    }
    return context
}
