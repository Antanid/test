import ArrowDown from "@/app/icons/arrow-down";
import Search from "@/app/icons/search";


const selectSeekingDiv = "flex flex-col justify-center gap-y-1 cursor-pointer"
const Selects = () => {
    return (
        <div
            className="flex justify-between items-center py-2 px-6 w-full mx-4 bg-gray-100 rounded-[50px] h-16 mt-20 opacity-70">

            <div className={selectSeekingDiv}>
                <div className='flex items-center gap-x-1'>
                    <p className='text-xs font-semibold'>I am a</p>
                    <ArrowDown/>
                </div>
                <p className='text-xs'>Man</p>
            </div>

            <div className='border-r border-r-black h-full'></div>

            <div className={selectSeekingDiv}>
                <div className='flex items-center gap-x-1'>
                    <p className='text-xs font-semibold'>Seeking a</p>
                    <ArrowDown/>
                </div>
                <p className='text-xs'>Woman</p>
            </div>

            <div className='border-r border-r-black h-full'></div>
            <div className='flex justify-center bg-black p-3 rounded-full'>
                <Search/>
            </div>

        </div>
    );
}
export default Selects;