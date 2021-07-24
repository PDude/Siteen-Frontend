import React from 'react'
import Button from '../../components/formElements/Button'
import style from '../../styles/pages/ProjectPage.module.sass'
// temp project bg
import projecCheckDown from '../../images/project_check_down.svg'
import projecCheckDownSmall from '../../images/project_check_down_small.svg'
import { Component, useRef } from 'react'
import Footer from '../../components/Footer'
// Slider
import ProjectsSlider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// Arows
import arrowBack from '../../images/arrow_team_back.svg'
import arrowNext from '../../images/arrow_team_next.svg'
// Packages
import cn from 'classnames'
// Icons
import { GoTriangleRight } from 'react-icons/go'
// Components
import Preloader from '../../components/common/Preloader'
// Types
import { ProjectType } from '../../types'
import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'
import Link from 'next/link'
import Title from '../../components/common/Title'

const ProjectPage = ({
  project,
  rec
}: InferGetServerSidePropsType<GetServerSideProps>): JSX.Element => {
  const myRef = useRef<HTMLDivElement>(null)

  const scroll = (ref: any) => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  if (!project) {
    return <Preloader />
  }

  return (
    <>
      <header
        style={{ backgroundImage: `url(${project.project_photo})` }}
        className={style.project_page_header}
      >
        <div className='container'>
          <div className={style.project_info}>
            <img src={project.project_logo} alt={'Brand logo'} />
            <div className={style.project_type}>
              <h3>{project.ordering_type}</h3>
              <p>{project.project_tags.join(' ')}</p>
            </div>
            <button
              onClick={() => {
                scroll(myRef)
              }}
            >
              <img
                className={style.for_big_device}
                src={projecCheckDown}
                alt='projecCheckDown'
              />
              <img
                className={style.for_small_device}
                src={projecCheckDownSmall}
                alt='projecCheckDown'
              />
            </button>
          </div>
        </div>
      </header>
      <section ref={myRef} className={style.project_data}>
        <div className='container'>
          <div className='v_cont'>
            <div className={style.about}>
              <h3>About</h3>
              <p>{project.about_project}</p>
            </div>
            <div className={style.tasks}>
              <h3>Tasks</h3>
              <ul>
                {project.project_tasks?.map((t: Array<string>) => (
                  <li key={Math.random()}>· {t}</li>
                ))}
              </ul>
            </div>
            {project.result_link.length > 0 ? (
              <div className={style.results}>
                <h3>Results</h3>
                <ul>
                  <li>
                    <a href={project.result_link[0]}>
                      {new URL(project.result_link[0]).hostname}
                    </a>
                  </li>
                  {project.result_link.length > 1 ? (
                    <li>
                      <a href={project.result_link[1]}>{`@${new URL(
                        project.result_link[1]
                      ).pathname.replace(/\//g, '')}`}</a>
                    </li>
                  ) : null}
                </ul>
              </div>
            ) : null}
            <div className={style.project_reference}>
              <h1>{project.project_name}</h1>
              <div
                className={style.project_main_img_wrap}
                style={{ backgroundImage: `url(${project.final_photo})` }}
              >
                <Button>View More On ...</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PreviousNextMethodsProjectsSection rec={rec} />
      <section className={style.cta_section}>
        <div className='container'>
          <div className='v_cont'>
            <div className={style.cta_section_offer}>
              <Title title='Did you like the project?' margin={true} />
              <p>
                Fill out the application and we will contact you to discuss
                cooperation
              </p>
              <Button>Consultation</Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

type SliderProps = {
  rec: Array<ProjectType>
}

/**
 * A projects slider class with custom arrows
 */
class PreviousNextMethodsProjectsSection extends Component<SliderProps> {
  slider: any
  constructor(props: SliderProps) {
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
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      speed: 500,
      infinite: false,
      responsive: [
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
      <section className={style.projects_section}>
        <div className='container'>
          <div className='v_cont'>
            <div className={style.projects_section_wrap}>
              <Title
                className={style.rec_heading}
                label='Our Recommendations'
                title='Also check it out.'
                margin={true}
              />
              <div className={style.projects_desk_and_arrows}>
                <p>
                  Our digital company develops projects and has been on the
                  market for 15 years.
                </p>
                <div
                  className={cn(style.arrows, {
                    [style.disabled]: this.props.rec.length <= 3
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
                className={`${style.projects_slider} projects_slider_global`}
              >
                <ProjectsSlider
                  ref={c => (this.slider = c)}
                  {...sliderSettings}
                >
                  {this.props.rec.map(p => (
                    <ProjectsSliderItem
                      project_name={p.project_name}
                      project_subtitle={p.project_subtitle}
                      term={p.term}
                      project_logo={p.project_logo}
                      project_photo={p.project_photo}
                      original_name={p.original_name}
                      key={p.id}
                    />
                  ))}
                </ProjectsSlider>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

type SLiderItemType = {
  project_name: string
  project_subtitle: string
  term: string
  project_logo: string
  original_name: string
  project_photo: string
}

const ProjectsSliderItem = ({
  project_name,
  project_subtitle,
  term,
  project_logo,
  project_photo,
  original_name
}: SLiderItemType): JSX.Element => {
  return (
    <Link href={`/project/${original_name}`}>
      <a
        href='#'
        className={`${style.slider_item} slider_item_global`}
        style={{ backgroundImage: `url(${project_photo})` }}
      >
        <img src={project_logo} alt='logo' />
        <div className={`${style.slider_item_wrap} slider_item_wrap_global`}>
          <div className={style.project_duration}>
            <p>Creation Term: </p>
            <span>{term}</span>
          </div>
          <div className={style.project_title}>
            <h4>{project_name}</h4>
            <p>{project_subtitle}</p>
          </div>
          <p className={style.project_link}>
            View full project <GoTriangleRight />
          </p>
        </div>
      </a>
    </Link>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const [projectRes, recRes] = await Promise.all([
    fetch(`${process.env.NEXT_API_URL}project/${query.original_name}`),
    fetch(
      `${process.env.NEXT_API_URL}project/recommendation/${query.original_name}`
    )
  ])

  const [projectData, recData] = await Promise.all([
    projectRes.json(),
    recRes.json()
  ])

  const project: ProjectType = projectData.data.response
  const rec: Array<ProjectType> = recData.data

  return {
    props: {
      project,
      rec
    }
  }
}

export default ProjectPage
