import {FC} from "react";
import {Icon} from "@/app/icons/interface";

const Instagram: FC<Icon> = ({
                                width = "33",
                                height = "32",
                                currentColor = "#fff",
                                ...props
                            }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 33 32" fill="none">
            <path
                d="M16.5 0C25.3365 0 32.5 7.16326 32.5 16C32.5 24.8365 25.3365 32 16.5 32C7.6635 32 0.5 24.8365 0.5 16C0.5 7.16326 7.6635 0 16.5 0Z"
                fill="#010201"/>
            <path
                d="M16.5018 5.92607C13.7657 5.92607 13.4227 5.93768 12.3482 5.98674C11.2761 6.03557 10.5436 6.20576 9.90293 6.45489C9.24041 6.71231 8.67864 7.05674 8.11852 7.61686C7.5584 8.17698 7.21399 8.73876 6.95657 9.40128C6.70768 10.042 6.53725 10.7742 6.48842 11.8466C6.43935 12.9213 6.42773 13.264 6.42773 16.0001C6.42773 18.736 6.43935 19.0793 6.48842 20.1538C6.53725 21.2259 6.70768 21.9583 6.95657 22.599C7.21399 23.2615 7.5584 23.8233 8.11852 24.3832C8.67864 24.9433 9.24041 25.2877 9.90293 25.5454C10.5436 25.7943 11.2761 25.9647 12.3482 26.0135C13.4227 26.0626 13.7657 26.0742 16.5018 26.0742C19.2377 26.0742 19.5807 26.0626 20.6552 26.0135C21.7275 25.9647 22.46 25.7943 23.1007 25.5454C23.7632 25.2877 24.325 24.9433 24.8851 24.3832C25.445 23.8233 25.7896 23.2615 26.0471 22.599C26.2959 21.9583 26.4664 21.2259 26.5152 20.1538C26.5643 19.0793 26.5759 18.736 26.5759 16.0001C26.5759 13.2643 26.5643 12.9213 26.5152 11.8466C26.4664 10.7742 26.2959 10.042 26.0471 9.40128C25.7896 8.73876 25.445 8.17698 24.8851 7.61686C24.325 7.05674 23.7632 6.71231 23.1007 6.45489C22.46 6.20576 21.7275 6.03557 20.6552 5.98674C19.5807 5.93768 19.2377 5.92607 16.5018 5.92607ZM16.5018 7.7413C19.1917 7.7413 19.5103 7.75149 20.5727 7.79984C21.5547 7.84488 22.0881 8.00892 22.4431 8.14688C22.9134 8.32964 23.2491 8.54795 23.6015 8.90042C23.954 9.2529 24.1723 9.58853 24.3551 10.0586C24.493 10.4137 24.6571 10.947 24.7021 11.9293C24.7505 12.9917 24.7607 13.3102 24.7607 16.0001C24.7607 18.69 24.7505 19.0086 24.7021 20.071C24.6571 21.0531 24.493 21.5866 24.3551 21.9415C24.1723 22.4118 23.954 22.7474 23.6015 23.0999C23.2491 23.4524 22.9134 23.6707 22.4431 23.8534C22.0881 23.9914 21.5547 24.1557 20.5727 24.2002C19.5103 24.2488 19.1919 24.259 16.5018 24.259C13.8117 24.259 13.4931 24.2488 12.4309 24.2002C11.4489 24.1557 10.9153 23.9914 10.5605 23.8534C10.0902 23.6707 9.75455 23.4524 9.40207 23.0999C9.0496 22.7474 8.83129 22.4118 8.64853 21.9415C8.51058 21.5866 8.34654 21.0531 8.30151 20.071C8.25315 19.0086 8.24297 18.69 8.24297 16.0001C8.24297 13.3102 8.25315 12.9917 8.30151 11.9293C8.34654 10.947 8.51058 10.4137 8.64853 10.0586C8.83129 9.58853 9.04936 9.2529 9.40207 8.90042C9.75455 8.54795 10.0902 8.32964 10.5605 8.14688C10.9153 8.00892 11.4489 7.84488 12.4309 7.79984C13.4933 7.75149 13.8119 7.7413 16.5018 7.7413Z"
                fill="white"/>
            <path
                d="M16.5012 19.3569C14.6466 19.3569 13.1431 17.8534 13.1431 15.9988C13.1431 14.1442 14.6466 12.6407 16.5012 12.6407C18.3558 12.6407 19.8593 14.1442 19.8593 15.9988C19.8593 17.8534 18.3558 19.3569 16.5012 19.3569ZM16.5012 10.8257C13.6442 10.8257 11.3281 13.1418 11.3281 15.9988C11.3281 18.8558 13.6442 21.1719 16.5012 21.1719C19.3582 21.1719 21.6743 18.8558 21.6743 15.9988C21.6743 13.1418 19.3582 10.8257 16.5012 10.8257Z"
                fill="white"/>
            <path
                d="M23.0875 10.6231C23.0875 11.2909 22.5463 11.832 21.8788 11.832C21.2111 11.832 20.6699 11.2909 20.6699 10.6231C20.6699 9.95541 21.2111 9.41425 21.8788 9.41425C22.5463 9.41425 23.0875 9.95541 23.0875 10.6231Z"
                fill="white"/>
        </svg>
    )
}
export default Instagram;
