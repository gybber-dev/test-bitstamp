import AuthBlock from "../AuthBlock";
import React from "react";
import WidgetHeader from "../WidgetHeader";

const StartBlock = () => (
    <div className='block-start bg-back-dark'>
        <WidgetHeader title='Start trading' />
        <div className='buttonsWrapper px-4'>
            <AuthBlock />
        </div>
        <section className='text-xs px-4 text-gray-400'>
            <h2 className='font-semibold py-1 text-white'>Welcome to Bitstamp</h2>
            <p>The world's longest-standing crypto exchange.</p>
            <p>We provide premium access to cryptocurrency trading for both individuals and institutional clients through:</p>
            <ul className='mt-1 ml-5 pb-4 list-outside list-disc'>
                <li>Volume-based fee structure</li>
                <li>High performance matching engine</li>
                <li>FIX, Websocket and HTTP API connectivity</li>
                <li>24/7 service and dedicated premium support</li>
                <li>Industry-leading security practices</li>
            </ul>
        </section>
    </div>
)

export default StartBlock;
