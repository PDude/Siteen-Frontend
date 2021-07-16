import webIcon from '../images/services_web.svg'
import uiIcon from '../images/services_ui.svg'
import marketingIcon from '../images/services_marketing.svg'
import animIcon from '../images/services_animation.svg'

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
