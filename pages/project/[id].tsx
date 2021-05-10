import style from '../../styles/ProjectPage.module.sass'
// temp project bg
import projectBg from '../../images/wings_bg.jpg'
import projectLogo from '../../images/wings_logo.svg'
import projecCheckDown from '../../images/project_check_down.svg'
import projecCheckDownSmall from '../../images/project_check_down_small.svg'
import { useEffect, useRef, useState } from 'react'
import Footer from '../../components/Footer'
import { useRouter } from 'next/router'

const ProjectPage = ({ project: serverProject }) => {
  const myRef = useRef()

  const [project, setProject] = useState(serverProject)
  const router = useRouter()

  useEffect(() => {
    const loadProject = async () => {
      const response = await fetch(
        `http://localhost:8289/v1/project/${router.query.id}`
      )
      const projectData = await response.json()
      setProject(projectData.response[0])
    }

    if (!serverProject) {
      loadProject()
    }
  }, [])

  const scroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  if (!project) {
    return (
      <div className='container'>
        <div className={style.loading_wrap}>
          <p>Loading ...</p>
        </div>
      </div>
    )
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
              <h3>{project.ordering_type}</h3>
              <p>{project.project_tags.join(' ')}</p>
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
            <p>{project.about_project}</p>
          </div>
          <div className={style.tasks}>
            <h3>Задачі</h3>
            <ul>
              {project.project_tasks.map((t) => (
                <li key={t}>· {t}</li>
              ))}
            </ul>
          </div>
          <div className={style.results}>
            <h3>Результати</h3>
            <ul>
              <li>
                <a href='#'>{project.result_link[0]}</a>
              </li>
              <li>
                <a href='#'>{project.result_link[1]}</a>
              </li>
            </ul>
          </div>
          <div className={style.project_reference}>
            <h1>{project.project_name}</h1>
            <div className={style.iframe_container}>
              {/* <iframe
                src='https://www.instagram.com/p/Btg1jd_HJsT/'
                frameBorder={0}
              /> */}
              <h1>Coming soon ...</h1>
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

ProjectPage.getInitialProps = async ({ query, req }) => {
  if (!req) {
    return {
      project: null
    }
  }

  const response = await fetch(`http://localhost:8289/v1/project/${query.id}`)
  const project = await response.json()

  return {
    project: project.response[0]
  }
}

export default ProjectPage
