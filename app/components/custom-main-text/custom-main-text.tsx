import {FC} from "react";

interface CustomMainTextType {
    value: string
    pStyle?: string
}

const CustomMainText: FC<CustomMainTextType> = ({value, pStyle = "text-base font-semibold text-primary leading-8"}) => {
    return (
        <div className='flex justify-center items-center w-full'>
        <div className='text-center max-w-[350px]'>
            <p className={pStyle}>
                {value}
            </p>
        </div>
        </div>
    )
}
export default CustomMainText;