import {FC} from "react";
import {Icon} from "@/app/icons/interface";

const ArrowDown: FC<Icon> = ({
                            width = "16",
                            height = "16",
                            currentColor = "currentColor",
                            ...props
                        }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 16" fill="none">
            <path d="M4 6L8 10L12 6" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default ArrowDown;
