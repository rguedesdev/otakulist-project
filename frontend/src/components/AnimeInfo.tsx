// Style Sheet CSS
import "./anime-info.css";

function AnimeInfoComponent() {
  return (
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
  );
}

export { AnimeInfoComponent };
