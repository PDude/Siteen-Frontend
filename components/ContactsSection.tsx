import React from 'react'
import style from '../styles/components/ContactsSection.module.sass'
// Social links
import instaIcon from '../images/insta_icon.svg'
import fbIcon from '../images/fb_icon.svg'
import linkedIcon from '../images/linked_icon.svg'
import tIcon from '../images/t_icon.svg'
import youTubeIcon from '../images/youtube_icon.svg'
import Title from './common/Title'
import { animated } from '../data'

const ContactsSection = (): JSX.Element => (
  <div className={style.contact_section_wrap}>
    <div {...animated} className={style.contact_block}>
      <Title
        className={style.heading}
        label='Contact Us'
        title='Or contact us in a way convenient for you.'
        gap={true}
      />
      <div className={style.credentials_block}>
        <div {...animated} className={style.adress}>
          <p>Address :</p>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://goo.gl/maps/jU1Pi4Vig4JsekTX9'
          >
            BC Gulliver, 29th floor, 1a Sportyvna sq, Kyiv, Ukraine
          </a>
        </div>
        <div {...animated} className={style.phone}>
          <p>Phone :</p>
          <a href='tel:0971630202'>+38 (097) 163 0202</a>
        </div>
        <div {...animated} className={style.email}>
          <p>Email :</p>
          <div className={style.links}>
            <a href='mailto:siteen.co@gmail.com'>siteen.co@gmail.com</a>
            <a href='mailto:siteencareer@gmail.com'>siteencareer@gmail.com</a>
          </div>
        </div>
      </div>
      <ul {...animated} className={style.footer_links_elements}>
        <li>
          <a
            href='https://www.instagram.com/siteen.co/'
            rel='noreferrer'
            target='_blank'
          >
            <img src={instaIcon} alt='instaIcon' />
          </a>
        </li>
        <li>
          <a
            href='https://www.facebook.com/siteen.co'
            rel='noreferrer'
            target='_blank'
          >
            <img src={fbIcon} alt='fbIcon' />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/company/siteen/'
            rel='noreferrer'
            target='_blank'
          >
            <img src={linkedIcon} alt='linkedIcon' />
          </a>
        </li>
        <li>
          <a href='https://t.me/siteen/' rel='noreferrer' target='_blank'>
            <img src={tIcon} alt='tIcon' />
          </a>
        </li>
        <li>
          <a
            href='https://www.youtube.com/channel/UCATwpqig9rIT7u1dm4f7blQ'
            rel='noreferrer'
            target='_blank'
          >
            <img src={youTubeIcon} alt='youTubeIcon' />
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default ContactsSection
