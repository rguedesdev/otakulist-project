// Imports Principais
import Image from "next/image";

// Images
import OnePieceBanner from "../../../../../public/onepiece-banner.jpg";
import OnePieceCover from "../../../../../public/onepiece-cover.jpg";

// Style Sheet CSS
import "./slug.css";

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
      <aside className="info-container">
        <h2>Títulos alternativos</h2>
        <dl>
          <dt className="definition-term">Japonês</dt>
          <dd className="definition-description">ワンピース</dd>
          <dt className="definition-term">Romaji</dt>
          <dd className="definition-description">One Piece</dd>
          <dt className="definition-term">Inglês</dt>
          <dd className="definition-description">One Piece</dd>
          <dt className="definition-term">Sinônimos</dt>
          <dd className="definition-description">-</dd>
        </dl>
        <hr className="hr-faded" />
        <h2>Infos</h2>
        <dl>
          <dt className="definition-term">Formato</dt>
          <dd className="definition-description">TV</dd>
          <dt className="definition-term">Episódios</dt>
          <dd className="definition-description">26</dd>
          <dt className="definition-term">Duração por episódio</dt>
          <dd className="definition-description">23min</dd>
          <dt className="definition-term">Status</dt>
          <dd className="definition-description">Concluído</dd>
          <dt className="definition-term">Data de início</dt>
          <dd className="definition-description">12, Abr de 2025</dd>
          <dt className="definition-term">Data de término</dt>
          <dd className="definition-description">12, Abr de 2025</dd>
          <dt className="definition-term">Temporada</dt>
          <dd className="definition-description">Inverno de 2025</dd>
          <dt className="definition-term">Estúdio</dt>
          <dd className="definition-description">Sunrise</dd>
          <dt className="definition-term">Produtores</dt>
          <dd className="definition-description">Aniplex, Fuji TV</dd>
          <dt className="definition-term">Fonte</dt>
          <dd className="definition-description">Mangá</dd>
          <dt className="definition-term">Genero</dt>
          <dd className="definition-description">Ação, Fantasia</dd>
          <dt className="definition-term">Demografia</dt>
          <dd className="definition-description">Seinen</dd>
          <dt className="definition-term">Rating</dt>
          <dd className="definition-description">PG-13 - Teens 13 or older</dd>
        </dl>
      </aside>
    </main>
  );
}

export default AnimeBySlug;
