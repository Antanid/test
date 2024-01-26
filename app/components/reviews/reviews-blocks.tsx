import Image from "next/image";
import {FC} from "react";
import cn from "classnames";

interface ReviewsBlocksType {
    users: {
        [key: string]: string;
    }[]
}

const ReviewsBlocks: FC<ReviewsBlocksType> = ({users}) => {
    return (
        <div className='pb-16 sm:flex sm:justify-around sm:gap-x-4 lg:justify-center lg:gap-x-16'>
            {
                users.map((user) => (
                    <div key={user.title} className={cn("border-2 border-dashed border-black rounded-3xl p-6 mt-10 sm:w-340 sm:h-220", {
                    "hidden lg:block" : user.name === "Karen Napoly"})}>
                        <div>
                        <Image
                            src={'/curly-quotes.png'}
                            alt={'curly-quotes'}
                            width={42}
                            height={35}
                            loading="eager"
                            className='object-cover'
                        />
                        </div>
                        <p className="text-xs font-medium text-primary py-3">
                            {user.title}
                        </p>

                        <div className='flex items-center gap-x-3 h-[40px] sm:pt-4'>
                            <Image
                                src={user.userImg}
                                alt={'review'}
                                width={40}
                                height={40}
                                loading="eager"
                                className='object-cover'
                                priority
                            />
                            <div>
                                <p className='text-base	text-black font-semibold pb-2.5'>{user.name}</p>
                                <p className='text-xs font-medium text-light-gray'>{user.location}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
export default ReviewsBlocks;