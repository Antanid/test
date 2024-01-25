import Image from "next/image";
import Infinity from "@/app/icons/infinity";

const PhotoCard = () => {
    return(
        <>
            <div className='mt-10 flex relative w-full h-[210px]'>
                <Image
                    src={'/photo-card-man.png'}
                    alt={'photo-card-man'}
                    width={180}
                    height={222}
                    className='object-cover'
                    loading="eager"
                    priority
                />
                <Image
                    src={'/message-man.png'}
                    alt={'message-man'}
                    width={169}
                    height={44}
                    loading="eager"
                    className='absolute bottom-20 left-[130px] object-cover w-[30%] sm:w-auto'
                />
            </div>

            <div className='py-8'>
                <Infinity/>
            </div>

            <div className='mt-10 flex flex-row-reverse relative w-full min-h-[220px]'>
                <Image
                    src={'/photo-card-woman.png'}
                    alt={'photo-card-woman'}
                    width={169}
                    height={222}
                    loading="eager"
                    priority
                />
                <Image
                    src={'/message-woman.png'}
                    alt={'message-woman'}
                    width={176}
                    height={44}
                    loading="eager"
                    className='absolute bottom-[85px] right-32 w-[30%] h-auto sm:w-auto'
                />
            </div>
        </>
    );
}
export default PhotoCard;