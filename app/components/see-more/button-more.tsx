import Button from "@/app/components/button";

const ButtonMore = () => {
    return (
        <div className='w-full'>
            <div className='text-center text-white mt-8 font-semibold'>
                <p className=''>
                    Instantly connect with like-minded
                </p>
                <p className='pt-1'>people near you</p>
            </div>
            <Button value="See more"
                    btnStyle="flex justify-center items-center cursor-pointer mt-8 py-3 px-4 rounded-3xl bg-transparent border border-white"
                    valueStyle="text-white text-base font-bold"/>
        </div>
    )
}

export default ButtonMore;