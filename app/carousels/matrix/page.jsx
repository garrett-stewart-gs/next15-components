
import React from "react";
import Image from "next/image";

import image from "@/public/icons/email-received-icon.svg";

import VerticalCarouselWrapper from "@/components/scaffoldingComponents/VerticalCarouselWrapper";
import HorizontalCarouselWrapper from "@/components/scaffoldingComponents/HorizontalCarouselWrapper";

const dummyArticle = {
  imageSrc: image,
  title: "The Craziest Thing",
  paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cupiditate tenetur doloribus. Suscipit, consequatur dolorum. Ex velit voluptatibus recusandae temporibus! Autem facilis a inventore odio recusandae sapiente ipsum reprehenderit enim.",
};

const dummyRows = [];
const dummyColumns = [];

for (let i = 0; i < 30; i++) {
  dummyColumns.push(
    {
      key: `vertical column dummy article ${i + 1}`,
      ...dummyArticle,
    }
  );
  dummyRows.push(
    dummyColumns
  );

}

export default function MatrixPage() {
  
  
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >

      <VerticalCarouselWrapper incrementAmount={2}>
        {
          dummyRows.map( (row, rowIndex) => {
            return (

              <HorizontalCarouselWrapper incrementAmount={4} loop={true}>
                {
                  row.map((columnElement, columnIndex) => {
                    return (

                      <div
                        key={columnElement.key}
                      >
                        <Image src={columnElement.imageSrc} alt="w/e" ></Image>
                        <h1>{columnElement.title}</h1>
                        <p>{columnElement.paragraph}</p>
                        <p>element #: {(rowIndex + 1) * columnIndex}</p>
                      </div>
                    )
                  })
                }
              </HorizontalCarouselWrapper>
              
            )
          })
        }
      </VerticalCarouselWrapper>
    </main>
  );
}