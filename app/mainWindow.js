const electron = require('electron');
const { BrowserWindow } = electron;

class MainWindow extends BrowserWindow {
    constructor(url) {
        super({
            width:300,
            height:500,
            frame:false,
            show:false,
            resizable:false
        });
        this.loadURL(url);
        this.on('blur', this.onBlur.bind(this));
    }

    onBlur(){
        this.hide();
    }
}

module.exports = MainWindow;