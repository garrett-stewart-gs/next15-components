"use client";

import { useSearchInput } from "@/utils/hooks/useSearchInput";

import PageSectionWrapper from ".";
import SearchbarWrapper from "../SearchbarWrapper";
import TextStyleWrapper from "../TextStyleWrapper";

import InteractiveFaqItem from "../ListItemWrapper/InteractiveFaqItem";

import styles from "./FaqsSearchableSection.module.css";

export default function FaqsSearchableSection({ faqsArrObj }) {

  const {
    currentSearchField,
    updateSearchField,
    initiatedSearchValue,
    submitSearch,
  } = useSearchInput();

  const faqsSearchResults = initiatedSearchValue ?
    faqsArrObj.filter(faqObj => faqObj.question.toLowerCase().includes(initiatedSearchValue.toLowerCase()) || faqObj.answer.includes(initiatedSearchValue.toLowerCase()))
    :
    [...faqsArrObj];

  return (
    <PageSectionWrapper parentStyles={styles}>

      <SearchbarWrapper >
        <input
          type="search"
          placeholder={"Search..."}
          value={currentSearchField}
          onChange={updateSearchField} // update text in search field
          onKeyDown={(e) => e.key === "Enter" && submitSearch()} // if enter key is pressed, submit search
          onBlur={submitSearch} //initiate search
        />
      </SearchbarWrapper>

      <div className={styles.faqsSearchResultsContainer}>
        {
          faqsSearchResults.length ?
            faqsSearchResults.map((faqObj, index) => <InteractiveFaqItem key={`interactive faq #${index}`} index={index} faqObj={faqObj} />)
            :
            <TextStyleWrapper>
              <h3>No Search Results...</h3>
              <h4>Try Searching For Something Else</h4>
            </TextStyleWrapper>
        }
      </div>

    </PageSectionWrapper>
  );
}