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
// advantages
import adv1 from '../images/adv_1.svg'
import adv2 from '../images/adv_2.svg'
import adv3 from '../images/adv_3.svg'

// sercices cards
type ServiceType = {
  serviceLogo: string
  serviceTitle: string
  serviceUrl: string
  serviceDescription: Array<string>
}

export const services: Array<ServiceType> = [
  {
    serviceLogo: webIcon,
    serviceTitle: 'Web Development',
    serviceUrl: 'web',
    serviceDescription: [
      'FrontEnd (HTML / CSS / JavaScript)',
      'WordPress / Shopify / Opencart / Others',
      'BackEnd(PHPCake / Laravel)',
      'API integration'
    ]
  },
  {
    serviceLogo: uiIcon,
    serviceTitle: 'UX/UI Brand Identity',
    serviceUrl: 'design',
    serviceDescription: [
      'User Expirience & Interface Design',
      'Landing page / E-shop / Business Site',
      'Design Logo / Branding',
      'Photo / Video content'
    ]
  },
  {
    serviceLogo: marketingIcon,
    serviceTitle: 'Digital Marketing',
    serviceUrl: 'marketing',
    serviceDescription: [
      'Search Engine Optimization (SEO)',
      'Social Media Marketing (SMM)',
      'Content Marketing',
      'Native Advertisign'
    ]
  },
  {
    serviceLogo: animIcon,
    serviceTitle: 'Animation Production',
    serviceUrl: 'animation',
    serviceDescription: [
      'Search Engine Optimization (SEO)',
      'Social Media Marketing (SMM)',
      'Content Marketing',
      'Native Advertisign'
    ]
  }
]

// teammates
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

// services data
export type ServiceInfoType = {
  title: string
}

type ServiceDataType = {
  [x: string]: ServiceInfoType
}

export const servicesData: ServiceDataType = {
  web: <ServiceInfoType>{
    title: 'Web-Development'
  },
  design: <ServiceInfoType>{
    title: 'UX/UI Design & Branding Identity'
  },
  marketing: <ServiceInfoType>{
    title: 'Digital Marketing'
  },
  animation: { title: 'Animation Production' }
}

// faq
type FaqType = {
  title: string
  text: string
}

export const faq: Array<FaqType> = [
  {
    title: 'What is the price for design services?',
    text: 'We give you to fill out a special brief, in which there will be leading questions, with the help of which we will reach mutual understanding in the task at hand. Our designers are professionals in working with clients, and in the process of work you will be able to control the desired result.'
  },
  {
    title: 'How long does it take to complete an order?',
    text: 'We give you to fill out a special brief, in which there will be leading questions, with the help of which we will reach mutual understanding in the task at hand. Our designers are professionals in working with clients, and in the process of work you will be able to control the desired result.'
  },
  {
    title: 'What materials do you need to provide for design development?',
    text: 'We give you to fill out a special brief, in which there will be leading questions, with the help of which we will reach mutual understanding in the task at hand. Our designers are professionals in working with clients, and in the process of work you will be able to control the desired result.'
  },
  {
    title: 'How does a designer know what exactly I need?',
    text: 'We give you to fill out a special brief, in which there will be leading questions, with the help of which we will reach mutual understanding in the task at hand. Our designers are professionals in working with clients, and in the process of work you will be able to control the desired result.'
  }
]

// advantages
type AdvantagesType = {
  advLogo: string
  advTitle: string
  advtext: Array<string>
}

export const advantages: Array<AdvantagesType> = [
  {
    advLogo: adv1,
    advTitle: 'Warranty',
    advtext: [
      'We are confident in the quality of our product, which means we act as a guarantor of stable work and high-quality performance'
    ]
  },
  {
    advLogo: adv2,
    advTitle: 'Product quality',
    advtext: [
      'You get fast, high-quality hosting from the CityHost hosting provider and a domain in any domain zone. Especially for you, we provide a free connection of corporate mail'
    ]
  },
  {
    advLogo: adv3,
    advTitle: 'Support',
    advtext: [
      'Clients of our web studio receive full free support for 2 months. This function will make you forget about self-filling and cosmetic renewal of the final product, we will take care of each client'
    ]
  }
]
