import {FC} from "react";
import {Icon} from "@/app/icons/interface";

const PiercedHearts: FC<Icon> = ({
                                width = "116",
                                height = "64",
                                currentColor = "#000",
                                ...props
                            }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 116 64" fill="none">
            <path
                d="M40.939 10.781C41.1489 10.6507 41.2916 10.4641 41.3375 10.2268C42.6963 8.50045 44.7265 7.46135 47.6216 7.70895C55.7884 8.40786 58.3659 21.0871 60.7261 27.3561C61.1726 28.5399 63.8208 30.149 64.5094 28.4226C66.5821 23.2243 67.2612 17.2873 70.303 12.5163C73.3422 7.75078 80.1605 3.76723 84.3664 9.53618C89.1305 16.0706 87.315 24.736 83.7525 31.9762C79.5083 32.101 75.2633 32.2237 71.0184 32.3156C68.3819 32.3726 70.79 35.6964 72.5095 35.6593C75.631 35.5914 78.7524 35.5064 81.8732 35.4173C80.9431 36.9674 79.9623 38.4111 78.9904 39.6999C73.6495 46.5052 67.5595 52.5766 61.0327 58.2263C53.7074 47.4785 44.3986 37.5757 40.0282 25.1825C38.6688 21.3271 38.3752 14.6823 40.939 10.781ZM110.429 31.9041C107.926 34.016 105.193 35.8356 102.564 37.7938C103.226 36.4817 104.103 34.9405 104.162 33.6271C104.254 31.5365 102.73 29.2313 101.603 27.0447C104.487 28.7402 107.421 30.4439 110.429 31.9041ZM2.84926 33.6847C7.35208 34.2856 11.6045 34.7814 16.0964 34.7437C17.1081 36.4104 18.2048 38.0311 19.344 39.5991C22.5197 43.9688 26.1068 47.7857 30.2544 51.2487C34.7531 55.0053 38.7943 59.2009 43.2525 62.9726C43.815 63.4479 45.2505 64.4445 46.0235 63.7764C49.3267 60.9197 51.7774 57.3682 54.4667 53.9786C56.213 56.3833 57.9263 58.812 59.5306 61.3176C59.9688 62.0014 61.781 63.2798 62.6589 62.5357C69.9286 56.3744 76.7352 49.7535 82.627 42.2465C84.1579 40.2177 85.6449 37.8419 86.935 35.2712C91.0222 35.1505 95.1094 35.0345 99.1972 34.9378C98.4263 37.6128 96.9221 40.3995 96.2191 42.8872C95.7898 44.4051 98.9126 46.3859 99.9942 45.0978C101.645 43.1314 104.689 41.5278 106.756 39.9873C109.757 37.7486 112.789 35.7287 115.527 33.1593C116.419 32.3232 114.532 30.7306 113.962 30.4954C108.938 28.422 104.141 25.4301 99.4517 22.7065C99.0491 22.4726 98.7205 22.3636 98.4475 22.3334C98.4119 22.3203 98.3762 22.3073 98.3405 22.2943C97.6197 22.0323 96.4201 22.3333 96.643 23.3299C97.2603 26.0879 99.3941 28.7896 99.6444 31.5509C99.6307 31.5509 99.6163 31.5468 99.6026 31.5468C95.8947 31.6277 92.1889 31.732 88.4824 31.8397C92.075 22.8841 92.7527 12.4937 84.8122 6.03885C80.2305 2.31451 74.2139 2.44347 69.7701 6.34958C65.2851 10.292 63.8832 16.0637 62.2405 21.6241C60.0114 15.4498 57.2548 9.16097 51.4029 6.01963C46.9241 3.61424 42.1633 4.15267 38.8711 6.97645C33.9911 2.38995 27.4738 -1.75899 20.6726 0.76506C14.512 3.05111 11.5792 10.1343 10.9722 16.229C10.4331 21.6434 11.8755 26.7052 14.237 31.4055C9.88092 31.4144 5.73819 30.9254 1.35746 30.3411C-1.20102 30.0002 1.19423 33.4639 2.84926 33.6847Z"
                fill={currentColor}/>
        </svg>
    )
}

export default PiercedHearts;