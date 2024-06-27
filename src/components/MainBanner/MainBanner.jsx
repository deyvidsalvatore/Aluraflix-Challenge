import "./MainBanner.css";
import BannerCard from "../BannerCard/BannerCard";

export const MainBanner = () => {
  const youtubeVideoUrl = "https://www.youtube.com/embed/c8mVlakBESE";
  const youtubeVideothumb = "https://img.youtube.com/vi/c8mVlakBESE/maxresdefault.jpg";

  return (
    <div className="banner">
      <div className="banner__thumb">
        <img
          src={youtubeVideothumb}
          alt="SEO com React Thumbnail"
          className="banner__thumb_player"
        />
        <div className="banner__thumb_effect"></div>
      </div>

      <div className="banner__card">
        <div className="banner__left">
          <BannerCard category="frontend" />
          <div className="banner__wrapper">
            <div className="banner__card_title">SEO com React</div>
            <div className="banner__card_description">
              <span>
                Eu to aqui pra nesse vídeo dizer que a gente vai aprender a
                começar uma app inspirada no desenho Pokémon com Nextjs e React,
                ver algumas dicas sobre performance e de quebra conhecer uma
                plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22
                minutos nesse vídeo feito com todo o carinho do mundo construindo
                uma Pokedex!
              </span>
            </div>
          </div>
        </div>
        <div className="banner__card_player">
          <iframe
            src={youtubeVideoUrl}
            title="Vídeo de SEO com React"
            className="banner__card_video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;