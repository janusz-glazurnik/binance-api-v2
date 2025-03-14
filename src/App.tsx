import './App.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import TradingChartContainer from "./containers/TradingChartContainer.tsx";

const queryClient = new QueryClient()

function App() {

  return (
      <QueryClientProvider client={queryClient}>
          <TradingChartContainer />
      </QueryClientProvider>
  )
}

export default App
