import React from 'react'
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
import cn from 'classnames'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props): JSX.Element => {
  // Preloader
  const [isBlack, setBlack] = useState<boolean>(true)
  // setTimeout(() => {setBlack}, 1500)

  // Hamburger
  const [isHamburgerOpen, setHamburgerOpen] = useState<boolean>(false)

  const hamburgerDependencies = () => {
    isHamburgerOpen
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'auto')
  }

  useEffect(() => {
    hamburgerDependencies()
    setBlack(false)
  }, [hamburgerDependencies])

  return (
    <div className={cn(style.layout_wrap, { [style.black]: isBlack })}>
      <nav className={style.navigation_bar}>
        <div className='container'>
          <div className={style.navigation_bar_wrap}>
            <Link href='/'>
              <a
                onClick={() => {
                  setHamburgerOpen(false)
                }}
                className={style.logo_link}
              >
                <img src={logoNav} alt='Siteen' />
              </a>
            </Link>
            <ul className={style.nav_menu}>
              <li>
                <Link href='/#services'>
                  <a>Services</a>
                </Link>
              </li>
              <li>
                <Link href='/#cases'>
                  <a>Cases</a>
                </Link>
              </li>
              <li>
                <Link href='/#contact-us'>
                  <a>Contact us</a>
                </Link>
              </li>
            </ul>
            <a className={style.nav_tel} href='tel:0971630202'>
              +38 (097) 163 02 02
            </a>
            <Link href='/#contact-us'>
              <a>
                <Button animate={false} className={style.get_brif}>
                  Get a Brif
                </Button>
              </a>
            </Link>
            <div className={style.hamburger_wrap_hamburger}>
              <Hamburger toggled={isHamburgerOpen} toggle={setHamburgerOpen} />
            </div>
          </div>
        </div>
      </nav>
      <aside
        className={cn(style.aside_bar, {
          [(style.aside_bar_transparent, style.scroll_hidden)]: isHamburgerOpen
        })}
      >
        <div className={style.hamburger_wrap}>
          <Hamburger toggled={isHamburgerOpen} toggle={setHamburgerOpen} />
        </div>
        <div
          className={
            isHamburgerOpen
              ? `${style.social_link_aside_bar} ${style.element_hidden}`
              : style.social_link_aside_bar
          }
        >
          <a
            href='https://www.facebook.com/siteen.co/'
            rel='noreferrer'
            target='_blank'
          >
            Facebook
          </a>
          <a
            href='https://www.instagram.com/siteen.co/'
            rel='noreferrer'
            target='_blank'
          >
            Instagram
          </a>
          <a
            href='https://www.linkedin.com/company/siteen/'
            rel='noreferrer'
            target='_blank'
          >
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
        }
      >
        <div className='container'>
          <div className={style.content_opened_wrap}>
            <div className={style.navigation_bar_wrap_opened}>
              <Link href='/'>
                <a
                  onClick={() => {
                    setHamburgerOpen(false)
                  }}
                  className={style.logo_link_opened}
                >
                  <img src={logoNav} alt='Siteen' />
                </a>
              </Link>
              <a className={style.nav_tel} href='tel:0971630202'>
                +38 (097) 163 02 02
              </a>
              <Link href='/#contact-us'>
                <a>
                  <Button
                    animate={false}
                    onClick={() => {
                      setHamburgerOpen(false)
                    }}
                    className={style.get_brif}
                  >
                    Get a Brif
                  </Button>
                </a>
              </Link>
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
                    <Link href='/#services'>
                      <a
                        onClick={() => {
                          setHamburgerOpen(false)
                        }}
                      >
                        Our Services
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/about' scroll={true}>
                      <a
                        onClick={() => {
                          setHamburgerOpen(false)
                        }}
                      >
                        About Us
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/#contacts'>
                      <a
                        onClick={() => {
                          setHamburgerOpen(false)
                        }}
                      >
                        Contacts
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/#cases'>
                      <a
                        onClick={() => {
                          setHamburgerOpen(false)
                        }}
                      >
                        Our Projects
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <Link href='/#contact-us'>
              <a className={style.get_brif_hamburger_link}>
                <Button
                  animate={false}
                  onClick={() => {
                    setHamburgerOpen(false)
                  }}
                  className={style.get_brif_hamburger}
                >
                  Get a Brif
                </Button>
              </a>
            </Link>
            <a className={style.nav_tel_hamburger} href='tel:0971630202'>
              +38 (097) 163 02 02
            </a>
            <div className={style.social_link_mobile}>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.instagram.com/siteen.co/'
              >
                <FaInstagram />
              </a>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.facebook.com/siteen.co'
              >
                <FaFacebookSquare />
              </a>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.linkedin.com/company/siteen/'
              >
                <FaLinkedin />
              </a>
              <a target='_blank' rel='noreferrer' href='https://t.me/siteen/'>
                <FaTelegram />
              </a>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.youtube.com/channel/UCATwpqig9rIT7u1dm4f7blQ'
              >
                <FaYoutube />
              </a>
            </div>
            <div className={style.social_link_aside_bar_opened}>
              <a
                href='https://www.facebook.com/siteen.co/'
                rel='noreferrer'
                target='_blank'
              >
                Facebook
              </a>
              <a
                href='https://www.instagram.com/siteen.co/'
                rel='noreferrer'
                target='_blank'
              >
                Instagram
              </a>
              <a
                href='https://www.linkedin.com/company/siteen/'
                rel='noreferrer'
                target='_blank'
              >
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
