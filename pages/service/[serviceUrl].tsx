import React, { useRef } from 'react'
// styles
import style from '../../styles/pages/ServiceName.module.scss'
// data
import { ServiceInfoType, servicesData } from '../../Data'
// next
import { useRouter } from 'next/router'
// packages
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
  resetNextUuid
} from 'react-accessible-accordion'
import cn from 'classnames'
// images
import faqArrow from '../../images/faq_arrow.svg'
// components
import Preloader from '../../components/common/Preloader'
import AccordionSection from '../../components/AccordionSection'
import Advantages from '../../components/Advantages'
import AnimArrow from '../../components/common/AnimArrow'
import ProjectsSection from '../../components/ProjectsSection'
import Footer from '../../components/Footer'
import FormSection from '../../components/FormSection'
import ContactsSection from '../../components/ContactsSection'
// types
import { ProjectType } from '../../types'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Title from '../../components/common/Title'
import AnimLink from '../../components/common/AnimLink'

const ServiceName = ({
  projects
}: InferGetServerSidePropsType<GetServerSideProps>): JSX.Element => {
  // scroll to
  const myRef = useRef<HTMLDivElement>(null)
  const scroll = (ref: any) => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  // getting info
  const { web, design, marketing, animation } = servicesData
  const query = useRouter().query.serviceUrl

  let serviceInfo: ServiceInfoType | undefined

  switch (query) {
    case 'web':
      serviceInfo = web
      break
    case 'design':
      serviceInfo = design
      break
    case 'marketing':
      serviceInfo = marketing
      break
    case 'animation':
      serviceInfo = animation
      break
  }

  if (!serviceInfo) {
    return <Preloader />
  }

  const servicesItems = serviceInfo.services.map((s, index) => (
    <ServiceItemText
      key={s.title}
      index={index + 1}
      title={s.title}
      text={s.text}
    />
  ))

  // reset uuid
  resetNextUuid()

  return (
    <>
      <header
        style={{ backgroundImage: `url(${serviceInfo.offer.bg})` }}
        className={style.service_header}
      >
        <div className='container'>
          <div className={style.offer_wrap}>
            <div className={style.logo_wrap}>
              <img src={serviceInfo.offer.logo} alt='' />
            </div>
            <h3>{serviceInfo.offer.title}</h3>
            <p>{serviceInfo.offer.text.join(' • ')}</p>
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
      <section
        ref={myRef}
        style={{ backgroundImage: `url(${serviceInfo.content.bg})` }}
        className={style.content}
      >
        <div className='container'>
          <div className='v_cont'>
            <div className={style.content_title_wrap}>
              <Title
                label={serviceInfo.content.label}
                title={serviceInfo.content.title}
                gap={true}
                max='600px'
              />
              <AnimLink
                className={style.write_link}
                max='300px'
                to='/#contact_us'
                text='Write to us'
              />
            </div>
            <ul className={style.content_text}>
              {serviceInfo.content.text.map(p => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className='v_cont'>
          <div className='container'>
            <div className={style.services_items_outer}>
              <div className={style.services_items_wrap}>{servicesItems}</div>
              <Accordion
                allowMultipleExpanded
                preExpanded={['0']}
                allowZeroExpanded={true}
                className={style.servies_accordion}
              >
                {serviceInfo.services.map((item, index) => (
                  <AccordionItem uuid={index.toString()} key={item.title}>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <AccordionItemState>
                          {({ expanded }) => (
                            <ServiceItemAcc
                              title={item.title}
                              index={index + 1}
                              expanded={expanded}
                            />
                          )}
                        </AccordionItemState>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className={style.panel}>
                      {item.text}
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      <section className={style.advantages_wrap}>
        <div className='v_cont'>
          <Advantages />
        </div>
      </section>
      <section className={style.projects_section}>
        <div className='v_cont'>
          <ProjectsSection projects={projects} />
        </div>
      </section>
      <section>
        <div className='v_cont'>
          <AccordionSection />
        </div>
      </section>
      <section className={style.form_section}>
        <div className='container'>
          <div className='v_cont'>
            <div className={style.form_section_wrap}>
              <div />
              <FormSection />
            </div>
            <div className={style.contacts_section_wrap}>
              <ContactsSection />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

type ServiceItemTextType = {
  index: number
  title: string
  text: string
}

const ServiceItemText = ({
  index,
  title,
  text
}: ServiceItemTextType): JSX.Element => (
  <div className={style.service_item}>
    <span>{index < 10 ? `0${index}` : index}</span>
    <h4>{title}</h4>
    <p>{text}</p>
  </div>
)

type ServiceItemAccType = {
  index: number
  title: string
  expanded: boolean | undefined
}

const ServiceItemAcc = ({
  index,
  title,
  expanded
}: ServiceItemAccType): JSX.Element => (
  <div className={cn(style.service_item_acc, { [style.opened]: expanded })}>
    <span>{index < 10 ? `0${index}` : index}</span>
    <h4>{title}</h4>
    <img src={faqArrow} alt='' />
  </div>
)

type ProjectsResponseDataType = {
  response: Array<ProjectType>
}

type ProjectsResponseType = {
  message: string
  status: number
  code: number
  data: ProjectsResponseDataType
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_API_URL}project`)
  const data: ProjectsResponseType = await res.json()
  const projects: Array<ProjectType> = data.data.response

  return {
    props: {
      projects
    }
  }
}

export default ServiceName
