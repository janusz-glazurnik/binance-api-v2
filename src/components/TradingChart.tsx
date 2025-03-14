import ReactECharts from 'echarts-for-react';
import {TradeResponse} from "../hooks/useBinance.ts";

const TradingChart = ({ data }: { data: TradeResponse[]}) => {
    const timeData = data.flatMap((d) => d.time)
    
    const seriesQty = data.flatMap((d) => d.qty)
    const seriesPrice = data.flatMap((d) => d.price)

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

            },
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
        },
        series: [
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