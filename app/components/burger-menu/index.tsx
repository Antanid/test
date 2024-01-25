import {FC} from "react";

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
        <div className={menuOverlayClassName}>
            <div className='px-4 mt-28 pb-8'>
                {menuLists.map((list) => (
                    <p key={list.title}
                       className='text-white text-2xl font-bold cursor-pointer pb-4'
                    >
                        {list.title}
                    </p>
                ))}
            </div>
            <div className='px-4 flex flex-wrap'>
                <div className='mr-24'>
                    <p className='text-white text-xs font-bold pb-1'>Our Social</p>
                    <div className='flex flex-col'>
                        {
                            socials.map((social) => (
                                <p key={social.title}
                                   className='text-white pb-2 cursor-pointer text-base font-thin'
                                >
                                    {social.title}
                                </p>
                            ))
                        }
                    </div>
                </div>
                <div className='text-white'>
                    <p className='text-xs font-bold'>Get In Touch</p>
                    <p className='text-xs'>support@hislovers.com</p>
                </div>
            </div>
        </div>
    )
};

export default BurgerMenu;