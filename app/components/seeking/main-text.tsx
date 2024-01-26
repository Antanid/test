import Oval from "@/app/icons/oval";
import TextInsideOval from "@/app/components/text-inside-oval";

const MainText = () => {
    return(
        <>
            <div className='flex flex-col items-center sm:flex-row'>
            <p className='text-white text-2xl font-semibold	pb-8 sm:pb-0 sm:pr-8'>Be intimate on</p>
            <TextInsideOval ovalSize='w-[247px] h-[107px] sm:w-[409px] sm:h-[178px]' img={<Oval />} value='HisLovers' valueStyles='font-normal text-[40px] text-white font-merienda sm:text-[64px]' positionStyles='absolute left-8 top-[22px] sm:left-12 sm:top-9'/>
            </div>
            <div className='text-white text-[28px] font-semibold pt-8 sm:flex sm:text-4xl'>
                <p className='sm:pr-2'>where gender roles</p>
                <p className="flex items-center justify-center">still exist</p>
            </div>
        </>
    )
};
export default MainText;