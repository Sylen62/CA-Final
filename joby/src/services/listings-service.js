import axios from 'axios';

const ListingsService = new (class ListingsService {
  constructor() {
    this.requester = axios.create({
      baseURL: 'http://localhost:5030/api/listings',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async getCandidates() {
    try {
      const response = await this.requester.get('/candidates');
      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }

  async getLatestCandidates() {
    try {
      const response = await this.requester.get('/latest/candidates');
      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }

  async getCandidateById(candidateId) {
    try {
      const response = await this.requester.get(`/candidates/candidate?id=${candidateId}`);
      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }

  async getJobOffers() {
    try {
      const response = await this.requester.get('/jobOffers');
      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }

  async getLatestJobOffers() {
    try {
      const response = await this.requester.get('/latest/jobOffers');
      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }

  async getJobOfferById(offerId) {
    try {
      const response = await this.requester.get(`/jobOffers/offer?id=${offerId}`);
      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
})();

export default ListingsService;
