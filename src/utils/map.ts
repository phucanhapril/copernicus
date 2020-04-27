import { STATUS_MESSAGE } from 'constants/message';
import { TDoctor, TDoctorTask } from 'types/doctor';

export const mapApiDoctorFields = (apiResponse: {
  [k: string]: string | null | undefined;
}): TDoctor => {
  if (
    !apiResponse.doctor_id ||
    !apiResponse.first_name ||
    !apiResponse.last_name
  ) {
    throw new Error(STATUS_MESSAGE.api.error.missingFields('doctor'));
  }

  return {
    degree: apiResponse.degree || undefined,
    dob: apiResponse.dob || undefined,
    doctorId: apiResponse.doctor_id,
    firstName: apiResponse.first_name,
    lastName: apiResponse.last_name,
  };
};

export const mapApiTaskFields = (apiResponse: {
  [k: string]: string | null | undefined;
}): TDoctorTask => {
  if (!apiResponse.owner || !apiResponse.priority || !apiResponse.task_id) {
    throw new Error(STATUS_MESSAGE.api.error.missingFields('task'));
  }

  return {
    doctorId: apiResponse.owner,
    priority: Number.parseInt(apiResponse.priority),
    taskId: apiResponse.task_id,
  };
};
