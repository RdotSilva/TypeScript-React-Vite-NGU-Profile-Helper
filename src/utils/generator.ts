export interface FormData {
  CAPALLBT: string;
}

/**
 * Generate JSON based on the incoming data from the form
 * @param data Incoming form data
 * @returns JSON data that can be imported into the injector
 */
const generateJsonObject = (data: FormData) => {
  const { CAPALLBT } = data;

  if (CAPALLBT) {
    return {
      Time: 0,
      Priorities: ["CAPALLBT"],
    };
  } else {
    return {
      Time: 0,
      Priorities: [],
    };
  }
};

export default generateJsonObject;

/**
 * Generate an array of priorities based on the incoming form data
 * @param data Incoming form data object
 * @returns An array of priorities
 */
const generateEnergyPriorities = (data: Record<string, boolean>): string[] => {
  return Object.keys(data).filter((key) => data[key]);
};
