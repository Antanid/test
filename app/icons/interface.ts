import { SVGProps } from "react"

export interface Icon<T = SVGSVGElement & JSX.IntrinsicAttributes> extends SVGProps<T> {
    width?: string | number
    height?: string | number
    currentColor?: string
}