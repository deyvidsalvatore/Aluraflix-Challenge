import axios from 'axios';

const API_URL = 'http://localhost:3000/videos';
const RENDER_URL = 'https://deyvidsalvatore-aluraflix-back-2134.onrender.com/videos';

const getActiveUrl = async () => {
  try {
    await axios.get(RENDER_URL);
    return RENDER_URL;
  } catch (error) {
    return API_URL;
  }
};

const VideoService = {
  getAll: async () => {
    const url = await getActiveUrl();
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error while fetching videos:', error);
      throw error;
    }
  },

  get: async (id) => {
    const url = await getActiveUrl();
    try {
      const response = await axios.get(`${url}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error while fetching video ${id}:`, error);
      throw error;
    }
  },

  create: async (videoData) => {
    const url = await getActiveUrl();
    try {
      const response = await axios.post(url, videoData);
      return response.data;
    } catch (error) {
      console.error('Error while creating video:', error);
      throw error;
    }
  },

  update: async (id, videoData) => {
    const url = await getActiveUrl();
    try {
      const response = await axios.put(`${url}/${id}`, videoData);
      return response.data;
    } catch (error) {
      console.error(`Error while updating video ${id}:`, error);
      throw error;
    }
  },

  delete: async (id) => {
    const url = await getActiveUrl();
    try {
      const response = await axios.delete(`${url}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error while deleting video ${id}:`, error);
      throw error;
    }
  },
};

export default VideoService;
