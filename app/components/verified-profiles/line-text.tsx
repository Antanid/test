import CurvedLine from "@/app/icons/curved-line";

const LineText = () => {
    return (
        <div className='flex items-center justify-center gap-x-4 gap-y-4 pt-40 pb-7 flex-wrap sm:flex-col sm:gap-y-0 sm:w-72 sm:pt-0 lg:w-full'>
            <p className='text-white text-2xl font-bold sm:flex sm:justify-start sm:w-full sm:text-32 lg:pl-24'>Only</p>
            <br className='hidden sm:block'/>
            <div className='relative'>
                <p className='text-white text-2xl font-merienda sm:text-32'>Verified</p>
                <div className='absolute h-1.5 w-[88px] sm:h-2.5 sm:w-[129px] lg:h-5 lg:w-[170px]'>
                    <CurvedLine/>
                </div>
                <div>

                </div>
                <br className='hidden sm:block'/>
            </div>
            <p className='text-white text-2xl font-bold sm:flex sm:justify-end sm:w-full sm:text-32 lg:pr-[70px]'>Profiles</p>
        </div>
    )
}

export default LineText;