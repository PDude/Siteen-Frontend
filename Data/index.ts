// Services
import webIcon from '../images/services_web.svg'
import uiIcon from '../images/services_ui.svg'
import marketingIcon from '../images/services_marketing.svg'
import animIcon from '../images/services_animation.svg'
// Team
import member1 from '../images/member_1.webp'
import member2 from '../images/member_2.webp'
import member3 from '../images/member_3.webp'
import member4 from '../images/member_4.webp'

type ServiceType = {
  id: number
  serviceLogo: string
  serviceTitle: string
  serviceDescription: Array<string>
}

export const services: Array<ServiceType> = [
  {
    id: Math.random(),
    serviceLogo: webIcon,
    serviceTitle: 'Web Development',
    serviceDescription: [
      'FrontEnd (HTML / CSS / JavaScript)',
      'WordPress / Shopify / Opencart / Others',
      'BackEnd(PHPCake / Laravel)',
      'API integration'
    ]
  },
  {
    id: Math.random(),
    serviceLogo: uiIcon,
    serviceTitle: 'UX/UI Brand Identity',
    serviceDescription: [
      'User Expirience & Interface Design',
      'Landing page / E-shop / Business Site',
      'Design Logo / Branding',
      'Photo / Video content'
    ]
  },
  {
    id: Math.random(),
    serviceLogo: marketingIcon,
    serviceTitle: 'Digital Marketing',
    serviceDescription: [
      'Search Engine Optimization (SEO)',
      'Social Media Marketing (SMM)',
      'Content Marketing',
      'Native Advertisign'
    ]
  },
  {
    id: Math.random(),
    serviceLogo: animIcon,
    serviceTitle: 'Animation Production',
    serviceDescription: [
      'Search Engine Optimization (SEO)',
      'Social Media Marketing (SMM)',
      'Content Marketing',
      'Native Advertisign'
    ]
  }
]

type TeamType = {
  name: string
  position: string
  imgPath: string
}

export const team: Array<TeamType> = [
  {
    name: 'Yurii Siryi',
    position: 'Motion Designer',
    imgPath: member1
  },
  {
    name: 'Alexandr Zabrodskyi',
    position: 'Back-End Dev',
    imgPath: member2
  },
  {
    name: 'Paul Dudich',
    position: 'Front-End Dev',
    imgPath: member3
  },
  {
    name: 'Kateryna Lekhner',
    position: 'UX/UI Designer',
    imgPath: member4
  }
]
