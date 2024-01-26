import {FC} from "react";
import cn from "classnames";
import Button from "@/app/components/button";
import MenuLists from "@/app/components/burger-menu/menu-lists";
import Socials from "@/app/components/burger-menu/socials";

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
                 <MenuLists menuLists={menuLists}/>
              <Socials socials={socials}/>
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