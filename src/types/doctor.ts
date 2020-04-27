export type TDoctor = {
  degree?: string;
  dob?: string;
  firstName: string;
  id: string;
  lastName: string;
};

export type TDoctorTask = {
  doctorId: string;
  priority: number;
  taskId: string;
};
