import { useState, useEffect } from "react";
import { toast } from "sonner";

export const useFetch = (url) => {
  const [value, setValue] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(
            `Ошибка HTTP запроса или сервера: ${response.status}`
          );
        }
        const result = await response.json();

        setValue(result);
      } catch (error) {
        toast.error(error.message);
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
