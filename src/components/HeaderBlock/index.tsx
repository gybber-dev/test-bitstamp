import React, { FC } from 'react'

interface IHeaderBlock {
    title: string
    value: string
    className?: string
}

const HeaderBlock: FC<IHeaderBlock> = ({title, value, className = ''}) => {
    return (
        <div className='text-xxs flex flex-col justify-center'>
            <div className='text-gray-400'>{title}</div>
            <div className={`font-semibold ${className ? className : ''}`}>{value}</div>
        </div>
    )
}

export default HeaderBlock
