import MainText from "@/app/components/seeking/main-text";
import Selects from "@/app/components/seeking/selects";



const Seeking = () => {
    return(
<div className="h-svh flex flex-col justify-center items-center
 bg-[url('/backgrounds/seeking-mobile.png')]
 sm:bg-[url('/backgrounds/seeking-sm.png')]
 lg:bg-[url('/backgrounds/seeking-desktop.png')]
 bg-cover bg-center px-4"
>
<MainText/>
<Selects/>
</div>
    );
}

export default Seeking;