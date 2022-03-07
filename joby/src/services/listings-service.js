import axios from 'axios';

const ListingsService = new (class ListingsService {
  constructor() {
    this.requester = axios.create({
      baseURL: 'http://localhost:5030/api/listings',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async getCandidates(limit) {
    try {
      const { data } = await this.requester.get('/candidates', { params: { limit } });
      return data;
    } catch ({ message }) {
      return { success: false, message };
    }
  }

  async getLatestCandidates() {
    try {
      const { data } = await this.requester.get('/latest/candidates');
      return data;
    } catch ({ message }) {
      return { success: false, message };
    }
  }

  async getCandidateById(candidateId) {
    try {
      const { data } = await this.requester.get(`/candidates/candidate?id=${candidateId}`);
      return data;
    } catch ({ message }) {
      return { success: false, message };
    }
  }

  async getJobOffers(limit) {
    try {
      const { data } = await this.requester.get('/jobOffers', { params: { limit } });
      return data;
    } catch ({ message }) {
      return { success: false, message };
    }
  }

  async getLatestJobOffers() {
    try {
      const { data } = await this.requester.get('/latest/jobOffers');
      return data;
    } catch ({ message }) {
      return { success: false, message };
    }
  }

  async getJobOfferById(offerId) {
    try {
      const { data } = await this.requester.get(`/jobOffers/offer?id=${offerId}`);
      return data;
    } catch ({ message }) {
      return { success: false, message };
    }
  }
})();

export default ListingsService;
