import ReactECharts from 'echarts-for-react';
import {TradeResponse} from "../hooks/useBinance.ts";
import { LIMIT } from "../containers/TradingChartContainer.tsx";

const TradingChart = ({ data }: { data: TradeResponse[]}) => {
    const timeData = data.flatMap((d) => d.time) // replace with real data
    
    const seriesQty = data.flatMap((d) => d.qty)
    const seriesPrice = data.flatMap((d) => d.price)

    const sortedPrice = data.sort((a, b) => Number(a.price) - Number(b.price))

    const options = {
        grid: { top: 8, right: 8, bottom: 24, left: 36 },
        xAxis: {
            type: 'category',
            data: timeData,
        },
        yAxis: {
            type: 'value',
            data: seriesQty
        },
        series: [
            {
                name: 'Qty',
                data: seriesQty,
                type: 'line',
                smooth: true,
            }
        ],
        tooltip: {
            trigger: 'axis',
        },
    };

    const options2 = {
        grid: { top: 8, right: 8, bottom: 24, left: 36 },
        xAxis: {
            type: 'category',
            data: timeData,
        },
        yAxis: {
            type: 'value',
            min: Number(sortedPrice[0].price) - 1,
            max: Number(sortedPrice[LIMIT - 1].price) + 2
        },
        series: [
            {
                data: seriesPrice,
                type: 'line',
                smooth: true
            }
        ],
        // dataZoom: [
        //     {
        //         type: 'inside',
        //         start: 20,
        //         end: 100,
        //         minValueSpan: 10
        //     },
        //     {
        //         show: true,
        //         type: 'slider',
        //         bottom: 20,
        //         start: 98,
        //         end: 100,
        //         minValueSpan: 10
        //     }
        // ],
        tooltip: {
            trigger: 'axis',
        },
    };

    return (
        <>
            <ReactECharts option={options} />
            <ReactECharts option={options2} />
        </>
    )
}

export default TradingChart;