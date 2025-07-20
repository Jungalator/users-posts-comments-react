import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [value, setValue] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();

        setValue(result);
      } catch (error) {
        console.log(`Ошибка HTTP запроса или сервера: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    if (value.length === 0) {
      fetchData();
    }
  }, []);
  return [value, isLoading];
};
