// Imports Principais
import Image from "next/image";

// Style Sheet CSS
import "./Navbar.css";

// Images
import Kitsu from "../../public/kitsu.png";

// Icons
import { RiHome6Line } from "react-icons/ri";
import { RiHome3Line } from "react-icons/ri";
import { FiTv } from "react-icons/fi";
import { BsBook } from "react-icons/bs";
import { HiOutlineBookOpen } from "react-icons/hi";
import { TbBook } from "react-icons/tb";
import { RiUserCommunityLine } from "react-icons/ri";
import { PiVideoLight } from "react-icons/pi";
import { MdPodcasts } from "react-icons/md";
import { BiDonateHeart } from "react-icons/bi";

import { RiPagesLine } from "react-icons/ri";

function Navbar() {
  return (
    <nav>
      <Image src={Kitsu} alt="Logo" width={50} height={50} />
      <ul>
        <li>
          <RiHome3Line size={20} />
          <span>Home</span>
        </li>

        <li>
          <FiTv size={18} />
          <span>Anime</span>
        </li>

        <li>
          <TbBook size={20} />
          <span>Mangá</span>
        </li>

        {/* <li>Temporadas</li> */}

        <li>
          <RiUserCommunityLine size={20} />
          <span>Comunidades</span>
        </li>

        <li>
          <RiPagesLine size={20} />
          <span>Páginas</span>
        </li>

        <li>
          <PiVideoLight size={20} />
          <span>Vídeo</span>
        </li>

        <li>
          <MdPodcasts size={20} />
          <span>Podcast</span>
        </li>

        <li>
          <BiDonateHeart size={20} />
          <span>Doar</span>
        </li>
      </ul>

      <input
        type="search"
        name="busca"
        placeholder="Buscar por Anime, Mangá, e mais..."
      />
    </nav>
  );
}

export { Navbar };
