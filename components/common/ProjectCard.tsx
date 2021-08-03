import React from 'react'
// next
import Link from 'next/link'
// components
import AnimLink from './AnimLink'
// styles
import style from '../../styles/components/common/ProjectCard.module.css'
import { animated } from '../../data'
// packages
import cn from 'classnames'

type ProjectCardType = {
  url: string
  projectPhoto: string
  projectLogo: string
  caseDuration: string
  projectTitle: string
  projectSubtitle: string
  newTab?: boolean
  large?: boolean
}

const ProjectCard = ({
  url,
  projectLogo,
  projectPhoto,
  caseDuration,
  projectTitle,
  projectSubtitle,
  newTab = false,
  large = false
}: ProjectCardType) => (
  <Link href={url}>
    <a
      rel='noreferrer'
      target={newTab ? '_blank' : '_self'}
      style={{ backgroundImage: `url(${projectPhoto})` }}
      className={cn(
        style.project_case,
        { [style.large]: large },
        'project_card_global'
      )}
    >
      <img src={projectLogo} alt='logo' />
      <div
        className={cn(
          style.project_case_wrap,
          { [style.large]: large },
          'project_card_wrap_global'
        )}
      >
        <div
          {...animated}
          className={cn(style.project_duration, { [style.large]: large })}
        >
          <p>Creation Term: </p>
          <span>{caseDuration}</span>
        </div>
        <div className={cn(style.project_title, { [style.large]: large })}>
          <h4 {...animated}>{projectTitle}</h4>
          <p {...animated}>{projectSubtitle}</p>
        </div>
        <AnimLink isLink={false} text='View full project' to={url} />
      </div>
    </a>
  </Link>
)

export default ProjectCard
