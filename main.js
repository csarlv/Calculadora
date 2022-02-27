const{ app, BrowserWindow} = require('electron');

function createWindow(){
    const ventana = new BrowserWindow({
        width: 300,
        height: 300,
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    //ventana.setMenu(null);
    ventana.loadFile("renderer.html");
}

app.whenReady().then(createWindow);