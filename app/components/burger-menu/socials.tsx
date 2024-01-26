import {FC} from "react";

interface SocialsType  {
    socials: Array<{
        title: string
    }>
}
const Socials: FC<SocialsType>= ({socials}) => {
    return (
        <div className='px-4 flex flex-wrap sm:mt-28 sm:flex-col'>
            <div className='mr-24'>
                <p className='text-white text-xs font-bold pb-1 sm:text-lg sm:pb-2'>Our Social</p>
                <div className='flex flex-col'>
                    {
                        socials.map((social) => (
                            <p key={social.title}
                               className='text-white pb-2 cursor-pointer text-base font-thin sm:text-2xl sm:pb-5'
                            >
                                {social.title}
                            </p>
                        ))
                    }
                </div>
            </div>
            <div className='text-white'>
                <p className='text-xs font-bold sm:text-lg sm:pb-2'>Get In Touch</p>
                <p className='text-xs sm:text-xl'>support@hislovers.com</p>
            </div>
        </div>
    )
}
export default Socials;