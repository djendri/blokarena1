const { app, BrowserWindow } = require("electron");
function createWindow() {
  const win = new BrowserWindow({ width: 1280, height: 800, autoHideMenuBar: true, backgroundColor: "#8fc7ef", webPreferences: { contextIsolation: true } });
  win.setMenuBarVisibility(false);
  win.webContents.on("before-input-event", (e, i) => { if (i.key === "F11" && i.type === "keyDown") win.setFullScreen(!win.isFullScreen()); });
  win.loadFile("index.html");
}
app.whenReady().then(() => { createWindow(); app.on("activate", () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); }); });
app.on("window-all-closed", () => { if (process.platform !== "darwin") app.quit(); });
