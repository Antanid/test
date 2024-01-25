import TextInsideOval from "@/app/components/text-inside-oval";
import ReviewsOval from "@/app/icons/reviews-oval";

const OvalText = () => {
    return (
        <div className='flex justify-center items-center pt-[70px] pb-[22px] gap-x-2 sm:flex-wrap'>
            <p className='text-2xl text-black font-bold'>Reviews From</p>
            <TextInsideOval img={<ReviewsOval/>} value='Users' valueStyles="text-2xl text-black font-normal font-merienda"
                            positionStyles="absolute left-6 top-2.5"/>
        </div>
    )
}
export default OvalText;