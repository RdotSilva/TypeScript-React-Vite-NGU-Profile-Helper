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
