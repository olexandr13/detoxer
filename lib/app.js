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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUc7SUFDakIsS0FBSyxDQUFDLFFBQVE7UUFDWixNQUFNLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM1QixNQUFNLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM1QixNQUFNLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMxQixNQUFNLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxLQUFLLENBQUMsd0JBQXdCO1FBQzVCLE1BQU0sTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUNyQixXQUFXLEVBQUUsS0FBSztZQUNsQixXQUFXLEVBQUU7Z0JBQ1gsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsYUFBYSxFQUFFLEtBQUs7YUFDckI7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyJ9