
import LogoLinkContainer from "./LogoLinkContainer";
import NavLinksContainer from "./NavLinksContainer";

import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbarContainer}>
      <main className={styles.navbar}>

        <LogoLinkContainer />

        <NavLinksContainer />

      </main>
    </nav>
  );
};
