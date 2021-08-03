import React, { useState } from 'react'
// style
import style from '../styles/components/common/ProjectsSection.module.css'
// packages
import cn from 'classnames'
import CasesSlider from 'react-slick'
// types
import { ProjectType } from '../types'
import Title from './common/Title'
import { animated } from '../data'
import ProjectCard from './common/ProjectCard'

type Props = {
  projects: Array<ProjectType>
}

const ProjectsSection = ({ projects }: Props): JSX.Element => {
  // Getting projects
  const [filteredProjects, setFilteredProjects] =
    useState<Array<ProjectType>>(projects)

  // Slider settings
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

  // Projects filtration
  const [type, setType] = useState('all')

  const filterProjects = (e: { currentTarget: { value: string } }) => {
    const tagValue = e.currentTarget.value
    setType(tagValue)
    if (tagValue === 'all') setFilteredProjects(projects)
    else
      setFilteredProjects(
        projects.filter((c: ProjectType) => c.type === tagValue)
      )
  }

  // Setting projects
  const casesItems = filteredProjects?.map(c => (
    <ProjectCard
      key={c.id}
      url={`/project/${c.original_name}`}
      projectPhoto={c.project_photo}
      projectLogo={c.project_logo}
      caseDuration={c.term}
      projectTitle={c.project_name}
      projectSubtitle={c.project_subtitle}
    />
  ))

  return (
    <div className={style.our_cases}>
      <div className='container'>
        <div className={style.our_cases_wrap}>
          <Title label='Our portfolio' title='Our Latest Cases.' gap={true} />
          <div className={style.cases_tags}>
            <CaseTag
              typeTag='all'
              text='All projects'
              typeState={type}
              filterProjects={filterProjects}
            />
            <CaseTag
              typeTag='web-sites'
              text='Web-Sites'
              typeState={type}
              filterProjects={filterProjects}
            />
            <CaseTag
              typeTag='design'
              text='Design Only'
              typeState={type}
              filterProjects={filterProjects}
            />
            <CaseTag
              typeTag='motion-design'
              text='Video & Animation'
              typeState={type}
              filterProjects={filterProjects}
            />
            <button className={style.inaccessible}>App-Dev</button>
            <button className={style.inaccessible}>SEO-Cases</button>
          </div>
          <div className='divider'></div>
          {casesItems.length > 0 ? (
            <>
              <div {...animated} className={style.our_cases_items}>
                {casesItems}
              </div>
              <div {...animated} className={style.cases_slider_wrap}>
                <CasesSlider {...sliderSettings}>{casesItems}</CasesSlider>
              </div>
            </>
          ) : (
            <p className='plug'>The projects will be here soon</p>
          )}
        </div>
      </div>
    </div>
  )
}

type CaseTagType = {
  typeTag: string
  typeState: string
  text: string
  filterProjects: (e: { currentTarget: { value: string } }) => void
}

const CaseTag = ({ typeTag, typeState, text, filterProjects }: CaseTagType) => {
  return (
    <button
      {...animated}
      type='button'
      onClick={(e: { currentTarget: { value: string } }) => {
        filterProjects(e)
      }}
      value={typeTag}
      className={cn({ [style.checked]: typeTag === typeState })}
    >
      {text}
    </button>
  )
}

export default ProjectsSection
