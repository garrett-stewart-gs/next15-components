
import image from "@/public/icons/email-received-icon.svg";

import VerticalCarouselWrapper from "@/components/scaffoldingComponents/VerticalCarouselWrapper";

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
          incrementAmount={2}
        >
          {

            dummyArray.map((article, index) => {
              return (
                <article key={article.key} style={{ width: "100%" }}>
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "1 / 2",
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