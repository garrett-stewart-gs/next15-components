"use client";
import { useState } from "react";

export default function useActiveClass(boolean = false) {
  const [isActive, setIsActive] = useState(boolean);

  const toggleActiveClass = () => {
    setIsActive(prev => !prev);
  };

  const addActiveClass = () => {
    setIsActive(prev => true);
  };

  const removeActiveClass = () => {
    setIsActive(prev => false);
  };

  return {
    isActive,
    toggleActiveClass,
    addActiveClass,
    removeActiveClass,
  };

}
