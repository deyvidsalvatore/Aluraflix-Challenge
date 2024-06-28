import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MobileNavegacaoBotao from "../MobileNavegacaoBotao/MobileNavegacaoBotao";
import "./MenuNavegacao.css";
import vectorHomeInactive from "../../../assets/vectors/home.svg";
import vectorHomeActive from "../../../assets/vectors/home_active.svg";
import vectorAdicionar from "../../../assets/vectors/plus.svg";
import vectorAdicionarActive from "../../../assets/vectors/plus_active.svg";

export const MenuNavegacao = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveButton = () => {
    if (location.pathname === "/novo-video") {
      return "novo vídeo";
    } else {
      return "home";
    }
  };

  const [activeButton, setActiveButton] = useState(getActiveButton());

  const handleClick = (label, path) => {
    if (activeButton !== label) {
      setActiveButton(label);
      navigate(path);
    }
  };

  return (
    <footer>
      <div className="nav-footer">
        <div className="nav-footer__container">
          <MobileNavegacaoBotao
            label="Home"
            icon={
              activeButton === "home" ? vectorHomeActive : vectorHomeInactive
            }
            isActive={activeButton === "home"}
            onClick={() => handleClick("home", "/")}
          />
          <MobileNavegacaoBotao
            label="Novo Vídeo"
            icon={
              activeButton === "novo vídeo"
                ? vectorAdicionarActive
                : vectorAdicionar
            }
            isActive={activeButton === "novo vídeo"}
            onClick={() => handleClick("novo vídeo", "/novo-video")}
          />
        </div>
      </div>
    </footer>
  );
};

export default MenuNavegacao;
