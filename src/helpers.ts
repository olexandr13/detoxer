export const helpers = {
  prettyStringify(json: any): string {
    return JSON.stringify(json, null, 2);
  },

  async sleep(miliSeconds: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, miliSeconds));
  },

  stringify(json: any): string {
    return JSON.stringify(json, null, 2)
  },
}
