import upperFirst from 'lodash/upperFirst';

export const STATUS_MESSAGE = {
  api: {
    error: {
      missingFields: (responseType: string) =>
        `API response for the ${upperFirst(
          responseType
        )} type is missing information or has unexpected field names 🐛`,
    },
  },
};
