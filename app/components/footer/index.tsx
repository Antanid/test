'use client'

import {ChangeEvent, useState} from "react";
import CustomMainText from "@/app/components/custom-main-text/custom-main-text";
import Instagram from "@/app/icons/instagram";
import Facebook from "@/app/icons/facebook";
import Telegram from "@/app/icons/telegram";
import TikTok from "@/app/icons/tik-tok";
import FooterLists from "@/app/components/footer/footer-lists";
import EmailInput from "@/app/components/footer/email-input";
import Socials from "@/app/components/footer/socials";
import FooterDesktop from "@/app/components/footer/footer-desktop";
import LogoText from "@/app/components/footer/logo-text";

const [footerLists, socials] = [
    [
        {
            title: 'Home'
        },
        {
            title: 'Blog'
        },
        {
            title: 'Support'
        },
        {
            title: 'Contact us'
        },
        {
            title: 'Terms & Services'
        },
        {
            title: 'Privacy Policy'
        },
    ],
   [
       {
           img: <Instagram/>
       },
       {
           img:<Facebook/>
       },
       {
           img:<Telegram/>
       },
       {
           img:<TikTok/>
       },
   ]
]
const Footer = () => {
    const [inputValue, setInputValue] = useState<string>('')
    function onInputChange (event: ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value)
    }

    return(
        <div className='px-4'>

         <LogoText/>

            <div className='sm:flex sm:justify-between sm:items-center sm:pb-10 lg:hidden'>
                <FooterLists footerLists={footerLists}/>

                <EmailInput inputValue={inputValue} onInputChange={onInputChange}/>
            </div>

            <div className='flex justify-center items-center lg:hidden'>
                <p className='text-black text-sm font-medium'>
                    Join now to be a part of
                    <br className='sm:hidden'/>
                    our exclusive community!
                </p>
            </div>

            <div className='lg:hidden'>
                <Socials socials={socials}/>
            </div>


 <FooterDesktop footerLists={footerLists} socials={socials} inputValue={inputValue} onInputChange={onInputChange}/>


            <div className='flex justify-center items-center pb-6'>
                <p className='text-xs'>Copyright © 2023 Hislovers. All rights reserved.</p>
            </div>

        </div>
    );
}
export default Footer;