import BurgerMenu from "@/app/icons/burger-menu";
import {FC} from "react";
import Close from "@/app/icons/close";

interface HeaderType {
    handleChangeMenu: () => void;
    isMenuOpen: boolean | null
}

const Header:FC<HeaderType> = ({handleChangeMenu, isMenuOpen}) => {
    return(
<header className='bg-white w-full fixed z-50'>
    <div className='z-[100] py-3 px-4 flex justify-center'>
    <div className='flex justify-center items-center flex-1 z-50'>
        <p>HisLovers</p>
    </div>
    <div className='cursor-pointer z-50' onClick={handleChangeMenu}>
        {isMenuOpen ? <Close /> : <BurgerMenu />}
    </div>
    </div>
</header>
    )
};

export default Header;