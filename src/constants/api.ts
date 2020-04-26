const API_URL = 'https://testapi.io/api/akirayoglu/0';

export const ENDPOINTS = {
  getDoctor: (doctorID: string): string => `${API_URL}/doctor/${doctorID}`,
  getTasks: (doctorID: string): string => `${API_URL}/tasks/${doctorID}`,
  listDoctors: API_URL + '/reference/getDoctors',
  listTasks: API_URL + '/tasks/getTasks',
};
