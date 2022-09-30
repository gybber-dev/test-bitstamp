import graph2 from "../../assets/graph2.png";
import React from "react";
import WidgetHeader from "../WidgetHeader";

const Graph2 = () => (
    <div className='block-graph2 overflow-hidden'>
        <WidgetHeader title='Depth chart' />
        <div className='h-full image-container '>
            <img src={graph2} alt='graph2' />
        </div>
    </div>
)

export default Graph2;
