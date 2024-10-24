import { useEffect, useState } from "react";
import "./App.css";
import CurrentPrice from "./Components/CurrentPrice/CurrentPrice";
import Tabs from "./Components/Tabs/Tabs";
import axios from "axios";
import { getDateRange } from "./lib/helpers";

function App() {
  const [fetchedData, setFetchedData] = useState();
  const [timeframe, setTimeframe] = useState("1d");
  const [priceData, setPriceData] = useState([]);

  const fetchPrice = async () => {
    const { formattedFromDate, formattedToDate, timespan, value } =
      getDateRange(timeframe);
    const url = `https://api.polygon.io/v2/aggs/ticker/X:BTCUSD/range/${value}/${timespan}/${formattedFromDate}/${formattedToDate}?adjusted=true&sort=desc&apiKey=yWbSZWHH4VsUyOwfPdHGpP0BySCSzjAX`;

    try {
      const response = await axios.get(url);

      const data = response.data;
      setFetchedData(data);

      if (data.results) {
        const formattedData = data.results.map((result) => ({
          date: new Date(result.t).toLocaleDateString(),
          closingPrice: result.c,
          openingPrice: result.o,
          high: result.h,
          low: result.l,
        }));
        setPriceData(formattedData.reverse());
      }

      console.log(data);
    } catch (error) {
      console.error("Error fetching BTC price:", error);
    }
  };

  useEffect(() => {
    fetchPrice();
  }, [timeframe]);
  console.log(priceData);
  return (
    <>
      <CurrentPrice data={fetchedData} />
      <Tabs data={timeframe} handler={setTimeframe} priceData={priceData} />
    </>
  );
}

export default App;
