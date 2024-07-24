type FormData = Record<string, boolean>;

/**
 * Generate JSON based on the incoming data from the form
 * @param data Incoming form data
 * @returns JSON data that can be imported into the injector
 */
const generateJsonObject = (data: FormData) => {
  console.log(`Generate json data: ${JSON.stringify(data)}`);

  return {
    Time: generateTime(data),
    Priorities: generateEnergyPriorities(data),
  };
};

export default generateJsonObject;

/**
 * Generate an array of priorities based on the incoming form data
 * @param data Incoming form data object
 * @returns An array of priorities
 */
const generateEnergyPriorities = (data: FormData): string[] => {
  // Extract priorities from keys where the value is true
  const priorities = Object.keys(data).filter(
    (key) => data[key] && key !== "HOURS"
  );

  // If CAPNGU-X is present and is an array, expand its values and include them in the priorities array
  if ("CAPNGU-X" in data && Array.isArray(data["CAPNGU-X"])) {
    const capNguXValues = data["CAPNGU-X"] as string[];
    priorities.push(...capNguXValues);
  }

  return priorities;
};

const generateTime = (data: FormData) => {
  return {
    h: data.HOURS,
    m: data.MINUTES,
  };
};

const generateMagicPriorities = () => {
  // TODO: Add logic to generate the magic priorities
};
