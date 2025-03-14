import {useGetBinanceData} from "../hooks/useBinance.ts";
import TradingChart from "../components/TradingChart.tsx";

const TradingChartContainer = () => {
    const { data, isLoading, error } = useGetBinanceData('trades?symbol=DOGEEUSDT&limit=100');

    if (isLoading) {
        return <div>Data is loading... please wait</div>
    }

    if (error) {
        console.warn('error', error);
        return <div>something bad happened...</div>
    }

    return data && <TradingChart data={data} />
}

export default TradingChartContainer;