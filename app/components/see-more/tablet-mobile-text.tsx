import Line from "@/app/icons/line";

const TabletMobileText = () => {
    return (
        <div className='lg:hidden'>
            <div className='flex items-center gap-x-4 flex-wrap'>
                <p className='text-white text-2xl font-bold sm:text-32'>Tired Of</p>
                <div className='relative'>
                    <p className='text-white text-2xl font-merienda sm:text-32'>Swiping Endlessly</p>
                    <div className='absolute h-3 w-[194px] sm:h-2.5 sm:w-[280px]'>
                        <Line/>
                    </div>

                </div>

            </div>
            <p className='text-white font-bold text-2xl mt-6 sm:w-[600px] sm:flex sm:justify-end sm:text-32'>
                On Dating Apps?
            </p>
        </div>
    );
}
export default TabletMobileText;