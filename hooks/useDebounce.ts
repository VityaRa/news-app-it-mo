import { useEffect, useRef, useState } from "react";

export const useDebounce = (value: string, cb: () => void, ms: number) => {
  const [debounced, setDebounced] = useState(value);
  const timeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => {
      setDebounced(value);
    }, ms);
  }, [value]);
  return debounced;
};
