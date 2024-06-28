import { useState, useEffect } from 'react';
import './ModalEditarForm.css';
import VideoService from '../../../services/VideoService';
import PropTypes from 'prop-types';

export const ModalEditarForm = ({ videoId, onClose }) => {
  const [formValues, setFormValues] = useState({
    titulo: '',
    categoria: '',
    imagemUrl: '', // Alterado de 'imagem' para 'imagemUrl'
    videoUrl: '', // Alterado de 'video' para 'videoUrl'
    descricao: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const videoData = await VideoService.get(videoId);
        setFormValues({
          titulo: videoData.titulo,
          categoria: videoData.categoria,
          imagemUrl: videoData.imagemUrl,
          videoUrl: videoData.videoUrl,
          descricao: videoData.descricao
        });
      } catch (error) {
        console.error('Erro ao buscar vídeo:', error);
      }
    };
    fetchVideo();
  }, [videoId]);

  const formValidation = (field, value) => {
    switch (field) {
      case 'titulo':
        return value.trim() ? '' : 'O título é obrigatório!';
      case 'categoria':
        return value.trim() ? '' : 'A categoria é obrigatória!';
      case 'imagemUrl':
        return value.trim() ? '' : 'O link de imagem é obrigatório!';
      case 'videoUrl':
        return value.trim() ? '' : 'O link de vídeo é obrigatório!';
      case 'descricao':
        return value.trim() ? '' : 'A descrição é obrigatória!';
      default:
        return '';
    }
  };

  const validateForm = () => {
    let formErrors = {};
    for (let field in formValues) {
      formErrors[field] = formValidation(field, formValues[field]);
    }
    setErrors(formErrors);
    return Object.values(formErrors).every(error => !error);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);
      try {
        await VideoService.update(videoId, formValues);
        console.log('Vídeo atualizado com sucesso:', formValues);
        onClose();
        window.location.reload();
      } catch (error) {
        console.error('Erro ao atualizar vídeo:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleClear = () => {
    setFormValues({
      titulo: '',
      categoria: '',
      imagemUrl: '',
      videoUrl: '',
      descricao: ''
    });
    setErrors({});
  };

  return (
    <div className="form-container">
      {isLoading && <div className="overlay">Enviando...</div>}
      
      <form className="form-novo-video">
        <fieldset className="form-fieldset">
          <legend className="form-legend">Editar Vídeo</legend>

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="titulo" className={`form-label ${errors.titulo ? 'label-error' : ''}`}>Título</label>
              <input
                type="text"
                id="titulo"
                name="titulo"
                value={formValues.titulo}
                onChange={handleChange}
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
                value={formValues.categoria}
                onChange={handleChange}
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
              <label htmlFor="imagem" className={`form-label ${errors.imagemUrl ? 'label-error' : ''}`}>Imagem</label>
              <input
                type="text"
                id="imagem"
                name="imagemUrl"
                value={formValues.imagemUrl}
                onChange={handleChange}
                className={`form-input ${errors.imagemUrl ? 'input-error' : ''}`}
                placeholder="Digite o link da thumbnail do vídeo"
              />
              {errors.imagemUrl && <span className="error-message">{errors.imagemUrl}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="video" className={`form-label ${errors.videoUrl ? 'label-error' : ''}`}>Vídeo</label>
              <input
                type="text"
                id="video"
                name="videoUrl"
                value={formValues.videoUrl}
                onChange={handleChange}
                className={`form-input ${errors.videoUrl ? 'input-error' : ''}`}
                placeholder="Digite o link do vídeo"
              />
              {errors.videoUrl && <span className="error-message">{errors.videoUrl}</span>}
            </div>

            <div className="form-group full-width">
              <label htmlFor="descricao" className={`form-label ${errors.descricao ? 'label-error' : ''}`}>Descrição</label>
              <textarea
                id="descricao"
                name="descricao"
                value={formValues.descricao}
                onChange={handleChange}
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
            <button type="button" className="form-button limpar" onClick={handleClear}>Limpar</button>
            <button type="button" className="form-button cancelar" onClick={onClose}>Cancelar</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

ModalEditarForm.propTypes = {
  videoId: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
};

export default ModalEditarForm;
