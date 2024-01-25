import cn from "classnames"
import {dataType} from "@/app/components/core-features/index";
import {FC} from "react";

interface FeaturesType {
    data: dataType[]
}
const itemStyle = "border-2 border-dashed border-black rounded-3xl p-10 text-center mt-10"

const Features: FC<FeaturesType> = ({data}) => {
    return (
        <div className='mb-16'>
            {
                data.map((item, index) => (
                    <div key={item.title}
                         className={cn(itemStyle, {
                           '!mt-0' : index === 0
                         })}>
                        <div className='flex justify-center pb-4'>
                            {item.img}
                        </div>
                        <p className='pb-3 font-semibold text-lg'>{item.title}</p>
                        <p className='text-base	'>{item.description}</p>
                    </div>
                ))
            }
        </div>
    )
}
export default Features;