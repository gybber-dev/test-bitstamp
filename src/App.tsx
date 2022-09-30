import React from 'react';
import './App.css';
import TradesBlock from "./components/TradesBlock";
import Graph1 from "./components/Graph1";
import Graph2 from "./components/Graph2";
import OrdersBlock from "./components/OrdersBlock";
import StartBlock from "./components/StartBlock";
import Header from "./components/Header";

function App() {
    return (
        <div className='bg-back-dark text-white w-full h-full md:overflow-hidden'>
            <Header />
            <div className='grid gap-0 bg-back text-xxs content'>
                <TradesBlock />
                <Graph1 />
                <Graph2 />
                <OrdersBlock />
                <StartBlock />
            </div>
        </div>
    );
}

export default App;
