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
      console.log(response);
      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }

  async getLatestCandidates() {
    try {
      const response = await this.requester.get('/latest/candidates');
      console.log(response);
      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }

  async getJobOffers() {
    try {
      const response = await this.requester.get('/jobOffers');
      console.log(response);
      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }

  async getLatestJobOffers() {
    try {
      const response = await this.requester.get('/latest/jobOffers');
      console.log(response);
      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }

  // async getCandidatesInfo(id) {
  //   try {
  //     const response = await this.requester.get(`/job-offers/employer/${id}`, {
  //       params: { test: 7 },
  //     });
  //     console.log(response);
  //     return response;
  //   } catch (error) {
  //     throw new Error(error.response.data.message);
  //   }
  // }
})();

export default ListingsService;
