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
