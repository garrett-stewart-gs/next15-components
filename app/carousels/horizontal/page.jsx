
import Image from "next/image";

import image from "@/public/icons/email-received-icon.svg";

import HorizontalCarouselWrapper from "@/components/scaffoldingComponents/HorizontalCarouselWrapper";

const dummyArticle = {
  imageSrc: image,
  title: "The Craziest Thing",
  paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cupiditate tenetur doloribus. Suscipit, consequatur dolorum. Ex velit voluptatibus recusandae temporibus! Autem facilis a inventore odio recusandae sapiente ipsum reprehenderit enim.",
};

const dummyArray = [];
for (let i = 0; i < 21; i++) {
  dummyArray.push(
    {
      key: `horizontal dummy article ${i + 1}`,
      ...dummyArticle,
    }
  );
}


export default function HorizontalPage() {

  return (
    <main style={{
      minHeight: "40em",
      display: "flex",
      justifyContent: "space-around",
      flexDirection: "column",
    }}>

      {/* <h1>ActiveIndex: {activeIndex}</h1> */}
      <HorizontalCarouselWrapper
        incrementAmount={5}
        loop={true}
      >
        {

          dummyArray.map((article, index) => {
            return (
              <article key={article.key}>
                <Image src={article.imageSrc} alt="w/e" ></Image>
                <h1>{article.title}</h1>
                <p>{article.paragraph}</p>
                <p>{index}</p>
              </article>
            );
          })

        }
      </HorizontalCarouselWrapper>


    </main>
  );
}