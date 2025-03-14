import {useGetBinanceData} from "../hooks/useBinance.ts";
import TradingChart from "../components/TradingChart.tsx";
import Loader from "../shared/Loader.tsx";
import Errors from "../shared/Errors.tsx";

export const LIMIT = 100;
const INTERVAL = 500;

const TradingChartContainer = () => {
    const { data, isLoading, error } = useGetBinanceData(`trades?symbol=BTCUSDT&limit=${LIMIT}`, INTERVAL);

    if (error) {
        return <Errors />
    }

    if (isLoading) {
        return <Loader />
    }

    return data && <TradingChart data={data} />
}

export default TradingChartContainer;