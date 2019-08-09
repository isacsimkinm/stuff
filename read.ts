import * as fs from 'fs';

function fileReader(pathToFile:string){
    fs.readFile(pathToFile,'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        console.log(data);
    });
} 


fileReader('./assets/some.txt');
