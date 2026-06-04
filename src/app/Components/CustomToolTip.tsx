import React from "react";
import { ReactNode } from "react";

type TColor = 'red' | 'blue'

interface IToolTip {
    position: string
    content: string
    children: ReactNode
    color: TColor
}

export const ToolTip = (props: IToolTip) => (
    <div id='tooltip' className='relative cursor-default group'>
        <div className="mx-2 my-1">{props.children}</div>
        <span className={`
            absolute hidden group-hover:inline-block dark:bg-blue-600 bg-blue-800 font-kang-invasion text-white text-sm px-2 py-1 whitespace-nowrap rounded
            ${ props.color === 'blue' ? "dark:bg-blue-600 bg-blue-800" : "" }
            ${ props.color === 'red' ? "dark:bg-kang-red-900 bg-kang-red-900" : "" }
            ${ props.position === 'top'
            ? "left-1/2 -translate-x-1/2 bottom-[calc(100%+6px)]"
            : ""}
            ${ props.position === 'bottom'
            ? "left-1/2 -translate-x-1/2 top-[calc(100%+7px)]"
            : "" }
            `}
            >
                {props.content}
            </span>
        <span className={`
            absolute hidden group-hover:inline-block border-[5.9px]
            ${props.position === 'top' && props.color === 'blue' ?
            "left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-0 dark:border-t-blue-600 border-t-blue-800 bottom-8"
            : ""}
            ${props.position === 'top' && props.color === 'red' ?
             "left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-0 border-t-kang-red-900 bottom-full"
            : ""}
            ${props.position === 'bottom' && props.color === 'blue' ?
            "left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-0 dark:border-b-blue-600 border-b-blue-800 top-8"
            : ""}
            ${props.position === 'bottom' && props.color === 'red' ?
            "left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-0 border-b-kang-red-900 top-full"
            : ""}
            `}
            ></span>
    </div>
)