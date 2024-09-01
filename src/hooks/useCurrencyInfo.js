import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  //Fetch data everytime if currency changes: useEffect
  useEffect(async () => {
    const response = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    );
    const data = await response.json();
    await setData(data[currency]);
    console.log(data);
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
