import CustomMainText from "@/app/components/custom-main-text/custom-main-text";
import VerifiedCard from "@/app/components/verified-profiles/verified-card";
import LineText from "@/app/components/verified-profiles/line-text";

const Desktop = () =>{
    return(
        <>
            <div className='hidden lg:flex lg:justify-end lg:items-center lg:w-fit lg:mt-40 lg:max-w-[350px]'>
                <CustomMainText value="We use AI to verify our users are real so you can connect with real people
who are looking for the same kind of relationship you are"
                                pStyle="text-white leading-8"/>
            </div>

            <VerifiedCard/>

            <div className='hidden lg:flex lg:justify-center lg:items-center lg:w-[500px]'>
                <LineText/>
            </div>
        </>
    );
}
export default Desktop;