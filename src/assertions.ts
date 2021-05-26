export const assert = {
  should: {
    be: {
      truthy: (anything: any, errorMessage?: string) => {
        if (!anything) throw new Error(`${anything} expected to be trurhy\n${errorMessage}`);
      },
    },
    equal: (value1: any, value2: any) => {
      if (value1 !== value2) throw new Error(`Assertion error:\nExpect values to be equal:\n${value1}\n${value2}`);
    },
  },
};
