import { device } from 'detox';

export const app = {
  async reinstall() {
    await device.terminateApp();
    await device.uninstallApp();
    await device.installApp();
    await this.launchWithPermissions();
  },

  async launchWithPermissions(permissions?: Detox.DevicePermissions) {
    await device.launchApp({
      newInstance: false,
      permissions,
    });
  },
};
