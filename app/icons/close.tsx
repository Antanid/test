import {FC} from "react";
import {Icon} from "@/app/icons/interface";

const Close: FC<Icon> = ({
                                width = "24",
                                height = "24",
                                currentColor = "#000",
                                ...props
                            }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 6L18 18" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default Close;
