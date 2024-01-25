import SignUpLine from "@/app/icons/sign-up-line";

const OvalText = () => {
    return (
        <div className='flex justify-center items-center gap-x-4 pt-40 pb-[34px] flex-wrap'>
            <p className='text-white text-2xl font-bold'>Sign Up</p>
            <div className='relative'>
                <p className='text-white text-2xl font-merienda'>Now</p>
                <div className='absolute'>
                    <SignUpLine/>
                </div>
            </div>
        </div>
    )
}
export default OvalText;