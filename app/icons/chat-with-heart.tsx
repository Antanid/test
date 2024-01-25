import {FC} from "react";
import {Icon} from "@/app/icons/interface";

const ChatWithHeart: FC<Icon> = ({
                                 width = "80",
                                 height = "64",
                                 currentColor = "#000",
                                 ...props
                             }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 80 64" fill="none">
            <path
                d="M74.7131 35.6556C74.4887 39.2144 74.7881 43.8504 70.4924 44.9432C65.6803 46.1669 60.9945 43.2196 57.1609 47.7204C56.2582 48.7806 53.9223 55.508 52.8109 58.7205C52.429 57.5972 52.1437 56.4189 51.8399 55.6254C51.2321 54.037 50.5954 52.4604 49.6808 51.0183C48.0151 48.392 45.5738 46.3385 42.4415 45.8036C36.995 44.8734 30.4674 46.1438 24.9629 46.4024C19.2206 46.6721 13.4783 46.9418 7.73532 47.2115C7.06518 46.8824 6.35641 46.7649 5.84006 47.0592C4.94777 47.5681 5.30811 41.7047 5.33262 41.2515C5.4463 39.1824 5.55997 37.1133 5.67364 35.0442C5.90098 30.9067 6.12833 26.7684 6.35493 22.6302C6.58153 18.5046 6.63947 14.3285 7.03695 10.2162C7.5325 5.07873 12.8245 5.60475 16.8833 5.17458C33.648 3.39521 50.5664 3.15376 67.3772 4.42049C68.8096 4.52896 71.6083 4.22139 72.855 4.88633C74.8565 5.95395 74.3914 7.42127 74.5571 9.62115C74.8676 13.7624 75.0459 17.9147 75.0846 22.0671C75.1269 26.5991 74.9976 31.1333 74.7131 35.6556ZM79.1581 17.0291C79.0036 13.3864 79.65 7.56093 77.4769 4.35139C75.3802 1.25477 71.4471 1.26442 68.1112 0.985073C57.1557 0.0667877 46.1444 -0.211067 35.1569 0.158176C30.2891 0.321629 25.4242 0.600246 20.5713 1.0059C17.9628 1.22432 15.3565 1.47914 12.7554 1.76963C10.5355 2.01778 7.50947 1.90486 5.45298 2.98288C1.45145 5.08171 2.57702 12.214 2.37197 15.9436C2.03095 22.151 1.69068 28.3576 1.34967 34.565C1.13198 38.5256 -0.396267 44.5027 1.97152 48.0837C2.69366 49.1751 3.76871 50.051 4.96635 50.5317C5.40023 50.8163 5.86978 50.9968 6.30144 50.9767C17.4806 50.4522 28.659 49.927 39.8375 49.4017C42.3917 49.2813 44.4393 48.9567 46.0404 51.2947C46.9557 52.6328 47.4884 54.2829 48.0486 55.7873C48.9958 58.3327 49.6719 61.8914 52.1868 63.4189C57.6453 66.7355 58.2976 54.9025 60.071 51.9493C64.1713 45.1245 73.6975 52.2286 77.6581 45.3422C79.6002 41.967 79.0452 36.7336 79.1886 33.0211C79.3944 27.6942 79.3847 22.3546 79.1581 17.0291Z"
                fill="black"/>
            <path
                d="M51.0868 18.8421C51.0735 18.7202 51.0363 18.5977 50.9865 18.4765C50.3008 16.1058 48.6893 13.6912 45.9776 13.5344C44.6365 13.4564 43.8223 13.9914 42.9225 14.9587C42.0704 15.8747 41.5273 17.2678 40.9062 18.3339C40.6238 18.8191 39.5325 21.1995 39.4596 21.2336C39.1952 21.3607 38.9693 20.5806 38.5258 19.8495C38.074 19.1036 37.6379 18.3807 37.0547 17.7291C36.0176 16.5694 34.658 15.5501 33.1044 15.2143C30.2159 14.588 27.5435 16.5553 27.0293 19.4364C26.4075 22.9209 28.8748 26.5019 31.0078 28.9871C33.0123 31.3214 36.5978 35.0897 39.8348 35.4403C42.6796 35.7487 45.9144 32.9589 47.6603 30.9812C50.5348 27.7285 51.5192 23.5115 51.1284 19.2864C51.1381 19.1571 51.1299 19.0152 51.0868 18.8421Z"
                fill={currentColor}/>
        </svg>
    )
}

export default ChatWithHeart;
