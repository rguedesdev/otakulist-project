// Imports Principais
import Image from "next/image";

// Style Sheet CSS
import "./slug.css";

// Images
import OnePieceBanner from "../../../../../public/onepiece-banner.jpg";
import OnePieceCover from "../../../../../public/onepiece-cover.jpg";

// Components
import { AnimeInfoComponent } from "@/components/AnimeInfo";

function AnimeBySlug() {
  return (
    <main>
      <Image
        className="anime-banner"
        src={OnePieceBanner}
        alt="Anime Banner"
        width={400}
        height={200}
        priority
        unoptimized
      />
      <div className="descption-container">
        <div>
          <Image
            className="anime-cover"
            src={OnePieceCover}
            alt="Anime Banner"
            width={200}
            height={400}
            priority
            unoptimized
          />
          <button className="btn-add">Adicionar a sua Lista</button>
        </div>
        <div>
          <h1 className="anime-title">One Piece</h1>
          <p className="anime-description">
            Gold Roger was known as the Pirate King, the strongest and most
            infamous being to have sailed the Grand Line. The capture and death
            of Roger by the World Government brought a change throughout the
            world. His last words before his death revealed the location of the
            greatest treasure in the world, One Piece. It was this revelation
            that brought about the Grand Age of Pirates, men who dreamed of
            finding One Piece (which promises an unlimited amount of riches and
            fame), and quite possibly the most coveted of titles for the person
            who found it, the title of the Pirate King. Enter Monkey D. Luffy, a
            17-year-old boy that defies your standard definition of a pirate.
            Rather than the popular persona of a wicked, hardened, toothless
            pirate who ransacks villages for fun, Luffy’s reason for being a
            pirate is one of pure wonder; the thought of an exciting adventure
            and meeting new and intriguing people, along with finding One Piece,
            are his reasons of becoming a pirate. Following in the footsteps of
            his childhood hero, Luffy and his crew travel across the Grand Line,
            experiencing crazy adventures, unveiling dark mysteries and battling
            strong enemies, all in order to reach One Piece.
          </p>
        </div>
      </div>
      <div className="general-content">
        <div className="right-side-boxes">
          <AnimeInfoComponent />
          <div>Links Externos</div>
          <div>Assista Online</div>
          <div>Compre Online</div>
        </div>
        <div className="content-container">
          <div className="season-container">
            <h2 className="season-title">Temporadas</h2>
            <div className="seasons-boxes">
              <div className="season-box">
                <div className="season-image">Imagem</div>
                <div className="season-texts">
                  <h1>1ª Temporada</h1>
                  <h1>Subtítulo</h1>
                  <h2>Episódios: 25</h2>
                  <h2>Estúdio: Science Saru</h2>
                  <h2>Season: Verão/2025</h2>
                </div>
              </div>
              <div className="season-box">Season 2</div>
              <div className="season-box">Season 3</div>
            </div>
          </div>
          {/* <div className="character-container">
            <h2>Personagens</h2>
            <div>
              <div>Luffy</div>
              <div>Zoro</div>
              <div>Nami</div>
            </div>
          </div> */}
        </div>
      </div>
    </main>
  );
}

export default AnimeBySlug;
