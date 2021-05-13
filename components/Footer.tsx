import style from '../styles/Footer.module.css'
import logoNav from '../images/logo_nav.svg'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={style.home_footer}>
      <div className='container'>
        <div className={style.footer_nav}>
          <Link href='/'>
            <a>
              <img src={logoNav} alt='Siteen' />
            </a>
          </Link>
          <ul>
            <li>
              <a href='#'>Services</a>
            </li>
            <li>
              <a href='#'>Cases</a>
            </li>
            <li>
              <a href='#'>Get a Brif</a>
            </li>
            <li>
              <a href='#'>About Us</a>
            </li>
            <li>
              <Link href='/privacy-policy'>
                <a>Privacy Policy</a>
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
