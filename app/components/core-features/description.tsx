import OvalCoreFeatures from "@/app/icons/oval-core-features";
import TextInsideOval from "@/app/components/text-inside-oval";
import CustomMainText from "@/app/components/custom-main-text/custom-main-text";

const Description = () => {
    return (
        <div>
            <div className='flex justify-center items-center mt-20 flex-wrap'>
                <p className='text-[22px] font-bold pr-4 sm:text-32'>Core</p>
                <TextInsideOval img={<OvalCoreFeatures/>}
                                ovalSize='w-[148px] h-[65px] sm:w-[187px] sm:h-[82px]'
                                value='Features' valueStyles='font-normal text-[22px] text-black font-merienda sm:text-32' positionStyles='absolute left-8 top-[18px] sm:left-[30px] sm:top-5'/>
            </div>

            <CustomMainText value={"We use AI to help men find women that agree with traditional gender roles"} pStyle="text-center text-sm font-semibold mt-4 mb-10 lg:w-full"/>
        </div>
    )
}
export default Description;