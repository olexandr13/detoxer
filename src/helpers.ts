export const helpers = {
  async sleep(seconds: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  },

  stringify(json: any): string {
    return JSON.stringify(json, null, 2);
  },

  arrange: {
    async clearApp() {
      await device.terminateApp();
      await device.uninstallApp();
      await device.installApp();
      await this.launchAppWithPermissions();
    },
    async launchAppWithPermissions() {
      await device.launchApp({
        newInstance: false,
        permissions: {
          photos: 'YES',
          notifications: 'YES',
        },
      });
    },
  },
};
