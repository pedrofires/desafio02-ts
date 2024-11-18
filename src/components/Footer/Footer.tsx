import "./Footer.css";
import CopyRightIcon from "../../assets/copyRightIcon.svg";

export const Footer = () => {
  return (
    <div className="footer">
      <img src={CopyRightIcon} alt="Copy right" />
      Todos os direitos reservados
    </div>
  );
};
