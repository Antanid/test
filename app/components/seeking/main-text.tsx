import Oval from "@/app/icons/oval";
import TextInsideOval from "@/app/components/text-inside-oval";

const MainText = () => {
    return(
        <>
            <p className='text-white text-2xl font-semibold	'>Be intimate on</p>
            <TextInsideOval img={ <Oval/>} value='HisLovers' valueStyles='font-normal text-[40px] text-white font-merienda' positionStyles='absolute left-8 top-[22px]'/>
            <div className='text-white text-[28px] font-semibold'>
                <p>where men are</p>
                <p className="flex items-center justify-center">in control</p>
            </div>
        </>
    )
};
export default MainText;