import { useEffect, useState } from "react"

export const useDebounce = (value, delay = 500) => {

   const [debounceValue, setDebounceValue] = useState(null);

   useEffect(() => {
      const timerId = setTimeout(() => setDebounceValue(value), delay);

      return () => clearTimeout(timerId)
   }, [value, delay])

   return debounceValue;
}