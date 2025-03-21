
import Link from "next/link";

export default function CarouselsPage() {

  return (
    <main>

        <Link href={"/carousels/horizontal"} >Horizontal Carousel</Link>
        <Link href={"/carousels/matrix"} >Matrix Carousel</Link>
        <Link href={"/carousels/vertical"} >Vertical Carousel</Link>

    </main>
  );
}