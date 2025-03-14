import ReactECharts from 'echarts-for-react';
import {TradeResponse} from "../hooks/useBinance.ts";

const TradingChart = ({ data }: { data: TradeResponse[]}) => {
    // object with arrays
    const test = {
        id: 4715044916,
        price: "82537.22000000",
        qty: "0.00067000",
        quoteQty: "55.29993740",
        time: 1741942342348,
        isBuyerMaker: false,
        isBestMatch: true
    }
    
    const xAxisData = data.flatMap((d) => d.time)
    console.log('|-- TradingChart xAxisData', xAxisData);
    
    const seriesQty = data.flatMap((d) => d.qty)
    const seriesPrice = data.flatMap((d) => d.price)

    console.log('|-- TradingChart seriesPrice', seriesPrice);

    console.log('|-- TradingChart data', data);
    const options = {
        grid: { top: 8, right: 8, bottom: 24, left: 36 },
        xAxis: {
            type: 'category',
            data: xAxisData,
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                data: seriesQty,
                type: 'line',
                smooth: true,
            },
            // {
            //     data: seriesPrice,
            //     type: 'line',
            //     smooth: true
            // }
        ],
        tooltip: {
            trigger: 'axis',
        },
    };

    const options2 = {
        grid: { top: 8, right: 8, bottom: 24, left: 36 },
        xAxis: {
            type: 'category',
            data: xAxisData,
        },
        yAxis: {
            type: 'value',
        },
        series: [
            // {
            //     data: seriesQty,
            //     type: 'line',
            //     smooth: true,
            // },
            {
                data: seriesPrice,
                type: 'line',
                smooth: true
            }
        ],
        tooltip: {
            trigger: 'axis',
        },
    };

    return (<>
        <ReactECharts option={options} />
        <ReactECharts option={options2} />
    </>)
}

export default TradingChart;