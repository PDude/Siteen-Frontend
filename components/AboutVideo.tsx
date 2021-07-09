import style from '../styles/AboutVideo.module.sass';
import { ImPlay3 } from 'react-icons/im';
import { useState } from 'react';
import PromotionModal from './modals/PromotionModal';

const AboutVideo = ({ videoLabel }) => {
  // Promotion modal
  const [openPromotion, setPromotionOpen] = useState<boolean>(false);

  const onOpenPromotionModal = () => setPromotionOpen(true);
  const onClosePromotionModal = () => setPromotionOpen(false);

  return (
    <>
      <div className={style.about_us_video}>
        <div className="pulse">
          <button onClick={onOpenPromotionModal} className="btn">
            <span>
              <ImPlay3 />
            </span>
          </button>
        </div>
        <div className={style.about_us_text}>
          <span>{videoLabel}</span>
          <p>Promotion video</p>
        </div>
      </div>
      <PromotionModal
        onClosePromotionModal={onClosePromotionModal}
        openPromotion={openPromotion}
      />
    </>
  );
};

export default AboutVideo;
