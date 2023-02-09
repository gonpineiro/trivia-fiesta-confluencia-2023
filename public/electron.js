const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const url = require('url');
function createWindow() {
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, './index.html'),
        protocol: 'file:',
        slashes: true,
    });
    const win = new BrowserWindow({
        width: 800,
        height: 1280,
        autoHideMenuBar: true,
        frame: false,
        resizable: false,
        titleBarOverlay: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    Menu.setApplicationMenu(null);

    win.loadURL(startUrl);
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    });
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
});