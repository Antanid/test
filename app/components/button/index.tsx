import {FC} from "react";

interface ButtonType {
    value: string
    btnStyle: string
    valueStyle: string
}
const Button: FC<ButtonType>= ({value, btnStyle, valueStyle}) => {
    return (
        <div
            className={btnStyle}>
            <p className={valueStyle}>{value}</p>
        </div>
    )
}
export default Button;