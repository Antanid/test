import LineText from "@/app/components/verified-profiles/line-text";
import VerifiedCard from "@/app/components/verified-profiles/verified-card";
import CustomMainText from "@/app/components/custom-main-text/custom-main-text";
import Desktop from "@/app/components/verified-profiles/desktop";

const VerifiedProfiles = () => {
    return(
        <div className="px-4 pb-48 bg-black
bg-[url('/backgrounds/verifed-profiles.png')]
  sm:bg-[url('/backgrounds/desktop.png')]
  bg-cover bg-center max-h-[900px] sm:flex sm:flex-row-reverse sm:justify-center sm:pt-52 lg:justify-center">

            <div className='sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-x-12 lg:hidden'>
                <LineText/>
                <CustomMainText value="We use AI to verify our users are real so you can connect with real people
who are looking for the same kind of relationship you are"
                                pStyle="text-white leading-8"/>
            </div>

<Desktop/>

        </div>
    );
}

export default VerifiedProfiles;