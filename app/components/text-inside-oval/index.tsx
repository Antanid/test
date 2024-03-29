import OvalCoreFeatures from "@/app/icons/oval-core-features"
import {FC, ReactNode} from "react";

interface TextInsideOvalType {
    img: ReactNode,
    value: string,
    valueStyles: string
    positionStyles: string
    ovalSize: string
}

const TextInsideOval: FC <TextInsideOvalType> = ({
                                                     img=  <OvalCoreFeatures/>,
                                                     value= '',
                                                     valueStyles = 'font-normal text-[22px] text-black',
                                                     positionStyles= 'absolute left-8 top-[18px]',
    ovalSize=''
}) => {
    return (
            <div className="relative">
                <div className={ovalSize}>
                {img}
                </div>
                <div className={positionStyles}>
                    <p className={valueStyles}>{value}</p>
                </div>
            </div>
    )
}

export default TextInsideOval;