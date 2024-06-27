import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CardButton from '../Buttons/CardButton/CardButton';
import vectorEditar from '../../assets/vectors/edit.svg';
import vectorDeletar from '../../assets/vectors/delete.svg';
import './VideoCard.css';
import VideoService from '../../services/VideoService';

const editar = () => {
    console.log('Editar vídeo');
};

const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
        case "frontend":
            return "#6BD1FF";
        case "backend":
            return "#00C86F";
        case "mobile":
        case "gestao":
            return "#FFBA05";
        default:
            return "#6BD1FF";
    }
};

export const VideoCard = ({ videoId }) => {
    const [imageUrl, setImageUrl] = useState('');
    const [category, setCategory] = useState('');
    const [boxShadowColor, setBoxShadowColor] = useState("#6BD1FF");
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    useEffect(() => {
        const fetchVideoThumbnail = async () => {
            try {
                const video = await VideoService.get(videoId);
                setImageUrl(video.imagemUrl);
                setCategory(video.categoria);
            } catch (error) {
                console.error(`Error while fetching video ${videoId}:`, error);
            }
        };

        fetchVideoThumbnail();
    }, [videoId]);

    useEffect(() => {
        if (category) {
            const color = getCategoryColor(category);
            setBoxShadowColor(color);
        }
    }, [category]);

    const confirmDeleteVideo = async () => {
        try {
            await VideoService.delete(videoId);
            console.log(`Vídeo ${videoId} deletado com sucesso!`);
            setShowConfirmModal(false); // Close the modal after deletion
        } catch (error) {
            console.error('Erro ao deletar vídeo:', error);
        }
    };

    return (
        <div className="video-card" style={{ boxShadow: `0px 0px 17px 8px ${boxShadowColor}` }}>
            <div className="edit-delete" style={{ boxShadow: `0px 0px 17px 4px ${boxShadowColor}` }}>
                <div className="button-container">
                    <CardButton label="Editar" vectorUrl={vectorEditar} onClick={editar} />
                    <CardButton label="Apagar" vectorUrl={vectorDeletar} onClick={() => setShowConfirmModal(true)} />
                </div>
            </div>
            <img className="video-thumbnail" src={imageUrl} alt="Thumbnail do vídeo" />
            
            {showConfirmModal && (
                <div className="confirm-modal">
                    <div className="confirm-modal-content">
                        <p>Você realmente quer deletar o vídeo?</p>
                        <div className="confirm-buttons">
                            <button onClick={confirmDeleteVideo}>Sim</button>
                            <button onClick={() => setShowConfirmModal(false)}>Não</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

VideoCard.propTypes = {
    videoId: PropTypes.string.isRequired,
};

export default VideoCard;
