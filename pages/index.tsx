import { useState } from 'react'
import { ImPlay3 } from 'react-icons/im'
import { GoTriangleRight } from 'react-icons/go'
import { BsArrowRight } from 'react-icons/bs'
import PromotionModal from '../components/PromotionModal'
import webIcon from '../images/services_web.svg'
import uiIcon from '../images/services_ui.svg'
import marketingIcon from '../images/services_marketing.svg'
import animIcon from '../images/services_animation.svg'
import globeGif from '../images/globus.gif'
import instaIcon from '../images/insta_icon.svg'
import fbIcon from '../images/fb_icon.svg'
import linkedIcon from '../images/linked_icon.svg'
import tIcon from '../images/t_icon.svg'
import youTubeIcon from '../images/youtube_icon.svg'
import logoNav from '../images/logo_nav.svg'
import ServicesSlider from 'react-slick'
import CasesSlider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import style from '../styles/Home.module.css'
import Link from 'next/link'

const HomePage = () => {
  const [openPromotion, setPromotionOpen] = useState(false)

  const onOpenPromotionModal = () => setPromotionOpen(true)
  const onClosePromotionModal = () => setPromotionOpen(false)

  const sliderSettings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 500,
    infinite: false,
    centerMode: true,
    centerPadding: '30px'
  }

  const currentYear = new Date().getFullYear()

  const services = [
    {
      id: 1,
      serviceLogo: webIcon,
      serviceTitle: 'Web Development',
      serviceDescription:
        'FrontEnd (HTML / CSS / Java Script). WordPress / Shopify / Opencart / Others. BackEnd(PHPCake / Laravel). API integration'
    },
    {
      id: 2,
      serviceLogo: uiIcon,
      serviceTitle: 'UX/UI Brand Identity',
      serviceDescription:
        'User Expirience & Interface Design. Landing page / E-shop / Business Site. Design Logo / Branding. Photo / Video content'
    },
    {
      id: 3,
      serviceLogo: marketingIcon,
      serviceTitle: 'Digital Marketing',
      serviceDescription:
        'Search Engine Optimization (SEO). Social Media Marketing (SMM). Content Marketing. Native Advertisign'
    },
    {
      id: 4,
      serviceLogo: animIcon,
      serviceTitle: 'Animation Production',
      serviceDescription:
        'Search Engine Optimization (SEO). Social Media Marketing (SMM). Content Marketing. Native Advertisign'
    }
  ]

  const cases = [
    {
      id: 1,
      coverCaseBg:
        'https://images.unsplash.com/photo-1612490566980-04f7a6c64fa3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
      caseDuration: '3 weeks',
      projectTitle: 'E-wings | Прокат самокатов',
      projectDescription:
        'E-wings - первый революционный проект шеринга самокатов во Львове.'
    },
    {
      id: 2,
      coverCaseBg:
        'https://images.unsplash.com/photo-1578885136359-16c8bd4d3a8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80',
      caseDuration: '3 weeks',
      projectTitle: 'E-wings | Прокат самокатов',
      projectDescription:
        'E-wings - первый революционный проект шеринга самокатов во Львове.'
    },
    {
      id: 3,
      coverCaseBg:
        'https://images.unsplash.com/photo-1540015605283-b24e303c7f6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
      caseDuration: '3 weeks',
      projectTitle: 'E-wings | Прокат самокатов',
      projectDescription:
        'E-wings - первый революционный проект шеринга самокатов во Львове.'
    },
    {
      id: 4,
      coverCaseBg:
        'https://images.unsplash.com/photo-1614642483992-74a06545c0f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
      caseDuration: '3 weeks',
      projectTitle: 'E-wings | Прокат самокатов',
      projectDescription:
        'E-wings - первый революционный проект шеринга самокатов во Львове.'
    },
    {
      id: 5,
      coverCaseBg:
        'https://images.unsplash.com/photo-1554793000-245d3a3c2a51?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2527&q=80',
      caseDuration: '3 weeks',
      projectTitle: 'E-wings | Прокат самокатов',
      projectDescription:
        'E-wings - первый революционный проект шеринга самокатов во Львове.'
    },
    {
      id: 6,
      coverCaseBg:
        'https://images.unsplash.com/photo-1618271121437-c1c70b12c294?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3750&q=80',
      caseDuration: '3 weeks',
      projectTitle: 'E-wings | Прокат самокатов',
      projectDescription:
        'E-wings - первый революционный проект шеринга самокатов во Львове.'
    }
  ]

  const casesItems = cases.map((c) => (
    <ProjectCase
      key={c.id}
      coverCaseBg={c.coverCaseBg}
      caseDuration={c.caseDuration}
      projectTitle={c.projectTitle}
      projectDescription={c.projectDescription}
    />
  ))

  const servicesItems = services.map((s) => (
    <ServiceItem
      key={s.id}
      serviceLogo={s.serviceLogo}
      serviceTitle={s.serviceTitle}
      serviceDescription={s.serviceDescription}
    />
  ))

  return (
    <>
      <header className={style.main_header}>
        <div className='container'>
          <div className={style.main_offer}>
            <span className='title_label'>Digital Agency</span>
            <h1>Solutions for Digital Business.</h1>
            <p>
              We bring your business online and raise the income thanks to our
              wonderful team of professionals.
            </p>
            <div className={style.about_us_video}>
              <div className='pulse'>
                <button onClick={onOpenPromotionModal} className='btn'>
                  <span>
                    <ImPlay3 />
                  </span>
                </button>
              </div>
              <div className={style.about_us_text}>
                <span>About Us</span>
                <p>Promotion video</p>
              </div>
            </div>
          </div>
          <div className={style.lang_toggler_mobile}>
            <select>
              <option value=''>UA</option>
              <option value=''>RU</option>
              <option value=''>EN</option>
            </select>
          </div>
        </div>
      </header>
      <section className={style.our_services}>
        <div className='container'>
          <span className='title_label'>Our Services</span>
          <h2 className={style.h2}>We Do Everything.</h2>
          <div className={style.services_items_wrap}>
            <div className={style.services_items}>{servicesItems}</div>
            <div className={style.services_slider_wrap}>
              <ServicesSlider {...sliderSettings}>
                {servicesItems}
              </ServicesSlider>
            </div>
          </div>
        </div>
      </section>
      <section className={style.our_cases}>
        <div className='container'>
          <div className={style.our_cases_wrap}>
            <span className='title_label'>Our portfolio</span>
            <h2 className={style.h2}>Our Latest Cases.</h2>
            <div className={style.cases_tags}>
              <span className={style.checked}>All projects</span>
              <span>Web-Sites</span>
              <span>App-Dev</span>
              <span>ONLY DEsign</span>
              <span>Video & Animation</span>
              <span>SEO-Cases</span>
            </div>
            <div className={style.our_cases_items}>{casesItems}</div>
            <div className={style.cases_slider_wrap}>
              <CasesSlider {...sliderSettings}>{casesItems}</CasesSlider>
            </div>
            <Link href='/'>
              <a className={style.more_projects_btn}>
                <span>View More</span>
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section className={style.form_section}>
        <div className='container'>
          <div className={style.form_section_wrap}>
            <div className={style.globe_wrap}>
              <img src={globeGif} alt='globe' />
            </div>
            <form className={style.form}>
              <span className='title_label'>LET’S GET STARTED</span>
              <h2 className={style.h2}>Get A Free Consultation.</h2>
              <p>
                The best ideas start from the brif. Let us to know what you need
                and we will realise it in sucsessfull product.
              </p>
              <div className={style.form_items}>
                <input placeholder={'Name'} type='text' className={'input'} />
                <input placeholder={'Email'} type='email' className={'input'} />
                <input
                  placeholder={'Phone number'}
                  type='tel'
                  className={'input'}
                />
                <button className={'btn'}>
                  <span>
                    Submit <GoTriangleRight />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className={style.we_are_pro}>
        <div className='container'>
          <div className={style.we_are_pro_wrap}>
            <div className={style.we_are_pro_content}>
              <div className='title_label'>About Us</div>
              <h2 className={style.h2}>We Are Experts In Our Field.</h2>
              <span>
                Our digital company of professionals has been developing
                products for 15 years.
              </span>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus.
              </p>
              <Link href='#'>
                <a className={style.about_us_link}>
                  READ MORE <GoTriangleRight />
                </a>
              </Link>
            </div>
            <div className={style.workflow}>
              <h2 className={style.h2}>How We Work?</h2>
              <div className={style.workflow_items}>
                <WorkflowElement
                  index={'01.'}
                  title={'Acquaintance'}
                  text={
                    'The fundamental step in creating an effective web product. We synchronize with your vision and goals.'
                  }
                />
                <WorkflowElement
                  index={'02.'}
                  title={'Research'}
                  text={
                    'The fundamental step in creating an effective web product. We synchronize with your vision and goals.'
                  }
                />
                <WorkflowElement
                  index={'03.'}
                  title={'Project development'}
                  text={
                    'The fundamental step in creating an effective web product. We synchronize with your vision and goals.'
                  }
                />
                <WorkflowElement
                  index={'04.'}
                  title={'Launch and support'}
                  text={
                    'The fundamental step in creating an effective web product. We synchronize with your vision and goals.'
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className={style.home_footer}>
        <div className='container'>
          <div className={style.contacts_block}>
            <div className={style.contacts_block_credentials_wrap}>
              <span className='title_label'>Contacts</span>
              <ul className={style.contacts_block_credentials}>
                <li>
                  <span>Address :</span>
                  <a href='#'>
                    230, Kulparkivska str.
                    <br /> Lviv, Ukraine, 79031
                  </a>
                </li>
                <li>
                  <span>Phone :</span>
                  <a href='tel:0971630202'>+38 (097) 163 0202</a>
                </li>
                <li>
                  <span>Email :</span>
                  <div className={style.mails_links}>
                    <a href='#'>siteen.co@gmail.com</a>
                    <a href='#'>siteencareer@gmail.com</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className={style.footer_links}>
              <span>
                Follow Us <BsArrowRight />
              </span>
              <ul className={style.footer_links_elements}>
                <li>
                  <a href='#'>
                    <img src={instaIcon} alt='instaIcon' />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img src={fbIcon} alt='fbIcon' />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img src={linkedIcon} alt='linkedIcon' />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img src={tIcon} alt='tIcon' />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img src={youTubeIcon} alt='youTubeIcon' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={style.footer_nav}>
            <Link href='/'>
              <a>
                <img src={logoNav} alt='' />
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
                <a href='#'>Privacy Policy</a>
              </li>
            </ul>
            <p>{currentYear} © All Rights Reserved</p>
          </div>
        </div>
      </footer>
      <PromotionModal
        onClosePromotionModal={onClosePromotionModal}
        openPromotion={openPromotion}
      />
    </>
  )
}

const WorkflowElement = ({ index, title, text }) => {
  const [isTextVisible, setTextVisible] = useState(false)

  return (
    <div className={style.workflow_element}>
      <span>{index}</span>
      <div className={style.workflow_text}>
        <h3
          className={isTextVisible ? style.opened : null}
          onClick={() => {
            setTextVisible(!isTextVisible)
          }}>
          {title}
        </h3>
        <p className={isTextVisible ? style.visible : null}>{text}</p>
      </div>
    </div>
  )
}

const ServiceItem = ({ serviceLogo, serviceTitle, serviceDescription }) => (
  <a href='#' className={style.service_element}>
    <div className={`${style.icon_wrap} icon_wrap_global`}>
      <img src={serviceLogo} alt='web' />
    </div>
    <h3>{serviceTitle}</h3>
    <p>{serviceDescription}</p>
  </a>
)

const ProjectCase = ({
  coverCaseBg,
  caseDuration,
  projectTitle,
  projectDescription
}) => (
  <div
    style={{ backgroundImage: `url(${coverCaseBg})` }}
    className={`${style.project_case} project_case_global`}>
    <div className={`${style.project_case_wrap} project_case_wrap_global`}>
      <div className={style.project_duration}>
        <p>Creation Term: </p>
        <span>{caseDuration}</span>
      </div>
      <div className={style.project_title}>
        <h4>{projectTitle}</h4>
        <p>{projectDescription}</p>
      </div>
      <a href='' className={style.project_link}>
        View full project <GoTriangleRight />
      </a>
    </div>
  </div>
)

export default HomePage
