import {FC} from "react";

interface FooterListsType {
    footerLists: {
        title: string
    }[]
}
const FooterLists: FC<FooterListsType> = ({footerLists}) => {
    return (
        <div className='flex flex-wrap flex-col h-[100px] gap-y-4 sm:w-1/2 lg:w-[300px]'>
            {
                footerLists.map((list) => (
                    <p key={list.title}
                       className="text-sm font-medium cursor-pointer"
                    >
                        {list.title}
                    </p>
                ))
            }
        </div>
    );
}

export default FooterLists;