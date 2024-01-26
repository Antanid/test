import Image from "next/image";
import Infinity from "@/app/icons/infinity";

const PhotoCard = () => {
    return(
        <div className='flex flex-col justify-end w-full sm:flex-row sm:justify-center sm:items-center sm:w-full sm:px-10'>
            <div className='mt-10 flex relative w-full min-h-[220px] sm:w-fit'>
                <Image
                    src={'/photo-card-man.png'}
                    alt={'photo-card-man'}
                    width={180}
                    height={222}
                    className='object-scale-down sm:w-[210px] sm:h-[280px] lg:w-[290px] lg:h-[340px]'
                    loading="eager"
                    priority
                />
                <Image
                    src={'/message-man.png'}
                    alt={'message-man'}
                    width={169}
                    height={44}
                    loading="eager"
                    className='absolute bottom-20 left-[130px] object-cover w-[30%] sm:w-auto sm:hidden'
                />
                <Image
                    src={'/message-man-sm.png'}
                    alt={'message-man'}
                    width={176}
                    height={44}
                    loading="eager"
                    className='absolute object-cover hidden sm:block sm:left-[-60px] sm:w-[70%] sm:bottom-24 lg:left-[-100px] lg:bottom-28'
                />

            </div>

            <div className='py-8 flex items-center justify-center sm:py-0 sm:px-8'>
                <Infinity/>
            </div>

            <div className='mt-10 flex flex-row-reverse relative w-full min-h-[220px] sm:w-fit'>
                <Image
                    src={'/photo-card-woman.png'}
                    alt={'photo-card-woman'}
                    width={169}
                    height={222}
                    loading="eager"
                    priority
                    className='object-scale-down sm:w-[210px] sm:h-[280px] lg:w-[290px] lg:h-[340px]'
                />
                <Image
                    src={'/message-woman.png'}
                    alt={'message-woman'}
                    width={176}
                    height={44}
                    loading="eager"
                    className='absolute bottom-[85px] right-32 w-[30%] h-auto sm:w-auto  sm:hidden'
                />
                <Image
                    src={'/message-woman-sm.png'}
                    alt={'message-man'}
                    width={176}
                    height={44}
                    loading="eager"
                    className='absolute object-cover hidden sm:block sm:left-[100px] sm:w-[70%] sm:bottom-24 lg:left-[200px] lg:bottom-32'
                />
            </div>
        </div>
    );
}
export default PhotoCard;