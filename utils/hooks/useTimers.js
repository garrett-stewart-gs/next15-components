"use client";

import { useEffect } from "react";

// sets a interval timer that runs your callback function every x milliseconds, default 10000ms = 10sec
export function useTimer(callback, interval = 10000) {

  useEffect(() => {

    const timer = setInterval(() => {
      callback();
    }, interval);

    return () => clearInterval(timer); // Cleanup interval on unmount

  }, []); // Empty dependency array, so it only runs once on mount

}

// Sets a timeout that runs your callback function after x milliseconds, default 10000ms = 10sec
export function useTimeout(callback, delay = 2000) {

  useEffect(() => {
    
    const timer = setTimeout(() => {
      callback();
    }, delay);

    return () => clearTimeout(timer); // Cleanup timeout on unmount or re-render

  }, [callback, delay]); // Re-run if callback or delay changes
}
