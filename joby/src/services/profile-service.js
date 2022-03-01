import axios from 'axios';
import AuthService from './auth-service';
import store from '../store';
import { updateUser } from '../store/auth';

const ProfileService = new (class ProfileService {
  static validateToken() {
    const token = AuthService.getToken();
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

  async updateUser(body) {
    const token = ProfileService.validateToken();
    try {
      const {
        data: { success, message, user },
      } = await this.requester.patch('/users/profile', body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      store.dispatch(updateUser({ user }));
      return { success, message };
    } catch ({ success, message }) {
      return { success, message };
    }
  }

  async updateUserImage(files) {
    const token = ProfileService.validateToken();
    const formData = new FormData();
    formData.append('files', files[0]);
    try {
      const {
        data: { success, message, user },
      } = await this.requester.patch('users/profile/image', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      store.dispatch(updateUser({ user }));
      return { success, message };
    } catch ({ success, message }) {
      return { success, message };
    }
  }
})();

export default ProfileService;
