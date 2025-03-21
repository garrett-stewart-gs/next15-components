"use client";
import React from "react";
import Image from "next/image";

import image from "@/public/icons/email-received-icon.svg";

import MatrixCarouselWrapper from "@/components/reusableComponents/MatrixCarouselWrapper";

const dummyArticle = {
  imageSrc: image,
  title: "The Craziest Thing",
  paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cupiditate tenetur doloribus. Suscipit, consequatur dolorum. Ex velit voluptatibus recusandae temporibus! Autem facilis a inventore odio recusandae sapiente ipsum reprehenderit enim.",
};

const dummyColumn = [];
const dummyRow = [];

export default function MatrixPage() {

  return (
    <main
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >




      <section
        className={"matrixContainer"}
      >
        {




        }
      </section>

    </main>
  );
}