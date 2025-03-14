import {useQuery} from "@tanstack/react-query";

export interface TradeResponse {
    id: string;
    price: string;
    qty: string;
    quoteQty: string;
    time: number;
    isBuyerMarket: boolean;
    isBestMatch: boolean;
}

const fetchBinanceData = async (endpoint: string): Promise<TradeResponse[]> => {
    const response = await fetch(`http://localhost:8080/api/binance/${endpoint}`);

    if (!response.ok) {
        throw new Error('Error! Cant fetch data from API');
    }

    return response.json();
}

const useBinance = (endpoint: string, interval?: number) => {
    return useQuery({
        queryKey: ['trades'],
        queryFn: () => fetchBinanceData(endpoint),
        refetchInterval: interval || 0,
    });
}

export const useGetBinanceData = (endpoint: string, interval?: number) => {
    const { data, isLoading, error } = useBinance(endpoint, interval);

    return { data, isLoading, error };
}