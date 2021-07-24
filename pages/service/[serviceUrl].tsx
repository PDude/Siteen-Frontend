import React from 'react'
// styles
import style from '../../styles/pages/ServiceName.module.scss'
// data
import { ServiceInfoType, servicesData } from '../../Data'
// next
import { useRouter } from 'next/router'
import Preloader from '../../components/common/Preloader'
// packages
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion'
import cn from 'classnames'
// images
import faqArrow from '../../images/faq_arrow.svg'
// components
import AccordionSection from '../../components/common/AccordionSection'
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

  const servicesItems = serviceInfo.services.map((s, index) => (
    <ServiceItemText
      key={s.title}
      index={index + 1}
      title={s.title}
      text={s.text}
    />
  ))

  return (
    <>
      <header className={style.service_header}></header>
      {/* <section className={style.faq_section}>
        <div className='v_cont'>
          <div className='container'>
            <div className={style.services_items_outer}>
              <div className={style.services_items_wrap}>{servicesItems}</div>
              <Accordion
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
      </section> */}
      {/* <section>
        <div className='container'>
          <div className='v_cont'>
            <Advantages />
          </div>
        </div>
      </section> */}
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

export default ServiceName
