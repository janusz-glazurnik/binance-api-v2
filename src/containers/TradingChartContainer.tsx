import {useGetBinanceData} from "../hooks/useBinance.ts";
import TradingChart from "../components/TradingChart.tsx";

const TradingChartContainer = () => {
    // useQuery
    const { data, isLoading, error } = useGetBinanceData();

    if (isLoading) {
        return <div>Data is loading... please wait</div>
    }

    if (error) {
        console.log('|-- TradingChartContainer error', error);
        return <div>something bad happened...</div>
    }

    return <TradingChart data={data} />
}

export default TradingChartContainer;