const electron = require('electron');

const { Tray } = electron;

class TimerTray extends Tray {
    constructor (path, mainWindow){
        super(path);
        this.mainWindow = mainWindow;
        this.on('click', this.onClick.bind(this))
    }

    onClick(events, bounds){
        console.log(bounds.x, bounds.y);
        const { x, y } = bounds;
        const { height, width } = this.mainWindow.getBounds();

        if(this.mainWindow.isVisible()) this.mainWindow.hide();
        else {
            const yp = process.platform === 'darwin' ? y:y - height;
            this.mainWindow.setBounds({
                x: x - width/2,
                y: yp,
                height: height,
                width: width,
            });
            this.mainWindow.show();
        }
    };
}

module.exports = TimerTray;