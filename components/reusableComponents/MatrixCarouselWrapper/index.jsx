"use client";
import React from "react";

import HorizontalCarouselWrapper from "@/components/reusableComponents/HorizontalCarouselWrapper";
import VerticalCarouselWrapper from "@/components/reusableComponents/VerticalCarouselWrapper";

export default function MatrixCarouselWrapper({ activeRowIndex, numberOfRows, itemsPerRowSection, activeColumnIndex, numberOfColumns, itemsPerColumnSection, handleTouchStart, handleTouchMove, handleTouchEnd, transitionSpeed = 0.15, children }) {

  return (
    <main
      className="mCarouselViewport"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >

      


    </main>
  );
}
