import axios, { AxiosInstance } from 'axios';
// import { config } from '../../config.ts';

class ApiService {
  private axiosInstance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8081',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  private axiosInstance2: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8083',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  private axiosInstance3: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8084',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Authentication ----------------------------------------------------------

  // public async login(username: string, password: string): Promise<string> {
  // 	const encodedCredentials = btoa(`${username}:${password}`);
  // 	this.axiosInstance.defaults.headers.common['Authorization'] =
  // 		`Basic ${encodedCredentials}`;
  // 	const response = await this.axiosInstance.get<{ token: string }>(
  // 		'/auth/signIn'
  // 	);
  // 	return response.data.token;
  // }
  public async login(username: string, password: string): Promise<string> {
    const response = await this.axiosInstance.post<{ token: string }>(
      '/api/v1/auth/signIn',
      {
        username,
        password,
      }
    );
    console.log(response)
    console.log(response.data)
    if (!response.data) {
      throw new Error('Ошибка входа: токен не получен');
    }

    return response.data.token;
  }

  public async logout(token: string): Promise<void> {
    this.axiosInstance.defaults.headers.common['Authorization'] =
      `Bearer ${token}`;
    await this.axiosInstance.put('/api/v1/logout');
  }

  // Registration -------------------------------------------------------------

  public async register(
    username: string,
    password: string,
    email: string
  ): Promise<void> {
    const response = await this.axiosInstance.post('/api/v1/auth/signUp', {
      username,
      password,
      email,
    });
    console.log('Response from registration:', response.data);
    if (response.data  !== 'Success') {
      throw new Error(response.data.message || 'Ошибка регистрации');
    }
    return response.data;
  }

  // Projects ---------------------------------------------------------------

  // Создание нового проекта
  public async createProject(name: string): Promise<void> {
    const response = await this.axiosInstance3.post('/api/v1/projects', {
      name,
    });
    if (!response.data.success) {
      throw new Error(response.data.message || 'Ошибка создания проекта');
    }
  }

  // Получение всех проектов
  public async getProjects(): Promise<any[]> {
    const response = await this.axiosInstance3.get('/api/v1/projects');
    return response.data.projects;
  }

  // Обновление проекта
  public async updateProject(id: string, name: string): Promise<void> {
    const response = await this.axiosInstance3.put(`/api/v1/projects/${id}`, {
      name,
    });
    if (!response.data.success) {
      throw new Error(response.data.message || 'Ошибка обновления проекта');
    }
  }

  // Удаление проекта
  public async deleteProject(id: string): Promise<void> {
    const response = await this.axiosInstance3.delete(`/api/v1/projects/${id}`);
    if (!response.data.success) {
      throw new Error(response.data.message || 'Ошибка удаления проекта');
    }
  }

  // Tasks ---------------------------------------------------------------

  // Создание новой задачи
  public async createTask(
    id: string,
    title: string,
    description: string,
    deadline: string,
    owner_id: string,
    executor_id: string
  ): Promise<void> {
    const response = await this.axiosInstance2.post('/api/v1/tasks', {
      id,
      title,
      description,
      deadline,
      owner_id,
      executor_id
    });
    console.log('Response from creating task:', response.data);
    if (!response.data.success) {
      throw new Error(response.data.message || 'Ошибка создания задачи');
    }
  }

  // Получение всех задач
  public async getTasks(): Promise<any[]> {
    const response = await this.axiosInstance2.get('/api/v1/tasks');
    return response.data.tasks;
  }

  // Обновление задачи
  public async updateTask(id: string, title: string): Promise<void> {
    const response = await this.axiosInstance2.put(`/api/v1/tasks/${id}`, {
      title,
    });
    if (!response.data.success) {
      throw new Error(response.data.message || 'Ошибка обновления задачи');
    }
  }

  // Удаление задачи
  public async deleteTask(id: string): Promise<void> {
    const response = await this.axiosInstance2.delete(`/api/v1/tasks/${id}`);
    if (!response.data.success) {
      throw new Error(response.data.message || 'Ошибка удаления задачи');
    }
  }

  // Получение задач по статусу и проекту
  public async getTasksByStatusAndProject(
    projectId: string,
    status: string
  ): Promise<any[]> {
    const response = await this.axiosInstance2.get(`/api/v1/tasks`, {
      params: { projectId, status },
    });
    return response.data.tasks;
  }

  // Notifications -----------------------------------------------------------

  public async sendNotification(message: string): Promise<void> {
    console.log('Sending notification:', message);
    try {
      const response = await this.axiosInstance.post('/api/v1/notifications', {
        message,
      });
      console.log('Notification sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  }

  public async getNotifications(): Promise<any[]> {
    try {
      const response = await this.axiosInstance.get('/api/v1/notifications');
      return response.data.notifications;
    } catch (error) {
      console.error('Ошибка при получении уведомлений:', error);
      throw error;
    }
  }
}

export const apiService = new ApiService();
