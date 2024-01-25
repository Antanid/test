import OvalCoreFeatures from "@/app/icons/oval-core-features";
import TextInsideOval from "@/app/components/text-inside-oval";
import CustomMainText from "@/app/components/custom-main-text/custom-main-text";

const Description = () => {
    return (
        <div>
            <div className='flex justify-center items-center mt-20 flex-wrap'>
                <p className='text-[22px] font-bold pr-4'>Core</p>
                <TextInsideOval img={<OvalCoreFeatures/>} value='Features' valueStyles='font-normal text-[22px] text-black font-merienda' positionStyles='absolute left-8 top-[18px]'/>
            </div>

            <CustomMainText value={"We use AI to help men find women that agree with traditional gender roles"} pStyle="text-center text-sm font-semibold mt-4 mb-10"/>
        </div>
    )
}
export default Description;