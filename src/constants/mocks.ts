import { mapApiDoctorFields, mapApiTaskFields } from 'utils/map';

export const MOCK_DOCTORS_API_RES = [
  {
    degree: 'MD',
    dob: '04/08/1966',
    doctor_id: 'doctor1',
    first_name: 'Martha',
    last_name: 'Powell',
  },
  {
    degree: 'MD',
    dob: '03/07/1977',
    doctor_id: 'doctor2',
    first_name: 'Jessica',
    last_name: 'Williamson',
  },
  {
    degree: 'GP',
    dob: '11/23/1978',
    doctor_id: 'doctor3',
    first_name: 'Scott',
    last_name: 'Dunn',
  },
  {
    degree: 'MD',
    dob: '02/19/1974',
    doctor_id: 'doctor4',
    first_name: 'Cynthia',
    last_name: 'Lopez',
  },
];
export const MOCK_DOCTORS = MOCK_DOCTORS_API_RES.map(mapApiDoctorFields);

export const MOCK_TASKS_API_RES = [
  { owner: 'doctor1', priority: '1', task_id: 'task1' },
  { owner: 'doctor1', priority: '2', task_id: 'task2' },
  { owner: 'doctor2', priority: '1', task_id: 'task3' },
  { owner: 'doctor2', priority: '2', task_id: 'task4' },
  { owner: 'doctor2', priority: '3', task_id: 'task5' },
  { owner: 'doctor3', priority: '1', task_id: 'task6' },
  { owner: 'doctor3', priority: '2', task_id: 'task7' },
  { owner: 'doctor3', priority: '3', task_id: 'task8' },
  { owner: 'doctor3', priority: '4', task_id: 'task9' },
  { owner: 'doctor4', priority: '3', task_id: 'task10' },
  { owner: 'doctor4', priority: '4', task_id: 'task11' },
  { owner: 'doctor4', priority: '5', task_id: 'task12' },
];
export const MOCK_TASKS = MOCK_TASKS_API_RES.map(mapApiTaskFields);
