import React from 'react'
// styles
import style from '../../styles/pages/ServiceName.module.sass'
// components
// import AccordionSection from '../../components/common/AccordionSection'
// data
import { ServiceInfoType, servicesData } from '../../Data'
// next
import { useRouter } from 'next/router'
import Preloader from '../../components/common/Preloader'
import Advantages from '../../components/common/Advantages'

const ServiceName = () => {
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

  return (
    <section className={style.faq_section}>
      <div className='container'>
        <Advantages />
      </div>
    </section>
  )
}

export default ServiceName
