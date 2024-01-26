import Socials from "@/app/components/footer/socials";
import FooterLists from "@/app/components/footer/footer-lists";
import EmailInput from "@/app/components/footer/email-input";
import {ChangeEvent, FC, ReactNode} from "react";

interface FooterDesktopType {
    footerLists: Array<{
        title: string
    }>,
    socials: Array<{
        img: ReactNode
    }>,
    inputValue: string,
    onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const FooterDesktop: FC<FooterDesktopType> = ({footerLists, socials, inputValue, onInputChange}) => {
    return (
        <div className='hidden lg:pt-10 lg:px-20 lg:flex lg:justify-center 2xl:gap-x-16'>
            <div className=''>
                <p className='text-2xl font-normal font-merienda pb-2'>HisLovers</p>
                <p className='text-black text-sm font-medium w-56'>
                    Join now to be a part of our
                    exclusive community!
                </p>
                <Socials socials={socials}/>
            </div>
            <FooterLists footerLists={footerLists}/>
            <EmailInput inputValue={inputValue} onInputChange={onInputChange}/>
        </div>
    );
}

export default FooterDesktop;