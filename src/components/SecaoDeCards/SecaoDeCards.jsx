import { useState, useEffect } from 'react';
import VideoCard from '../VideoCard/VideoCard';
import VideoService from '../../services/VideoService';
import './SecaoDeCards.css';
import Tag from '../Tag/Tag';

export const SecaoDeCards = () => {
    const [frontendVideos, setFrontendVideos] = useState([]);
    const [backendVideos, setBackendVideos] = useState([]);
    const [mobileVideos, setMobileVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const videos = await VideoService.getAll();
                const frontend = videos.filter(video => video.categoria.toLowerCase() === 'frontend');
                const backend = videos.filter(video => video.categoria.toLowerCase() === 'backend');
                const mobile = videos.filter(video => video.categoria.toLowerCase() === 'mobile');
                
                setFrontendVideos(frontend);
                setBackendVideos(backend);
                setMobileVideos(mobile);
            } catch (error) {
                console.error('Erro ao buscar vídeos:', error);
            }
        };

        fetchVideos();
    }, []);

    return (
        <div className="secao-de-cards">
            <div className="categoria-cards">
                <Tag category='frontend'/>
                <div className="cards-container">
                    {frontendVideos.map(video => (
                        <VideoCard key={video.id} videoId={video.id} />
                    ))}
                </div>
            </div>

            <div className="categoria-cards">
                <Tag category='backend'/>
                <div className="cards-container">
                    {backendVideos.map(video => (
                        <VideoCard key={video.id} videoId={video.id} />
                    ))}
                </div>
            </div>

            <div className="categoria-cards">
                <Tag category='mobile'/>
                <div className="cards-container">
                    {mobileVideos.map(video => (
                        <VideoCard key={video.id} videoId={video.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SecaoDeCards;
