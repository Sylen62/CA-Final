import axios from 'axios';
import SessionService from './session-service';

// Singleton pattern - only one object of a class
const JobOfferService = new (class JobOfferService {
  static validateToken() {
    const token = SessionService.get('auth_token');
    if (!token) {
      throw new Error('Need authentication');
    }

    return token;
  }

  constructor() {
    this.requester = axios.create({
      baseURL: 'http://localhost:5030/api',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async getEmployerJobOffers(id, tablePage, rowsPerPage, tableOrder) {
    const token = JobOfferService.validateToken();
    const { field, order } = tableOrder;
    try {
      const response = await this.requester.get(`/job-offers/employer/${id}`, {
        params: {
          tablePage,
          rowsPerPage,
          field,
          order,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch ({ success, message }) {
      return { success, message };
    }
  }

  async createJobOffer(body) {
    const token = JobOfferService.validateToken();
    try {
      const response = await this.requester.post('/job-offers/create', body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch ({ success, message }) {
      return { success, message };
    }
  }

  async getJobOfferById(id) {
    const token = JobOfferService.validateToken();
    try {
      const response = await this.requester.get(`/job-offers/employer/offer/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }

  async updateJobOffer(data) {
    const token = JobOfferService.validateToken();
    const { id, ...body } = data;
    try {
      const response = await this.requester.patch(`/job-offers/employer/offer/${id}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }

  async deleteJobOffer(id) {
    const token = JobOfferService.validateToken();
    try {
      const response = await this.requester.delete(`/job-offers/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch ({ success, message }) {
      return { success, message };
    }
  }
})();

export default JobOfferService;
