import { useEffect, useState } from 'react';

export function useCounter(initialValue = 0, maxValue: Number) {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1);
    }, 15);
    if (count === maxValue) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [count, maxValue]);

  return count;


}