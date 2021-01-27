
const mqtt = require('mqtt');

const client = mqtt.connect("mqtt://localhost:1883");
let connected = false;
console.log("Connecting to MQTT Client");

client.on("connect", ack => {
    console.log("MQTT Client Connected!");
    connected = true;
    publish();
    
});

function publish(){
    position = {
        id: randomIntFromInterval(0,39),
        x:  Math.random() ,
        y:  Math.random() 
    }
    setTimeout(()=>{
        if(connected){
            client.publish('Principal',JSON.stringify(position))
        }
        publish();
    }, 3500); 
}
client.on("error", err => {
    console.log(err);
});

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }