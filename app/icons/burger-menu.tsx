import {FC} from "react";
import {Icon} from "@/app/icons/interface";

const BurgerMenu: FC<Icon> = ({
                        width = "24",
                        height = "24",
                        currentColor = "currentColor",
                        ...props
                    }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
            <path d="M3 12H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 18H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}
export default BurgerMenu;
