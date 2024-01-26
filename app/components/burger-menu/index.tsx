import {FC} from "react";
import cn from "classnames";
import Button from "@/app/components/button";

interface BurgerMenuType {
    isMenuOpen: boolean | null
}

const [menuLists, socials] = [
    [
        {
            title: 'Home'
        },
        {
            title: 'Blog'
        },
        {
            title: 'Contact Us'
        },
        {
            title: 'Support'
        },
        {
            title: 'Privacy Policy'
        }
    ],
    [
        {
            title: 'Instagram'
        },
        {
            title: 'Telegram'
        },
        {
            title: 'Facebook'
        },
        {
            title: 'TikTok'
        },
    ]
]
const BurgerMenu: FC<BurgerMenuType> = ({isMenuOpen}) => {
    const menuOverlayClassName = `menu-overlay ${!isMenuOpen ? 'closed' : 'open'}`;

    return (
        <div className={cn(menuOverlayClassName)}>
            <div className="
            bg-black
            flex
            justify-between
            flex-col
h-full
            bg-[url('/backgrounds/burger-mobile.png')]
  sm:bg-[url('/backgrounds/burger-desktop.png')]
  bg-cover bg-center
            ">
                <div className='sm:flex sm:justify-around h-fit'>
                    <div className='px-4 pt-28 pb-8'>
                        {menuLists.map((list) => (
                            <p key={list.title}
                               className='text-white text-2xl font-bold cursor-pointer pb-4 sm:text-32 sm:pb-12'
                            >
                                {list.title}
                            </p>
                        ))}
                    </div>
                    <div className='px-4 flex flex-wrap sm:mt-28 sm:flex-col'>
                        <div className='mr-24'>
                            <p className='text-white text-xs font-bold pb-1 sm:text-lg sm:pb-2'>Our Social</p>
                            <div className='flex flex-col'>
                                {
                                    socials.map((social) => (
                                        <p key={social.title}
                                           className='text-white pb-2 cursor-pointer text-base font-thin sm:text-2xl sm:pb-5'
                                        >
                                            {social.title}
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='text-white'>
                            <p className='text-xs font-bold sm:text-lg sm:pb-2'>Get In Touch</p>
                            <p className='text-xs sm:text-xl'>support@hislovers.com</p>
                        </div>
                    </div>
                </div>


                <div className='px-4 pb-6 mt-auto sm:flex sm:flex-row-reverse sm:gap-x-2 lg:hidden'>
                    <Button value={'Sign Up'}
                            btnStyle={'w-full bg-white px-4 py-3 rounded-3xl mb-4 sm:mb-0'}
                            valueStyle={'text-sm font-bold text-center'}/>
                    <Button value={'Log In'}
                            btnStyle={'w-full bg-transparent border border-white px-4 py-3 rounded-3xl'}
                            valueStyle={'text-sm font-bold text-white text-center'}/>
                </div>
            </div>
        </div>
    )
};

export default BurgerMenu;