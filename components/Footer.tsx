import style from '../styles/components/Footer.module.css'
import logoNav from '../images/logo_nav.svg'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={style.home_footer}>
      <div className='container'>
        <div className={style.footer_nav}>
          <Link href='/'>
            <a
              className={style.footer_logo}
              onClick={() => {
                document.body.scrollTop = 0
              }}
            >
              <img src={logoNav} alt='Siteen' />
            </a>
          </Link>
          <ul>
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
                <a>Get a Brif</a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a
                  onClick={() => {
                    document.body.scrollTop = 0
                  }}
                >
                  About Us
                </a>
              </Link>
            </li>
            <li>
              <Link href='/privacy-policy'>
                <a
                  onClick={() => {
                    document.body.scrollTop = 0
                  }}
                >
                  Privacy Policy
                </a>
              </Link>
            </li>
          </ul>
          <p>{currentYear} © All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
