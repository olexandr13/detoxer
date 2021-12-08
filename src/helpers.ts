export const helpers = {
  prettyStringify(json: any): string {
    return JSON.stringify(json, null, 2);
  },

  async sleep(seconds: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  },

  stringify(json: any): string {
    return JSON.stringify(json, null, 2)
  },
}
