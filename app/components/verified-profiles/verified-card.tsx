import Image from "next/image";

const VerifiedCard = () => {
    return (
        <div className="flex justify-center items-center h-[484px]">
            <Image
                src={'/verified-profile-card.png'}
                alt={'verified-profile-card'}
                width={274}
                height={484}
                loading="eager"
                className='object-cover'
                priority
            />
        </div>
    );
}

export default VerifiedCard;