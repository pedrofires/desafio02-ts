import "./Header.css";
import DioBankLogo from "../../assets/dioBankLogo.svg";

export const Header = () => {
  return (
    <div className="header">
      <img src={DioBankLogo} alt="logo do Dio Bank" />
      <h1>Dio Bank</h1>
      <div></div>
    </div>
  );
};
