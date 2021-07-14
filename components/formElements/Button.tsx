import classnames from "classnames";
import { FC } from "react";
import style from "../../styles/components/formElements/Button.module.sass";

type PropsType = {
  max?: string;
  Icon?: unknown;
  className?: string;
  onClick?: () => void;
};

const Button: FC<PropsType> = ({
  max = "max-content",
  Icon = null,
  className,
  children = null,
  ...props
}) => {
  const classNames = classnames(style.btn, className);

  return (
    <button style={{ maxWidth: max }} className={classNames} {...props}>
      {children && <span>{children}</span>}
      {Icon && Icon}
    </button>
  );
};

export default Button;
