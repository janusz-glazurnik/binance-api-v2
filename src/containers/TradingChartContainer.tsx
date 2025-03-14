import {useGetBinanceData} from "../hooks/useBinance.ts";
import TradingChart from "../components/TradingChart.tsx";
import Loader from "../shared/Loader.tsx";
import Errors from "../shared/Errors.tsx";

const TradingChartContainer = () => {
    const { data, isLoading, error } = useGetBinanceData('trades?symbol=DOGEUSDT&limit=1000');

    if (error) {
        return <Errors />
    }

    if (isLoading) {
        return <Loader />
    }

    return data && <TradingChart data={data} />
}

export default TradingChartContainer;