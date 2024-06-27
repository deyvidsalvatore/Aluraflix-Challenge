import { useState } from 'react';
import './FormNovoVideo.css';
import VideoService from '../../../services/VideoService';

export const FormNovoVideo = () => {
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const formValidation = (field, value) => {
    switch (field) {
      case 'titulo':
        return value.trim() ? '' : 'O título é obrigatório!';
      case 'categoria':
        return value.trim() ? '' : 'A categoria é obrigatória!';
      case 'imagem':
        return value.trim() ? '' : 'O link de imagem é obrigatório!';
      case 'video':
        return value.trim() ? '' : 'O link de vídeo é obrigatório!';
      case 'descricao':
        return value.trim() ? '' : 'A descrição é obrigatória!';
      default:
        return '';
    }
  };

  const validateForm = (form) => {
    let formErrors = {};

    formErrors.titulo = formValidation('titulo', form.titulo.value);
    formErrors.categoria = formValidation('categoria', form.categoria.value);
    formErrors.imagem = formValidation('imagem', form.imagem.value);
    formErrors.video = formValidation('video', form.video.value);
    formErrors.descricao = formValidation('descricao', form.descricao.value);

    setErrors(formErrors);

    return Object.values(formErrors).every(error => !error);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const form = e.target.closest('form');

    if (validateForm(form)) {
      const videoData = {
        titulo: form.titulo.value,
        categoria: form.categoria.value,
        imagemUrl: form.imagem.value,
        videoUrl: form.video.value,
        descricao: form.descricao.value,
      };

      setIsLoading(true);

      try {
        const createdVideo = await VideoService.create(videoData);
        console.log('Video criado:', createdVideo);
        handleClear(form);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleClear = (form) => {
    form.reset();
    setErrors({});
  };

  return (
    <div className="form-container">
      {isLoading && <div className="overlay">Enviando...</div>}
      
      <form className="form-novo-video">
        <fieldset className="form-fieldset">
          <legend className="form-legend">Criar Card</legend>

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="titulo" className={`form-label ${errors.titulo ? 'label-error' : ''}`}>Título</label>
              <input
                type="text"
                id="titulo"
                name="titulo"
                className={`form-input ${errors.titulo ? 'input-error' : ''}`}
                placeholder="Digite o título"
              />
              {errors.titulo && <span className="error-message">{errors.titulo}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="categoria" className={`form-label ${errors.categoria ? 'label-error' : ''}`}>Categoria</label>
              <select
                id="categoria"
                name="categoria"
                className={`form-input ${errors.categoria ? 'input-error' : ''}`}
              >
                <option value="" disabled>Selecione uma categoria</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="mobile">Mobile</option>
              </select>
              {errors.categoria && <span className="error-message">{errors.categoria}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="imagem" className={`form-label ${errors.imagem ? 'label-error' : ''}`}>Imagem</label>
              <input
                type="text"
                id="imagem"
                name="imagem"
                className={`form-input ${errors.imagem ? 'input-error' : ''}`}
                placeholder="Digite o link da thumbnail do vídeo"
              />
              {errors.imagem && <span className="error-message">{errors.imagem}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="video" className={`form-label ${errors.video ? 'label-error' : ''}`}>Vídeo</label>
              <input
                type="text"
                id="video"
                name="video"
                className={`form-input ${errors.video ? 'input-error' : ''}`}
                placeholder="Digite o link do vídeo"
              />
              {errors.video && <span className="error-message">{errors.video}</span>}
            </div>

            <div className="form-group full-width">
              <label htmlFor="descricao" className={`form-label ${errors.descricao ? 'label-error' : ''}`}>Descrição</label>
              <textarea
                id="descricao"
                name="descricao"
                className={`form-input textarea ${errors.descricao ? 'input-error' : ''}`}
                placeholder="Sobre o que é esse vídeo?"
              />
              {errors.descricao && <span className="error-message">{errors.descricao}</span>}
            </div>
          </div>

          <div className="form-buttons">
            <button type="submit" className="form-button guardar" onClick={handleClick} disabled={isLoading}>
              {isLoading ? 'Enviando...' : 'Guardar'}
            </button>
            <button type="button" className="form-button limpar" onClick={() => handleClear(document.querySelector('.form-novo-video'))}>Limpar</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default FormNovoVideo;
