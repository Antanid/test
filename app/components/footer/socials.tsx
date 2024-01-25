import {FC, ReactNode} from "react";

interface SocialsType {
    socials: {
        img: ReactNode
    }[]
}
const Socials: FC<SocialsType> = ({socials}) => {
    return (
        <div className='flex gap-x-6 justify-center items-center gap-y-2 py-8 flex-wrap'>
            {
                socials.map((social, index) => (
                    <div key={index}>
                        {social.img}
                    </div>
                ))
            }
        </div>
    )
}
export default Socials;