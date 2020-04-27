export type TDoctor = {
  degree?: string;
  dob?: string;
  doctorId: string;
  firstName: string;
  lastName: string;
};

export type TDoctorTask = {
  doctorId: string;
  priority: number;
  taskId: string;
};
