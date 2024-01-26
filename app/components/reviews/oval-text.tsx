import TextInsideOval from "@/app/components/text-inside-oval";
import ReviewsOval from "@/app/icons/reviews-oval";

const OvalText = () => {
    return (
        <div className='flex justify-center items-center pt-[70px] pb-[22px] gap-x-2 sm:flex-wrap'>
            <p className='text-2xl text-black font-bold sm:text-32'>Reviews From</p>
            <TextInsideOval img={<ReviewsOval/>}
                            ovalSize='w-28 h-[49px] sm:w-[130px] sm:h-14'
                            value='Users' valueStyles="text-2xl text-black font-normal font-merienda sm:text-32"
                            positionStyles="absolute left-6 top-2.5 sm:left-5 sm:top-3.5"/>
        </div>
    )
}
export default OvalText;