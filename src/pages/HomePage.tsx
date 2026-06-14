import api from '../lib/api'

const HomePage = () => {
    const data = api.playlist("3cEYpjA9oz9GiPac4AsH4n")
    console.log(data)
    return (
        <div className='w-full rounded-xl overflow-hidden overflow-y-auto hide-scrollbar h-full max-h-full bg-linear-to-b bg-background from-gray-950 to-black/10'>
            <div className='px-12  pt-28'>
                <h1 className='font-semibold text-3xl text-white'>Good Afternoon</h1>
                <div className="mt-10 grid grid-cols-3 grid-rows-2 gap-4">
                    <div className="grid grid-cols-[130px_1fr] rounded-xl bg-white/10  w-full h-[130px]">
                        <div className='bg-blue-900 rounded-l-xl'>
                            <img src="" alt="" />
                        </div>
                        <div className='pl-7 flex items-center font-semibold text-white text-2xl'>
                            <span>Chill Lofi</span>
                        </div>
                    </div>
                </div>
                <div className="mt-10 grid grid-cols-3 grid-rows-2 gap-4">
                    <div className="grid grid-cols-[130px_1fr] rounded-xl bg-white/10  w-full h-[130px]">
                        <div className='bg-blue-900 rounded-l-xl'>
                            <img src="" alt="" />
                        </div>
                        <div className='pl-7 flex items-center font-semibold text-white text-2xl'>
                            <span>Chill Lofi</span>
                        </div>
                    </div>
                </div>
                <div className="mt-10 grid grid-cols-3 grid-rows-2 gap-4">
                    <div className="grid grid-cols-[130px_1fr] rounded-xl bg-white/10  w-full h-[130px]">
                        <div className='bg-blue-900 rounded-l-xl'>
                            <img src="" alt="" />
                        </div>
                        <div className='pl-7 flex items-center font-semibold text-white text-2xl'>
                            <span>Chill Lofi</span>
                        </div>
                    </div>
                </div>
                <div className="mt-10 grid grid-cols-3 grid-rows-2 gap-4">
                    <div className="grid grid-cols-[130px_1fr] rounded-xl bg-white/10  w-full h-[130px]">
                        <div className='bg-blue-900 rounded-l-xl'>
                            <img src="" alt="" />
                        </div>
                        <div className='pl-7 flex items-center font-semibold text-white text-2xl'>
                            <span>Chill Lofi</span>
                        </div>
                    </div>
                </div>
                <div className="mt-10 grid grid-cols-3 grid-rows-2 gap-4">
                    <div className="grid grid-cols-[130px_1fr] rounded-xl bg-white/10  w-full h-[130px]">
                        <div className='bg-blue-900 rounded-l-xl'>
                            <img src="" alt="" />
                        </div>
                        <div className='pl-7 flex items-center font-semibold text-white text-2xl'>
                            <span>Chill Lofi</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage