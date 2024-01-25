import {FC} from "react";
import {Icon} from "@/app/icons/interface";

const Search: FC<Icon> = ({
                                 width = "16",
                                 height = "16",
                                 currentColor = "currentColor",
                                 ...props
                             }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 16" fill="none">
            <path
                d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.0016 13.9996L11.1016 11.0996" stroke="white" strokeWidth="1.33333" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>
    )
}

export default Search;
