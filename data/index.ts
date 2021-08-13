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
// services bg
import webBg from '../images/moon.webp'
import uiBg from '../images/desert.webp'
import marketingBg from '../images/rock.webp'
// content
import webContentBg from '../images/web_content_bg.svg'
import designContentBg from '../images/design_content_bg.svg'
import marketingContentBg from '../images/marketing_content_bg.svg'

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
  urlPath: string
}

export const team: Array<TeamType> = [
  {
    name: 'Alexandr Zabrodskyi',
    position: 'Back-End Dev',
    imgPath: member2,
    urlPath: 'https://www.instagram.com/k.e.y.s.a.m'
  },
  {
    name: 'Paul Dudich',
    position: 'Front-End Dev',
    imgPath: member3,
    urlPath: 'https://www.instagram.com/shalldon_'
  },
  {
    name: 'Kateryna Lekhner',
    position: 'UX/UI Designer',
    imgPath: member4,
    urlPath: 'https://www.instagram.com/lekhner'
  },
  {
    name: 'Yurii Siryi',
    position: 'Motion Designer',
    imgPath: member1,
    urlPath: 'https://www.instagram.com/yura1337.jpg'
  }
]

// services data
export type ServiceInfoType = {
  services: Array<{ title: string; text: string }>
  offer: { logo: string; title: string; text: Array<string>; bg: string }
  content: { label: string; title: string; text: Array<string>; bg: string }
}

type ServiceDataType = {
  [x: string]: ServiceInfoType
}

export const servicesData: ServiceDataType = {
  web: <ServiceInfoType>{
    offer: {
      logo: webIcon,
      title: 'Web-Development',
      text: [
        'Unique website design',
        'Logo & Corporate Identity',
        'Other web elements'
      ],
      bg: webBg
    },
    services: [
      {
        title: 'frontend dev',
        text: 'A web page containing information about a service or product whose task is to sell, sell and sell again'
      },
      {
        title: 'backend dev',
        text: 'We update old and create radically new modern sites that strengthen the position of companies, brands and products'
      },
      {
        title: 'mobile app dev',
        text: 'Responsive online stores, marketplaces with high loading speed, convenient admin panel, correct UX / UI'
      },
      {
        title: 'domain and hosting',
        text: 'A logo is the face of your business. A beautiful logo will help your company move in the right direction.'
      },
      {
        title: 'turnkey website',
        text: 'The collection of visual elements (from color to fonts) that create the face of the company makes it individual.'
      },
      {
        title: 'Support',
        text: 'You can contact us with any question: banners, business cards, covers and posts for social networks ... We realize everything.'
      }
    ],
    content: {
      label: 'design',
      title: 'Design solutions for your business problem.',
      text: [
        'A beautiful design is for us. We attract users, increase attention to the product and use web design competently as a selling element. For several years in a row we have been helping our clients to develop their business. With us you keep up with the times!',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint expedita sit error tenetur distinctio consequuntur ipsam suscipit. Suscipit, repudiandae! Exercitationem aut aliquam harum pariatur saepe, voluptates officiis quos repudiandae culpa debitis sed quod, asperiores impedit, incidunt dolorum dolorem tenetur laboriosam.'
      ],
      bg: webContentBg
    }
  },
  design: <ServiceInfoType>{
    offer: {
      logo: uiIcon,
      title: 'UX/UI Design & Branding Identity',
      text: [
        'Unique website design',
        'Logo & Corporate Identity',
        'Other web elements'
      ],
      bg: uiBg
    },
    services: [
      {
        title: 'frontend dev',
        text: 'A web page containing information about a service or product whose task is to sell, sell and sell again'
      },
      {
        title: 'backend dev',
        text: 'We update old and create radically new modern sites that strengthen the position of companies, brands and products'
      },
      {
        title: 'mobile app dev',
        text: 'Responsive online stores, marketplaces with high loading speed, convenient admin panel, correct UX / UI'
      },
      {
        title: 'domain and hosting',
        text: 'A logo is the face of your business. A beautiful logo will help your company move in the right direction.'
      },
      {
        title: 'turnkey website',
        text: 'The collection of visual elements (from color to fonts) that create the face of the company makes it individual.'
      },
      {
        title: 'Support',
        text: 'You can contact us with any question: banners, business cards, covers and posts for social networks ... We realize everything.'
      }
    ],
    content: {
      label: 'web-development',
      title: 'Web development and support from professionals.',
      text: [
        'A beautiful design is for us. We attract users, increase attention to the product and use web design competently as a selling element. For several years in a row we have been helping our clients to develop their business. With us you keep up with the times!',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint expedita sit error tenetur distinctio consequuntur ipsam suscipit. Suscipit, repudiandae! Exercitationem aut aliquam harum pariatur saepe, voluptates officiis quos repudiandae culpa debitis sed quod, asperiores impedit, incidunt dolorum dolorem tenetur laboriosam.'
      ],
      bg: designContentBg
    }
  },
  marketing: <ServiceInfoType>{
    offer: {
      logo: marketingIcon,
      title: 'Digital Marketing',
      text: [
        'Unique website design',
        'Logo & Corporate Identity',
        'Other web elements'
      ],
      bg: marketingBg
    },
    services: [
      {
        title: 'frontend dev',
        text: 'A web page containing information about a service or product whose task is to sell, sell and sell again'
      },
      {
        title: 'backend dev',
        text: 'We update old and create radically new modern sites that strengthen the position of companies, brands and products'
      },
      {
        title: 'mobile app dev',
        text: 'Responsive online stores, marketplaces with high loading speed, convenient admin panel, correct UX / UI'
      },
      {
        title: 'domain and hosting',
        text: 'A logo is the face of your business. A beautiful logo will help your company move in the right direction.'
      },
      {
        title: 'turnkey website',
        text: 'The collection of visual elements (from color to fonts) that create the face of the company makes it individual.'
      },
      {
        title: 'Support',
        text: 'You can contact us with any question: banners, business cards, covers and posts for social networks ... We realize everything.'
      }
    ],
    content: {
      label: 'marketing',
      title:
        'We will create a flow of customers via the Internet, increase your profit.',
      text: [
        'A beautiful design is for us. We attract users, increase attention to the product and use web design competently as a selling element. For several years in a row we have been helping our clients to develop their business. With us you keep up with the times!',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint expedita sit error tenetur distinctio consequuntur ipsam suscipit. Suscipit, repudiandae! Exercitationem aut aliquam harum pariatur saepe, voluptates officiis quos repudiandae culpa debitis sed quod, asperiores impedit, incidunt dolorum dolorem tenetur laboriosam.'
      ],
      bg: marketingContentBg
    }
  },
  animation: <ServiceInfoType>{
    offer: {
      logo: webIcon,
      title: 'Animation Production',
      text: [
        'Unique website design',
        'Logo & Corporate Identity',
        'Other web elements'
      ],
      bg: webBg
    },
    services: [
      {
        title: 'frontend dev',
        text: 'A web page containing information about a service or product whose task is to sell, sell and sell again'
      },
      {
        title: 'backend dev',
        text: 'We update old and create radically new modern sites that strengthen the position of companies, brands and products'
      },
      {
        title: 'mobile app dev',
        text: 'Responsive online stores, marketplaces with high loading speed, convenient admin panel, correct UX / UI'
      },
      {
        title: 'domain and hosting',
        text: 'A logo is the face of your business. A beautiful logo will help your company move in the right direction.'
      },
      {
        title: 'turnkey website',
        text: 'The collection of visual elements (from color to fonts) that create the face of the company makes it individual.'
      },
      {
        title: 'Support',
        text: 'You can contact us with any question: banners, business cards, covers and posts for social networks ... We realize everything.'
      }
    ],
    content: {
      label: 'animation',
      title: 'we make stylish fashionable youth animation.',
      text: [
        'A beautiful design is for us. We attract users, increase attention to the product and use web design competently as a selling element. For several years in a row we have been helping our clients to develop their business. With us you keep up with the times!',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint expedita sit error tenetur distinctio consequuntur ipsam suscipit. Suscipit, repudiandae! Exercitationem aut aliquam harum pariatur saepe, voluptates officiis quos repudiandae culpa debitis sed quod, asperiores impedit, incidunt dolorum dolorem tenetur laboriosam.'
      ],
      bg: webContentBg
    }
  }
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
    advTitle: 'Product Quality',
    advtext: [
      'You get fast, high-quality hosting from the CityHost hosting provider and a domain in any domain zone. Specially for you, we provide a free connection of corporate mail'
    ]
  },
  {
    advLogo: adv3,
    advTitle: 'Support',
    advtext: [
      'Clients of our web studio receive a full free support for 2 months. This function will make you forget about self-filling and cosmetic renewal of the final product, we will take care of each client'
    ]
  }
]

// Animation settings
export const animated = {
  // 'data-aos': 'fade-up',
  // 'data-aos-anchor-placement': 'top-bottom'
}
