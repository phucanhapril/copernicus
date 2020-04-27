const API_URL = 'https://testapi.io/api/akirayoglu/0';

export const ENDPOINTS = {
  getDoctor: (doctorId: string): string => `${API_URL}/doctor/${doctorId}`,
  getTasks: (doctorId: string): string => `${API_URL}/tasks/${doctorId}`,
  listDoctors: API_URL + '/reference/getDoctors',
  listTasks: API_URL + '/tasks/getTasks',
};
