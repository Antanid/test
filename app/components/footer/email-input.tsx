import {ChangeEvent, FC} from "react";

interface EmailInputType {
    inputValue: string,
    onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const EmailInput: FC<EmailInputType> = ({inputValue, onInputChange}) => {
    return (
        <div className='pt-10 pb-8 sm:w-[370px] sm:flex sm:flex-col sm:justify-center sm:h-full sm:pt-0'>
            <p className='text-sm text-black font-semibold pb-2'>Get the latest information</p>
            <div className='flex relative'>
                <input className='h-12 border-2 border-black py-3 px-4 rounded-3xl w-full'
                       placeholder='Email address'
                       value={inputValue}
                       onChange={(event) => onInputChange(event)}
                />
                <div
                    className='flex justify-center items-center cursor-pointer absolute right-0 bg-black rounded-3xl h-full py-4 px-6'>
                    <p className='text-white'>Send</p>
                </div>
            </div>
        </div>
    );
}
export default EmailInput;