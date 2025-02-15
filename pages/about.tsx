import React, { Component } from 'react'
import AboutVideo from '../components/AboutVideo'
import style from '../styles/pages/About.module.sass'
// Frontend icons
import jsIcon from '../images/brands/javascript.svg'
import reactIcon from '../images/brands/react.svg'
import reduxIcon from '../images/brands/redux.svg'
import nextIcon from '../images/brands/next_js.svg'
import vueIcon from '../images/brands/vue.svg'
import angularIcon from '../images/brands/angular.svg'
import tsIcon from '../images/brands/typescript.svg'
import webpackIcon from '../images/brands/webpack.svg'
import htmlIcon from '../images/brands/html_2.svg'
import cssIcon from '../images/brands/css_2.svg'
import sassIcon from '../images/brands/sass.svg'
// Backend icons
import nodeJs from '../images/brands/node_js.svg'
import expressIcon from '../images/brands/express.svg'
import mySqlIcon from '../images/brands/mysql.svg'
import nestIcon from '../images/brands/nest_js.svg'
import nginxIcon from '../images/brands/nginx.svg'
import postgresqlIcon from '../images/brands/postgresql.svg'
import sequelizeIcon from '../images/brands/sequelize.svg'
// Art icons
import figmaIcon from '../images/brands/figma.svg'
import aeIcon from '../images/brands/after_effects.svg'
import cinema4d from '../images/brands/cinema_4d.svg'
import davinci from '../images/brands/davinci.svg'
import photoshop from '../images/brands/photoshop.svg'
import premiere from '../images/brands/premiere.svg'
import illustrator from '../images/brands/illustrator.svg'
import redshift from '../images/brands/redshift.svg'
// Slider
import TeamSlider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// Arows
import arrowBack from '../images/arrow_team_back.svg'
import arrowNext from '../images/arrow_team_next.svg'
// Components
import FormSection from '../components/FormSection'
import ContactsSection from '../components/ContactsSection'
import Footer from '../components/common/Footer'
// Data
import { animated, team } from '../data'
// Packages
import cn from 'classnames'
import Title from '../components/common/Title'
import Head from 'next/head'

const About = () => (
  <>
    <Head>
      <title>Siteen • About</title>
    </Head>
    <div className={style.about_header_wrap}>
      <header className={style.about_header}>
        <div className='container'>
          <div className={style.about_offer}>
            <div className={style.about_offer_text}>
              <Title animate={false} label='About us' />
              <h1>We are professionals in our field.</h1>
              <p>
                Our digital company develops projects and has been on the market
                for 3 years.
              </p>
              <span className={style.offer_description}>
                We are a modern digital company that creates and develops your
                projects. Our 3-year experience of developing various
                web-projects grows only upwards thanks to the refresher courses
                our employees attend annually. Since 2018 we have completed more
                than 20 projects that are currently developing and expanding
                successfully in their areas of specialization. We do not chase
                the number of clients, as since it is more exciting to
                accomplish the work for a full due and to your delight.
              </span>
            </div>
            <div className={style.about_video_wrap}>
              <AboutVideo videoLabel='Play' />
            </div>
          </div>
        </div>
      </header>
    </div>
    <section className={style.technologies_section}>
      <div className='container'>
        <div className='v_cont'>
          <div className={style.frontend_and_description}>
            <div className={style.frontend}>
              <h3 {...animated}>FrontEnd</h3>
              <div {...animated} className={style.frontend_icons}>
                <TechIcon src={jsIcon} />
                <TechIcon src={reactIcon} />
                <TechIcon src={reduxIcon} />
                <TechIcon src={nextIcon} className={style.next_icon} />
                <TechIcon src={vueIcon} />
                <TechIcon src={angularIcon} />
                <TechIcon src={tsIcon} />
                <TechIcon src={webpackIcon} />
                <TechIcon src={htmlIcon} />
                <TechIcon src={cssIcon} className={style.cssIcon} />
                <TechIcon src={sassIcon} />
              </div>
            </div>
            <div className={style.description_tech}>
              <Title
                label='Expirience'
                title='The technologies we use.'
                margin={true}
              />
              <p {...animated}>
                Our digital company develops projects and has been on the market
                for 3 years.
              </p>
            </div>
          </div>
          <div className={style.backend_and_art}>
            <div className={style.backend}>
              <h3 {...animated}>BackEnd</h3>
              <div {...animated} className={style.backend_icons}>
                <TechIcon src={nodeJs} />
                <TechIcon src={expressIcon} className={style.expressIcon} />
                <TechIcon src={mySqlIcon} />
                <TechIcon src={nestIcon} />
                <TechIcon src={nginxIcon} />
                <TechIcon src={postgresqlIcon} />
                <TechIcon src={sequelizeIcon} />
              </div>
            </div>
            <div className={style.art}>
              <h3 {...animated}>Art & Design</h3>
              <div {...animated} className={style.art_icons}>
                <TechIcon src={figmaIcon} className={figmaIcon} />
                <TechIcon src={aeIcon} />
                <TechIcon src={cinema4d} />
                <TechIcon src={davinci} />
                <TechIcon src={photoshop} />
                <TechIcon src={premiere} />
                <TechIcon src={illustrator} />
                <TechIcon src={redshift} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <PreviousNextMethodsTeamSection />
    <section id='contact-us' className={style.form_section}>
      <div className='container'>
        <div className={style.form_wrap_outter}>
          <div className={style.form_wrap_inner}>
            <FormSection />
          </div>
        </div>
      </div>
    </section>
    <section className={style.contact_section}>
      <div className='container'>
        <ContactsSection />
      </div>
    </section>
    <div className={style.footer_wrap}>
      <Footer />
    </div>
  </>
)

/**
 * A team slider class with custom arrows
 */
class PreviousNextMethodsTeamSection extends Component {
  slider: any
  constructor(props: {} | Readonly<{}>) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  previous() {
    this.slider.slickPrev()
  }
  next() {
    this.slider.slickNext()
  }

  render() {
    const sliderSettings = {
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      speed: 500,
      infinite: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            centerPadding: '30px'
          }
        }
      ]
    }

    return (
      <section className={style.team_section}>
        <div className='container'>
          <div className='v_cont'>
            <div className={style.team_section_wrap}>
              <Title
                label='Our express'
                title='Team - the main thing.'
                margin={true}
              />
              <div className={style.team_desk_and_arrows}>
                <p {...animated}>
                  Our digital company develops projects and has been on the
                  market for 3 years.
                </p>
                <div
                  {...animated}
                  {...animated}
                  className={cn(style.arrows, {
                    [style.disabled]: team.length <= 4
                  })}
                >
                  <button
                    onClick={this.previous}
                    className={style.team_back_arrow}
                  >
                    Back <img src={arrowBack} alt='<-' />
                  </button>
                  <button onClick={this.next} className={style.team_next_arrow}>
                    Next <img src={arrowNext} alt='->' />
                  </button>
                </div>
              </div>
              <div
                {...animated}
                className={`${style.team_slider} team_slider_global`}
              >
                <TeamSlider ref={c => (this.slider = c)} {...sliderSettings}>
                  {team.map((t: TeamSliderItemProps) => (
                    <TeamSliderItem
                      key={t.name}
                      name={t.name}
                      position={t.position}
                      imgPath={t.imgPath}
                      urlPath={t.urlPath}
                    />
                  ))}
                </TeamSlider>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

type TechIconProps = {
  src: string
  className?: string
}

const TechIcon = ({ src, className }: TechIconProps): JSX.Element => (
  <span className={className}>
    <img src={src} alt={src} />
  </span>
)

type TeamSliderItemProps = {
  name: string
  position: string
  imgPath: string
  urlPath: string
}

const TeamSliderItem = ({
  name,
  position,
  imgPath,
  urlPath
}: TeamSliderItemProps) => {
  return (
    <a
      href={urlPath}
      target='_blank'
      rel='noreferrer'
      className={style.slider_item}
      style={{ backgroundImage: `url(${imgPath})` }}
    >
      <div className={`${style.slider_item_inner} slider_item_inner_global`}>
        <p>{name}</p>
        <span>{position}</span>
      </div>
    </a>
  )
}

export default About
