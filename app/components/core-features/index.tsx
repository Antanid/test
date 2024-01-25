import ChatWithHeart from "@/app/icons/chat-with-heart";
import Rose from "@/app/icons/rose";
import Calendar from "@/app/icons/calendar";
import PiercedHearts from "@/app/icons/pierced-hearts";
import {ReactNode} from "react";
import Features from "@/app/components/core-features/features";
import Description from "@/app/components/core-features/description";

export interface dataType {
    img: ReactNode,
    title: string,
    description: string
}

const data: dataType[] = [
    {
        img: <ChatWithHeart/>,
        title: 'Chat with AI-assistan',
        description: "Our AI ensures perfect matches, opens up endless possibilities for you."
    },
    {
        img: <Rose/>,
        title: 'Be intimate & authentic',
        description: "Why settle on boring relationships, when you can have many lovers?"
    },
    {
        img: <Calendar/>,
        title: 'Find intimacy',
        description: "Make quality memories with people & build a meaningful relationships."
    },
    {
        img: <PiercedHearts/>,
        title: 'Expand boundaries',
        description: "Explore your fantasies & share new experiences together."
    },
]
const CoreFeatures = () => {
    return(
<div className='px-4'>
  <Description/>
<Features data={data}/>
</div>
    )
}
export default CoreFeatures;