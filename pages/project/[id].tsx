import style from '../../styles/ProjectPage.module.sass'
// temp project bg
import projectBg from '../../images/wings_bg.jpg'
import projectLogo from '../../images/wings_logo.svg'
import projecCheckDown from '../../images/project_check_down.svg'
import projecCheckDownSmall from '../../images/project_check_down_small.svg'
import { useEffect, useRef } from 'react'
import Footer from '../../components/Footer'

const ProjectPage = ({ projects, id }) => {
  const singleProject = projects.response.filter((p) => p.id == id)[0]

  const myRef = useRef()

  const scroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        style={{ backgroundImage: `url(${projectBg})` }}
        className={style.project_page_header}>
        <div className='container'>
          <div className={style.project_info}>
            <img src={projectLogo} alt={'Brand logo'} />
            <div className={style.project_type}>
              <h3>{singleProject.ordering_type}</h3>
              <p>{singleProject.project_tags.join(' ')}</p>
            </div>
          </div>
          <button
            onClick={() => {
              scroll(myRef)
            }}>
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
      </header>
      <section ref={myRef} className={style.project_data}>
        <div className='container'>
          <div className={style.about}>
            <h3>Про компанію</h3>
            <p>{singleProject.about_project}</p>
          </div>
          <div className={style.tasks}>
            <h3>Задачі</h3>
            <ul>
              {singleProject.project_tasks.map((t) => (
                <li key={t}>· {t}</li>
              ))}
            </ul>
          </div>
          <div className={style.results}>
            <h3>Результати</h3>
            <ul>
              <li>
                <a href='#'>{singleProject.result_link[0]}</a>
              </li>
              <li>
                <a href='#'>{singleProject.result_link[1]}</a>
              </li>
            </ul>
          </div>
          <div className={style.project_reference}>
            <h1>{singleProject.project_name}</h1>
            <div className={style.iframe_container}>
              {/* <iframe
                src='https://www.instagram.com/p/Btg1jd_HJsT/'
                frameBorder={0}
              /> */}
              <h1>
                  Coming soon ...
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className={style.cta_section}>
        <div className='container'>
          <div className={style.cta_section_offer}>
            <h2>Did you like the project?</h2>
            <p>
              Fill out the application and we will contact you to discuss
              cooperation
            </p>
            <div className='btn'>
              <span>Consultation</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

ProjectPage.getInitialProps = async ({ query }) => {
  const id = query.id

  const response = await fetch('http://localhost:8289/v1/project')
  const projects = await response.json()

  return {
    id: id,
    projects: projects
  }
}

export default ProjectPage
