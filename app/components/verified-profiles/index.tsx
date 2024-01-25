import LineText from "@/app/components/verified-profiles/line-text";
import VerifiedCard from "@/app/components/verified-profiles/verified-card";
import CustomMainText from "@/app/components/custom-main-text/custom-main-text";

const VerifiedProfiles = () => {
    return(
<div className="px-4 bg-black bg-[url('/backgrounds/verifed-profiles.png')] bg-cover bg-center max-h-[900px]">

    <LineText/>

<CustomMainText value="We use AI to verify our users are real so you can connect with real people
who are looking for the same kind of relationship you are"
                pStyle="text-white leading-8"/>

<VerifiedCard/>

</div>
    );
}

export default VerifiedProfiles;