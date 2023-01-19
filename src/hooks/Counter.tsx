import { useState, useEffect } from 'react';

export function useCounter(initialValue = 0, maxValue:number) {
  const [count, setCount] = useState(initialValue);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(true);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if(isScrolled){
      const interval = setInterval(() => {
        setCount(c => c + 1);
      }, 25);
      if(count === maxValue){
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }
  }, [count, maxValue, isScrolled]);

  return count;
}
