const { app, BrowserWindow, screen } = require('electron');

let blackWindows = [];

function createBlackScreens() {
    // Get all displays
    const displays = screen.getAllDisplays();
    const primaryDisplay = screen.getPrimaryDisplay();

    // Create black windows for all non-primary displays
    displays.forEach((display) => {
        if (display.id !== primaryDisplay.id) {
            let blackWindow = new BrowserWindow({
                x: display.bounds.x,
                y: display.bounds.y,
                width: display.bounds.width,
                height: display.bounds.height,
                frame: false,
                fullscreen: true,
                alwaysOnTop: true,
                backgroundColor: '#000000',
                webPreferences: {
                    nodeIntegration: true,
                    contextIsolation: false,
                },
            });

            blackWindow.loadFile('black.html');
            blackWindows.push(blackWindow);
        }
    });
}

app.on('ready', createBlackScreens);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (blackWindows.length === 0) {
        createBlackScreens();
    }
});

app.on('web-contents-created', (event, contents) => {
    contents.on('before-input-event', (event, input) => {
        if (input.key === 'Escape') {
            blackWindows.forEach((bw) => bw.close());
            blackWindows = [];
        }
    });
});
