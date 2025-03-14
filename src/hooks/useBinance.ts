import {useQuery} from "@tanstack/react-query";

// https://api.binance.com
// /api/v3/trades

export interface TradeResponse {
    id: string;
    price: string;
    qty: string;
    quoteQty: string;
    time: number;
    isBuyerMarket: boolean;
    isBestMatch: boolean;
}

const fetchBinanceData = async (): Promise<TradeResponse[]> => {
    const response = await fetch('http://localhost:8080/api/binance/trades?symbol=BTCUSDT&limit=10');

    if (!response.ok) {
        throw new Error('Error! Cant fetch data from API');
    }

    return response.json();
}

const useBinance = () => {
    return useQuery({
        queryKey: ['trades'],
        queryFn: fetchBinanceData,
    });
}

export const useGetBinanceData = () => {
    const { data, isLoading, error } = useBinance();

    return { data, isLoading, error };
}