import CurvedLine from "@/app/icons/curved-line";

const LineText = () => {
    return (
        <div className='flex items-center justify-center gap-x-4 gap-y-4 pt-40 pb-7 flex-wrap'>
            <p className='text-white text-2xl font-bold'>Only</p>
            <div className='relative'>
                <p className='text-white text-2xl font-merienda'>Verified</p>
                <div className='absolute'>
                    <CurvedLine/>
                </div>
            </div>
            <p className='text-white text-2xl font-bold'>Profiles</p>
        </div>
    )
}

export default LineText;