import BurgerMenu from "@/app/icons/burger-menu";
import {FC} from "react";
import Close from "@/app/icons/close";
import Button from "@/app/components/button";

interface HeaderType {
    handleChangeMenu: () => void;
    isMenuOpen: boolean | null
}

const Header:FC<HeaderType> = ({handleChangeMenu, isMenuOpen}) => {
    return(
<header className='bg-white w-full fixed z-50'>
    <div className='z-[100] py-3 px-4 flex justify-center items-center sm:flex-row-reverse sm:py-1.5'>

        <div className='hidden sm:block lg:flex lg:items-center lg:gap-x-4'>
            <Button value={'Log In'}
                    btnStyle={'bg-white border border-black px-6 py-3 rounded-3xl w-44 cursor-pointer hidden lg:flex lg:items-center lg:justify-center lg:h-10 lg:w-24'}
                    valueStyle={'text-sm font-bold text-black text-center'}/>
<Button value={'Sign Up'}
        btnStyle={'bg-black rounded-3xl flex items-center justify-center cursor-pointer w-44 px-6 py-3 lg:h-10 lg:w-24'}
        valueStyle={'text-white font-bold text-sm text-center'}/>
        </div>

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