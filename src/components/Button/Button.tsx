import {FC, ReactNode, MouseEvent} from 'react'
import clsx from 'clsx'

import s from './button.module.scss'

interface ButtonProps {
    children: ReactNode
    onClick?: (e?: MouseEvent<HTMLButtonElement>) => void
    disabled?: boolean
    className?: string
}

export const Button: FC<ButtonProps> = ({
                                            children,
                                            className,
                                            onClick,
                                            disabled,
                                        }) => {
    return (
        <button
            className={clsx(s.button, className,)}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}