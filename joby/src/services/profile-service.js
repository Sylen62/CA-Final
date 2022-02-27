import axios from 'axios';
import AuthService from './auth-service';
import store from '../store';
import { updateUser } from '../store/auth';

const ProfileService = new (class ProfileService {
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

  async updateUserData(body) {
    const token = ProfileService.validateToken();
    const {
      data: { success, message, user },
    } = await this.requester.patch('/users/employer/profile', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (success) store.dispatch(updateUser({ user }));
    return { success, message };
  }

  async updateEmployerDescription(body) {
    const token = ProfileService.validateToken();
    const {
      data: { success, message, user },
    } = await this.requester.patch('/users/employer/profile/description', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (success) store.dispatch(updateUser({ user }));
    return { success, message };
  }

  async updateImage(files) {
    const token = ProfileService.validateToken();
    const formData = new FormData();

    formData.append('files', files[0]);

    const {
      data: { success, message, user },
    } = await this.requester.patch('users/image', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    if (success) store.dispatch(updateUser({ user }));
    return { success, message };
  }
})();

export default ProfileService;
