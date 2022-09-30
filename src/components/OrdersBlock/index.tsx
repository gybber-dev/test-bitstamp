import {Scrollbars} from "react-custom-scrollbars";
import ScaleBar from "../ScaleBar";
import React from "react";
import {asks, bids} from "../../mocks";
import WidgetHeader from "../WidgetHeader";
import Thumb from "../common/Thumb";

const cutArray = (arr: any[], limit: number): any[] => {
    if (arr.length > limit) {
        arr.slice(0, limit)
    }
    return arr;
}

const LIMIT = 50

const asksLim = cutArray(asks, LIMIT)
const bidsLim = cutArray(bids, LIMIT)

const OrdersBlock = () => {
    return (
        <div className='block-orders table-body-wrapper cell'>
            <WidgetHeader title='Order book' />
            <div className='border-b border-b-widget-border-light table-header'>
                <div className='flex-grow data-row pointer-events-none'>
                    <span className='hidden lg:block flex-1'>Sum</span>
                    <span className='hidden lg:block flex-1'>Value</span>
                    <span className='flex-1'>Amount</span>
                    <span className='flex-1'>Bit</span>
                </div>
                <div className='flex-grow data-row pointer-events-none'>
                    <span className='flex-1 text-left'>Ask</span>
                    <span className='flex-1'>Amount</span>
                    <span className='hidden lg:block flex-1'>Value</span>
                    <span className='hidden lg:block flex-1'>Sum</span>
                </div>
            </div>
            <Scrollbars renderThumbVertical={Thumb} autoHide>
                <div className='flex text-xs h-full'>
                    <div className='flex-grow'>
                        {bidsLim.map((bid, index) => (
                            <div key={index} className='data-row'>
                                <ScaleBar
                                    isGreen
                                    width={index / LIMIT * 100}
                                    className='top-0 right-0 w-1/2 overflow-hidden'
                                    isInvert
                                />
                                <span className='hidden lg:block text-gray-400'>{bid.sum}</span>
                                <span className='hidden lg:block'>{bid.value}</span>
                                <span>{bid.amount}</span>
                                <span className='text-green-block cursor-pointer'>{bid.bid}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col flex-grow text-right">
                        {asksLim.map((ask, index) => (
                            <div key={index} className='data-row'>
                                <ScaleBar
                                    isGreen={false}
                                    width={index / LIMIT * 100}
                                    className='top-0 left-0 w-1/2 overflow-hidden'
                                />
                                <span className='text-left text-red-block'>{ask.ask}</span>
                                <span className='text-right'>{ask.amount}</span>
                                <span className='hidden lg:block'>{ask.value}</span>
                                <span className='hidden lg:block text-gray-400'>{ask.sum}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Scrollbars>
        </div>
    )
}

export default OrdersBlock;
