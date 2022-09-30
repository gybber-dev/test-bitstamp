import React from "react";

interface IScaleBar {
    isGreen: boolean
    width: number
    className?: string
    isInvert?: boolean
}

const ScaleBar: React.FC<IScaleBar> = ({isGreen, width, isInvert = false, className = ''}) => {
    return (
        <div className={`absolute h-full ${className} ${isInvert ? 'flex justify-end' : ''}`}>
            <div className={`h-full opacity-25 ${isGreen ? 'bg-green-block' : 'bg-red-block'}`} style={{ width: width + '%' }} />
        </div>
    )
}

export default ScaleBar;
