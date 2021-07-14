import { useState, useEffect } from 'react'
import Button from '../components/formElements/Button'
import style from '../styles/components/Layout.module.sass'
import Hamburger from 'hamburger-react'
import logoNav from '../images/logo_nav.svg'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaTelegram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import Link from 'next/link'

const Layout = ({ children }) => {
  const [isHamburgerOpen, setHamburgerOpen] = useState<boolean>(false)

  const hamburgerDependencies = () => {
    isHamburgerOpen
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'auto')
  }

  const closeHamburger = () => {
    setHamburgerOpen(false)
  }

  useEffect(() => {
    hamburgerDependencies()
  }, [hamburgerDependencies])

  return (
    <div className={style.layout_wrap}>
      <nav className={style.navigation_bar}>
        <div className='container'>
          <div className={style.navigation_bar_wrap}>
            <Link href='/'>
              <a
                onClick={() => {
                  document.body.scrollTop = 0
                }}
                className={style.logo_link}>
                <img src={logoNav} alt='Siteen' />
              </a>
            </Link>
            <ul className={style.nav_menu}>
              <li>
                <Link href='/#our_services'>
                  <a>Services</a>
                </Link>
              </li>
              <li>
                <Link href='/#cases_section'>
                  <a>Cases</a>
                </Link>
              </li>
              <li>
                <Link href='/#contact_us'>
                  <a>Contact us</a>
                </Link>
              </li>
            </ul>
            <a className={style.nav_tel} href='tel:0971630202'>
              +38 (097) 163 02 02
            </a>
            <Link href='/#contact_us'>
              <a>
                <Button className={style.get_brif}>Get a Brif</Button>
              </a>
            </Link>
            <div className={style.hamburger_wrap_hamburger}>
              <Hamburger toggled={isHamburgerOpen} toggle={setHamburgerOpen} />
            </div>
          </div>
        </div>
      </nav>
      <aside
        className={
          isHamburgerOpen
            ? `${style.aside_bar} ${style.aside_bar_transparent}`
            : style.aside_bar
        }>
        <div className={style.hamburger_wrap}>
          <Hamburger toggled={isHamburgerOpen} toggle={setHamburgerOpen} />
        </div>
        <div
          className={
            isHamburgerOpen
              ? `${style.social_link_aside_bar} ${style.element_hidden}`
              : style.social_link_aside_bar
          }>
          <a href='https://www.facebook.com/siteen.co/' target='_blank'>
            Facebook
          </a>
          <a href='https://www.instagram.com/siteen.co/' target='_blank'>
            Instagram
          </a>
          <a href='https://www.linkedin.com/company/siteen/' target='_blank'>
            Linkedin
          </a>
        </div>
        {/* Empty block */}
        <div />
      </aside>
      <article className={style.main_wrap_content}>{children}</article>
      <div
        className={
          isHamburgerOpen
            ? `${style.menu_opened} ${style.menu_opened_visible}`
            : style.menu_opened
        }>
        <div className='container'>
          <div className={style.content_opened_wrap}>
            <div className={style.navigation_bar_wrap_opened}>
              <Link href='/'>
                <a className={style.logo_link_opened}>
                  <img src={logoNav} alt='Siteen' />
                </a>
              </Link>
              <a className={style.nav_tel} href='tel:0971630202'>
                +38 (097) 163 02 02
              </a>
              <Button className={style.get_brif}>Get a Brif</Button>
              <div className={style.hamburger_wrap_hamburger}>
                <Hamburger
                  toggled={isHamburgerOpen}
                  toggle={setHamburgerOpen}
                />
              </div>
            </div>
            <div className={style.nav_menus_opened_wrap}>
              <div className={style.nav_menus_opened}>
                <ul>
                  <li>
                    <Link href='/#our_services'>
                      <a onClick={closeHamburger}>Our Services</a>
                    </Link>
                  </li>
                  {/* <li>
                    <a onClick={closeHamburger} href='#'>
                      Portfolio
                    </a>
                  </li> */}
                  <li>
                    <Link href='/about'>
                      <a onClick={closeHamburger}>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/#contacts_section'>
                      <a onClick={closeHamburger}>Contacts</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/#cases_section'>
                      <a onClick={closeHamburger}>Our Projects</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <Button className={style.get_brif_hamburger}>Get a Brif</Button>
            <a className={style.nav_tel_hamburger} href='tel:0971630202'>
              +38 (097) 163 02 02
            </a>
            <div className={style.social_link_mobile}>
              <a href='#'>
                <FaInstagram />
              </a>
              <a href='#'>
                <FaFacebookSquare />
              </a>
              <a href='#'>
                <FaLinkedin />
              </a>
              <a href='#'>
                <FaTelegram />
              </a>
              <a href='#'>
                <FaYoutube />
              </a>
            </div>
            <div className={style.social_link_aside_bar_opened}>
              <a href='https://www.facebook.com/siteen.co/' target='_blank'>
                Facebook
              </a>
              <a href='https://www.instagram.com/siteen.co/' target='_blank'>
                Instagram
              </a>
              <a
                href='https://www.linkedin.com/company/siteen/'
                target='_blank'>
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
