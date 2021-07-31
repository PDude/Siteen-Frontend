import React from 'react'
// images
import faqSign from '../images/faq_sign.svg'
import faqArrow from '../images/faq_arrow.svg'
// data
import { animated, faq } from '../Data/index'
// packages
import cn from 'classnames'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion'
// styles
import style from '../styles/components/common/AccordionSection.module.sass'
import Title from './common/Title'

const AccordionSection = (): JSX.Element => {
  return (
    <div className={style.accordion_wrap}>
      <div className='container'>
        <Title
          title='Frequently Asked Questions.'
          label='FAQ INFORMATION'
          gap={true}
        />
        <Accordion allowZeroExpanded={true} className={style.accordion}>
          {faq.map(item => (
            <AccordionItem key={item.title}>
              <AccordionItemHeading {...animated}>
                <AccordionItemButton>
                  <AccordionItemState>
                    {({ expanded }) => (
                      <AccHeading title={item.title} expanded={expanded} />
                    )}
                  </AccordionItemState>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel {...animated} className={style.panel}>
                {item.text}
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

type AccHeadingType = {
  title: string
  expanded: boolean | undefined
}

const AccHeading = ({ title, expanded }: AccHeadingType): JSX.Element => (
  <div className={cn(style.acc_heading, { [style.opened]: expanded })}>
    <img className={style.faq_sign} src={faqSign} alt='' />
    <h3 title={title}>{title}</h3>
    <img className={style.faq_arrow} src={faqArrow} alt='' />
  </div>
)

export default AccordionSection
