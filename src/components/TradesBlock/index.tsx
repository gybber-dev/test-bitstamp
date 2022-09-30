import {ReactComponent as SoundOn} from "../../assets/sound-on.svg";
import {ReactComponent as SoundOff} from "../../assets/sound-off.svg";
import {Scrollbars} from "react-custom-scrollbars";
import {trades} from "../../mocks";
import ScaleBar from "../ScaleBar";
import React, {useState} from "react";
import Thumb from "../common/Thumb";
import WidgetHeader from "../WidgetHeader";

const TradesBlock = () => {
    const [sound, setSound] = useState<boolean>(false);

    return (
        <div className='block-trades cell'>
            <WidgetHeader
                title='Trades'
                icon={(
                    <span onClick={() => setSound(prevState => !prevState)} className='cursor-pointer text-smart-blue h-[16px] w-[16px]'>
                        {sound ? <SoundOn /> : <SoundOff />}
                    </span>
                )}
            />
            <div className='border-b border-b-widget-border-light table-header pr-2'>
                <span className='flex-1'>Amount</span>
                <span className='flex-1'>Time</span>
                <span className='flex-1'>Price</span>
            </div>
            <Scrollbars renderThumbVertical={Thumb} autoHide>
                {trades?.map((trade, index) => (
                        <div key={index} className='data-row hover:bg'>
                            <ScaleBar
                                isGreen={trade.type === 'bid'}
                                width={trade.width}
                                className='top-0 left-0 w-[10%]'
                            />
                            <span>{trade.amount}</span>
                            <span className='text-gray-400'>{trade.time}</span>
                            <span className={trade.type === 'ask' ? 'text-green-block' : 'text-red-block'}>{trade.price}</span>
                        </div>
                    )
                )}
            </Scrollbars>
        </div>
    )
}

export default TradesBlock;
