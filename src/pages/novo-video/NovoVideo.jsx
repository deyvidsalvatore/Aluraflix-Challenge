import "./NovoVideo.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import React from "react";
import { FormNovoVideo } from "../../components/Formularios/FormNovoVideo/FormNovoVideo";

export const NovoVideo = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="title">novo vídeo</div>
        <div className="subtitle">Complete o formulário para criar um novo card de vídeo.</div>
        <FormNovoVideo />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default NovoVideo;
