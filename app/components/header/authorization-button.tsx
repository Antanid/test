import Button from "@/app/components/button";

const AuthorizationButton = () => {
    return (
        <div className='hidden sm:block lg:flex lg:items-center lg:gap-x-4'>
            <Button value={'Log In'}
                    btnStyle={'bg-white border border-black px-6 py-3 rounded-3xl w-44 cursor-pointer hidden lg:flex lg:items-center lg:justify-center lg:h-10 lg:w-24'}
                    valueStyle={'text-sm font-bold text-black text-center'}/>
            <Button value={'Sign Up'}
                    btnStyle={'bg-black rounded-3xl flex items-center justify-center cursor-pointer w-44 px-6 py-3 lg:h-10 lg:w-[105px]'}
                    valueStyle={'text-white font-bold text-sm text-center'}/>
        </div>
    );
}
export default AuthorizationButton;