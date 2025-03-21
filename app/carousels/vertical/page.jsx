"use client";

import Image from "next/image";

import image from "@/public/icons/email-received-icon.svg";

import { useActiveIndex } from "@/utils/hooks/useActiveIndex";
import { useVerticalSwipeTracker } from "@/utils/hooks/useSwipeTrackers";

import VerticalCarouselWrapper from "@/components/reusableComponents/VerticalCarouselWrapper";

const dummyArticle = {
  imageSrc: image,
  title: "The Craziest Thing",
  paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cupiditate tenetur doloribus. Suscipit, consequatur dolorum. Ex velit voluptatibus recusandae temporibus! Autem facilis a inventore odio recusandae sapiente ipsum reprehenderit enim.",
};

const dummyArray = [];
for (let i = 0; i < 25; i++) {
  dummyArray.push(
    {
      key: `horizontal dummy article ${i + 1}`,
      ...dummyArticle,
    }
  );
}


export default function VerticalPage() {

  const itemsPerSection = 5;

  const {
    activeIndex,
    incrementActiveIndex,
    decrementActiveIndex,
    currentArrayLength: numberOfItems,
  } = useActiveIndex(dummyArray.length);

  const {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useVerticalSwipeTracker(() => decrementActiveIndex(true, itemsPerSection), () => incrementActiveIndex(true, itemsPerSection));

  return (
    <>

      <main style={{
        position: "fixed",
        left: "0",
        top: "10vh",
        height: "80vh",
        width: "9.375em",
        // border: "1px solid black",
      }}>


        <VerticalCarouselWrapper
          activeIndex={activeIndex}
          numberOfItems={numberOfItems}
          itemsPerSection={itemsPerSection}
          handleTouchStart={handleTouchStart}
          handleTouchMove={handleTouchMove}
          handleTouchEnd={handleTouchEnd}
        >
          {

            dummyArray.map((article, index) => {
              return (
                <article key={article.key}>
                  <div
                    style={{
                      flex: "1 0 5em",
                      aspectRatio: "1",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "1px solid red",
                    }}
                  >
                    Icon {index}
                  </div>
                </article>
              );
            })

          }
        </VerticalCarouselWrapper>



      </main>

    </>
  );
}