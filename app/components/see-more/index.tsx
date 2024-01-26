import Line from "@/app/icons/line";
import Image from "next/image";
import Infinity from "@/app/icons/infinity";
import PhotoCard from "@/app/components/see-more/photo-card";
import ButtonMore from "@/app/components/see-more/button-more";
import DesktopText from "@/app/components/see-more/desktop-text";
import TabletMobileText from "@/app/components/see-more/tablet-mobile-text";

const SeeMore = () => {
    return(
        <div
            className="flex flex-col justify-center items-center px-5 bg-black
            bg-[url('/backgrounds/see-more.png')]
             sm:bg-[url('/backgrounds/desktop.png')]
             bg-cover bg-center py-40 lg:py-24">

<TabletMobileText/>

           <DesktopText/>
            <PhotoCard/>
           <ButtonMore/>
        </div>
    );
}

export default SeeMore;