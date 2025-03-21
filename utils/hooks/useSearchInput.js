"use client";

import { useState } from "react";

export function useSearchInput() {

  const [currentSearchField, setCurrentSearchTerm] = useState('');
  const [initiatedSearchValue, setInitiatedSearchValue] = useState('');

  const updateSearchField = (e) => {
    return setCurrentSearchTerm(prev => e.target.value);
  };

  const submitSearch = () => {
    return setInitiatedSearchValue(prev => currentSearchField);
  };

  return {
    currentSearchField,
    updateSearchField,
    initiatedSearchValue,
    submitSearch,
  };
}