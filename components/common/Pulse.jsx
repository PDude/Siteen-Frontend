import style from '../../styles/components/common/Pulse.module.sass'

const Pulse = ({ children }) => {
  return <div className={style.pulse}>{children}</div>
}

export default Pulse
