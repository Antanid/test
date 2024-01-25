import Line from "@/app/icons/line";
import Image from "next/image";
import Infinity from "@/app/icons/infinity";
import PhotoCard from "@/app/components/see-more/photo-card";
import ButtonMore from "@/app/components/see-more/button-more";

const SeeMore = () => {
    return(
        <div
            className="flex flex-col justify-center items-center px-5 bg-black bg-[url('/backgrounds/see-more.png')] bg-cover bg-center py-40">

            <div className='flex items-center gap-x-4 flex-wrap'>
                <p className='text-white text-2xl font-bold'>Tired Of</p>
                <div className='relative'>
                    <p className='text-white text-2xl font-merienda'>Swiping Endlessly</p>
                    <div className='absolute'>
                        <Line width={'100%'}/>
                    </div>

                </div>

            </div>
            <p className='text-white font-bold text-2xl mt-6'>
                On Dating Apps?
            </p>

            <PhotoCard/>
           <ButtonMore/>
        </div>
    );
}

export default SeeMore;