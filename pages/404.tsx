import style from '../styles/NotFoundPage.module.css';
import cowLight from '../images/cow_light.svg';
import cowElement from '../images/cow_element.svg';
import Link from 'next/link';
import { useEffect } from 'react';

const NotFoundPage = () => {
  useEffect(() => {
    document.body.scrollTop = 0;
  }, []);

  return (
    <header className={style.not_found_header}>
      <div className="container">
        <div className={style.main_offer}>
          <h1>404</h1>
          <p>Oops ... something went wrong</p>
          <span className={style.not_found_span}>
            Page not found. Try to go back and repeat the request
          </span>
          <Link href="/">
            <a className={`${style.to_homepage} btn`}>
              <span>To Homepage</span>
            </a>
          </Link>
        </div>
        <div className={style.cow_block}>
          <img className={style.cow_light} src={cowLight} alt="cowLight" />
          <img
            className={style.cow_element}
            src={cowElement}
            alt="cowElement"
          />
        </div>
      </div>
    </header>
  );
};

export default NotFoundPage;
