import { useEffect, useState } from "react";
import { GoTriangleRight } from "react-icons/go";
import webIcon from "../images/services_web.svg";
import uiIcon from "../images/services_ui.svg";
import marketingIcon from "../images/services_marketing.svg";
import animIcon from "../images/services_animation.svg";
import globeGif from "../images/globus.gif";
import ServicesSlider from "react-slick";
import CasesSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "../styles/pages/Home.module.css";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import instaIcon from "../images/insta_icon.svg";
import fbIcon from "../images/fb_icon.svg";
import linkedIcon from "../images/linked_icon.svg";
import tIcon from "../images/t_icon.svg";
import youTubeIcon from "../images/youtube_icon.svg";
import Footer from "../components/Footer";
import AboutVideo from "../components/AboutVideo";
import FormSection from "../components/FormSection";
import cn from "classnames";
import Preloader from "../components/common/Preloader";

const HomePage = ({ projects }) => {
  useEffect(() => {
    document.body.scrollTop = 0;
  }, []);

  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Slider settings
  const sliderSettings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 500,
    infinite: false,
    centerMode: true,
    centerPadding: "30px",
  };

  const [type, setType] = useState("all");

  const filterProjects = (e) => {
    const tagValue = e.currentTarget.value;
    setType(tagValue);
    if (tagValue === "all") setFilteredProjects(projects);
    else setFilteredProjects(projects.filter((c) => c.type === tagValue));
  };

  const services = [
    {
      id: 1,
      serviceLogo: webIcon,
      serviceTitle: "Web Development",
      serviceDescription: [
        "FrontEnd (HTML / CSS / Java Script)",
        "WordPress / Shopify / Opencart / Others",
        "BackEnd(PHPCake / Laravel)",
        "API integration",
      ],
    },
    {
      id: 2,
      serviceLogo: uiIcon,
      serviceTitle: "UX/UI Brand Identity",
      serviceDescription: [
        "User Expirience & Interface Design",
        "Landing page / E-shop / Business Site",
        "Design Logo / Branding",
        "Photo / Video content",
      ],
    },
    {
      id: 3,
      serviceLogo: marketingIcon,
      serviceTitle: "Digital Marketing",
      serviceDescription: [
        "Search Engine Optimization (SEO)",
        "Social Media Marketing (SMM)",
        "Content Marketing",
        "Native Advertisign",
      ],
    },
    {
      id: 4,
      serviceLogo: animIcon,
      serviceTitle: "Animation Production",
      serviceDescription: [
        "Search Engine Optimization (SEO)",
        "Social Media Marketing (SMM)",
        "Content Marketing",
        "Native Advertisign",
      ],
    },
  ];

  const casesItems = filteredProjects?.map((c) => (
    <ProjectCase
      key={c.id}
      original_name={c.original_name}
      project_photo={c.project_photo}
      project_logo={c.project_logo}
      caseDuration={c.term}
      projectTitle={c.project_name}
      project_subtitle={c.project_subtitle}
    />
  ));

  const servicesItems = services?.map((s) => (
    <ServiceItem
      key={s.id}
      serviceLogo={s.serviceLogo}
      serviceTitle={s.serviceTitle}
      serviceDescription={s.serviceDescription}
    />
  ));

  return (
    <>
      <header className={style.main_header}>
        <div className="container">
          <div className={style.main_offer}>
            <span className="title_label">Digital Agency</span>
            <h1>Solutions for Digital Business.</h1>
            <p>
              We bring your business online and raise the income thanks to our
              wonderful team of professionals.
            </p>
            <div className={style.about_us_video_wrap}>
              <AboutVideo videoLabel="About Us" />
            </div>
          </div>
        </div>
      </header>
      <section id={"our_services"} className={style.our_services}>
        <div className="container">
          <span className="title_label">Our Services</span>
          <h2 className={style.h2}>We Do Everything.</h2>
          <div className={style.services_items_wrap}>
            <div className={style.services_items}>{servicesItems}</div>
            <div className={style.services_slider_wrap}>
              <ServicesSlider {...sliderSettings}>
                {servicesItems}
              </ServicesSlider>
            </div>
          </div>
        </div>
      </section>
      <section id={"cases_section"} className={style.our_cases}>
        <div className="container">
          <div className={style.our_cases_wrap}>
            <span className="title_label">Our portfolio</span>
            <h2 className={style.h2}>Our Latest Cases.</h2>
            <div className={style.cases_tags}>
              <CaseTag
                typeTag="all"
                text="All projects"
                typeState={type}
                filterProjects={filterProjects}
              />
              <CaseTag
                typeTag="web-sites"
                text="Web-Sites"
                typeState={type}
                filterProjects={filterProjects}
              />
              <CaseTag
                typeTag="design"
                text="Design Only"
                typeState={type}
                filterProjects={filterProjects}
              />
              <CaseTag
                typeTag="motion-design"
                text="Video & Animation"
                typeState={type}
                filterProjects={filterProjects}
              />
              <button type="button" className={style.inaccessible}>
                App-Dev
              </button>
              <button type="button" className={style.inaccessible}>
                SEO-Cases
              </button>
              {/* <CaseTag
                typeTag='app-dev'
                text='App-Dev'
                typeState={type}
                filterProjects={filterProjects}
              />
              <CaseTag
                typeTag='seo'
                text='SEO-Cases'
                typeState={type}
                filterProjects={filterProjects}
              /> */}
            </div>
            {casesItems.length > 0 ? (
              <>
                <div className={style.our_cases_items}>{casesItems}</div>
                <div className={style.cases_slider_wrap}>
                  <CasesSlider {...sliderSettings}>{casesItems}</CasesSlider>
                </div>
              </>
            ) : (
              <p className="plug">Скоро здесь будут примеры работ</p>
            )}
            {/* <Link href='/'>
              <a>
                <Button>View More</Button>
              </a>
            </Link> */}
          </div>
        </div>
      </section>
      <section id={"contact_us"} className={style.form_section}>
        <div className="container">
          <div className={style.form_section_wrap}>
            <div className={style.globe_wrap}>
              <img src={globeGif} alt="globe" />
            </div>
            <FormSection />
          </div>
        </div>
      </section>
      <section className={style.we_are_pro}>
        <div className="container">
          <div className={style.we_are_pro_wrap}>
            <div className={style.we_are_pro_content}>
              <div className={style.we_are_pro_content_inner}>
                <div className="title_label">About Us</div>
                <h2 className={style.h2}>We Are Experts In Our Field.</h2>
                <span>
                  Our digital company of professionals has been developing
                  products for 3 years.
                </span>
                <p>
                  We are a modern digital company that creates and develops your
                  projects. Our 3-year experience of developing various
                  web-projects grows only upwards thanks to the refresher
                  courses our employees attend annually. Since 2018 we have
                  completed more than 20 projects that are currently developing
                  and expanding successfully in their areas of specialization.
                  We do not chase the number of clients, as it is a way more
                  exciting to accomplish the work for a full due and to your
                  delight.
                </p>
                <Link href="/about">
                  <a className={style.about_us_link}>
                    READ MORE <GoTriangleRight />
                  </a>
                </Link>
              </div>
            </div>
            <div className={style.workflow}>
              <h2 className={style.h2}>How We Work?</h2>
              <div className={style.workflow_items}>
                <WorkflowElement
                  index={"01."}
                  title={"Acquaintance"}
                  text={
                    "The fundamental step in creating an effective web product. We synchronize with your vision and goals."
                  }
                />
                <WorkflowElement
                  index={"02."}
                  title={"Research"}
                  text={
                    "We research your niche and define the main points for development and promotion on the Internet."
                  }
                />
                <WorkflowElement
                  index={"03."}
                  title={"Project development"}
                  text={
                    "The most important stage in the process of creating your masterpiece."
                  }
                />
                <WorkflowElement
                  index={"04."}
                  title={"Launch and support"}
                  text={
                    "The final stage of the project. We launch your site and provide support throughout its existence."
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id={"contacts_section"} className={style.contacts_section}>
        <div className={style.contacts_block_wrap}>
          <div className="container">
            <div className={style.contacts_block}>
              <div className={style.contacts_block_credentials_wrap}>
                <span className="title_label">Contacts</span>
                <ul className={style.contacts_block_credentials}>
                  <li>
                    <span>Address :</span>
                    <a href="#">
                      230, Kulparkivska str.
                      <br /> Lviv, Ukraine, 79031
                    </a>
                  </li>
                  <li>
                    <span>Phone :</span>
                    <a href="tel:0971630202">+38 (097) 163 0202</a>
                  </li>
                  <li>
                    <span>Email :</span>
                    <div className={style.mails_links}>
                      <a href="#">siteen.co@gmail.com</a>
                      <a href="#">siteencareer@gmail.com</a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className={style.footer_links}>
                <span>
                  Follow Us <BsArrowRight />
                </span>
                <ul className={style.footer_links_elements}>
                  <li>
                    <a
                      href="https://www.instagram.com/siteen.co/"
                      target="_blank"
                    >
                      <img src={instaIcon} alt="instaIcon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/siteen.co"
                      target="_blank"
                    >
                      <img src={fbIcon} alt="fbIcon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/siteen/"
                      target="_blank"
                    >
                      <img src={linkedIcon} alt="linkedIcon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/siteen/" target="_blank">
                      <img src={tIcon} alt="tIcon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCATwpqig9rIT7u1dm4f7blQ"
                      target="_blank"
                    >
                      <img src={youTubeIcon} alt="youTubeIcon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

const WorkflowElement = ({ index, title, text }) => {
  const [isTextVisible, setTextVisible] = useState<boolean>(false);

  return (
    <div className={style.workflow_element}>
      <span
        onClick={() => {
          setTextVisible(!isTextVisible);
        }}
      >
        {index}
      </span>
      <div className={style.workflow_text}>
        <h3
          className={
            index !== "01."
              ? cn({ [style.opened]: isTextVisible })
              : cn({ [style.opened]: !isTextVisible })
          }
          onClick={() => {
            setTextVisible(!isTextVisible);
          }}
        >
          {title}
        </h3>
        <p
          className={
            index !== "01."
              ? cn({ [style.visible]: isTextVisible })
              : cn({ [style.visible]: !isTextVisible })
          }
        >
          {text}
        </p>
      </div>
    </div>
  );
};

const CaseTag = ({ typeTag, typeState, text, filterProjects }) => {
  return (
    <button
      type="button"
      onClick={(e) => {
        filterProjects(e);
      }}
      value={typeTag}
      className={typeTag === typeState ? style.checked : null}
    >
      {text}
    </button>
  );
};

const ServiceItem = ({ serviceLogo, serviceTitle, serviceDescription }) => (
  <a href="#" className={style.service_element}>
    <div className={`${style.icon_wrap} icon_wrap_global`}>
      <img src={serviceLogo} alt="web" />
    </div>
    <h3>{serviceTitle}</h3>
    <ul>
      {serviceDescription.map((service) => (
        <li key={service}>{service}</li>
      ))}
    </ul>
  </a>
);

const ProjectCase = ({
  original_name,
  project_photo,
  caseDuration,
  projectTitle,
  project_subtitle,
  project_logo,
}) => (
  <Link href={"/project/[original_name]"} as={`/project/${original_name}`}>
    <a
      style={{ backgroundImage: `url(${project_photo})` }}
      className={`${style.project_case} project_case_global`}
    >
      <img src={project_logo} alt="logo" />
      <div className={`${style.project_case_wrap} project_case_wrap_global`}>
        <div className={style.project_duration}>
          <p>Creation Term: </p>
          <span>{caseDuration}</span>
        </div>
        <div className={style.project_title}>
          <h4>{projectTitle}</h4>
          <p>{project_subtitle}</p>
        </div>
        <p className={style.project_link}>
          View full project <GoTriangleRight />
        </p>
      </div>
    </a>
  </Link>
);

HomePage.getInitialProps = async () => {
  const response = await fetch("https://siteen.co/api/v1/project");
  const projects = await response.json();

  return {
    projects: projects.data.response,
  };
};

export default HomePage;
