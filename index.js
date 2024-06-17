const fs = require("fs");
const {exec} = require("child_process");

let dir = "../../Saved Games/Respawn/Apex/local/", validFiles = ["1920.txt", "1440.txt", "videoconfig.txt"];
let bashDir = "C:/Users/deoxi/Documents/";
fs.readdirSync(dir)
.forEach(file => {
    if(validFiles.includes(file)){
        let ffile = dir + file;
        if(file === "1920.txt"){
            fs.renameSync(dir + "videoconfig.txt", dir + "1440.txt");
            fs.renameSync(ffile, dir + "videoconfig.txt");
            exec("ChangeScreenResolution.exe /w=1920 /h=1080 /d=0");
        }else if(file === "1440.txt"){
            fs.renameSync(dir + "videoconfig.txt", dir + "1920.txt");
            fs.renameSync(ffile, dir + "videoconfig.txt");
            exec("ChangeScreenResolution.exe /w=1440 /h=1080 /d=0");
        }
    }
});