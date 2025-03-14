import {useGetBinanceData} from "../hooks/useBinance.ts";

const TradingChartContainer = () => {
    // useQuery
    const { data } = useGetBinanceData();

    console.log('|-- TradingChartContainer data', data);

    return <div>placeholder container</div>
}

export default TradingChartContainer;