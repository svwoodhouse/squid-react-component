import classNames from "classnames"
import React from "react"
import { PanelProps } from "./PanelProps"

const Panel = ({ children, className, ...rest}: PanelProps) => {
    const finalClassNames = classNames(
        'border rounded p-3 shadow bg-white w-full',
        className
    )
    return (
        <div className={finalClassNames} {...rest}>
           {children} 
        </div>
    )
}

export default Panel