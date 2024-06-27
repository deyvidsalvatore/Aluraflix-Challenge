import PropTypes from 'prop-types';
import './VideoViewModal.css';

export const VideoViewModal = ({ videoUrl, onClose }) => {
    return (
        <div className="video-view-modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <iframe
                    title="Video Player"
                    width="560"
                    height="315"
                    src={videoUrl}
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

VideoViewModal.propTypes = {
    videoUrl: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default VideoViewModal;
