const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
    })

    win.loadFile(path.join(__dirname, "html", "index.html"));
}

app.whenReady().then(()=>{
    createWindow();
})