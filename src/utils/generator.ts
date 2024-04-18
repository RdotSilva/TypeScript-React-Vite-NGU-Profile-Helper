/**
 * Generate JSON based on the incoming data from the form
 * @param value Value of the CAPALLBT data
 * @returns JSON data that can be imported into the injector
 */
const generateJsonObject = (value: string) => {
  if (value === "True") {
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
