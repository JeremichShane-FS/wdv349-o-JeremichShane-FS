import UrbanEchoLogo from "@assets/images/logo/UrbanEchoLogo";
import MenuToggle from "@design-system/buttons/MenuToggle";
import Searchbar from "@design-system/forms/Searchbar";
import Container from "@design-system/layout/Container";
import ActionIcons from "@design-system/navigation/ActionIcons";
import MobileMenu from "@design-system/navigation/MobileMenu";
import NavLinks from "@design-system/navigation/NavLinks";
import { useNavigation } from "@modules/core/hooks/useNavigation";
import Link from "next/link";

import styles from "./Navbar.module.scss";

const NavbarView = ({ isMenuOpen, isSearchOpen, toggleMenu, toggleSearch }) => {
  const { paths } = useNavigation();
  return (
    <nav className={styles["navbar"]} aria-label="Main navigation">
      <div className={styles["navbar__inner"]}>
        <Container>
          <div className={styles["navbar__content"]}>
            <div className={styles["navbar__logo-section"]}>
              <MenuToggle isOpen={isMenuOpen} setIsOpen={toggleMenu} />
              <Link href={paths.home}>
                <UrbanEchoLogo />
              </Link>
            </div>

            <div
              className={styles["navbar__nav-links"]}
              role="navigation"
              aria-label="Main categories">
              <NavLinks />
            </div>

            <div className={styles["navbar__right-icons"]}>
              <ActionIcons isSearchOpen={isSearchOpen} toggleSearch={toggleSearch} cartCount={2} />
            </div>
          </div>
        </Container>
      </div>

      <MobileMenu isOpen={isMenuOpen} />
      <Searchbar isOpen={isSearchOpen} />
    </nav>
  );
};

export default NavbarView;
