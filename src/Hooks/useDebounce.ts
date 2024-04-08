import { useEffect, useState } from "react";

const useDebounce = (value: string, delay = 250) => {
  const [debouncedCity, setDebouncedCity] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedCity(value), delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [value]);

  return debouncedCity;
};

export default useDebounce;
