// Style Sheet CSS
import "./footer.css";

// Icons
import { IoLogoInstagram } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { LiaFacebookSquare } from "react-icons/lia";
import { TbBrandBluesky } from "react-icons/tb";
import { RiYoutubeLine } from "react-icons/ri";

function Footer() {
  return (
    <footer>
      <div className="social-media">
        <h2>Siga-nos nas Redes Socias</h2>
        <div className="social-media-icons">
          <IoLogoInstagram size={30} />
          <BsTwitterX size={28} />
          <LiaFacebookSquare size={38} />
          <TbBrandBluesky size={32} />
          <RiYoutubeLine size={36} />
        </div>
      </div>
      <div>Copyright © 2025 Otaku List. Todos os direitos reservados.</div>
    </footer>
  );
}

export { Footer };
