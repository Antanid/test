import {FC} from "react";

interface menuListsType {
    menuLists: Array<{
        title: string
    }>
}
const MenuLists: FC<menuListsType>= ({menuLists}) => {
    return (
        <div className='px-4 pt-28 pb-8'>
            {menuLists.map((list) => (
                <p key={list.title}
                   className='text-white text-2xl font-bold cursor-pointer pb-4 sm:text-32 sm:pb-12'
                >
                    {list.title}
                </p>
            ))}
        </div>
    );
}
export default MenuLists;