import axios from 'axios';
import AuthService from './auth-service';

// Singleton pattern - only one object of a class
const JobOfferService = new (class JobOfferService {
  static validateToken() {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('Can not get user images without authentication');
    }

    return token;
  }

  constructor() {
    this.requester = axios.create({
      baseURL: 'http://localhost:5030/api',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async getJobOffers() {
    try {
      const response = await this.requester.get('/employer/job-offers/');
      console.log(response);
      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }

  async createJobOffer(body) {
    try {
      const response = await this.requester.post('/employer/job-offers/create', body);
      console.log(response);
      return true;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
})();

export default JobOfferService;
