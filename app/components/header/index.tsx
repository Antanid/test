import BurgerMenu from "@/app/icons/burger-menu";
import {FC} from "react";
import Close from "@/app/icons/close";
import AuthorizationButton from "@/app/components/header/authorization-button";

interface HeaderType {
    handleChangeMenu: () => void;
    isMenuOpen: boolean | null
}

const Header:FC<HeaderType> = ({handleChangeMenu, isMenuOpen}) => {
    return(
<header className='bg-white w-full fixed z-50'>
    <div className='z-[100] py-3 px-4 flex justify-center items-center sm:flex-row-reverse sm:py-1.5'>

<AuthorizationButton/>


    <div className='flex justify-center items-center flex-1 z-50 sm:pl-28 lg:pl-[200px]'>
        <p className='font-merienda text-lg text-black'>HisLovers</p>
    </div>

    <div className='cursor-pointer z-50' onClick={handleChangeMenu}>
        {isMenuOpen ? <Close /> : <BurgerMenu />}
    </div>
    </div>
</header>
    )
};

export default Header;