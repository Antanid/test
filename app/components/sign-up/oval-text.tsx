import SignUpLine from "@/app/icons/sign-up-line";
import SignUpLineSm from "@/app/icons/sign-up-line-sm";

const OvalText = () => {
    return (
        <div className='flex justify-center items-center gap-x-4 pt-40 pb-[34px] flex-wrap lg:pb-52 lg:gap-y-3'>
            <p className='text-white text-2xl font-bold sm:text-40'>Sign Up</p>
            <div className='relative'>
                <p className='text-white text-2xl font-merienda sm:text-40'>Now</p>
                <div className='absolute'>
                    <div className='w-[60px] h-2.5 sm:h-[26px] sm:w-36'>
                        <SignUpLine/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OvalText;