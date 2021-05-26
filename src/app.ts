export const app = {
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
};
