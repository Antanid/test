import Image from "next/image";
import CustomMainText from "@/app/components/custom-main-text/custom-main-text";
import Button from "@/app/components/button";
import OvalText from "@/app/components/sign-up/oval-text";

const SignUp = () => {
    return(
<div className="bg-black
bg-[url('/backgrounds/sign-up.png')]
sm:bg-[url('/backgrounds/desktop.png')]
bg-cover bg-center lg:flex lg:justify-around lg:items-center lg:pt-40 lg:pb-48 2xl:justify-center 2xl:gap-x-16">

    <OvalText/>

    <div className="flex justify-center items-center py-8 min-h-[400px]">
    <Image
        src={'/sign-up-mobile.png'}
        alt={'sign-up-mobile'}
        width={358}
        height={389}
        loading="eager"
        className='object-cover sm:w-[530px] sm:h-[570px] sm:object-scale-down'
    />
    </div>
    <div className='lg:mt-48'>
        <div className='lg:max-w-[350px]'>
    <CustomMainText value="Find your dream relationship today by talking to real people that understand the value of traditional gender roles"
                    pStyle="text-white text-base font-semibold"/>
        </div>

    <div className='pb-44 px-4 sm:flex sm:justify-center lg:pb-0'>
        <Button value="Get Started"
                btnStyle="flex justify-center items-center cursor-pointer mt-8 py-3 px-4 rounded-3xl bg-white border border-white sm:w-44"
                valueStyle="text-black text-base font-bold"/>
    </div>
    </div>
</div>
    )
}
export default SignUp;