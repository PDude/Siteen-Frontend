import style from '../../styles/ProjectPage.module.sass'
// temp project bg
import projectBg from '../../images/wings_bg.jpg'
import projectLogo from '../../images/wings_logo.svg'
import projecCheckDown from '../../images/project_check_down.svg'
import { useRef } from 'react'

const ProjectPage = () => {
  const myRef = useRef()

  const scroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  const tasks = [
    'Розробити дизайн сайту.',
    'Підтримувати позиціонування і фірмовий стиль.',
    'Ознайомити потенційних клієнтів із проектом.',
    "Ненав'язливо стимулювати відвідувачів на завантаження додатку.",
    'Реалізувати зручну інструктію користування сервісом.',
    'Показати технологічність компанії.',
    "Налагодити зворотний зв'язок з клієнтами.",
    'Реалізувати функціонал сайту на ...',
    'Відфотографувати продукцію для подальшого упакування проекту.',
    'Відзняти промо-відео проекту.',
    'Створити контент-план просування Instagram сторінки.'
  ]

  return (
    <>
      <header
        style={{ backgroundImage: `url(${projectBg})` }}
        className={style.project_page_header}>
        <div className='container'>
          <div className={style.project_info}>
            <img src={projectLogo} alt={'Brand logo'} />
            <div className={style.project_type}>
              <h3>Упаковка бізнесу</h3>
              <p>
                Landing Page проекту. Фотозйомка. Промо-відео. Ведення
                соц-мереж.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              scroll(myRef)
            }}>
            <img src={projecCheckDown} alt='projecCheckDown' />
          </button>
        </div>
      </header>
      <section ref={myRef} className={style.project_data}>
        <div className='container'>
          <div className={style.about}>
            <h3>Про компанію</h3>
            <p>
              Студія артіхектури і дизайну інтер’єру Наталії Губиш у Львові.
              Компанія розробляє і реалізовує дизайн житлових та інших
              просторів, широко спеціалізується на функціональному інтер’єрі і
              надає свої послуги не лише у Львові, а у будь яку точку світу.
            </p>
          </div>
          <div className={style.tasks}>
            <h3>Задачі</h3>
            <ul>
              {tasks.map((t) => (
                <li key={t}>· {t}</li>
              ))}
            </ul>
          </div>
          <div className={style.results}>
            <h3>Результати</h3>
            <ul>
              <li>
                <a href='#'>hubysh.com</a>
              </li>
              <li>
                <a href='#'>@natalihubysh</a>
              </li>
            </ul>
          </div>
          <div className={style.project_reference}>
            <h1>Сайт</h1>
            <iframe
              src='https://www.behance.net/gallery/101714883/Umami-Delivery-Service?iframe=1&amp;ilo0=1'
              allowFullScreen
              frameBorder='false'
              //   sandbox='allow-same-origin allow-scripts allow-popups allow-forms'
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectPage
