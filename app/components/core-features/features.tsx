import cn from "classnames"
import {dataType} from "@/app/components/core-features/index";
import {FC} from "react";

interface FeaturesType {
    data: dataType[]
}
const itemStyle = "border-2 border-dashed border-black rounded-3xl p-10 text-center mt-10 w-full sm:w-280 sm:h-280"

const Features: FC<FeaturesType> = ({data}) => {
    return (
        <div className='mb-16 flex justify-center items-center flex-wrap gap-x-10'>
            {
                data.map((item, index) => (
                    <div key={item.title}
                         className={cn(itemStyle)}>
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