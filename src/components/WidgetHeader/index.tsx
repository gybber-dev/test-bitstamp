import React, {ReactNode} from "react";

interface IWidgetHeader {
    title: string
    icon?: ReactNode
}

const WidgetHeader: React.FC<IWidgetHeader> = ({ title, icon}) => (
    <div className='flex px-4 border-b border-b-widget-border-light items-center justify-between bg-widget-title h-[39px] md:h-6'>
        <span className='uppercase'>{title}</span>
        {icon && icon}
    </div>
)

export default WidgetHeader;
