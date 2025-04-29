
import Link from "next/link";

import DropdownMenuWrapper from "@/components/scaffoldingComponents/DropdownMenuWrapper";
import HamburgerMenuIcon from "../DropdownIcons/HamburgerMenuIcon";

import styles from "./NavLinksContainer.module.css";

export default function NavLinksContainer() {

  return (
    <main className={styles.navLinksContainer}>

      <section className={styles.splashLinksContainer}>

        <Link href="/" >HOME</Link>

        <Link href="/" >ABOUT</Link>

        <DropdownMenuWrapper parentStyles={styles}>
          <Link href="/" >
            <p>SERVICES</p>
            <p>›</p>
          </Link>
          <Link href="/" >Daylight Rentals</Link>
          <Link href="/" >Inflatable Rentals</Link>
          <Link href="/" >Screen Sales</Link>
        </DropdownMenuWrapper>

        <DropdownMenuWrapper parentStyles={styles}>
          <Link href="/" >
            <p>PORTFOLIO</p>
            <p>›</p>
          </Link>
          <Link href="/" >Gallery</Link>
          <Link href="/" >Testimonials</Link>
        </DropdownMenuWrapper>

        <DropdownMenuWrapper parentStyles={styles}>
          <Link href="/" >
            <p>FAQS</p>
            <p>›</p>
          </Link>
          <Link href="/" >General</Link>
          <Link href="/" >Daylight Events</Link>
          <Link href="/" >Inflatable Events</Link>
          <Link href="/" >Drive In Events</Link>
        </DropdownMenuWrapper>

        <Link href="/" >CONTACT</Link>

      </section>

      <section className={styles.splashLinksContainer}>

        <DropdownMenuWrapper parentStyles={styles}>
          <HamburgerMenuIcon />
          <Link href="/" >Home</Link>
          <Link href="/" >About Us</Link>
          <Link href="/" >Services</Link>
          <Link href="/" >Portfolio</Link>
          <Link href="/" >FAQs</Link>
          <Link href="/" >Contact Us</Link>
        </DropdownMenuWrapper>

      </section>

    </main>
  );
}