import { Play } from 'lucide-react'


export const PlayButton = ({ className, isHover, onClick, disabled }: { className?: string, isHover?: boolean, onClick?: () => void, disabled?: boolean }) => {
    return (
        <button disabled={disabled} onClick={onClick} className={` ${className} cursor-pointer hover:scale-110 transition-all ease-in-out duration-500 flex justify-center items-center rounded-full bg-primary w-12 h-12 `}>
            <Play fill="black" className="text-black  outline-0" />
        </button>
    )
}

