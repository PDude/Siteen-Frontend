import Button from "../../components/formElements/Button";
import style from "../../styles/pages/ProjectPage.module.sass";
// temp project bg
import projecCheckDown from "../../images/project_check_down.svg";
import projecCheckDownSmall from "../../images/project_check_down_small.svg";
import { Component, useEffect, useRef, useState } from "react";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
// Slider
import ProjectsSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Arows
import arrowBack from "../../images/arrow_team_back.svg";
import arrowNext from "../../images/arrow_team_next.svg";
// Temp files for projects slider items
import hubyshLogo from "../../images/hubysh_logo.svg";
import hubyshPhoto from "../../images/hubysh_photo.jpg";

import { GoTriangleRight } from "react-icons/go";
import Preloader from "../../components/common/Preloader";

// type projectType = {
//   id: number
//   uuid: string
//   type: string
//   project_photo: string
//   project_name: string
//   project_logo: Array<string>
//   term: string
//   project_subtitle: string
//   ordering_type: string
//   project_tags: Array<string>
//   about_project: string
//   project_tasks: Array<string>
//   result_link: Array<string>
//   updatedAt: string
//   createdAt: string
// }

const ProjectPage = ({ project: serverProject }) => {
  const myRef = useRef();

  const [project, setProject] = useState(serverProject);
  const router = useRouter();

  useEffect(() => {
    const loadProject = async () => {
      const response = await fetch(
        `https://siteen.co/api/v1/project/${router.query.original_name}`
      );

      const projectData = await response.json();
      setProject(projectData.data.response);
    };

    if (!serverProject) {
      loadProject();
    }

    document.body.scrollTop = 0;
  }, []);

  const scroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  if (!project) {
    // return <Preloader />
  }

  return (
    <>
      <header
        style={{ backgroundImage: `url(${project.project_photo})` }}
        className={style.project_page_header}
      >
        <div className="container">
          <div className={style.project_info}>
            <img src={project.project_logo} alt={"Brand logo"} />
            <div className={style.project_type}>
              <h3>{project.ordering_type}</h3>
              <p>{project.project_tags.join(" ")}</p>
            </div>
          </div>
          <button
            onClick={() => {
              scroll(myRef);
            }}
          >
            <img
              className={style.for_big_device}
              src={projecCheckDown}
              alt="projecCheckDown"
            />
            <img
              className={style.for_small_device}
              src={projecCheckDownSmall}
              alt="projecCheckDown"
            />
          </button>
        </div>
      </header>
      <section ref={myRef} className={style.project_data}>
        <div className="container">
          <div className={style.about}>
            <h3>About</h3>
            <p>{project.about_project}</p>
          </div>
          <div className={style.tasks}>
            <h3>Tasks</h3>
            <ul>
              {project.project_tasks.map((t) => (
                <li key={t}>· {t}</li>
              ))}
            </ul>
          </div>
          <div className={style.results}>
            <h3>Results</h3>
            <ul>
              <li>
                <a href="#">{project.result_link[0]}</a>
              </li>
              <li>
                <a href="#">{project.result_link[1]}</a>
              </li>
            </ul>
          </div>
          <div className={style.project_reference}>
            <h1>{project.project_name}</h1>
            <div
              className={style.project_main_img_wrap}
              style={{ backgroundImage: `url(${project.final_photo})` }}
            >
              <Button>View More On ...</Button>
            </div>
          </div>
        </div>
      </section>
      {/* <PreviousNextMethodsProjectsSection /> */}
      <section className={style.cta_section}>
        <div className="container">
          <div className={style.cta_section_offer}>
            <h2>Did you like the project?</h2>
            <p>
              Fill out the application and we will contact you to discuss
              cooperation
            </p>
            <Button>Consultation</Button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

class PreviousNextMethodsProjectsSection extends Component {
  slider: any;
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  previous() {
    this.slider.slickPrev();
  }
  next() {
    this.slider.slickNext();
  }

  render() {
    const sliderSettings = {
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      speed: 500,
      infinite: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            centerPadding: "30px",
          },
        },
      ],
    };

    return (
      <section className={style.projects_section}>
        <div className="container">
          <div className={style.projects_section_wrap}>
            <span className="title_label">Our Recomendations</span>
            <h1>Also check it out.</h1>
            <div className={style.projects_desk_and_arrows}>
              <p>
                Our digital company develops projects and has been on the market
                for 15 years.
              </p>
              <div className={style.arrows}>
                <button
                  onClick={this.previous}
                  className={style.team_back_arrow}
                >
                  Back <img src={arrowBack} alt="<-" />
                </button>
                <button onClick={this.next} className={style.team_next_arrow}>
                  Next <img src={arrowNext} alt="->" />
                </button>
              </div>
            </div>
            <div className={`${style.projects_slider} projects_slider_global`}>
              <ProjectsSlider
                ref={(c) => (this.slider = c)}
                {...sliderSettings}
              >
                <ProjectsSliderItem />
                <ProjectsSliderItem />
                <ProjectsSliderItem />
                <ProjectsSliderItem />
                <ProjectsSliderItem />
              </ProjectsSlider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const ProjectsSliderItem = () => {
  return (
    <a
      href="#"
      className={`${style.slider_item} slider_item_global`}
      style={{ backgroundImage: `url(${hubyshPhoto})` }}
    >
      <img src={hubyshLogo} alt="logo" />
      <div className={`${style.slider_item_wrap} slider_item_wrap_global`}>
        <div className={style.project_duration}>
          <p>Creation Term: </p>
          <span>4 weeks</span>
        </div>
        <div className={style.project_title}>
          <h4>Natali Hubysh</h4>
          <p>Studio of art and design «Natalia Hubysh» in Lviv.</p>
        </div>
        <p className={style.project_link}>
          View full project <GoTriangleRight />
        </p>
      </div>
    </a>
  );
};

ProjectPage.getInitialProps = async ({ query, req }) => {
  if (!req) {
    return {
      project: null,
    };
  }

  const response = await fetch(
    `https://siteen.co/api/v1/project/${query.original_name}`
  );
  const project = await response.json();

  return {
    project: project.data.response,
  };
};

export default ProjectPage;
