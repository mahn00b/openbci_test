const Cyton = require('openbci').Cyton;
const ourBoard = new Cyton();
ourBoard.connect(portName) // Port name is a serial port name, see `.listPorts()`
  .then(() => {
    ourBoard.on('ready',() => {
      ourBoard.streamStart();
      ourBoard.on('sample',(sample) => {
        /** Work with sample */
        for (let i = 0; i < ourBoard.numberOfChannels(); i++) {
          console.log("Channel " + (i + 1) + ": " + sample.channelData[i].toFixed(8) + " Volts.");
          // prints to the console
          //  "Channel 1: 0.00001987 Volts."
          //  "Channel 2: 0.00002255 Volts."
          //  ...
          //  "Channel 8: -0.00001875 Volts."
          }
        });
    });
});
