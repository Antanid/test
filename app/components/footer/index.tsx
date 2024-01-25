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
    const [inputValue, setInputValue] = useState('')
    function onInputChange (event: ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value)
    }

    return(
<div className='px-4'>

<div className='flex justify-center items-center py-6'>
    <p className='text-2xl font-normal font-merienda'>HisLovers</p>
</div>

<FooterLists footerLists={footerLists}/>

    <EmailInput inputValue={inputValue} onInputChange={onInputChange}/>

    <div className='flex justify-center items-center'>
        <p className='text-black text-sm font-medium'>
            Join now to be a part of
            <br/>
            our exclusive community!
        </p>
    </div>

   <Socials socials={socials}/>

<div className='flex justify-center items-center pb-6'>
    <p className='text-xs'>Copyright © 2023 Hislovers. All rights reserved.</p>
</div>

</div>
    );
}
export default Footer;