import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import styles from './NavBar.module.css'

const NavBar = () => {
  const pathname = usePathname();

  return (
    <>
      <nav className={styles.topNavStyle}>
        <ul>
          <li className={pathname == "/settings/account" ? styles.active : ""}>
            <Link href="/account">
              Account
            </Link>
          </li>
          <li className={pathname == "/settings/security" ? styles.active : ""}>
            <Link href="./security">
              Security
            </Link>
          </li>
          <li className={pathname == "/settings/privacy-policy" ? styles.active : ""}>
            <Link href="./privacy-policy">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar;