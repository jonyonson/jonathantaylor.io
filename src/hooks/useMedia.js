import { useState, useEffect, useCallback } from 'react';

export default function useMedia(queries, values, defaultValue) {
  // Array containing a media query list for each query
  const mediaQueryLists = queries.map((q) => window.matchMedia(q));

  // let mediaQueryLists;
  // if (typeof window !== 'undefined') {
  //   mediaQueryLists = queries.map((q) => window.matchMedia(q));
  // }

  // Function that gets value based on matching media query
  // wrapped into its own useCallback() hook to prevent change on every render
  const getValue = useCallback(() => {
    // Get index of first media query that matches

    const index = mediaQueryLists.findIndex((mql) => mql.matches);

    // Return related value or defaultValue if none
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
  }, [defaultValue, values, mediaQueryLists]);

  // State and setter for matched value
  const [value, setValue] = useState(getValue);

  useEffect(() => {
    // Event listener callback
    // Note: By defining getValue outside of useEffect we ensure that it has ...
    // ... current values of hook args (as this hook callback is created once on mount).
    const handler = () => setValue(getValue);
    // Set a listener for each media query with above handler as callback.
    mediaQueryLists.forEach((mql) => mql.addListener(handler));
    // Remove listeners on cleanup
    return () => mediaQueryLists.forEach((mql) => mql.removeListener(handler));
  }, [getValue, mediaQueryLists]);

  return value;
}
