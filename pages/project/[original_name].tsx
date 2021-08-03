import React from 'react'
import Button from '../../components/formElements/Button'
import style from '../../styles/pages/ProjectPage.module.sass'
// temp project bg
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
// Components
import Preloader from '../../components/common/Preloader'
import AnimArrow from '../../components/common/AnimArrow'
// Types
import { ProjectType } from '../../types'
import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'
import Title from '../../components/common/Title'
import Head from 'next/head'
import { animated } from '../../data'
import ProjectCard from '../../components/common/ProjectCard'
import Link from 'next/link'

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
      <Head>
        <title>Siteen • {project.project_name}</title>
      </Head>
      <header
        style={{ backgroundImage: `url(${project.project_photo})` }}
        className={style.project_page_header}
      >
        <div className='container'>
          <div className={style.project_info}>
            <img src={project.project_logo} alt='Brand logo' />
            <div className={style.project_type}>
              <h3>{project.ordering_type}</h3>
              <p>{project.project_tags.join(' ')}</p>
            </div>
            <button
              onClick={() => {
                scroll(myRef)
              }}
            >
              <AnimArrow />
            </button>
          </div>
        </div>
      </header>
      <section ref={myRef} className={style.project_data}>
        <div className='container'>
          <div className='v_cont'>
            <div className={style.project_data_inner}>
              <div className={style.about}>
                <h3 {...animated}>About</h3>
                <p {...animated}>{project.about_project}</p>
              </div>
              <div className={style.tasks}>
                <h3 {...animated}>Tasks</h3>
                <ul {...animated}>
                  {project.project_tasks?.map((t: Array<string>) => (
                    <li key={Math.random()}>· {t}</li>
                  ))}
                </ul>
              </div>
              {(project.result_link_1 || project.result_link_2) && (
                <div className={style.results}>
                  <h3 {...animated}>
                    {project.result_link_2 ? <>Results</> : <>Result</>}
                  </h3>
                  <ul>
                    {project.result_link_1 && (
                      <li {...animated}>
                        <a
                          href={project.result_link_1}
                          target='_blank'
                          rel='noreferrer'
                        >
                          {new URL(project.result_link_1).hostname}
                        </a>
                      </li>
                    )}
                    {project.result_link_2 && (
                      <li {...animated}>
                        <a
                          href={project.result_link_2}
                          target='_blank'
                          rel='noreferrer'
                        >{`@${new URL(project.result_link_2).pathname.replace(
                          /\//g,
                          ''
                        )}`}</a>
                      </li>
                    )}
                  </ul>
                </div>
              )}
              {project.result_link_1 && (
                <div className={style.project_reference}>
                  <h1 {...animated}>{project.project_name}</h1>
                  <ProjectCard
                    url={project.result_link_1}
                    projectPhoto={project.project_photo}
                    projectLogo={project.project_logo}
                    caseDuration={project.term}
                    projectTitle={project.project_name}
                    projectSubtitle={project.project_subtitle}
                    newTab={true}
                    large={true}
                  />
                </div>
              )}
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
              <p {...animated}>
                Fill out the application and we will contact you to discuss
                cooperation
              </p>
              <Link href='/#contact-us'>
                <a>
                  <Button>Consultation</Button>
                </a>
              </Link>
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
                <p {...animated}>
                  Our digital company develops projects and has been on the
                  market for 15 years.
                </p>
                <div
                  {...animated}
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
                {...animated}
                className={`${style.projects_slider} projects_slider_global`}
              >
                <ProjectsSlider
                  ref={c => (this.slider = c)}
                  {...sliderSettings}
                >
                  {this.props.rec.map(p => (
                    <ProjectCard
                      projectTitle={p.project_name}
                      projectSubtitle={p.project_subtitle}
                      caseDuration={p.term}
                      projectLogo={p.project_logo}
                      projectPhoto={p.project_photo}
                      url={`/project/${p.original_name}`}
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
