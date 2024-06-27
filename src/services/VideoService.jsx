import axios from 'axios';

const API_URL = 'http://localhost:3000/videos';

const VideoService = {
  getAll: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error('Error while fetching videos:', error);
      throw error;
    }
  },

  get: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error while fetching video ${id}:`, error);
      throw error;
    }
  },

  create: async (videoData) => {
    try {
      const response = await axios.post(API_URL, videoData);
      return response.data;
    } catch (error) {
      console.error('Error while creating video:', error);
      throw error;
    }
  },

  update: async (id, videoData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, videoData);
      return response.data;
    } catch (error) {
      console.error(`Error while updating video ${id}:`, error);
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error while deleting video ${id}:`, error);
      throw error;
    }
  },
};

export default VideoService;
